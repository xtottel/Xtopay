"use client";
import { motion } from "framer-motion";
import { Calendar, RefreshCw, Shield, BarChart, Bell, UserCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Flexible Billing",
      description: "Daily, weekly, monthly, or custom billing cycles",
      icon: <Calendar className="h-8 w-8 text-[#4d3b7d]" />
    },
    {
      title: "Auto-Retries",
      description: "Automatically retry failed payments with smart logic",
      icon: <RefreshCw className="h-8 w-8 text-[#4d3b7d]" />
    },
    {
      title: "PCI Compliance",
      description: "Secure storage for payment methods",
      icon: <Shield className="h-8 w-8 text-[#4d3b7d]" />
    },
    {
      title: "Revenue Analytics",
      description: "Track MRR, churn, and other key metrics",
      icon: <BarChart className="h-8 w-8 text-[#4d3b7d]" />
    },
    {
      title: "Notifications",
      description: "Alerts for failed payments and subscriptions",
      icon: <Bell className="h-8 w-8 text-[#4d3b7d]" />
    },
    {
      title: "Customer Portal",
      description: "Let customers manage their own subscriptions",
      icon: <UserCheck className="h-8 w-8 text-[#4d3b7d]" />
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
            Everything You Need for <span className="text-[#4d3b7d] dark:text-[#e0c9a4]">Recurring Revenue</span>
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Our recurring billing system handles the complexity so you can focus on growing your business.
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
              className="bg-[#f5f2ff] dark:bg-[#1a0933] p-8 rounded-xl border border-[#e0c9a4]/20 hover:shadow-md transition-all"
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