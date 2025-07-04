import PaymentLinksHero from "./components/PaymentLinksHero";
import FeaturesSection from "./components/FeaturesSection";
import DemoSection from "./components/DemoSection";
import UseCasesSection from "./components/UseCasesSection";
import PricingSection from "./components/PricingSection";
import IntegrationsSection from "./components/IntegrationsSection";
import CTASection from "./components/CTASection";

export default function PaymentLinksPage() {
  return (
    <div className="bg-[#f5f2ff] dark:bg-[#1a0933]">
      <PaymentLinksHero />
      <FeaturesSection />
      <DemoSection />
      <UseCasesSection />
      <PricingSection />
      <IntegrationsSection />
      <CTASection />
    </div>
  );
}