"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/ui/Button";

export default function PricingSection() {
  const plans = [
    {
      name: "Startup",
      price: "$99",
      period: "month",
      description: "For early-stage businesses",
      features: [
        "Up to $50k MRR",
        "Basic subscription features",
        "Email support",
        "Standard reporting",
        "3 team members"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Growth",
      price: "$299",
      period: "month",
      description: "For scaling subscription businesses",
      features: [
        "Up to $500k MRR",
        "Advanced billing logic",
        "Priority support",
        "Advanced analytics",
        "10 team members",
        "Usage-based billing"
      ],
      cta: "Get Started",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For high-volume businesses",
      features: [
        "Unlimited MRR",
        "Custom billing workflows",
        "24/7 support",
        "Dedicated account manager",
        "Unlimited team members",
        "API & Webhooks"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 bg-[#f5f2ff] dark:bg-[#1a0933]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#130338] dark:text-white mb-6">
            Pricing That <span className="text-[#4d3b7d] dark:text-[#e0c9a4]">Scales With You</span>
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Pay as you grow. No long-term contracts, cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden shadow-lg ${plan.featured ? "border-2 border-[#e0c9a4]" : "border border-gray-200 dark:border-gray-700"}`}
            >
              <div className={`p-8 ${plan.featured ? "bg-[#4d3b7d] text-white" : "bg-white dark:bg-[#130338]"}`}>
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-white" : "text-[#130338] dark:text-white"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end mb-4">
                  <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-[#130338] dark:text-white"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`ml-1 text-lg ${plan.featured ? "text-[#e0c9a4]" : "text-[#4d3b7d] dark:text-[#e0c9a4]"}`}>
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className={`mb-6 ${plan.featured ? "text-[#e0c9a4]" : "text-[#4d3b7d] dark:text-[#e0c9a4]"}`}>
                  {plan.description}
                </p>
                <Button
                  className={`w-full ${plan.featured ? "bg-[#e0c9a4] hover:bg-[#d1b98c] text-[#130338]" : "bg-[#4d3b7d] hover:bg-[#3a2c5f] text-white"}`}
                >
                  {plan.cta}
                </Button>
              </div>
              <div className="p-8 bg-white dark:bg-[#130338]">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#4d3b7d] dark:text-[#e0c9a4] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[#4d3b7d] dark:text-[#e0c9a4]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}