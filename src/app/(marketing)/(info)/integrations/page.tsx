import { PageHeader } from "../../_components/PageHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * A placeholder for an SVG logo for an integration card.
 */
const IntegrationLogo = ({ name }: { name: string }) => (
    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center font-bold text-muted-foreground mb-4">
        {name.charAt(0)}
    </div>
);

/**
 * Displays a grid of current and upcoming integrations.
 */
export default function IntegrationsPage() {
    return (
        <>
            <PageHeader
                title="Integrations"
                description="WiseBuy works seamlessly with the tools you already use. Connect with your favorite platforms in minutes."
            />
            <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                <Card>
                    <CardHeader>
                        <IntegrationLogo name="Stripe" />
                        <CardTitle>Stripe</CardTitle>
                        <CardDescription>Connect with Stripe or PayStack to automatically generate and apply PPP discount codes during checkout.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button variant="outline" disabled>Coming Soon</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <IntegrationLogo name="Lemon Squeezy" />
                        <CardTitle>Lemon Squeezy</CardTitle>
                        <CardDescription>Easily integrate with Lemon Squeezy for localized pricing at checkout.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button variant="outline" disabled>Coming Soon</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <IntegrationLogo name="Gumroad" />
                        <CardTitle>Gumroad</CardTitle>
                        <CardDescription>Offer PPP discounts to your Gumroad customers with our simple integration.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button variant="outline" disabled>Coming Soon</Button>
                    </CardFooter>
                </Card>
            </section>
        </>
    );
}