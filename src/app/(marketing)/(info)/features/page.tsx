import { DollarSign, Globe, Zap } from "lucide-react";
import { PageHeader } from "../../_components/PageHeader";
import { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function FeaturesPage() {
    return (
        <>
            <PageHeader
                title="Our Features"
                description="Everything you need to implement Purchasing Power Parity and boost your global sales."
            />
            <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                <FeatureCard
                    icon={<Globe className="size-8" />}
                    title="Automatic Country Detection"
                    description="We automatically detect your customer's location to offer the most relevant discount without any extra effort from you."
                />
                <FeatureCard
                    icon={<DollarSign className="size-8" />}
                    title="Dynamic PPP Discounts"
                    description="Leverage our up-to-date database to offer fair, localized pricing that converts visitors into customers."
                />
                <FeatureCard
                    icon={<Zap className="size-8" />}
                    title="Easy Integration"
                    description="Add PPP pricing to your site with a single line of code. No complex setup or API wrangling required."
                />
            </section>
        </>
    );
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: ReactNode;
    title: string;
    description: string;
}) {
    return (
        <Card>
            <CardHeader>
                <div className="bg-primary text-primary-foreground rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    {icon}
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    );
}