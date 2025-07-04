"use client";

import { motion } from "framer-motion";
import { Badge } from "@/ui/badge";
import { Smartphone, Zap, UserCheck } from "lucide-react";

export default function USSDShowcaseSection() {
  const steps = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Dial the Code",
      description: "Merchant or customer dials *123# to initiate payment"
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: "Confirm Details",
      description: "Enter amount and recipient details via simple menu"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Payment",
      description: "Transaction completes in seconds with instant confirmation"
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
          <Badge variant="secondary" className="mb-4 text-[#130338] dark:text-[#130338]">
            No Smartphone? No Problem
          </Badge>
          <h2 className="text-4xl font-bold text-[#130338] dark:text-white mb-4">
            USSD Payments - Banking Without Internet
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Accept payments from any mobile phone with our simple USSD code solution. No app, no internet required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-white dark:bg-[#130338] p-8 rounded-xl text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4d3b7d] text-white mb-4 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#130338] dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#4d3b7d] dark:text-[#e0c9a4]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-[#e0c9a4] dark:border-[#4d3b7d]"
        >
          <img
            src="/ussd-flow-screenshot.png"
            alt="USSD Payment Flow"
            className="w-full h-auto"
          />
        </motion.div> */}
      </div>
    </section>
  );
}