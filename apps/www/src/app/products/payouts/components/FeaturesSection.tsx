// components/payouts/FeaturesSection.tsx
import { Send, Wallet, Banknote, Clock, ShieldCheck, BarChart } from "lucide-react";
import { Container } from "@/layout/Container";

export function FeaturesSection() {
  const features = [
    {
      icon: <Send className="w-8 h-8 text-blue-500" />,
      title: "Instant Transfers",
      description: "Send money to any mobile wallet or bank account in seconds."
    },
    {
      icon: <Wallet className="w-8 h-8 text-green-500" />,
      title: "Multiple Providers",
      description: "Support for all major mobile money and banking networks"
    },
    {
      icon: <Banknote className="w-8 h-8 text-amber-500" />,
      title: "Competitive Rates",
      description: "Low fees with transparent pricing structure"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "24/7 Availability",
      description: "Process payouts anytime, even outside banking hours"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
      title: "Bank-grade Security",
      description: "PCI DSS compliant with end-to-end encryption"
    },
    {
      icon: <BarChart className="w-8 h-8 text-indigo-500" />,
      title: "Real-time Reporting",
      description: "Comprehensive dashboards and transaction tracking"
    }
  ];

  return (
    <section className="py-15 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Payout Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to send money efficiently at scale
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}