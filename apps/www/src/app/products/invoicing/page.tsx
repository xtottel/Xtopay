// import SmartInvoicingHero from "@/app/products/invoicing/components/SmartInvoicingHero";


// export default function SmartInvoicingPage() {
//   return <main className="overflow-hidden">
//     <SmartInvoicingHero />

//   </main>;
// }

import SmartInvoicingHero from "./components/SmartInvoicingHero";
//import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AutomationSection from "./components/AutomationSection";
import TemplatesSection from "./components/TemplatesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import IntegrationsSection from "./components/IntegrationsSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";

export default function SmartInvoicingPage() {
  return (
    <div className="bg-white dark:bg-[#130338]">
      <SmartInvoicingHero />
      {/* <HeroSection /> */}
      <FeaturesSection />
      <AutomationSection />
      <TemplatesSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}