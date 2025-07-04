"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check,  Shield, Code, Globe,  Network, Repeat, ShoppingCart } from "lucide-react";
//import Image from "next/image";
//import { Container } from "@/layout/Container";

import Button from "@/ui/Button";
import CheckoutHero from "./components/CheckoutHero";

export default function OnlineCheckoutProductPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "integration">("overview");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      
      {/* Hero Section */}
      <CheckoutHero />
     
      {/* Content Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-b border-gray-200 dark:border-gray-700 mb-12">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "overview"
                ? "border-[#4d3b7d] text-[#4d3b7d] dark:border-[#e0c9a4] dark:text-[#e0c9a4]"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("features")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "features"
                ? "border-[#4d3b7d] text-[#4d3b7d] dark:border-[#e0c9a4] dark:text-[#e0c9a4]"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("integration")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "integration"
                ? "border-[#4d3b7d] text-[#4d3b7d] dark:border-[#e0c9a4] dark:text-[#e0c9a4]"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
            >
              Integration
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="space-y-12">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Secure Payment Processing
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Our Online Checkout solution provides a seamless, PCI-DSS compliant way to accept payments from customers worldwide. With support for multiple payment methods and currencies, you can expand your business effortlessly.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#4d3b7d]/10 dark:bg-[#4d3b7d]/20 p-2 rounded-lg mr-4">
                        <Shield className="h-5 w-5 text-[#4d3b7d] dark:text-[#e0c9a4]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          Bank-Level Security
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          256-bit encryption and 3D Secure authentication
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-[#4d3b7d]/10 dark:bg-[#4d3b7d]/20 p-2 rounded-lg mr-4">
                        <Globe className="h-5 w-5 text-[#4d3b7d] dark:text-[#e0c9a4]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          Global Payments
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Accept cards, mobile money, and bank transfers from 100+ countries
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                    Technical Specifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-300">PCI Compliance</span>
                      <span className="font-medium">Level 1</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-300">Uptime SLA</span>
                      <span className="font-medium">99.99%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-300">Payment Methods</span>
                      <span className="font-medium">Cards, Mobile Money, Bank Transfer</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-300">Settlement Time</span>
                      <span className="font-medium">T+1 (Next Day)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Ideal For
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "E-commerce Stores",
                      description: "Seamless checkout experience for your online shop",
                      icon: <ShoppingCart className="h-6 w-6 text-[#4d3b7d] dark:text-[#e0c9a4]" />
                    },
                    {
                      title: "SaaS Platforms",
                      description: "Recurring billing for subscriptions",
                      icon: <Repeat className="h-6 w-6 text-[#4d3b7d] dark:text-[#e0c9a4]" />
                    },
                    {
                      title: "Marketplaces",
                      description: "Split payments between multiple parties",
                      icon: <Network className="h-6 w-6 text-[#4d3b7d] dark:text-[#e0c9a4]" />
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                      <div className="bg-[#4d3b7d]/10 dark:bg-[#4d3b7d]/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "features" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Advanced Features
                  </h2>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Smart Routing",
                        description: "Automatically routes transactions to optimal payment processors to maximize success rates",
                        icon: <div className="bg-[#4d3b7d]/10 dark:bg-[#4d3b7d]/20 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-[#4d3b7d] dark:text-[#e0c9a4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      },
                      {
                        title: "3D Secure 2.0",
                        description: "Reduced friction authentication with higher approval rates",
                        icon: <div className="bg-[#4d3b7d]/10 dark:bg-[#4d3b7d]/20 p-2 rounded-lg">
                          <Shield className="w-5 h-5 text-[#4d3b7d] dark:text-[#e0c9a4]" />
                        </div>
                      },
                      {
                        title: "Custom Checkout",
                        description: "White-labeled payment pages matching your brand",
                        icon: <div className="bg-[#4d3b7d]/10 dark:bg-[#4d3b7d]/20 p-2 rounded-lg">
                          <svg className="w-5 h-5 text-[#4d3b7d] dark:text-[#e0c9a4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        </div>
                      }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {feature.icon}
                        <div className="ml-4">
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                      Supported Payment Methods
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {['Visa', 'Mastercard', 'MTN', 'Vodafone Cash', 'AirtelTigo', 'Bank Transfer'].map((method, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                      Performance Metrics
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-300">Success Rate</span>
                          <span className="font-medium">98.2%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-[#4d3b7d] h-2 rounded-full"
                            style={{ width: "98.2%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-300">Average Processing Time</span>
                          <span className="font-medium">1.2s</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-[#e0c9a4] h-2 rounded-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "integration" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Integration Options
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start">
                        <div className="bg-[#4d3b7d]/10 dark:bg-[#4d3b7d]/20 p-3 rounded-lg mr-4">
                          <Code className="h-6 w-6 text-[#4d3b7d] dark:text-[#e0c9a4]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                            API Integration
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            Full REST API with comprehensive documentation and SDKs
                          </p>
                          <Button variant="secondary" size="sm">
                            View API Docs
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex items-start">
                        <div className="bg-[#4d3b7d]/10 dark:bg-[#4d3b7d]/20 p-3 rounded-lg mr-4">
                          <svg className="h-6 w-6 text-[#4d3b7d] dark:text-[#e0c9a4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                            No-Code Solutions
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                            Pre-built checkout flows with minimal setup required
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Button variant="secondary" size="sm">
                              WordPress Plugin
                            </Button>
                            <Button variant="secondary" size="sm">
                              Shopify App
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                      Quick Start Guide
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Create merchant account",
                        "Get API keys from dashboard",
                        "Implement checkout flow (API or plugin)",
                        "Test in sandbox environment",
                        "Go live after verification"
                      ].map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-[#4d3b7d]/10 dark:bg-[#4d3b7d]/20 text-[#4d3b7d] dark:text-[#e0c9a4] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                      <Button variant="primary" className="w-full">
                        Start Integration Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#4d3b7d] to-[#3a2b61] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Payments?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join 5,000+ businesses processing payments with Xtopay&apos;s Online Checkout
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" className="px-8">
              Get Started
            </Button>
            <Button variant="secondary" size="lg" className="px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}