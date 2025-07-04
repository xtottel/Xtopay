"use client";
import { motion } from "framer-motion";
import { Zap, RefreshCw, Mail, Bell } from "lucide-react";
import Image from "next/image";

export default function AutomationSection() {
  const automationSteps = [
    {
      step: "1",
      title: "Create Invoice",
      description: "Use our templates or customize your own",
      icon: <RefreshCw className="h-6 w-6" />
    },
    {
      step: "2",
      title: "Send to Client",
      description: "Deliver via email, SMS, or shareable link",
      icon: <Mail className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Auto-Reminders",
      description: "System sends polite reminders before due date",
      icon: <Bell className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Get Paid",
      description: "Client pays online, funds deposited to your account",
      icon: <Zap className="h-6 w-6" />
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
              <span className="text-[#4d3b7d] dark:text-[#e0c9a4]">Automated</span> Workflow Saves You Hours
            </h2>
            <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] mb-8">
              Our system handles the entire invoicing process from creation to collection, giving you back valuable time.
            </p>
            
            <div className="space-y-8">
              {automationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4d3b7d] text-white flex-shrink-0">
                    {step.step}
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
            <div className="relative rounded-xl shadow-xl overflow-hidden border border-[#e0c9a4]/20">
              <Image
                src="/invoice-automation-flow.png"
                alt="Invoice Automation Flow"
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