"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { CheckCircle } from "lucide-react";

export default function PlatformsBenefits() {
  const benefits = [
    "White-labeled payment solution for your brand",
    "Customizable transaction flows",
    "Support for multiple payout methods (bank, mobile money, etc.)",
    "Automated reconciliation and reporting",
    "Multi-currency support",
    "Dedicated platform support team"
  ];

  return (
    <section className="py-15 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Built for <span className="text-orange-600">Platform Businesses</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you&apos;re building a marketplace, gig economy platform, or SaaS application, we&apos;ve got you covered.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="bg-orange-50 text-orange-600 rounded-xl p-6 mb-8 border border-orange-100">
              <h3 className="text-2xl font-bold mb-3">Platform Pricing</h3>
              <p className="text-gray-700">Competitive rates starting at 1.5% + $0.20 per transaction with volume discounts available.</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-900 font-medium mb-2">Ideal For</h4>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Marketplaces</li>
                  <li>Gig economy platforms</li>
                  <li>SaaS applications</li>
                  <li>Crowdfunding platforms</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-900 font-medium mb-2">Implementation</h4>
                <ol className="text-gray-600 space-y-2 list-decimal pl-5">
                  <li>API integration or no-code setup</li>
                  <li>Custom development support available</li>
                  <li>Go live in as little as 2 weeks</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}