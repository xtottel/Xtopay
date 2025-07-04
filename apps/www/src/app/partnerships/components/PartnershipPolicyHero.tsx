"use client";

import { Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
//import Link from "next/link";

export default function PartnershipPolicyHero() {
  return (
    <section
      className="relative py-13 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
      aria-labelledby="partnership-policy-heading"
    >
      {/* Soft Glow Effect */}
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-purple-300 rounded-full mb-6"
          >
            <Handshake className="w-5 h-5" />
            <span className="font-medium">Xtopay Partnership Policy</span>
          </motion.div>

          <motion.h1
            id="partnership-policy-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Partnership on Purpose, Not Just Paper
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6"
          >
            At Xtopay, we believe true partnerships are built on contribution, 
            clarity, and mutual growth. This policy defines the standards and 
            values we expect — and what you can expect in return.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
