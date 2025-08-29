import { PageHeader } from "../../_components/PageHeader";
import Link from "next/link";
import { CodeBlock } from "../../_components/CodeBlock";

/**
 * A mock documentation page with a sidebar and main content area.
 */
export default function DocsPage() {
    return (
        <>
            <PageHeader
                title="Documentation"
                description="Find everything you need to integrate WiseBuy into your project."
            />
            <section className="container flex flex-col md:flex-row gap-12 pb-32">
                {/* Mock Sidebar for navigation */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="sticky top-24">
                        <h3 className="font-semibold mb-4">Getting Started</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#introduction" className="hover:text-foreground">Introduction</Link></li>
                            <li><Link href="#installation" className="hover:text-foreground">Installation</Link></li>
                            <li><Link href="#customization" className="hover:text-foreground">Customization</Link></li>
                        </ul>
                        <h3 className="font-semibold mb-4 mt-8">API Reference</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#api-overview" className="hover:text-foreground">Overview</Link></li>
                        </ul>
                    </div>
                </aside>

                {/* Main documentation content */}
                <main className="w-full">
                    <div className="space-y-8 text-lg">
                        <article id="introduction" className="space-y-4 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground pt-8">Introduction</h2>
                            <p className="text-muted-foreground">WiseBuy is designed to be incredibly simple to use. Our core feature is a dynamic banner that you can add to any website by embedding a single script tag. This guide will walk you through the process.</p>
                        </article>

                        <article id="installation" className="space-y-4 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground pt-8">Installation</h2>
                            <p className="text-muted-foreground">To get started, create a product in your WiseBuy dashboard. You will be provided with a unique script tag for that product.</p>
                            <p className="text-muted-foreground">Copy the script tag and paste it just before the closing <code className="bg-muted text-muted-foreground p-1 rounded font-mono">&lt;/body&gt;</code> tag in your website's HTML.</p>
                            <CodeBlock language="html" code={`<script src="https://wisebuy.com/api/products/YOUR_PRODUCT_ID/banner"></script>`} />
                        </article>

                        <article id="customization" className="space-y-4 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground pt-8">Customization</h2>
                            <p className="text-muted-foreground">You can customize the appearance and behavior of the banner from your product's "Customization" tab in the dashboard. Changes are applied instantly without needing to modify the script on your site.</p>
                        </article>

                        <article id="api-overview" className="space-y-4 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground pt-8">API Reference</h2>
                            <p className="text-muted-foreground">While our script-based approach is recommended for most users, we are working on a public API for more advanced use cases. Stay tuned for updates.</p>
                        </article>
                    </div>
                </main>
            </section>
        </>
    );
}