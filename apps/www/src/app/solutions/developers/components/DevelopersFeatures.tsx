"use client";

import { Terminal, GitBranch, Cpu, Zap, Code2, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function DevelopersFeatures() {
  const features = [
    {
      icon: Terminal,
      title: "API Reference",
      description: "RESTful endpoints with code samples",
      delay: 0.3
    },
    {
      icon: GitBranch,
      title: "SDKs",
      description: "Official libraries for 7+ languages",
      delay: 0.4
    },
    {
      icon: Cpu,
      title: "Sandbox",
      description: "Test environment with mock data",
      delay: 0.5
    },
    {
      icon: Zap,
      title: "Webhooks",
      description: "Real-time payment events",
      delay: 0.6
    },
    {
      icon: Code2,
      title: "Code Samples",
      description: "Ready-to-use implementation examples",
      delay: 0.7
    },
    {
      icon: Server,
      title: "Infrastructure",
      description: "99.99% uptime SLA",
      delay: 0.8
    }
  ];

  return (
    <section className="py-15 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-mono"
          >
            Developer <span className="text-blue-600">Toolkit</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 font-mono"
          >
            Everything you need to integrate payments into your application.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors shadow-sm hover:shadow-md group"
            >
              <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto border border-blue-100 group-hover:bg-blue-100 transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center font-mono">{feature.title}</h3>
              <p className="text-gray-600 text-center font-mono">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}