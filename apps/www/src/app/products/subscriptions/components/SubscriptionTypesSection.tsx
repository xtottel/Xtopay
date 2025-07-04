"use client";
import { motion } from "framer-motion";
import { Calendar,  Package, Globe } from "lucide-react";

export default function SubscriptionTypesSection() {
  const subscriptionTypes = [
    {
      name: "Fixed Plans",
      description: "Standard subscription plans with set pricing",
      features: [
        "Monthly/Annual billing",
        "Tiered pricing",
        "Volume discounts",
        "Free trials"
      ],
      icon: <Calendar className="h-8 w-8" />
    },
    {
      name: "Usage-Based",
      description: "Charge based on customer usage",
      features: [
        "Per-unit pricing",
        "Overage charges",
        "Threshold alerts",
        "Tiered usage rates"
      ],
      icon: <Package className="h-8 w-8" />
    },
    {
      name: "Hybrid",
      description: "Combine fixed and usage-based billing",
      features: [
        "Base fee + usage",
        "Minimum commitments",
        "Custom overage rules",
        "Advanced reporting"
      ],
      icon: <Globe className="h-8 w-8" />
    }
  ];

  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#130338]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#130338] dark:text-white mb-6">
            Flexible <span className="text-[#4d3b7d] dark:text-[#e0c9a4]">Subscription Models</span>
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Support any billing model your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {subscriptionTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f5f2ff] dark:bg-[#1a0933] p-8 rounded-xl border border-[#e0c9a4]/20 hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4d3b7d] text-[#e0c9a4] mb-6 mx-auto">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-[#130338] dark:text-white mb-3">
                {type.name}
              </h3>
              <p className="text-center text-[#4d3b7d] dark:text-[#e0c9a4] mb-6">
                {type.description}
              </p>
              <ul className="space-y-3">
                {type.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#4d3b7d] text-[#e0c9a4] mr-3 mt-0.5 flex-shrink-0 text-xs">
                      ✓
                    </div>
                    <span className="text-[#4d3b7d] dark:text-[#e0c9a4]">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}