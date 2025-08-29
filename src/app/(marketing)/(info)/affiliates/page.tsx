import { PageHeader } from "../../_components/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

export default function AffiliatesPage() {
    return (
        <>
            <PageHeader
                title="Become a WiseBuy Affiliate"
                description="Join our affiliate program and earn a recurring 30% commission for every customer you refer."
            >
                <Button asChild size="lg" className="mt-8">
                    <Link href="/sign-up">Join Now</Link>
                </Button>
            </PageHeader>

            <section className="container max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 pb-32">
                <InfoCard title="30% Recurring Commission">
                    Earn a commission not just on the initial sale, but on every renewal, for the lifetime of the customer.
                </InfoCard>
                <InfoCard title="60-Day Cookie Window">
                    Get credit for any customer who signs up within 60 days of clicking your unique affiliate link.
                </InfoCard>
                <InfoCard title="Dedicated Support">
                    Our team is here to provide you with the resources and support you need to succeed.
                </InfoCard>
            </section>
        </>
    );
}

function InfoCard({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <CheckIcon className="size-5 text-primary" />
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{children}</p>
            </CardContent>
        </Card>
    );
}