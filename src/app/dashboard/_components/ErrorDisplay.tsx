"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

/**
 * A reusable UI component for displaying error messages in a consistent, user-friendly format.
 * It's designed to be used within Next.js error boundaries.
 */
export function ErrorDisplay({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <Card className="w-full max-w-lg text-center">
                <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2">
                        <AlertTriangle className="text-destructive" />
                        Something Went Wrong
                    </CardTitle>
                    <CardDescription>
                        We encountered an unexpected error. Please try again.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Optionally display the specific error message during development */}
                    {process.env.NODE_ENV === "development" && (
                        <div className="p-4 text-sm text-left bg-secondary rounded-md">
                            <p className="font-mono text-destructive">{error.message}</p>
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button onClick={() => reset()} className="w-full">
                        Try Again
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}