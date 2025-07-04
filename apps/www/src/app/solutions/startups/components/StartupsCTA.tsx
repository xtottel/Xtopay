"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { Rocket } from "lucide-react";

export default function StartupsCTA() {
  return (
    <section className="py-15 bg-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-pink-400">Power Your Startup</span> with Xtopay?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join thousands of startups who trust Xtopay for their payments infrastructure. Get started in minutes.
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
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors"
            >
              Get Started for Free
              <Rocket className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-pink-400 text-white font-medium rounded-lg transition-colors"
            >
              Talk to Sales
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-gray-400 text-sm"
          >
            <p>No credit card required • 24-hour approval for startups • Special rates for YC, Techstars, and 500 Startups companies</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}