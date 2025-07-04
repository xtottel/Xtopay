"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { GraduationCap } from "lucide-react";

export default function EducationCTA() {
  return (
    <section className="py-15 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to <span className="text-cyan-600">Transform</span> Your School Payments?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Join the educational institutions that trust Xtopay for secure, efficient payment processing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="/signup/education"
              className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
            >
              Get Started for Schools
              <GraduationCap className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/contact/education"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 hover:border-cyan-400 text-gray-700 font-medium rounded-lg transition-colors hover:text-cyan-600"
            >
              Request a Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-gray-500 text-sm"
          >
            <p>Special pricing available for educational institutions • No setup fees • Dedicated education support</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}