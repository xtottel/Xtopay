"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { CheckCircle } from "lucide-react";

export default function StartupsBenefits() {
  const benefits = [
    "No setup fees or hidden charges",
    "First $50,000 in payments with 0% fees",
    "Dedicated startup success manager",
    "Exclusive access to investor network",
    "Priority technical support",
    "Custom growth consulting sessions"
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
              The <span className="text-pink-600">Xtopay Startup Program</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We go beyond payments to help your startup succeed. Our exclusive program gives you the resources and support to accelerate your growth.
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
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
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
            <div className="bg-pink-50 text-pink-600 rounded-xl p-6 mb-8 border border-pink-100">
              <h3 className="text-2xl font-bold mb-3">Startup Special</h3>
              <p className="text-gray-700">Get 1.4% + $0.25 per transaction for your first $500K in payments (normally 2.9% + $0.30).</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-900 font-medium mb-2">Eligibility Requirements</h4>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Less than $2M in funding</li>
                  <li>Under 2 years in operation</li>
                  <li>Less than $1M annual processing volume</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-900 font-medium mb-2">How to Apply</h4>
                <ol className="text-gray-600 space-y-2 list-decimal pl-5">
                  <li>Create your Xtopay account</li>
                  <li>Submit your startup details</li>
                  <li>Get approved within 24 hours</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}