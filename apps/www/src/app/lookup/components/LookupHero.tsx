"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function LookupHero() {
  return (
    <section
      aria-labelledby="lookup-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16"
    >
      {/* Dynamic Glow - Green to match the feature color */}
      <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-green-500/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-green-400 rounded-full mb-6"
          >
            <Search className="w-5 h-5" />
            <span className="font-medium">Transaction Lookup</span>
          </motion.div>

          <motion.h1
            id="lookup-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why was I debited?{" "}
            <span className="text-green-400">Find your transaction</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Find out why you were charged by Xtopay. Search by transaction ID,
            reference number, or phone number to get details about any payment.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
