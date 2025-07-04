import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { IntegrationSection } from "./components/IntegrationSection";
import PayoutsHero from "./components/PayoutsHero";


export default function PayoutsPage() {
  return <main className="overflow-hidden">
    <PayoutsHero />
    <FeaturesSection />
      <HowItWorksSection />
      <IntegrationSection />

  </main>;
}
