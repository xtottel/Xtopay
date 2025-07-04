"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function CareersCTA() {
  return (
    <section className="py-15 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/70 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build the Future with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join a team that&apos;s transforming payments across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#positions"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium bg-purple-700 text-white hover:bg-purple-800 transition-colors"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium bg-white text-purple-700 hover:bg-gray-100 transition-colors"
              >
                Contact Talent Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}