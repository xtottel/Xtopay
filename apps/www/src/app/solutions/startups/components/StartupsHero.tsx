"use client";

import { Rocket} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function StartupsHero() {
  return (
    <section
      aria-labelledby="startups-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16"
    >
      {/* Dynamic Glow - Pink to match the feature color */}
      <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-pink-400 rounded-full mb-6"
            >
              <Rocket className="w-5 h-5" />
              <span className="font-medium">Startup Solutions</span>
            </motion.div>

            <motion.h1
              id="startups-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Payments Built for <span className="text-pink-400">Fast-Moving Startups</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              Launch faster with ready-to-use payments and dashboard tools designed 
              specifically for startup growth and scalability.
            </motion.p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-pink-400 transition-colors"
            >
              <div className="bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-300 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Activation</h3>
              <p className="text-gray-400">Get started in minutes with instant account approval</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-pink-400 transition-colors"
            >
              <div className="bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-300 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Growth Tools</h3>
              <p className="text-gray-400">Built-in analytics to track your payment performance</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-pink-400 transition-colors"
            >
              <div className="bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-300 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Integration</h3>
              <p className="text-gray-400">Developer-friendly APIs with comprehensive docs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-pink-400 transition-colors"
            >
              <div className="bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-300 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Startup Program</h3>
              <p className="text-gray-400">Special rates and support for early-stage companies</p>
            </motion.div>
          </div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <a
              href="/solutions/startups"
              className="inline-flex items-center px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors"
            >
              Get Started for Startups
              <Rocket className="w-5 h-5 ml-2" />
            </a>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}