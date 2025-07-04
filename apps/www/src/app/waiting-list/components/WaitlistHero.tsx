"use client";

import { Mail, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function WaitlistHero() {
//   const primaryColor = "#513b7e";
  const primaryLight = "rgba(81, 59, 126, 0.3)";
//   const primaryLighter = "rgba(81, 59, 126, 0.1)";
  const primaryText = "#b8a1e6";

  return (
    <section
      aria-labelledby="waitlist-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-15"
    >
      {/* Glow Effect */}
      <div 
        className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[100px] animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{ backgroundColor: primaryLight }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container>
        <div className="relative max-w-4xl mx-auto z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6 border border-gray-700"
            style={{ color: primaryText }}
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Join the Waitlist</span>
          </motion.div>

          <motion.h1
            id="waitlist-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Get <span style={{ color: primaryText }}>Early Access</span> to Xtopay
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Be among the first to experience our next-generation payment platform.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-md mx-auto bg-gray-800/70 backdrop-blur-sm rounded-lg p-1 flex items-center border border-gray-700 focus-within:border-purple-500/30 transition-colors"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 px-4 py-3"
            />
            <button 
              className="px-6 py-3 rounded-md transition-all hover:scale-105"
              style={{ 
                backgroundColor: primaryColor,
                color: 'white',
                boxShadow: `0 4px 14px 0 ${primaryLight}`
              }}
            >
              Join Now
            </button>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-8  text-gray-400"
          >
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" style={{ color: primaryText }} />
              <span>1,200+ developers joined</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" style={{ color: primaryText }} />
              <span>Launching Q1 2025</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}