"use client";

import { HelpCircle, Search} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function HelpCenterHero() {
  return (
    <section
      aria-labelledby="help-center-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16"
    >
      {/* Dynamic Glow - Yellow to match the feature color */}
      <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-yellow-500/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-yellow-400 rounded-full mb-6"
          >
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium">Support Resources</span>
          </motion.div>

          <motion.h1
            id="help-center-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Xtopay <span className="text-yellow-400">Help Center</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Find answers to FAQs, billing help, and comprehensive guides for all Xtopay services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-4 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400" />
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-colors">
              <div className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">FAQs</h3>
              <p className="text-gray-400 mb-4">Quick answers to common questions</p>
              <a href="/help/faqs" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                Browse FAQs →
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-colors">
              <div className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Guides</h3>
              <p className="text-gray-400 mb-4">Step-by-step tutorials</p>
              <a href="/help/guides" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                View Guides →
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-colors">
              <div className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Contact Support</h3>
              <p className="text-gray-400 mb-4">Still need help?</p>
              <a href="/contact" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium">
                Get Support →
              </a>
            </div>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}