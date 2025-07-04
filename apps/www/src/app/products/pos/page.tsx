import POSHero from "./components/POSHero";
import FeatureHighlightsSection from "./components/FeatureHighlightsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import IntegrationSection from "./components/IntegrationSection";
import CTASection from "./components/POSCTA";
import USSDShowcaseSection from "./components/USSDShowcaseSection";
import PaymentMethodsSection from "./components/PaymentMethodsSection";

export default function POSProductPage() {
  return (
    <div className="bg-white dark:bg-[#130338] overflow-hidden">
      {/* Hero Section */}
      <POSHero />
      {/* USSDShowcaseSection */}
      <USSDShowcaseSection />

      {/* Payment Methods Section */}
      <PaymentMethodsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Feature Highlights Section */}
      <FeatureHighlightsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Integration Section */}
      <IntegrationSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
