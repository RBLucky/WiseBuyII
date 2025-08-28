import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

/**
 * This is a custom 404 page for the Next.js App Router.
 * By convention, creating a `not-found.js` or `not-found.tsx` file in the `app` directory
 * will automatically render this component for any route that is not found.
 */
export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-accent/5">
            <div className="absolute top-8 left-8">
                <Link href="/">
                    <BrandLogo />
                </Link>
            </div>
            <Card className="w-full max-w-lg text-center shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-3xl">
                        <FileQuestion className="size-8" />
                        404 - Page Not Found
                    </CardTitle>
                    <CardDescription className="pt-2">
                        Oops! The page you are looking for does not exist. It might have
                        been moved or deleted.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Let's get you back on track.</p>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full text-lg p-6 rounded-xl">
                        <Link href="/">Go to Homepage</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}