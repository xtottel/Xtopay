"use client";
import { Container } from "@/layout/Container";
import Button from "@/ui/Button";
import { motion } from "framer-motion";
import { Link, Zap, CreditCard, Smartphone, Mail, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function PaymentLinksHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-800 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/demo/dot-grid.svg')] bg-[length:60px_60px]"></div>
      </div>
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-purple-600/10 blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-20 w-48 h-48 rounded-full bg-indigo-600/10 blur-[90px]"></div>

      <Container className="relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <Zap className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-200">
                Instant Payments
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
                Payment Links
              </span>
              <br />
              Get Paid in Seconds
            </h1>

            {/* Description */}
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Create and share secure payment links via email, SMS, or social media. No coding required—just send and get paid instantly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="primary" className="px-8 py-3 text-lg group">
                <span>Create Payment Link</span>
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" className="px-8 py-3 text-lg">
                How It Works
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-purple-300" />
                <span className="text-sm">Cards & Wallets</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-blue-300" />
                <span className="text-sm">Mobile-Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-green-300" />
                <span className="text-sm">Email/SMS</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Floating card effect */}
            <div className="absolute -inset-6 bg-purple-700/30 rounded-3xl -rotate-3"></div>
            <div className="absolute -inset-4 bg-indigo-600/20 rounded-2xl rotate-2"></div>

            {/* Payment Link Demo */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/demo/payment-link-example.webp"
                width={800}
                height={600}
                alt="Payment Link Example"
                className="w-full h-auto"
                priority
              />

              {/* Interactive demo badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Link className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">xtopay.me/order123</span>
                </div>
                <span className="text-sm font-mono">$89.99</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}