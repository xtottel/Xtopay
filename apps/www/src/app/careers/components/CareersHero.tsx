"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function CareersHero() {
//   const primaryColor = "#513b7e";
  const primaryLight = "rgba(81, 59, 126, 0.3)";
  const primaryText = "#b8a1e6";

  return (
    <section
      aria-labelledby="careers-heading"
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
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">Join Our Team</span>
            </motion.div>

            <motion.h1
              id="careers-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
            >
              Build the Future of{" "}
              <span style={{ color: primaryText }}>African Fintech</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              We&apos;re hiring exceptional talent to help revolutionize payments across Africa. Grow your career while building transformative technology.
            </motion.p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                  <Rocket className="w-6 h-6" style={{ color: primaryText }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Impact</h3>
                <p className="text-gray-400 text-center">
                  Work on products that empower millions of businesses and consumers across Africa.
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
                  <Users className="w-6 h-6" style={{ color: primaryText }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Culture</h3>
                <p className="text-gray-400 text-center">
                  Collaborative environment that values innovation, ownership, and continuous learning.
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
                  <Briefcase className="w-6 h-6" style={{ color: primaryText }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Benefits</h3>
                <p className="text-gray-400 text-center">
                  Competitive compensation, flexible work, and opportunities for rapid career growth.
                </p>
              </div>
            </motion.div>
          </div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 max-w-3xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ready to join us?</h3>
                <p className="text-gray-400">Explore open roles and start your application</p>
              </div>
              <a
                href="/careers#openings"
                className="flex-shrink-0 inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: primaryColor,
                  color: 'white',
                  boxShadow: `0 4px 14px 0 ${primaryLight}`
                }}
              >
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}