import { env } from "./env/server";

export type TierNames = keyof typeof subscriptionTiers;
export type PaidTierNames = Exclude<TierNames, "Free">;

// This object maps out the details of each subscription tier available in the application.
// It's the single source of truth for pricing, features, and plan identifiers.
export const subscriptionTiers = {
  Free: {
    name: "Free",
    priceInCents: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
    // Free plan does not have a corresponding Paystack plan.
    paystackPlanCode: null,
  },
  Basic: {
    name: "Basic",
    priceInCents: 1900,
    maxNumberOfProducts: 5,
    maxNumberOfVisits: 10000,
    canAccessAnalytics: true,
    canCustomizeBanner: false,
    canRemoveBranding: true,
    // Plan Code from your Paystack Dashboard for the Basic tier.
    paystackPlanCode: env.PAYSTACK_BASIC_PLAN_CODE,
  },
  Standard: {
    name: "Standard",
    priceInCents: 4900,
    maxNumberOfProducts: 30,
    maxNumberOfVisits: 100000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
    // Plan Code from your Paystack Dashboard for the Standard tier.
    paystackPlanCode: env.PAYSTACK_STANDARD_PLAN_CODE,
  },
  Premium: {
    name: "Premium",
    priceInCents: 9900,
    maxNumberOfProducts: 50,
    maxNumberOfVisits: 1000000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
    // Plan Code from your Paystack Dashboard for the Premium tier.
    paystackPlanCode: env.PAYSTACK_PREMIUM_PLAN_CODE,
  },
} as const;

// An array of the tiers in a specific order for display purposes on the pricing page.
export const subscriptionTiersInOrder = [
  subscriptionTiers.Free,
  subscriptionTiers.Basic,
  subscriptionTiers.Standard,
  subscriptionTiers.Premium,
] as const;

// A helper function to find a tier's details based on its Paystack Plan Code.
// This is useful for handling webhooks from Paystack.
export function getTierByPlanCode(planCode: string) {
  return Object.values(subscriptionTiers).find(
    (tier) => tier.paystackPlanCode === planCode
  );
}
