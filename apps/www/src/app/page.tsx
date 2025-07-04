
import Hero from "@/components/home/Hero";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { IntegrationSection } from "@/components/home/IntegrationSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import LogoCloudSection from "@/components/home/LogoCloudSection";
import { Metadata } from "next";
import MobileHero from "@/components/home/MobileHero";


export const metadata: Metadata = {
  title: "Xtopay – Fast & Secure Payments in Ghana",
  description:
    "Xtopay is a modern payment platform built for Ghana. Send, receive, and manage payments via mobile money, card, and bank—faster and safer than ever.",
  keywords: [
    "Xtopay",
    "payments in Ghana",
    "mobile money",
    "MoMo payments",
    "card payments Ghana",
    "secure payment platform",
    "pay online Ghana",
    "send money Ghana",
    "modern fintech Ghana",
    "Xtopay Ghana",
  ],
  openGraph: {
    title: "Xtopay – Fast & Secure Payments in Ghana",
    description:
      "Experience a next-generation payment platform built for Ghana. Xtopay offers fast, secure, and affordable payment solutions via MoMo, card, and more.",
    url: "https://xtopay.co", // Replace with your actual domain
    siteName: "Xtopay",
    images: [
      {
        url: "https://xtopay.co/og-image.jpg", // Update with actual OG image
        width: 1200,
        height: 630,
        alt: "Xtopay – Payment Platform in Ghana",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtopay – Fast & Secure Payments in Ghana",
    description:
      "Simplify payments in Ghana with Xtopay. Send and receive money via mobile money, cards, and more—built for individuals and businesses.",
    images: ["https://xtopay.co/twitter-card.jpg"], // Update with your Twitter card image
    creator: "@xtopaygh", // Optional: if you have a Twitter handle
  },
  metadataBase: new URL("https://xtopay.co"),
};





export default function Home() {
  return (
    <main className="overflow-hidden ">
      {/* Section 1: Hero (Dark) */}
      {/* <Hero  /> */}
        {/*herosection hide on mobile */}
      <div className="hidden md:block">
        <Hero />
      </div>

      {/* Mobile Hero Section */}
      <div className="block md:hidden">
        <MobileHero />
      </div>
      
      {/* Section 2: Features (Light) */}
      <FeaturesSection />
      
      {/* Section 3: Stats (Dark) */}
      <StatsSection />
      
      {/* Section 4: Use Cases (Light) */}
      <UseCasesSection />
      
      {/* Section 4.5: Logo Cloud (Dark) */}
      <LogoCloudSection />

      {/* Section 5: Testimonials (Light) */}
      <TestimonialsSection />
      
      {/* Section 6: Integration (Dark) */}
      <IntegrationSection />
      
      {/* Section 7: Pricing (Dark) */}
      <PricingSection />
      
      {/* Section 8: FAQ (Light) */}
      <FAQSection />
      
      {/* Section 9: Final CTA (Gradient) */}
      <FinalCTASection />
    </main>
  );
}