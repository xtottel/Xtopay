"use client";

import {
  HeartHandshake,
  Home,
  Globe,
  Zap,
  DollarSign,
  Calendar
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function EmployeeBenefits() {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-[#4d3b7d]" />,
      title: "Competitive Salary",
      category: "Compensation"
    },
    {
      icon: <Zap className="w-6 h-6 text-[#4d3b7d]" />,
      title: "Stock Options",
      category: "Compensation"
    },
    {
      icon: <Home className="w-6 h-6 text-[#4d3b7d]" />,
      title: "Remote Work",
      category: "Work Flexibility"
    },
    {
      icon: <Globe className="w-6 h-6 text-[#4d3b7d]" />,
      title: "Pan-African Exposure",
      category: "Growth"
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#4d3b7d]" />,
      title: "Flexible Time Off",
      category: "Work-Life Balance"
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#4d3b7d]" />,
      title: "Health Coverage",
      category: "Wellbeing"
    }
  ];

  return (
    <section className="py-16 bg-[#f9f7f5]">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#4d3b7d] mb-4">
              Employee Benefits
            </h2>
            <p className="text-lg text-gray-600">
              We invest in our team&apos;s wellbeing and professional growth
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-[#e0c9a4] hover:border-[#4d3b7d] bg-white transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#e0c9a4]/30 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#4d3b7d] mb-2">
                {benefit.title}
              </h3>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#f4efe9] text-gray-700">
                {benefit.category}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
