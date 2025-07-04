"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { CheckCircle } from "lucide-react";

export default function EducationBenefits() {
  const benefits = [
    "50% discount on transaction fees for accredited institutions",
    "No setup fees or monthly charges",
    "Dedicated education account manager",
    "Bulk payment processing for multiple students",
    "Integration with school management systems",
    "Multi-user access with role-based permissions"
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
              The <span className="text-cyan-600">Xtopay Education Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Special pricing and features designed specifically for schools, universities, and training institutions.
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
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
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
            <div className="bg-cyan-50 text-cyan-600 rounded-xl p-6 mb-8 border border-cyan-100">
              <h3 className="text-2xl font-bold mb-3">Education Pricing</h3>
              <p className="text-gray-700">1.2% + $0.20 per transaction for educational institutions (normally 2.4% + $0.30).</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-900 font-medium mb-2">Eligibility Requirements</h4>
                <ul className="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Accredited educational institution</li>
                  <li>Non-profit status (if applicable)</li>
                  <li>Minimum 50 enrolled students</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-900 font-medium mb-2">How to Apply</h4>
                <ol className="text-gray-600 space-y-2 list-decimal pl-5">
                  <li>Create your Xtopay account</li>
                  <li>Submit your accreditation documents</li>
                  <li>Get approved within 48 hours</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}