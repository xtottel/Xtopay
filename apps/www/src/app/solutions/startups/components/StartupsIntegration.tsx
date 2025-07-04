"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { Terminal, Cpu, GitBranch, Code2 } from "lucide-react";

export default function StartupsIntegration() {
  const codeExamples = [
    {
      language: "JavaScript",
      code: `// Accept a payment with Xtopay
import { Xtopay } from 'xtopay-js';

const payment = await Xtopay.charges.create({
  amount: 2000, // $20.00
  currency: 'usd',
  source: 'tok_visa', // token from Xtopay.js
  description: 'Payment for Premium Plan'
});`
    },
    {
      language: "Python",
      code: `# Create a customer and charge
import xtopay

xtopay.api_key = 'sk_test_123456789'

customer = xtopay.Customer.create(
  email='customer@example.com',
  source='tok_visa'  # obtained with Xtopay.js
)

charge = xtopay.Charge.create(
  customer=customer.id,
  amount=2000,
  currency='usd',
  description='Premium subscription'
)`
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
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Developer-Friendly <span className="text-pink-600">Integration</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 mb-10"
          >
            Built by developers, for developers. Get started with our clean, well-documented APIs and SDKs.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-gray-500 text-sm ml-auto">JavaScript</div>
              </div>
              <pre className="p-6 text-gray-800 overflow-x-auto bg-white">
                <code>{codeExamples[0].code}</code>
              </pre>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <Terminal className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-gray-900 font-medium mb-2">7+ SDKs</h3>
                <p className="text-gray-600 text-sm">JavaScript, Python, Ruby, PHP, Java, Go, and .NET</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <Cpu className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-gray-900 font-medium mb-2">Webhooks</h3>
                <p className="text-gray-600 text-sm">Real-time notifications for all payment events</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <GitBranch className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-gray-900 font-medium mb-2">Test Mode</h3>
                <p className="text-gray-600 text-sm">Sandbox environment with test cards</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <Code2 className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-gray-900 font-medium mb-2">API Reference</h3>
                <p className="text-gray-600 text-sm">Detailed documentation with examples</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-pink-50 border border-pink-200 rounded-xl p-6"
            >
              <h3 className="text-gray-900 font-medium mb-2">Need help integrating?</h3>
              <p className="text-gray-700 mb-4">Our developer advocates are ready to assist you with your implementation.</p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors text-sm"
              >
                Contact Developer Support
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}