"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does integration take?",
      answer: "Most integrations are completed within 2-3 days using our SDKs and well-documented APIs. Our developer support team is available to assist if needed."
    },
    {
      question: "What payment methods do you support?",
      answer: "We support all major African payment methods including mobile money (M-Pesa, MTN, Airtel, etc.), bank transfers, cards, and USSD across 12 countries."
    },
    {
      question: "How are settlements processed?",
      answer: "Settlements are processed daily by default, with options for real-time settlement for enterprise customers. Funds are transferred directly to your bank account."
    },
    {
      question: "Is my transaction data secure?",
      answer: "Yes, we're PCI DSS Level 1 certified—the highest security standard in the payments industry. All data is encrypted both in transit and at rest."
    },
    {
      question: "Do you offer chargeback protection?",
      answer: "Yes, our advanced fraud detection system helps minimize chargebacks. We also provide dispute resolution support when needed."
    },
    {
      question: "Can I customize the payment experience?",
      answer: "Absolutely! Our SDKs allow you to fully customize the payment flow, including branding, UI components, and user experience to match your app."
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split FAQs for two columns
  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);

  return (
    <section className="py-15 bg-[#0A081A] relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[url('/circuit-pattern.svg')] bg-[length:200px_200px]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Everything you need to know about our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[firstHalf, secondHalf].map((half, colIndex) => (
            <div key={colIndex} className="space-y-6">
              {half.map((faq, index) => {
                const realIndex = colIndex === 0 ? index : index + mid;
                
                return (
                  <motion.div
                    key={realIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: realIndex * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`p-6 rounded-xl cursor-pointer transition-all ${
                        activeIndex === realIndex
                          ? "bg-[#2A2250] border-2 border-[#4A3B8A]"
                          : "bg-[#2A2250]/50 hover:bg-[#2A2250]/70 border-2 border-transparent"
                      }`}
                      onClick={() => toggleFAQ(realIndex)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-white">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`text-[#E0C9A4] transition-transform duration-300 ${
                            activeIndex === realIndex ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <AnimatePresence>
                        {activeIndex === realIndex && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 text-white/70"
                          >
                            {faq.answer}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};