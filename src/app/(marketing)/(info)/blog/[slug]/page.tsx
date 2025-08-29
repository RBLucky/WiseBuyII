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
          `,
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
          `,
        },
        // The new blog post is added here
        {
            slug: "advanced-customization",
            title: "Advanced Customization: Using CSS Prefixes to Avoid Style Conflicts",
            author: "John Smith, Head of Engineering",
            date: "August 18, 2025",
            content: `
            <p class="text-xl">You've successfully installed the WiseBuy banner, but it doesn't look quite right. Maybe the colors are off, or the font size is wrong. This is a common issue when your website's existing CSS clashes with the styles of a third-party script. Fortunately, WiseBuy has a simple, powerful solution: CSS Prefixes.</p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4 text-foreground">What is a CSS Prefix and Why Do You Need It?</h3>
            <p>A CSS prefix is a unique string of characters that we add to the beginning of every CSS class name on the WiseBuy banner. For example, a standard class like <code class='bg-muted text-muted-foreground p-1 rounded font-mono'>.easy-ppp-container</code> can become <code class='bg-muted text-muted-foreground p-1 rounded font-mono'>.my-site-easy-ppp-container</code>.</p>
            <p>This is incredibly useful because it isolates our banner's styles from your website's styles. If your site already has a style defined for a class named <code class='bg-muted text-muted-foreground p-1 rounded font-mono'>.container</code>, it could accidentally affect our banner. By adding a prefix, you ensure that your CSS and WiseBuy's CSS never conflict.</p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4 text-foreground">How to Add a CSS Prefix in WiseBuy</h3>
            <p>Adding a prefix is a straightforward process that you can do right from your dashboard. Here’s how:</p>
            <ol class="list-decimal list-inside space-y-2 my-4">
                <li>Navigate to your WiseBuy Dashboard and select the product you want to customize.</li>
                <li>Go to the <strong>"Customization"</strong> tab in the product editor.</li>
                <li>Find the input field labeled <strong>"CSS Prefix"</strong>.</li>
                <li>Enter a unique prefix. We recommend something short and specific to your brand, like <code class='bg-muted text-muted-foreground p-1 rounded font-mono'>my-app-</code> or <code class='bg-muted text-muted-foreground p-1 rounded font-mono'>wb-prefix-</code>.</li>
                <li>Click <strong>"Save"</strong>. The changes will be applied to your live banner instantly.</li>
            </ol>

            <h3 class="text-2xl font-bold mt-8 mb-4 text-foreground">Example: Before and After</h3>
            <p>Without a prefix, the banner's main container has a class like this:</p>
            <pre class="p-4 bg-secondary rounded-lg overflow-x-auto text-sm my-4"><code class="language-html">&lt;div class="easy-ppp-container"&gt;...&lt;/div&gt;</code></pre>
            <p>After adding a prefix of <code class='bg-muted text-muted-foreground p-1 rounded font-mono'>my-site-</code>, the same element will look like this:</p>
            <pre class="p-4 bg-secondary rounded-lg overflow-x-auto text-sm my-4"><code class="language-html">&lt;div class="my-site-easy-ppp-container"&gt;...&lt;/div&gt;</code></pre>
            <p>This small change ensures that your custom styles for <code class='bg-muted text-muted-foreground p-1 rounded font-mono'>.container</code> will never interfere with the WiseBuy banner, giving you full control over your site's appearance.</p>
          `,
        },
    ];
    return posts.find((p) => p.slug === slug);
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