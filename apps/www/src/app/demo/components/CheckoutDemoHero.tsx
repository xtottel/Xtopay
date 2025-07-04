"use client";

import { CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function CheckoutDemoHero() {
//   const primaryColor = "#513b7e";
  const primaryLight = "rgba(81, 59, 126, 0.3)"; // More visible glow
//   const primaryLighter = "rgba(81, 59, 126, 0.1)";

  return (
    <section
      aria-labelledby="checkout-demo-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-15"
    >
      {/* Intense Glow Effect */}
      <div 
        className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full blur-[100px] animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{ backgroundColor: primaryLight }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container>
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6 border border-gray-700"
              style={{ color: "#b8a1e6" }} // Lighter tint of primary
            >
              <CreditCard className="w-5 h-5" />
              <span className="font-medium">Checkout Demo</span>
            </motion.div>

            <motion.h1
              id="checkout-demo-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Experience Our{" "}
              <span style={{ color: "#b8a1e6" }}>Seamless Checkout</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              Try our payment flow with test credentials to see how easy it is to integrate Xtopay.
            </motion.p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all group relative overflow-hidden"
            >
              <div 
                className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                style={{ backgroundColor: primaryColor }}
              />
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: primaryLighter }}
                >
                  <CreditCard className="w-6 h-6" style={{ color: "#b8a1e6" }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Card Payments</h3>
                <p className="text-gray-400 text-center mb-6">
                  Test our card payment flow with 3D Secure authentication
                </p>
                <div className="text-center">
                  <button 
                    className="px-6 py-2 rounded-lg font-medium text-sm transition-all hover:scale-105"
                    style={{ 
                      backgroundColor: primaryColor,
                      color: 'white',
                      boxShadow: `0 4px 14px 0 ${primaryLight}`
                    }}
                  >
                    Demo Card Payment
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all group relative overflow-hidden"
            >
              <div 
                className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                style={{ backgroundColor: primaryColor }}
              />
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: primaryLighter }}
                >
                  <Smartphone className="w-6 h-6" style={{ color: "#b8a1e6" }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Mobile Money</h3>
                <p className="text-gray-400 text-center mb-6">
                  Experience our seamless mobile money payment flow
                </p>
                <div className="text-center">
                  <button 
                    className="px-6 py-2 rounded-lg font-medium text-sm transition-all hover:scale-105"
                    style={{ 
                      backgroundColor: primaryColor,
                      color: 'white',
                      boxShadow: `0 4px 14px 0 ${primaryLight}`
                    }}
                  >
                    Demo Mobile Money
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all group relative overflow-hidden"
            >
              <div 
                className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"
                style={{ backgroundColor: primaryColor }}
              />
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: primaryLighter }}
                >
                  <QrCode className="w-6 h-6" style={{ color: "#b8a1e6" }} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">QR Payments</h3>
                <p className="text-gray-400 text-center mb-6">
                  Try our instant QR code payment experience
                </p>
                <div className="text-center">
                  <button 
                    className="px-6 py-2 rounded-lg font-medium text-sm transition-all hover:scale-105"
                    style={{ 
                      backgroundColor: primaryColor,
                      color: 'white',
                      boxShadow: `0 4px 14px 0 ${primaryLight}`
                    }}
                  >
                    Demo QR Payment
                  </button>
                </div>
              </div>
            </motion.div>
          </div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 border border-gray-700 max-w-3xl mx-auto relative overflow-hidden"
          >
            <div 
              className="absolute -inset-1 opacity-20 blur-lg pointer-events-none"
              style={{ backgroundColor: primaryColor }}
            />
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Need test credentials?</h3>
                  <p className="text-gray-400">Use these test cards to try different scenarios</p>
                </div>
                <a
                  href="/docs/test-cards"
                  className="flex-shrink-0 inline-flex items-center px-6 py-3 rounded-lg font-medium text-sm transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: primaryColor,
                    color: 'white',
                    boxShadow: `0 4px 14px 0 ${primaryLight}`
                  }}
                >
                  View Test Cards
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}