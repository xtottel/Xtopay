"use client";

import { CodeXml } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function DevelopersHero() {
  return (
    <section
      aria-labelledby="developers-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-15"
    >
      {/* Dynamic Glow - Subtle gray to match developer aesthetic */}
      <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gray-500/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-300 rounded-full mb-6 border border-gray-600"
            >
              <CodeXml className="w-5 h-5" />
              <span className="font-medium">Developer Solutions</span>
            </motion.div>

            <motion.h1
              id="developers-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              <span className="text-gray-300">Build the Future of</span>{" "}
              <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
                Fintech Apps
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-mono"
            >
              Create powerful financial applications with our flexible, well-documented APIs designed for developer productivity.
            </motion.p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-400 transition-colors group"
            >
              <div className="bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">API Reference</h3>
              <p className="text-gray-400 text-sm font-mono">RESTful endpoints with code samples</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-400 transition-colors group"
            >
              <div className="bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">SDKs</h3>
              <p className="text-gray-400 text-sm font-mono">Official libraries for 7+ languages</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-400 transition-colors group"
            >
              <div className="bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Sandbox</h3>
              <p className="text-gray-400 text-sm font-mono">Test environment with mock data</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-400 transition-colors group"
            >
              <div className="bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Webhooks</h3>
              <p className="text-gray-400 text-sm font-mono">Real-time payment events</p>
            </motion.div>
          </div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a
              href="/solutions/developers"
              className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors border border-gray-600"
            >
              <Terminal className="w-5 h-5 mr-2" />
              Developer Documentation
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://github.com/xtopay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors border border-gray-700"
            >
              <GitBranch className="w-5 h-5 mr-2" />
              GitHub Repos
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}