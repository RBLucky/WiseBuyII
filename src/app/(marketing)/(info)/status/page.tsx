import { PageHeader } from "../../_components/PageHeader";
import { CheckCircle2 } from "lucide-react";

export default function StatusPage() {
    return (
        <>
            <PageHeader
                title="System Status"
                description="All systems are currently operational."
            />
            <section className="container max-w-2xl pb-32">
                <div className="border rounded-lg">
                    <StatusItem name="Website & Dashboard" />
                    <StatusItem name="Discount Banner API" />
                    <StatusItem name="Customer Authentication" />
                    <StatusItem name="Payment Processing" />
                </div>
                <p className="text-center text-muted-foreground text-sm mt-4">
                    Last checked: {new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC
                </p>
            </section>
        </>
    );
}

function StatusItem({ name }: { name: string }) {
    return (
        <div className="flex items-center justify-between p-4 border-b last:border-b-0">
            <span className="text-lg">{name}</span>
            <div className="flex items-center gap-2 text-green-500">
                <CheckCircle2 className="size-5" />
                <span className="font-semibold">Operational</span>
            </div>
        </div>
    )
}