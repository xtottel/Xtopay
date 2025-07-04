import DevelopersCode from "./components/DevelopersCode";
import DevelopersCTA from "./components/DevelopersCTA";
import DevelopersFeatures from "./components/DevelopersFeatures";
import DevelopersHero from "./components/DevelopersHero";
import DevelopersTestimonials from "./components/DevelopersTestimonials";

export default function DevelopersPage() {
  return (
    <div className="bg-gray-50">
      <DevelopersHero />
      <DevelopersFeatures />
      <DevelopersCode />
      <DevelopersTestimonials />
      <DevelopersCTA />
      {/* Additional content can be added here */}
    </div>
  );
}
