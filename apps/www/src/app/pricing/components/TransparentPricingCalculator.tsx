"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function TransparentPricingCalculator() {
  const [amount, setAmount] = useState<number>(100); // default input
  const feePercent = 1.95;

  const fee = +(amount * (feePercent / 100)).toFixed(2);
  const youGet = +(amount - fee).toFixed(2);

  return (
    <section className="bg-[#f9f7f5] py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#4d3b7d] mb-4">
            Transparent Pricing You Can Trust
          </h2>
          <p className="text-gray-600 text-lg">
            We only charge <span className="font-semibold text-[#4d3b7d]">1.95%</span> per withdrawal — no hidden fees, ever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white max-w-3xl mx-auto p-8 rounded-2xl border border-[#e0c9a4] shadow-sm"
        >
          <div className="mb-6 text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">Enter withdrawal amount (GHS)</label>
            <input
              type="number"
              value={amount}
              min={0}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#e0c9a4]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center mt-6">
            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
              <p className="text-sm text-gray-500 mb-1">You’ll Receive</p>
              <p className="text-2xl font-bold text-green-600">GHS {youGet.toFixed(2)}</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
              <p className="text-sm text-gray-500 mb-1">Xtopay Takes</p>
              <p className="text-2xl font-bold text-red-500">GHS {fee.toFixed(2)}</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Based on our fixed 1.95% withdrawal fee.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
