"use client";
import { Container } from "@/layout/Container";
import Button from "@/ui/Button";
import { motion } from "framer-motion";
import { FileText, Zap, Clock, CheckCircle, Send, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function SmartInvoicingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 to-blue-800 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/demo/grid-pattern.svg')] bg-[length:80px_80px]"></div>
      </div>
      <div className="absolute top-20 left-1/4 w-48 h-48 rounded-full bg-teal-500/10 blur-[90px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-blue-600/10 blur-[100px]"></div>

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
              <Zap className="w-5 h-5 mr-2 text-teal-300" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-emerald-200">
                Automated Invoicing
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                Smart Invoicing
              </span>
              <br />
              Get Paid Faster
            </h1>

            {/* Description */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Create, send, and track professional invoices in seconds. Automate reminders, accept payments online, and manage cash flow effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="primary" className="px-8 py-3 text-lg group">
                <span>Try for Free</span>
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" className="px-8 py-3 text-lg">
                See How It Works
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-teal-300" />
                <span className="text-sm">Custom Templates</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-300" />
                <span className="text-sm">Auto-Reminders</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">Payment Tracking</span>
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
            <div className="absolute -inset-6 bg-teal-700/30 rounded-3xl -rotate-3"></div>
            <div className="absolute -inset-4 bg-blue-600/20 rounded-2xl rotate-2"></div>

            {/* Invoice Demo */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/demo/smart-invoice-preview.webp"
                width={800}
                height={600}
                alt="Smart Invoice Preview"
                className="w-full h-auto"
                priority
              />

              {/* Interactive demo badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Send className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">Invoice #INV-2023-0456</span>
                </div>
                <span className="text-sm font-mono">$1,250.00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}