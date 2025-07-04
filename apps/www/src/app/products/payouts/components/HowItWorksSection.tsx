// components/payouts/HowItWorksSection.tsx
"use client";
import { Container } from "@/layout/Container";
import { motion } from "framer-motion";

export function HowItWorksSection() {
  const steps = [
    {
      title: "Connect Your Account",
      description: "Integrate with our API or use our web dashboard"
    },
    {
      title: "Create Payout Batch",
      description: "Upload CSV or enter recipient details manually"
    },
    {
      title: "Review & Approve",
      description: "Verify all transaction details before sending"
    },
    {
      title: "Funds Delivered",
      description: "Recipients receive money instantly"
    }
  ];

  return (
    <section className="py-15 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple integration and seamless payout processing
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="hidden lg:flex absolute left-1/2 top-0 h-8 w-8 bg-blue-500 rounded-full items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}