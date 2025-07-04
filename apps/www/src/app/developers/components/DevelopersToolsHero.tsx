"use client";

import {  TerminalSquare,  Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function DeveloperToolsHero() {
  return (
    <section
      aria-labelledby="devtools-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-15"
    >
      {/* Matrix-style binary background animation */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMSAxMWgydjJoLTJ6bTQgMGgydjJoLTJ6bTQgMGgydjJoLTJ6bTQgMGgydjJoLTJ6bTQgMGgydjJoLTJ6bS0xNiA0aDJ2MmgtMnptNCAwaDJ2MmgtMnptNCAwaDJ2MmgtMnptNCAwaDJ2MmgtMnptNCAwaDJ2MmgtMnptLTE2IDRoMnYyaC0yem00IDBoMnYyaC0yem00IDBoMnYyaC0yem00IDBoMnYyaC0yem00IDBoMnYyaC0yem0tMTYgNGgydjJoLTJ6bTQgMGgydjJoLTJ6bTQgMGgydjJoLTJ6bTQgMGgydjJoLTJ6bTQgMGgydjJoLTJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+')]">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
        </div>
      </div>

      {/* Dynamic Glow - Teal accent */}
      <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-teal-500/10 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-teal-400 rounded-full mb-6 border border-gray-700"
            >
              <Wrench className="w-5 h-5" />
              <span className="font-mono font-medium text-sm">DEV_TOOLS</span>
            </motion.div>

            <motion.h1
              id="devtools-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              <span className="text-gray-300">Build with</span>{" "}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Powerful Dev Tools
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-mono"
            >
              Everything you need to integrate, test, and deploy
            </motion.p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-teal-400/30 transition-colors group"
            >
              <div className="bg-gray-800 text-teal-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-400/10 transition-colors">
                <TerminalSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 font-mono">CLI Tool</h3>
              <p className="text-gray-400 text-sm">
                Command line interface for local development and testing
              </p>
              <div className="mt-4 bg-gray-950 rounded-lg p-3 overflow-x-auto">
                <pre className="text-xs text-teal-400 font-mono">
                  <code>$ xtopay-cli simulate-payment --amount=1000</code>
                </pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-teal-400/30 transition-colors group"
            >
              <div className="bg-gray-800 text-teal-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-400/10 transition-colors">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 font-mono">Sandbox API</h3>
              <p className="text-gray-400 text-sm">
                Full-featured testing environment with mock data
              </p>
              <div className="mt-4 bg-gray-950 rounded-lg p-3 overflow-x-auto">
                <pre className="text-xs text-teal-400 font-mono">
                  <code>BASE_URL=https://sandbox.xtopay.com/api</code>
                </pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-teal-400/30 transition-colors group"
            >
              <div className="bg-gray-800 text-teal-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-400/10 transition-colors">
                <TestTube2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 font-mono">Test Cards</h3>
              <p className="text-gray-400 text-sm">
                Preconfigured test cards for all scenarios
              </p>
              <div className="mt-4 bg-gray-950 rounded-lg p-3 overflow-x-auto">
                <pre className="text-xs text-teal-400 font-mono">
                  <code>4242 4242 4242 4242 - Successful payment</code>
                </pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-teal-400/30 transition-colors group"
            >
              <div className="bg-gray-800 text-teal-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-400/10 transition-colors">
                <GitBranch className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 font-mono">GitHub Repos</h3>
              <p className="text-gray-400 text-sm">
                Sample apps and integration examples
              </p>
              <div className="mt-4 bg-gray-950 rounded-lg p-3 overflow-x-auto">
                <pre className="text-xs text-teal-400 font-mono">
                  <code>git clone https://github.com/xtopay/examples.git</code>
                </pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-teal-400/30 transition-colors group"
            >
              <div className="bg-gray-800 text-teal-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-400/10 transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 font-mono">Webhook Spy</h3>
              <p className="text-gray-400 text-sm">
                Inspect and debug webhook payloads
              </p>
              <div className="mt-4 bg-gray-950 rounded-lg p-3 overflow-x-auto">
                <pre className="text-xs text-teal-400 font-mono">
                  <code>ngrok http 3000 - For local testing</code>
                </pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-teal-400/30 transition-colors group"
            >
              <div className="bg-gray-800 text-teal-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-400/10 transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2 font-mono">API Explorer</h3>
              <p className="text-gray-400 text-sm">
                Interactive documentation with live examples
              </p>
              <div className="mt-4 bg-gray-950 rounded-lg p-3 overflow-x-auto">
                <pre className="text-xs text-teal-400 font-mono">
                  <code>POST /api/v1/payments - Try it out →</code>
                </pre>
              </div>
            </motion.div>
          </div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-16 text-center"
          >
            <a
              href="/docs/tools"
              className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors border border-teal-500/30"
            >
              <TerminalSquare className="w-5 h-5 mr-2" />
              View All Developer Tools
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}