"use client";
import { motion } from "framer-motion";
import { Clock, Bell, PieChart, DollarSign, Globe, Lock } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Instant Creation",
      description: "Generate professional invoices in under 60 seconds",
      icon: <Clock className="h-8 w-8 text-[#4d3b7d]" />
    },
    {
      title: "Auto-Reminders",
      description: "Automatically send payment reminders to clients",
      icon: <Bell className="h-8 w-8 text-[#4d3b7d]" />
    },
    {
      title: "Real-Time Analytics",
      description: "Track unpaid invoices and cash flow in real-time",
      icon: <PieChart className="h-8 w-8 text-[#4d3b7d]" />
    },
    {
      title: "Multi-Currency",
      description: "Invoice clients in their local currency",
      icon: <DollarSign className="h-8 w-8 text-[#4d3b7d]" />
    },
    {
      title: "Global Payments",
      description: "Accept payments from anywhere in the world",
      icon: <Globe className="h-8 w-8 text-[#4d3b7d]" />
    },
    {
      title: "Bank-Level Security",
      description: "Your financial data is always protected",
      icon: <Lock className="h-8 w-8 text-[#4d3b7d]" />
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
            Everything You Need for <span className="text-[#4d3b7d] dark:text-[#e0c9a4]">Effortless</span> Invoicing
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Our smart invoicing system handles the busywork so you can focus on your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f5f2ff] dark:bg-[#1a0933] p-8 rounded-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-[#4d3b7d] mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-[#130338] dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-center text-[#4d3b7d] dark:text-[#e0c9a4]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}