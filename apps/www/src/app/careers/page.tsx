import { CareersCTA } from "./components/CareersCTA";
import CareersHero from "./components/CareersHero";
import { EmployeeBenefits } from "./components/EmployeeBenefits";
import { OpenPositions } from "./components/OpenPositions";
import { OurCulture } from "./components/OurCulture";
import { WhyJoinUs } from "./components/WhyJoinUs";

export default function CareersPage() {
  return (
    <div className="bg-gray-900 text-white">
      <CareersHero />
      <WhyJoinUs />
      <OpenPositions />
      <OurCulture />
      <EmployeeBenefits />
      <CareersCTA />
    </div>
  );
}