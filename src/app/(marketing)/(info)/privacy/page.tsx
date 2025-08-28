import { PageHeader } from "../../_components/PageHeader";

export default function PrivacyPolicyPage() {
    return (
        <>
            <PageHeader
                title="Privacy Policy"
                description={`Your privacy is important to us. Last updated: ${new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}`}
            />
            <section className="container max-w-4xl pb-32">
                <div className="space-y-6 text-muted-foreground">
                    <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
                    <p>We collect information that you provide to us directly, such as when you create an account, update your profile, or communicate with us. This may include your name, email address, and payment information.</p>

                    <h2 className="text-2xl font-bold text-foreground mt-8">2. How We Use Your Information</h2>
                    <p>We use the information we collect to operate, maintain, and provide you with the features and functionality of the Service. We may also use the information to communicate with you, such as to send you service-related emails.</p>

                    <p className="mt-12 text-center text-foreground">[This is a mock privacy policy page. Please replace with your own legal text.]</p>
                </div>
            </section>
        </>
    );
}