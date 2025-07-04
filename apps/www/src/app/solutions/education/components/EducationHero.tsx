"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function EducationHero() {
  return (
    <section
      aria-labelledby="education-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-15"
    >
      {/* Dynamic Glow - Cyan to match the feature color */}
      <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-cyan-400 rounded-full mb-6"
            >
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">Education Solutions</span>
            </motion.div>

            <motion.h1
              id="education-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Simplify School Payments with <span className="text-cyan-400">Xtopay Education</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              Accept tuition fees, track student payments, and manage school finances with our dedicated education payment platform.
            </motion.p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition-colors"
            >
              <div className="bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Tuition Collection</h3>
              <p className="text-gray-400 text-center">
                Accept payments via mobile money, cards, or bank transfers with automated receipts
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition-colors"
            >
              <div className="bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Student Management</h3>
              <p className="text-gray-400 text-center">
                Track payments by student, class, or program with detailed reporting
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition-colors"
            >
              <div className="bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Parent Portal</h3>
              <p className="text-gray-400 text-center">
                Give parents secure access to view invoices and payment history
              </p>
            </motion.div>
          </div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800/50 rounded-xl p-8 border border-gray-700"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Special Education Pricing</h3>
                <p className="text-gray-400">Discounted rates for schools and educational institutions</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/solutions/education"
                  className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
                >
                  Contact Sales
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}