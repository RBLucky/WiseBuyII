import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// This file defines the schema for server-side environment variables.
// Using a schema ensures that all required variables are present and correctly typed.
export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    // General application and database configurations.
    DATABASE_URL: z.string().url(),

    // Clerk authentication keys.
    CLERK_SECRET_KEY: z.string(),
    CLERK_WEBHOOK_SECRET: z.string(),

    // Paystack API and webhook secrets.
    PAYSTACK_SECRET_KEY: z.string(),
    PAYSTACK_WEBHOOK_SECRET: z.string(),

    // Paystack plan codes for each subscription tier.
    PAYSTACK_BASIC_PLAN_CODE: z.string(),
    PAYSTACK_STANDARD_PLAN_CODE: z.string(),
    PAYSTACK_PREMIUM_PLAN_CODE: z.string(),

    // Used for local development to simulate a specific country's location.
    TEST_COUNTRY_CODE: z.string(),
  },
  experimental__runtimeEnv: process.env,
});
