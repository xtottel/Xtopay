"use client";

import { Wallet, Code, CreditCard, Users, BarChart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function PlatformsFeatures() {
  const features = [
    {
      icon: Wallet,
      title: "Wallet Infrastructure",
      description: "User wallets with escrow capabilities and in-platform balance management.",
      delay: 0.3
    },
    {
      icon: Code,
      title: "Payouts API",
      description: "Mass payouts to users via mobile money, bank, or other methods.",
      delay: 0.4
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Accept payments from customers and distribute to your users.",
      delay: 0.5
    },
    {
      icon: Users,
      title: "Multi-party Payments",
      description: "Split payments between multiple parties with custom commission structures.",
      delay: 0.6
    },
    {
      icon: BarChart,
      title: "Revenue Reporting",
      description: "Detailed analytics on platform fees and user transactions.",
      delay: 0.7
    },
    {
      icon: Shield,
      title: "Compliance Tools",
      description: "Built-in KYC and fraud prevention for your users.",
      delay: 0.8
    }
  ];

  return (
    <section className="py-15 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Platform Payment <span className="text-orange-600">Features</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Everything you need to build and scale a payment-enabled platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-300 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="bg-orange-50 text-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto border border-orange-100">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}