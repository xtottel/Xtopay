"use client";
import { motion } from "framer-motion";
import { User, CreditCard, Settings, Repeat, Check } from "lucide-react";
import Image from "next/image";

export default function WorkflowSection() {
  const steps = [
    {
      title: "Customer Signs Up",
      description: "Customer provides payment details",
      icon: <User className="h-6 w-6" />
    },
    {
      title: "Payment Method Stored",
      description: "Securely tokenized for future payments",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      title: "Subscription Created",
      description: "Set billing cycle and amount",
      icon: <Settings className="h-6 w-6" />
    },
    {
      title: "Automatic Billing",
      description: "Charged automatically each period",
      icon: <Repeat className="h-6 w-6" />
    },
    {
      title: "Payment Processed",
      description: "Funds deposited to your account",
      icon: <Check className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 bg-[#f5f2ff] dark:bg-[#1a0933]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#130338] dark:text-white mb-6">
              How Recurring Billing <span className="text-[#4d3b7d] dark:text-[#e0c9a4]">Works</span>
            </h2>
            <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] mb-8">
              Our system handles the entire subscription lifecycle automatically.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4d3b7d] text-white flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#130338] dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#4d3b7d] dark:text-[#e0c9a4]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl shadow-xl overflow-hidden border border-[#e0c9a4]/20 bg-white p-4">
              <Image
                src="/recurring-workflow-diagram.png"
                alt="Recurring Billing Workflow"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}