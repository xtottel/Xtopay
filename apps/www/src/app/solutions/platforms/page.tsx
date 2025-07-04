import PlatformsBenefits from "./components/PlatformsBenefits";
import PlatformsCTA from "./components/PlatformsCTA";
import PlatformsFeatures from "./components/PlatformsFeatures";
import PlatformsHero from "./components/PlatformsHero";
import PlatformsTestimonials from "./components/PlatformsTestimonials";

export default function PlatformsPage() {
  return (
    <div className="bg-gray-50">
      <PlatformsHero />
      <PlatformsFeatures />
      <PlatformsBenefits />
      <PlatformsTestimonials />
      <PlatformsCTA />
      {/* Additional content can be added here */}
    </div>
  );
}