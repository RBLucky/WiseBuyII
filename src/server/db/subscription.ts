import { subscriptionTiers } from "@/data/subscriptionTiers";
import { db } from "@/drizzle/db";
import { UserSubscriptionTable } from "@/drizzle/schema";
import {
  CACHE_TAGS,
  dbCache,
  getUserTag,
  revalidateDbCache,
} from "@/lib/cache";
import { eq, SQL } from "drizzle-orm";

/**
 * Creates a new user subscription record in the database.
 * If a subscription for the given clerkUserId already exists, it does nothing.
 * @param data The subscription data to insert.
 * @returns The newly created subscription record.
 */
export async function createUserSubscription(
  data: typeof UserSubscriptionTable.$inferInsert
) {
  const [newSubscription] = await db
    .insert(UserSubscriptionTable)
    .values(data)
    .onConflictDoNothing({
      target: UserSubscriptionTable.clerkUserId,
    })
    // Return the full object to ensure it's available immediately after creation.
    .returning();

  if (newSubscription) {
    revalidateDbCache({
      tag: CACHE_TAGS.subscription,
      id: newSubscription.id,
      userId: newSubscription.clerkUserId,
    });
  }

  return newSubscription;
}

/**
 * Retrieves a user's subscription from the database.
 * This is a cached function for performance.
 * @param userId The Clerk user ID.
 * @returns The user's subscription record.
 */
export function getUserSubscription(userId: string) {
  const cacheFn = dbCache(getUserSubscriptionInternal, {
    tags: [getUserTag(userId, CACHE_TAGS.subscription)],
  });

  return cacheFn(userId);
}

/**
 * Updates an existing user subscription record.
 * @param where A Drizzle ORM condition to find the record to update.
 * @param data The new data for the subscription.
 */
export async function updateUserSubscription(
  where: SQL,
  data: Partial<typeof UserSubscriptionTable.$inferInsert>
) {
  const [updatedSubscription] = await db
    .update(UserSubscriptionTable)
    .set(data)
    .where(where)
    .returning({
      id: UserSubscriptionTable.id,
      userId: UserSubscriptionTable.clerkUserId,
    });

  if (updatedSubscription) {
    revalidateDbCache({
      tag: CACHE_TAGS.subscription,
      userId: updatedSubscription.userId,
      id: updatedSubscription.id,
    });
  }
}

/**
 * A helper function to get the full details of a user's subscription tier.
 * It will throw an error if no subscription is found, which will be caught by the error boundary.
 * @param userId The Clerk user ID.
 * @returns The subscription tier object containing plan details.
 */
export async function getUserSubscriptionTier(userId: string) {
  const subscription = await getUserSubscription(userId);

  if (subscription == null) {
    throw new Error("User has no subscription");
  }

  return subscriptionTiers[subscription.tier];
}

/**
 * The internal function for fetching a user subscription.
 * If a subscription is not found for the given userId, it automatically creates
 * a default "Free" tier subscription for them. This makes the system resilient
 * to webhook failures or users created before the subscription logic was in place.
 * @param userId The Clerk user ID.
 * @returns The user's subscription record.
 */
async function getUserSubscriptionInternal(userId: string) {
  let subscription = await db.query.UserSubscriptionTable.findFirst({
    where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
  });

  // If no subscription is found, create a default "Free" one and return it.
  if (!subscription) {
    subscription = await createUserSubscription({
      clerkUserId: userId,
      tier: "Free",
    });
  }

  return subscription;
}
