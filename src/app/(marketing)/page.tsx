import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import {
  ArrowRightIcon,
  CheckIcon,
  GithubIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrandLogo } from "@/components/BrandLogo";
import { cn } from "@/lib/utils";
import { formatCompactNumber } from "@/lib/formatters";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { ClerkIcon } from "./_icons/Clerk";
import { NeonIcon } from "./_icons/Neon";
import { GetStartedButton } from "./_components/GetStartedButton";
import { NewsletterForm } from "./_components/NewsletterForm";

/**
 * The primary marketing homepage for the application.
 * It includes a hero section, social proof, pricing, and a detailed footer.
 */
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Price Smarter, Sell bigger!
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing
        </p>
        <GetStartedButton />
      </section>

      {/* Social Proof Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Trusted by the top modern companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16">
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link className="md:max-xl:hidden" href="https://clerk.com">
              <ClerkIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className=" px-8 py-16 bg-accent/5">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Pricing software which pays for itself 20x over
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
              <Link href="/">
                <BrandLogo />
              </Link>
              <p className="text-sm text-primary-foreground/80">
                Price Smarter, Sell Bigger.
              </p>
            </div>

            <FooterLinkGroup
              title="Product"
              links={[
                { label: "Features", href: "/#features" },
                { label: "Pricing", href: "/#pricing" },
                { label: "Integrations", href: "/integrations" },
                { label: "Documentation", href: "/docs" },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Affiliates", href: "/affiliates" },
              ]}
            />
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "Contact Us", href: "/contact" },
                { label: "Tutorials", href: "/tutorials" },
                { label: "API Status", href: "#" }, // Placeholder for your status page link
              ]}
            />
            <div className="col-span-2 md:col-span-1">
              <NewsletterForm />
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} WiseBuy, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms of Service</Link>
              <Link href="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              {/* Add your social media links to the hrefs */}
              <Link href="#" aria-label="Twitter">
                <TwitterIcon className="size-5 text-primary-foreground/60 hover:text-primary-foreground transition-colors" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <GithubIcon className="size-5 text-primary-foreground/60 hover:text-primary-foreground transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/**
 * Renders a single pricing card for the marketing page.
 * @param {object} props - The properties for the pricing card, based on subscription tiers.
 */
function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";

  return (
    <Card
      className={cn(
        "relative shadow-none rounded-3xl overflow-hidden",
        isMostPopular ? "border-accent border-2" : "border-none"
      )}
    >
      {isMostPopular && (
        <div className="bg-accent text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
          Most popular
        </div>
      )}
      <CardHeader>
        <div className="text-accent font-semibold mb-8">{name}</div>
        <CardTitle className="text-xl font-bold">
          R{priceInCents / 100} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="text-lg w-full rounded-lg"
            variant={isMostPopular ? "accent" : "default"}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>PPP discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canRemoveBranding && <Feature>Remove WiseBuy branding</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
      </CardFooter>
    </Card>
  );
}

/**
 * Renders a single feature line item with a checkmark icon.
 * @param {object} props - Component properties.
 * @param {ReactNode} props.children - The content of the feature.
 * @param {string} [props.className] - Optional additional class names.
 */
function Feature({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-accent bg-accent/25 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  );
}

/**
 * Renders a group of links with a title for the footer.
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of the link group.
 * @param {Array<{label: string; href: string}>} props.links - The links to render.
 */
function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}