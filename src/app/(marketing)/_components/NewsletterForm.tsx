"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

/**
 * A client component for the newsletter signup form in the footer.
 * Handles form submission and displays a success toast.
 */
export function NewsletterForm() {
    const { toast } = useToast();

    /**
     * Prevents default form submission and simulates a newsletter signup.
     * In a real application, this would make an API call to a newsletter service.
     * @param {React.FormEvent<HTMLFormElement>} e - The form event.
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Placeholder for actual newsletter API integration.
        toast({
            title: "Subscribed! 🎉",
            description: "Thanks for joining our newsletter.",
        });
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Stay in the loop</h3>
            <p className="text-sm text-primary-foreground/80">
                Get the latest features and PPP tips straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="bg-primary-foreground/10"
                    aria-label="Email for newsletter"
                />
                <Button type="submit" variant="secondary">
                    Subscribe
                </Button>
            </form>
        </div>
    );
}