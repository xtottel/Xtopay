import EducationBenefits from "./components/EducationBenefits";
import EducationCTA from "./components/EducationCTA";
import EducationFeatures from "./components/EducationFeatures";
import EducationHero from "./components/EducationHero";
import EducationTestimonials from "./components/EducationTestimonials";

export default function EducationPage() {
  return (
    <div>
      <EducationHero />
      <EducationFeatures />
      <EducationBenefits />
      <EducationTestimonials />
      <EducationCTA />
      {/* Additional content can be added here */}
    </div>
  );
}