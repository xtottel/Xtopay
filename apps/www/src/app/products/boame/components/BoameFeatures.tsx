"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { Smartphone, Zap, DollarSign, BarChart } from "lucide-react";

export default function BoameFeatures() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile Money First",
      description: "Optimized for Ghana's favorite payment method"
    },
    {
      icon: Zap,
      title: "Instant Deposits",
      description: "Money arrives in your Xtopay wallet immediately"
    },
    {
      icon: DollarSign,
      title: "Low Fees",
      description: "Only 1% per transaction, no hidden costs"
    },
    {
      icon: BarChart,
      title: "Dashboard Analytics",
      description: "Track your support history and trends"
    }
  ];

  return (
    <section className="py-15 bg-gradient-to-b from-yellow-50 via-yellow-100 to-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Why Choose <span className="text-blue-600">Boame</span>?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors shadow-sm hover:shadow-md text-center"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 mx-auto">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}