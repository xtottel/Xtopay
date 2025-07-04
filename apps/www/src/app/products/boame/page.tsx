import BoameHero from "./components/BoameHero";
import BoameDemo from "./components/BoameDemo";
import BoameFeatures from "./components/BoameFeatures";
import BoameUseCases from "./components/BoameUseCases";
import BoameCTA from "./components/BoameCTA";
import FloatingWidget from "./components/FloatingWidget";

export default function BoamePage() {
  return (
    <main>
        <FloatingWidget />
      <BoameHero />
      <BoameDemo />
      <BoameFeatures />
      <BoameUseCases />
      <BoameCTA />
    </main>
  );
}