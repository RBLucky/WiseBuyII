ALTER TABLE "user_subscriptions" RENAME COLUMN "stripe_customer_id" TO "paystack_customer_id";--> statement-breakpoint
ALTER TABLE "user_subscriptions" RENAME COLUMN "stripe_subscription_id" TO "paystack_subscription_id";--> statement-breakpoint
DROP INDEX IF EXISTS "user_subscriptions.stripe_customer_id_index";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_subscriptions.paystack_customer_id_index" ON "user_subscriptions" USING btree ("paystack_customer_id");--> statement-breakpoint
ALTER TABLE "user_subscriptions" DROP COLUMN IF EXISTS "stripe_subscription_item_id";