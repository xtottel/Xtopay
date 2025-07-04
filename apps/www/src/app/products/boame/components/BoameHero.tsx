"use client";

import { motion } from "framer-motion";
import { Wallet, Share2, Zap } from "lucide-react";
import { Container } from "@/layout/Container";
//import Button from "@/ui/Button";

export default function BoameHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <Container>
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-900/30 text-blue-400 rounded-full border border-blue-800">
              New from Xtopay
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Receive Support Instantly — <span className="text-blue-400">No Code Needed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Let friends, fans, or customers send you money via Mobile Money or card — directly on your website.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Started with Boame
            </Button>
            <Button size="lg" variant="outline" className="text-white border-gray-600 hover:bg-gray-800/50">
              See How It Works
            </Button>
          </motion.div> */}

          <div className="flex justify-center gap-8">
            {[
              { icon: Wallet, text: "Create Profile" },
              { icon: Share2, text: "Share Link" },
              { icon: Zap, text: "Get Paid" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center text-blue-400 mb-2 border border-blue-800/50">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-400">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}