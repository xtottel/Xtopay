"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Clock } from "lucide-react";

export const PricingSection = () => {
  const features = [
    {
      icon: <Zap className="text-[#4e3b7d]" size={20} />,
      title: "Fast Processing",
      description: "Instant payment processing with 99.9% uptime"
    },
    {
      icon: <Shield className="text-[#4e3b7d]" size={20} />,
      title: "Bank-Grade Security",
      description: "PCI DSS Level 1 certified infrastructure"
    },
    {
      icon: <Clock className="text-[#4e3b7d]" size={20} />,
      title: "Quick Settlements",
      description: "20 minutes settlement to your bank account"
    }
  ];

  return (
    <section className="py-15 bg-white">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple & Transparent Pricing
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Pay only <span className="font-bold text-[#4e3b7d]">1.95% per transaction</span> and{' '}
            <span className="font-bold text-[#4e3b7d]">1.50% per withdrawal</span> with no hidden fees
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#f8f7ff] to-white border-2 border-[#4e3b7d]/20 rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">All-Inclusive Rate</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-[#4e3b7d]">1.95%</span>
                    <span className="text-gray-600">per transaction</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-5xl font-bold text-[#4e3b7d]">1.50%</span>
                    <span className="text-gray-600">per withdrawal</span>
                  </div>
                </div>

                <button className="w-full md:w-auto bg-[#4e3b7d] hover:bg-[#3a2c66] text-white font-semibold py-4 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg">
                  Get Started Today
                </button>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900">Everything included:</h4>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-2 bg-[#4e3b7d]/10 rounded-lg mt-0.5">
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{feature.title}</h5>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-gray-500 text-sm"
          >
            No setup fees, no monthly charges, no hidden costs
          </motion.div>
        </div>
      </div>
    </section>
  );
};