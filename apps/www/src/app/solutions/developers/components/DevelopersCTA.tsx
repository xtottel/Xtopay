"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { Terminal, GitBranch } from "lucide-react";

export default function DevelopersCTA() {
  return (
    <section className="py-15 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-mono">
              Ready to <span className="text-blue-600">Start Building</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto font-mono">
              Integrate Xtopay&apos;s payments into your application today.
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
              href="/docs"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors font-mono"
            >
              <Terminal className="w-5 h-5 mr-2" />
              View Documentation
            </a>
            <a
              href="https://github.com/xtopay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 hover:border-blue-400 text-gray-700 font-medium rounded-lg transition-colors hover:text-blue-600 font-mono"
            >
              <GitBranch className="w-5 h-5 mr-2" />
              GitHub Repositories
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-gray-500 text-sm font-mono"
          >
            <p>API keys available immediately • Sandbox environment • Developer support</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}