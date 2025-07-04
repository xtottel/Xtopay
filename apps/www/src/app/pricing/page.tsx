import { Metadata } from "next";
import PricingHero from "./components/PricingHero";
import { TransparentPricingCalculator } from "./components/TransparentPricingCalculator";
export const metadata: Metadata = {
  title: "Pricing | Flexible Plans for Every Business",
  description:
    "Explore Sendexa's affordable pricing plans for SMS, Email, Voice, and OTP APIs. Choose the perfect plan to scale your business communication.",
  openGraph: {
    title: "Sendexa Pricing - Flexible Communication Plans",
    description:
      "Compare pricing for SMS, Email, Voice & OTP services. Transparent rates to suit startups, SMEs, and enterprises.",
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default function Pricing() {

return (
    <>
      <PricingHero />
      <TransparentPricingCalculator />
    </>
  );
}
