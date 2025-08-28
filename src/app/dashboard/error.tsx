"use client"

import { ErrorDisplay } from './_components/ErrorDisplay';

export default function DashboardError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return <ErrorDisplay error={error} reset={reset} />;
}