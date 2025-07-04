import StartupsBenefits from "./components/StartupsBenefits";
import StartupsCTA from "./components/StartupsCTA";
import StartupsFeatures from "./components/StartupsFeatures";
import StartupsHero from "./components/StartupsHero";
import StartupsIntegration from "./components/StartupsIntegration";
import StartupsTestimonials from "./components/StartupsTestimonials";


export default function StartupsPage() {
  return (
    <div>
      <StartupsHero />
       <StartupsFeatures />
      <StartupsBenefits />
      <StartupsIntegration />
      <StartupsTestimonials />
      <StartupsCTA />
      {/* Additional content can be added here */}
    </div>
  );
}