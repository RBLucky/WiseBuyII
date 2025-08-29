import { PageHeader } from "../../../_components/PageHeader";
import { notFound } from "next/navigation";

/**
 * Fetches mock data for a blog post based on its slug.
 * In a real application, this data would come from a CMS or database.
 * @param {string} slug - The slug of the post to retrieve.
 * @returns The post data or undefined if not found.
 */
const getPostData = (slug: string) => {
    const posts = [
        {
            slug: "why-ppp-matters",
            title: "Why Purchasing Power Parity is a Game-Changer for SaaS",
            author: "Jane Doe, Founder",
            date: "August 20, 2025",
            content: `
            <p class="text-xl">In a global marketplace, selling a digital product for a single price, like $29, means you're leaving a significant amount of revenue on the table. That price might be a great deal in San Francisco, but prohibitive in Manila or Buenos Aires. This is where Purchasing Power Parity (PPP) comes in.</p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4 text-foreground">What is Purchasing Power Parity?</h3>
            <p>PPP is an economic theory that compares different countries' currencies through a 'basket of goods' approach. In simpler terms, it helps us understand what a dollar is 'worth' in different parts of the world. For digital products, it provides a framework for fair, localized pricing.</p>
            <p>By adjusting your prices based on the local economic context, you make your product affordable and accessible to a much wider audience. It's not about just offering a discount; it's about offering a fair price.</p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4 text-foreground">The Opportunity Cost of a Single Price</h3>
            <p>When you ignore PPP, you're not just missing out on sales in developing countries. You're also potentially undercharging in wealthy regions. The real opportunity is capturing value that would otherwise be lost by presenting a price that feels fair to every potential customer.</p>
            <p>Implementing a PPP strategy can lead to:</p>
            <ul class="list-disc list-inside space-y-2 my-4">
                <li><strong class="text-foreground">Increased Conversion Rates:</strong> A fair price dramatically lowers the barrier to entry for new users.</li>
                <li><strong class="text-foreground">Larger Market Share:</strong> Compete effectively in emerging markets that your competitors might be ignoring.</li>
                <li><strong class="text-foreground">Stronger Brand Loyalty:</strong> Customers appreciate companies that acknowledge their local economic reality.</li>
            </ul>
            <p>WiseBuy makes this complex strategy incredibly simple. With a single line of code, you can start offering fair prices to every visitor, no matter where they are. You unlock the full potential of your global audience, turning visitors into loyal customers.</p>
          `
        },
        {
            slug: "how-to-set-up",
            title: "How to Set Up WiseBuy in Under 5 Minutes",
            author: "John Smith, Head of Engineering",
            date: "August 15, 2025",
            content: `
            <p>One of our core principles at WiseBuy is simplicity. We believe that powerful features shouldn't require complex implementation. This tutorial will walk you through the entire setup process, which typically takes less than five minutes.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4 text-foreground">Step 1: Sign Up and Create a Product</h3>
            <p>First, if you haven't already, sign up for a free WiseBuy account. Once you're in the dashboard, navigate to the 'Products' section and click 'New Product'. You'll be asked for two key pieces of information:</p>
            <ul class="list-disc list-inside space-y-2 my-4">
                <li><strong>Product Name:</strong> An internal name for your product (e.g., "My Awesome Course").</li>
                <li><strong>Website URL:</strong> The exact URL of the page where you sell your product. This is crucial for WiseBuy to know where to show the banner.</li>
            </ul>

            <h3 class="text-2xl font-bold mt-8 mb-4 text-foreground">Step 2: Configure Your Discounts</h3>
            <p>After creating your product, you'll be taken to the product editor. Navigate to the 'Country Discounts' tab. Here, you'll see a list of country groups based on their PPP index. We provide a recommended discount for each, but you are free to customize them. For each group you want to target, enter a coupon code from your payment provider (like Stripe or Paystack) and the discount percentage.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4 text-foreground">Step 3: Copy and Paste the Script</h3>
            <p>Once you've configured your discounts, go to the 'Add to Site' modal from the products page. You'll find a single line of code—your unique script tag. Copy this tag.</p>
            <pre class="p-4 bg-secondary rounded-lg overflow-x-auto text-sm my-4"><code class="language-html">&lt;script src="https://wisebuy.com/api/products/YOUR_PRODUCT_ID/banner"&gt;&lt;/script&gt;</code></pre>
            <p>Finally, open the HTML of your website and paste this script tag just before the closing <code class='bg-muted text-muted-foreground p-1 rounded font-mono'>&lt;/body&gt;</code> tag. That's it! The WiseBuy banner will now automatically appear for eligible visitors.</p>
          `
        },
    ];
    return posts.find(p => p.slug === slug);
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostData(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <PageHeader
                title={post.title}
                description={`Published on ${post.date} by ${post.author}`}
            />
            <article className="container max-w-4xl pb-32">
                <div
                    className="space-y-6 text-lg text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </>
    );
}