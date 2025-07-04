"use client";

import { Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function AboutHero() {
//   const primaryColor = "#513b7e";
  const primaryLight = "rgba(81, 59, 126, 0.3)";
  const primaryText = "#b8a1e6";

  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-15"
    >
      {/* Glow Effect */}
      <div 
        className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[100px] animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{ backgroundColor: primaryLight }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6 border border-gray-700"
              style={{ color: primaryText }}
            >
              <Building2 className="w-5 h-5" />
              <span className="font-medium">Our Story</span>
            </motion.div>

            <motion.h1
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            >
              Building the Future of{" "}
              <span style={{ color: primaryText }}>African Payments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              Xtopay is revolutionizing digital payments across Africa with secure, scalable solutions tailored for businesses of all sizes.
            </motion.p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-colors group relative overflow-hidden"
            >
              <div 
                className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                style={{ backgroundColor: primaryColor }}
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto bg-gray-700/50">
                  <Globe className="w-6 h-6" style={{ color: primaryText }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Our Vision</h3>
                <p className="text-gray-400 text-center">
                  To create a borderless African economy powered by seamless digital payments accessible to everyone.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-colors group relative overflow-hidden"
            >
              <div 
                className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                style={{ backgroundColor: primaryColor }}
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto bg-gray-700/50">
                  <HeartHandshake className="w-6 h-6" style={{ color: primaryText }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Our Values</h3>
                <p className="text-gray-400 text-center">
                  Innovation, integrity, and inclusion drive everything we do. We build with our users, not just for them.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-colors group relative overflow-hidden"
            >
              <div 
                className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                style={{ backgroundColor: primaryColor }}
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto bg-gray-700/50">
                  <Building2 className="w-6 h-6" style={{ color: primaryText }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Our Team</h3>
                <p className="text-gray-400 text-center">
                  A diverse group of payment experts, engineers, and fintech visionaries building Africa&apos;s payment infrastructure.
                </p>
              </div>
            </motion.div>
          </div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 rounded-lg font-medium transition-all hover:scale-105"
              style={{ 
                backgroundColor: primaryColor,
                color: 'white',
                boxShadow: `0 4px 14px 0 ${primaryLight}`
              }}
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}