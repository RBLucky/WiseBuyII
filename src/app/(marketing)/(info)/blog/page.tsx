import { PageHeader } from "../../_components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

// In a real application, this data would come from a CMS or database.
const mockPosts = [
    {
        slug: "why-ppp-matters",
        title: "Why Purchasing Power Parity is a Game-Changer for SaaS",
        description: "Learn how localized pricing can unlock new markets and boost your revenue by making your products more accessible globally.",
        date: "August 20, 2025",
    },
    {
        slug: "how-to-set-up",
        title: "How to Set Up WiseBuy in Under 5 Minutes",
        description: "A step-by-step guide to integrating our powerful PPP tool into your website with just a single line of code.",
        date: "August 15, 2025",
    },
];

export default function BlogPage() {
    return (
        <>
            <PageHeader
                title="WiseBuy Blog"
                description="Insights, tutorials, and updates on global pricing strategies and making your products accessible to everyone."
            />
            <section className="container grid grid-cols-1 md:grid-cols-2 gap-8 pb-32">
                {mockPosts.map(post => (
                    <Card key={post.slug} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>{post.date}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{post.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="secondary">
                                <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                                    Read More <ArrowRightIcon className="size-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </section>
        </>
    );
}