import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { formatCompactNumber } from "@/lib/formatters"
import { getProductCount, getProducts } from "@/server/db/products"
import { getProductViewCount } from "@/server/db/productViews"
import { getUserSubscriptionTier } from "@/server/db/subscription"
import { auth } from "@clerk/nextjs/server"
import { startOfMonth } from "date-fns"
import Link from "next/link"
import { ProductGrid } from "./_components/ProductGrid"
import { NoProducts } from "./_components/NoProducts"
import { PlusIcon } from "lucide-react"

export default async function DashboardPage() {
    const { userId, redirectToSignIn } = auth()
    if (userId == null) return redirectToSignIn()

    const [tier, productCount, pricingViewCount, products] = await Promise.all([
        getUserSubscriptionTier(userId),
        getProductCount(userId),
        getProductViewCount(userId, startOfMonth(new Date())),
        getProducts(userId, { limit: 3 }),
    ])

    return (
        <>
            <h1 className="mb-6 text-3xl font-semibold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Monthly Usage</CardTitle>
                        <CardDescription>
                            {formatCompactNumber(pricingViewCount)} /{" "}
                            {formatCompactNumber(tier.maxNumberOfVisits)} pricing page
                            visits this month
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Progress
                            value={(pricingViewCount / tier.maxNumberOfVisits) * 100}
                        />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Number of Products</CardTitle>
                        <CardDescription>
                            {productCount} / {tier.maxNumberOfProducts} products created
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Progress
                            value={(productCount / tier.maxNumberOfProducts) * 100}
                        />
                    </CardContent>
                </Card>
            </div>

            <div className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold flex justify-between items-center">
                    Recent Products
                    <Button asChild variant="outline">
                        <Link href="/dashboard/products/new">
                            <PlusIcon className="size-4 mr-2" /> New Product
                        </Link>
                    </Button>
                </h2>
                {products.length > 0 ? (
                    <ProductGrid products={products} />
                ) : (
                    <div className="mt-8">
                        <NoProducts />
                    </div>
                )}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Manage Your Subscription</CardTitle>
                    <CardDescription>
                        You are currently on the {tier.name} plan. Go to the subscription
                        page to upgrade, cancel, or change your plan.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <Link href="/dashboard/subscription">Manage Subscription</Link>
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}