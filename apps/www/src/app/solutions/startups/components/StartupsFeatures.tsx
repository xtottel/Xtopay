"use client";

import { Zap, BarChart, Clock, Code, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function StartupsFeatures() {
  const features = [
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Get started in minutes with instant account approval and zero paperwork.",
      delay: 0.3
    },
    {
      icon: BarChart,
      title: "Real-time Analytics",
      description: "Built-in dashboards to track your payment performance and customer behavior.",
      delay: 0.4
    },
    {
      icon: Clock,
      title: "Rapid Integration",
      description: "Developer-friendly APIs with comprehensive documentation and SDKs.",
      delay: 0.5
    },
    {
      icon: Code,
      title: "Flexible APIs",
      description: "Customizable payment flows that adapt to your unique business needs.",
      delay: 0.6
    },
    {
      icon: Shield,
      title: "Enterprise-grade Security",
      description: "PCI-DSS Level 1 compliant with fraud prevention tools built-in.",
      delay: 0.7
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description: "Handles from your first payment to millions without missing a beat.",
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
            Everything You Need to <span className="text-pink-600">Scale Fast</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Xtopay provides the complete payments stack with tools designed specifically for high-growth startups.
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
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-pink-300 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="bg-pink-50 text-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-pink-100">
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