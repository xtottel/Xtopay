"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/ui/Button";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "2.9% + $0.30",
      description: "Perfect for occasional use",
      features: [
        "Up to 50 links/month",
        "Basic customization",
        "Email support",
        "Standard settlement"
      ],
      featured: false
    },
    {
      name: "Business",
      price: "2.5% + $0.25",
      description: "For growing businesses",
      features: [
        "Up to 500 links/month",
        "Full customization",
        "Priority support",
        "1-day settlement",
        "Basic analytics"
      ],
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For high-volume needs",
      features: [
        "Unlimited links",
        "Advanced customization",
        "24/7 support",
        "Instant settlement",
        "Advanced analytics",
        "Dedicated account manager"
      ],
      featured: false
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#130338] dark:text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto mb-8">
            Pay only when you get paid. No monthly fees, no hidden charges.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-xl shadow-sm overflow-hidden ${plan.featured ? "border-2 border-[#e0c9a4]" : "border border-gray-200 dark:border-gray-700"}`}
              >
                <div className={`p-6 ${plan.featured ? "bg-[#4d3b7d] text-white" : "bg-white dark:bg-[#130338]"}`}>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? "text-white" : "text-[#130338] dark:text-white"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xl mb-4 ${plan.featured ? "text-[#e0c9a4]" : "text-[#4d3b7d] dark:text-[#e0c9a4]"}`}>
                    {plan.price}
                  </p>
                  <p className={`mb-6 ${plan.featured ? "text-white" : "text-[#4d3b7d] dark:text-[#e0c9a4]"}`}>
                    {plan.description}
                  </p>
                  <Button
                    className={`w-full ${plan.featured ? "bg-[#e0c9a4] hover:bg-[#d1b98c] text-[#130338]" : "bg-[#4d3b7d] hover:bg-[#3a2c5f] text-white"}`}
                  >
                    Get Started
                  </Button>
                </div>
                <div className="p-6 bg-white dark:bg-[#130338]">
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
        </motion.div>
      </div>
    </section>
  );
}