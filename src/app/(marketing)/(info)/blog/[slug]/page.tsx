import { PageHeader } from "../../../_components/PageHeader";
import { notFound } from "next/navigation";

// In a real app, you would fetch this data based on the slug from a CMS or database.
const getPostData = (slug: string) => {
    const posts = [
        {
            slug: "why-ppp-matters",
            title: "Why Purchasing Power Parity is a Game-Changer for SaaS",
            author: "Jane Doe",
            date: "August 20, 2025",
            content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
            <p>Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
            <h3 class="text-2xl font-bold mt-8 mb-4 text-foreground">Unlocking Global Markets</h3>
            <p>Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.</p>
          `
        },
        {
            slug: "how-to-set-up",
            title: "How to Set Up WiseBuy in Under 5 Minutes",
            author: "John Smith",
            date: "August 15, 2025",
            content: `
            <p>This is a step-by-step guide. Follow these simple instructions to get up and running.</p>
            <ol class="list-decimal list-inside space-y-2 my-4">
                <li>Sign up for a WiseBuy account.</li>
                <li>Create your first product and add your website URL.</li>
                <li>Copy the one-line script tag provided.</li>
                <li>Paste the script tag into the <code class='bg-muted text-muted-foreground p-1 rounded font-mono'>&lt;head&gt;</code> of your website's HTML.</li>
                <li>That's it! You're now offering localized pricing.</li>
            </ol>
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