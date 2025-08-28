import { env } from "@/data/env/server";
import { getTierByPlanCode, subscriptionTiers } from "@/data/subscriptionTiers";
import { UserSubscriptionTable } from "@/drizzle/schema";
import { updateUserSubscription } from "@/server/db/subscription";
import { eq } from "drizzle-orm";
import { NextRequest } from "next/server";
import crypto from "crypto";

/**
 * Handles incoming webhook events from Paystack.
 * It verifies the authenticity of the request and updates the user's subscription
 * status in the database based on the event type.
 */
export async function POST(request: NextRequest) {
  const secret = env.PAYSTACK_WEBHOOK_SECRET;
  const body = await request.text();

  // Verify the webhook signature to ensure the request is from Paystack.
  const hash = crypto.createHmac("sha512", secret).update(body).digest("hex");
  const signature = request.headers.get("x-paystack-signature");

  if (hash !== signature) {
    console.error("Error verifying Paystack webhook: Invalid signature.");
    return new Response("Invalid signature", { status: 401 });
  }

  const event = JSON.parse(body);

  try {
    switch (event.event) {
      // Occurs when a subscription is successfully created.
      case "subscription.create": {
        const { customer, plan, subscription_code } = event.data;
        const tier = getTierByPlanCode(plan.plan_code);
        const clerkUserId = customer.metadata?.clerkUserId;

        if (!clerkUserId || !tier) {
          throw new Error(
            "Missing clerkUserId or could not find tier for plan_code."
          );
        }

        // Update the user's subscription record with Paystack details.
        await updateUserSubscription(
          eq(UserSubscriptionTable.clerkUserId, clerkUserId),
          {
            paystackCustomerId: customer.customer_code,
            tier: tier.name,
            paystackSubscriptionId: subscription_code,
          }
        );
        break;
      }

      // Occurs when a subscription is cancelled or ends.
      case "subscription.disable": {
        const { customer } = event.data;

        // Revert the user to the "Free" tier.
        await updateUserSubscription(
          eq(UserSubscriptionTable.paystackCustomerId, customer.customer_code),
          {
            tier: subscriptionTiers.Free.name,
            paystackSubscriptionId: null,
          }
        );
        break;
      }
    }
  } catch (err) {
    console.error("Error processing Paystack webhook:", err);
    return new Response("Webhook Error", { status: 400 });
  }

  return new Response(null, { status: 200 });
}
