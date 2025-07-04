"use client";
import { Container } from "@/layout/Container";
import Button from "@/ui/Button";
import { motion } from "framer-motion";
import { CreditCard, Zap, ChevronRight, BarChart2, Cloud, Shield } from "lucide-react";
import Image from "next/image";

export default function POSHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Enhanced decorative elements with more depth */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/demo/grid-pattern.svg')] bg-[length:100px_100px]"></div>
      </div>
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-300"></div>

      <Container className="relative z-10 py-15 md:py-15">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6 hover:bg-white/15 transition-colors"
            >
              <Zap className="w-5 h-5 mr-2 text-yellow-300 animate-pulse" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-200">
                Next-Gen POS System
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
              >
                Smart Point of Sale
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                for Modern Businesses
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Transform your retail operations with our all-in-one POS solution. Process sales, manage inventory, and analyze performance from any device.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button variant="primary" className="px-8 py-3 text-lg group hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                <span>Start Free Trial</span>
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" className="px-8 py-3 text-lg hover:shadow-lg hover:shadow-white/10 transition-all">
                Book a Demo
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              <div className="flex flex-col items-start p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center space-x-2 mb-2">
                  <CreditCard className="w-5 h-5 text-blue-300" />
                  <span className="text-sm font-medium">All Payment Types</span>
                </div>
                <p className="text-xs text-blue-200">Cards, mobile, crypto</p>
              </div>
              <div className="flex flex-col items-start p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center space-x-2 mb-2">
                  <BarChart2 className="w-5 h-5 text-purple-300" />
                  <span className="text-sm font-medium">Real-time Analytics</span>
                </div>
                <p className="text-xs text-blue-200">Live sales data</p>
              </div>
              <div className="flex flex-col items-start p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center space-x-2 mb-2">
                  <Cloud className="w-5 h-5 text-green-300" />
                  <span className="text-sm font-medium">Cloud Sync</span>
                </div>
                <p className="text-xs text-blue-200">Access anywhere</p>
              </div>
              <div className="flex flex-col items-start p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-amber-300" />
                  <span className="text-sm font-medium">Secure</span>
                </div>
                <p className="text-xs text-blue-200">PCI compliant</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-blue-700/30 rounded-3xl -rotate-3 animate-pulse-slow"></div>
            <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl rotate-2 animate-pulse-slow delay-200"></div>
            
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/30 transition-shadow">
              <Image
                src="/demo/payment-by-card.jpg"
                width={800}
                height={600}
                alt="Modern POS System Interface showing payment processing"
                className="w-full h-auto hover:scale-[1.02] transition-transform duration-300"
                priority
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg px-4 py-3 flex items-center justify-between shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm font-medium">Processing sale</span>
                </div>
                <span className="text-sm font-mono font-bold">$124.99</span>
              </motion.div>

              {/* Floating device mockups */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-xl border-2 border-white/20 bg-black/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-[url('/demo/pos-mobile.jpg')] bg-cover"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-24 rounded-xl border-2 border-white/20 bg-black/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-[url('/demo/pos-tablet.jpg')] bg-cover"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}