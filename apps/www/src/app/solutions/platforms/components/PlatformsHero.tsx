"use client";

import { Network } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function PlatformsHero() {
  return (
    <section
      aria-labelledby="platforms-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-15"
    >
      {/* Dynamic Glow - Orange to match the feature color */}
      <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-orange-500/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-orange-400 rounded-full mb-6"
            >
              <Network className="w-5 h-5" />
              <span className="font-medium">Platform Solutions</span>
            </motion.div>

            <motion.h1
              id="platforms-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Power Your Platform with <span className="text-orange-400">User-to-User Payments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              Handle payments between your users with our wallets and payouts API designed for marketplaces, gig platforms, and SaaS applications.
            </motion.p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Wallet className="w-6 h-6 mr-3 text-orange-400" />
                Wallet Infrastructure
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">User wallets with escrow capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">In-platform balance management</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Custom transaction flows</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-orange-400" />
                Payouts API
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Mass payouts to users via mobile money or bank</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Automated commission calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300 rounded-full p-1 mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300">Compliance and KYC tools</span>
                </li>
              </ul>
            </motion.div>
          </div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-800/50 rounded-xl p-8 border border-gray-700"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ready to integrate payments into your platform?</h3>
                <p className="text-gray-400">Our team can help you build the perfect payment solution for your users.</p>
              </div>
              <a
                href="/solutions/platforms"
                className="flex-shrink-0 inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
              >
                Explore Platform Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}