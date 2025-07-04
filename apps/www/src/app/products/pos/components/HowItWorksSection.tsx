"use client";
//import Button from "@/ui/Button";
import { motion } from "framer-motion";
import { Badge } from "@/ui/badge";
import { Settings, Smartphone, CreditCard, BarChart2, Phone, User } from "lucide-react";

export default function HowItWorksSection() {
  const posSteps = [
    {
      step: "1",
      title: "Setup Your Account",
      description: "Register and complete your merchant profile in minutes.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Connect Your Device",
      description: "Pair with our POS terminal or use your smartphone.",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Start Accepting Payments",
      description: "Process cards, mobile wallets, and more.",
      icon: <CreditCard className="h-6 w-6" />
    }
  ];

  const ussdSteps = [
    {
      step: "1",
      title: "Get Your USSD Code",
      description: "We provide a unique code for your business.",
      icon: <Phone className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Customer Initiates Payment",
      description: "They dial your code and follow prompts.",
      icon: <User className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Payment Completed",
      description: "Instant confirmation for both parties.",
      icon: <BarChart2 className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-[#130338] dark:text-[#130338]">
            Simple Processes
          </Badge>
          <h2 className="text-4xl font-bold text-[#130338] dark:text-white mb-4">
            Two Ways to Get Paid
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Choose the method that works best for your business and customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* POS Flow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#f9f7fd] dark:bg-[#1e0d4d] p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-[#130338] dark:text-white mb-6 text-center">
              POS Payment Flow
            </h3>
            <div className="space-y-8">
              {posSteps.map((step, index) => (
                <div key={`pos-${index}`} className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4d3b7d] text-white mr-4">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#130338] dark:text-white">{step.title}</h4>
                    <p className="text-[#4d3b7d] dark:text-[#e0c9a4]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* USSD Flow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#f9f7fd] dark:bg-[#1e0d4d] p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-[#130338] dark:text-white mb-6 text-center">
              USSD Payment Flow
            </h3>
            <div className="space-y-8">
              {ussdSteps.map((step, index) => (
                <div key={`ussd-${index}`} className="flex items-start">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4d3b7d] text-white mr-4">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#130338] dark:text-white">{step.title}</h4>
                    <p className="text-[#4d3b7d] dark:text-[#e0c9a4]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}