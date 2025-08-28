import { PageHeader } from "../../_components/PageHeader";

export default function TermsOfServicePage() {
    return (
        <>
            <PageHeader
                title="Terms of Service"
                description="Last updated: August 28, 2025"
            />
            <section className="container max-w-4xl pb-32">
                <div className="space-y-6 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
                    <p>Welcome to WiseBuy! These terms and conditions outline the rules and regulations for the use of WiseBuy's Website, located at wisebuy.com.</p>
                    <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use WiseBuy if you do not agree to take all of the terms and conditions stated on this page.</p>

                    <h2 className="text-2xl font-bold text-foreground mt-8">2. Intellectual Property Rights</h2>
                    <p>Other than the content you own, under these Terms, WiseBuy and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>

                    <h2 className="text-2xl font-bold text-foreground mt-8">3. Restrictions</h2>
                    <p>You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material...</p>

                    <p className="mt-12 text-center text-foreground">[This is a mock terms of service page. Please replace with your own legal text.]</p>
                </div>
            </section>
        </>
    );
}