"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Link } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Create in Seconds",
      description: "Generate shareable payment links with just a few clicks.",
      icon: <Link className="h-6 w-6 text-[#e0c9a4]" />
    },
    {
      title: "Instant Payments",
      description: "Customers can pay immediately without signing up.",
      icon: <Zap className="h-6 w-6 text-[#e0c9a4]" />
    },
    {
      title: "Secure Transactions",
      description: "PCI-compliant with end-to-end encryption.",
      icon: <Shield className="h-6 w-6 text-[#e0c9a4]" />
    },
    {
      title: "Global Reach",
      description: "Accept payments from anywhere in the world.",
      icon: <Globe className="h-6 w-6 text-[#e0c9a4]" />
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
            Powerful Payment Links Made Simple
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#130338] p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4d3b7d] mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#130338] dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#4d3b7d] dark:text-[#e0c9a4]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}