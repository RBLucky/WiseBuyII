import { ReactNode } from "react";

/**
 * A reusable header component for marketing pages.
 * @param {object} props - Component properties.
 * @param {string} props.title - The main title of the page.
 * @param {string} props.description - A subtitle or description for the page.
 * @param {ReactNode} [props.children] - Optional children to render below the description.
 */
export function PageHeader({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children?: ReactNode;
}) {
    return (
        <section className="text-center pt-32 pb-16 px-4">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
            </p>
            {children}
        </section>
    );
}