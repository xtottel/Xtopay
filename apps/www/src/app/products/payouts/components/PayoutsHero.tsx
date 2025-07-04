"use client";
import { Container } from "@/layout/Container";
import Button from "@/ui/Button";
import { motion } from "framer-motion";
import { Wallet, Zap, Clock, Globe, Banknote, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function PayoutsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900 to-emerald-800 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/demo/circuit-pattern.svg')] bg-[length:100px_100px]"></div>
      </div>
      <div className="absolute top-20 left-20 w-56 h-56 rounded-full bg-green-600/10 blur-[100px]"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-emerald-600/10 blur-[110px]"></div>

      <Container className="relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
              <Zap className="w-5 h-5 mr-2 text-emerald-300" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-teal-200">
                Instant Transfers
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100">
                Global Payouts
              </span>
              <br />
              Made Simple
            </h1>

            {/* Description */}
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Send payments worldwide in multiple currencies with competitive FX rates. Automate mass payouts with our powerful API or dashboard.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="primary" className="px-8 py-3 text-lg group">
                <span>Send Payouts Now</span>
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" className="px-8 py-3 text-lg">
                Developer Docs
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Wallet className="w-5 h-5 text-emerald-300" />
                <span className="text-sm">Multiple Methods</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-300" />
                <span className="text-sm">24h Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-teal-300" />
                <span className="text-sm">100+ Countries</span>
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
            <div className="absolute -inset-6 bg-green-700/30 rounded-3xl -rotate-3"></div>
            <div className="absolute -inset-4 bg-emerald-600/20 rounded-2xl rotate-2"></div>

            {/* Payouts Dashboard Demo */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/demo/payouts-dashboard.webp"
                width={800}
                height={600}
                alt="Payouts Dashboard"
                className="w-full h-auto"
                priority
              />

              {/* Interactive demo badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Banknote className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">Batch Payout Processed</span>
                </div>
                <span className="text-sm font-mono">$12,450.00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}