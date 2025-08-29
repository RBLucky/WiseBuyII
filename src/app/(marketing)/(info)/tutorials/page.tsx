import { PageHeader } from "../../_components/PageHeader";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

// In a real application, this data would come from a CMS or database.
const mockTutorials = [
    {
        slug: "/blog/how-to-set-up",
        title: "How to Set Up WiseBuy in Under 5 Minutes",
        description: "Our definitive guide to getting started. Integrate our PPP banner on your site and start making global sales in minutes.",
        difficulty: "Beginner",
    },
    {
        slug: "/blog/advanced-customization",
        title: "Advanced Customization: Using CSS Prefixes",
        description: "Learn how to use the CSS prefix option to avoid style conflicts and ensure the banner perfectly matches your site's design.",
        difficulty: "Intermediate",
    },
];

export default function TutorialsPage() {
    return (
        <>
            <PageHeader
                title="Tutorials & Guides"
                description="Step-by-step guides to help you get the most out of WiseBuy's features and boost your international sales."
            />
            <section className="container grid grid-cols-1 md:grid-cols-2 gap-8 pb-32">
                {mockTutorials.map(tutorial => (
                    <Card key={tutorial.slug} className="flex flex-col">
                        <CardHeader>
                            <p className="text-sm font-semibold text-primary mb-2">{tutorial.difficulty}</p>
                            <CardTitle>{tutorial.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{tutorial.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="secondary">
                                <Link href={tutorial.slug} className="flex items-center gap-2">
                                    Read Tutorial <ArrowRightIcon className="size-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </section>
        </>
    );
}