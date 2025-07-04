"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function DevelopersCode() {
  const codeExamples = [
    {
      language: "JavaScript",
      code: `// Create a payment intent
import { Xtopay } from 'xtopay-js';

const paymentIntent = await Xtopay.paymentIntents.create({
  amount: 2000, // $20.00
  currency: 'usd',
  payment_method_types: ['card'],
  description: 'Premium subscription'
});`
    },
    {
      language: "Python",
      code: `# Verify a webhook signature
import xtopay
from flask import request

payload = request.data
sig_header = request.headers['Xtopay-Signature']

try:
    event = xtopay.Webhook.construct_event(
        payload, sig_header, webhook_secret
    )
    # Process the event
except ValueError as e:
    # Invalid payload
    return "Invalid payload", 400
except xtopay.error.SignatureVerificationError as e:
    # Invalid signature
    return "Invalid signature", 400`
    }
  ];

  return (
    <section className="py-15 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-mono">
              <span className="text-blue-600">Code</span> Examples
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-mono">
              Get started quickly with our ready-to-use code snippets in multiple languages.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-gray-900 font-medium mb-4 font-mono"> Common Use Cases</h3>
                <ul className="text-gray-700 space-y-3 list-disc pl-5">
                  <li className="font-mono">Payment processing</li>
                  <li className="font-mono">Subscription billing</li>
                  <li className="font-mono">Payouts to users</li>
                  <li className="font-mono">Webhook verification</li>
                  <li className="font-mono">Fraud prevention</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 space-y-8"
          >
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-gray-500 text-sm ml-auto font-mono">{example.language}</div>
                </div>
                <pre className="p-6 text-gray-800 overflow-x-auto font-mono text-sm">
                  <code>{example.code}</code>
                </pre>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}