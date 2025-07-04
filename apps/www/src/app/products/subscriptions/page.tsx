// import BillingHero from "@/components/subscriptions/BillingHero";


// export default function BillingPage() {
//   return <main className="overflow-hidden">
//     <BillingHero />

//   </main>;
// }
import BillingHero from "./components/BillingHero";
//import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import WorkflowSection from "./components/WorkflowSection";
import SubscriptionTypesSection from "./components/SubscriptionTypesSection";
import DashboardSection from "./components/DashboardSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";

export default function RecurringBillingPage() {
  return (
    <div className="bg-white dark:bg-[#130338]">
      <BillingHero />
      {/* <HeroSection /> */}
      <FeaturesSection />
      <WorkflowSection />
      <SubscriptionTypesSection />
      <DashboardSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}