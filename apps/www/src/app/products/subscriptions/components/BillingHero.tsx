"use client";
import { Container } from "@/layout/Container";
import Button from "@/ui/Button";
import { motion } from "framer-motion";
import { Repeat,  Clock, CheckCircle, CreditCard, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function BillingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/demo/wave-pattern.svg')] bg-[length:120px_120px]"></div>
      </div>
      <div className="absolute top-20 left-20 w-56 h-56 rounded-full bg-indigo-600/10 blur-[100px]"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-600/10 blur-[110px]"></div>

      <Container className="relative z-10 py-12 ">
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
              <Repeat className="w-5 h-5 mr-2 text-purple-300" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-200">
                Automated Subscriptions
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100">
                Recurring Billing
              </span>
              <br />
              That Works for You
            </h1>

            {/* Description */}
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Automate your subscription revenue with flexible recurring billing. Charge customers on any schedule and reduce churn with smart dunning management.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button variant="primary" className="px-8 py-3 text-lg group">
                <span>Get Started</span>
                <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" className="px-8 py-3 text-lg">
                View Pricing
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Repeat className="w-5 h-5 text-indigo-300" />
                <span className="text-sm">Flexible Schedules</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-purple-300" />
                <span className="text-sm">Auto-Retries</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span className="text-sm">Success Analytics</span>
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
            <div className="absolute -inset-6 bg-indigo-700/30 rounded-3xl -rotate-3"></div>
            <div className="absolute -inset-4 bg-purple-600/20 rounded-2xl rotate-2"></div>

            {/* Subscription Dashboard Demo */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/demo/recurring-billing-dashboard.webp"
                width={800}
                height={600}
                alt="Recurring Billing Dashboard"
                className="w-full h-auto"
                priority
              />

              {/* Interactive demo badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-white" />
                  <span className="text-sm font-medium">Active Subscriptions</span>
                </div>
                <span className="text-sm font-mono">$4,299/mo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}