"use server";

import { PaidTierNames, subscriptionTiers } from "@/data/subscriptionTiers";
import { auth, currentUser } from "@clerk/nextjs/server";
import { getUserSubscription } from "../db/subscription";
import { env as serverEnv } from "@/data/env/server";
import { env as clientEnv } from "@/data/env/client";
import { redirect } from "next/navigation";
import Paystack from "paystack";
import crypto from "crypto";

// Initialize the Paystack client with the secret key from environment variables.
const paystack = Paystack(serverEnv.PAYSTACK_SECRET_KEY);

/**
 * Creates a Paystack checkout session for a user to subscribe to a new plan.
 * @param tier The name of the paid tier the user is subscribing to.
 * @returns An object with an error flag, or redirects the user to the Paystack checkout page.
 */
export async function createCheckoutSession(tier: PaidTierNames) {
  const user = await currentUser();
  if (user == null) return { error: true, message: "User not authenticated." };

  const subscription = await getUserSubscription(user.id);
  if (subscription == null)
    return { error: true, message: "Subscription not found." };

  const tierDetails = subscriptionTiers[tier];

  try {
    // A unique reference for the transaction. Required by Paystack.
    const reference = crypto.randomBytes(16).toString("hex");

    // Initialize a new transaction with Paystack.
    // When creating a subscription, we pass the 'plan' code.
    const session = await paystack.transaction.initialize({
      email: user.primaryEmailAddress?.emailAddress!,
      amount: tierDetails.priceInCents,
      plan: tierDetails.paystackPlanCode,
      // The 'reference' and 'name' properties are added to satisfy the type definition.
      reference: reference,
      name: `${tierDetails.name} Subscription`,
      // The URL where Paystack will redirect the user after payment.
      callback_url: `${clientEnv.NEXT_PUBLIC_SERVER_URL}/dashboard/subscription`,
      metadata: {
        clerkUserId: user.id,
        tier: tier,
      },
    });

    // If the session is created successfully, redirect the user to the authorization URL.
    if (session.data && session.data.authorization_url) {
      redirect(session.data.authorization_url);
    } else {
      return { error: true, message: "Could not create payment session." };
    }
  } catch (error) {
    console.error("Paystack Error:", error);
    return {
      error: true,
      message: "An error occurred while creating the payment session.",
    };
  }
}

/**
 * Redirects the user to the subscription management page.
 * Paystack does not have a pre-built customer portal like Stripe, so this
 * function serves as a placeholder for future custom-built management features.
 */
export async function createCustomerPortalSession() {
  redirect("/dashboard/subscription");
}

/**
 * Handles the logic for canceling a subscription.
 * This is a placeholder and would need to be implemented with a call to the Paystack API
 * to disable the user's current subscription.
 */
export async function createCancelSession() {
  // A full implementation would involve:
  // 1. Getting the user's subscription from the database.
  // 2. Calling the Paystack API to disable the subscription using the subscription code.
  // 3. Updating the local database on a successful webhook event.
  redirect("/dashboard/subscription");
}
