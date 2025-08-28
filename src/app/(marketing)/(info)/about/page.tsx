import { PageHeader } from "../../_components/PageHeader";

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About WiseBuy"
                description="Our mission is to make software accessible to everyone, everywhere, by creating a more equitable global market."
            />
            <section className="container max-w-4xl pb-32 text-lg">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
                    <p className="text-muted-foreground">
                        WiseBuy was founded in 2025 with a simple goal: to help creators and SaaS businesses reach a global audience without sacrificing revenue. We noticed that a one-price-fits-all model was leaving a huge portion of the world's market untapped.
                    </p>
                    <p className="text-muted-foreground">
                        Purchasing Power Parity (PPP) isn't just an economic theory; it's a practical tool for fairness and growth. By adjusting prices to local economies, you not only make your products affordable for more people but also build a loyal international customer base. Our tool makes implementing this strategy as easy as adding a single line of code to your website.
                    </p>
                    <h2 className="text-3xl font-bold text-foreground mt-12">Our Team</h2>
                    <p className="text-muted-foreground">
                        We are a small, dedicated team of developers and designers passionate about building tools that empower creators. We believe in the power of software to connect people and create opportunities.
                    </p>
                </div>
            </section>
        </>
    );
}