import { Container } from "@/layout/Container";
import Button from "@/ui/Button";
import { motion } from "framer-motion";
import { Zap, ChevronRight, ShieldCheck, Clock, Smartphone } from "lucide-react";
import Image from "next/image";

export default function CheckoutHero() {
  return (
    <main className="overflow-hidden">
      <div className="relative bg-gradient-to-r from-[#4d3b7d] to-[#3a2b61] text-white py-12">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/demo/grid-pattern.svg')] bg-[length:80px_80px]"></div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-purple-300/10 blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-indigo-300/10 blur-xl animate-float-delay"></div>
        
        <Container>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                    <Zap className="w-4 h-4 mr-2 text-yellow-300" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-200">
                      Most Popular Product
                    </span>
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-100">
                      Enterprise-Grade
                    </span>
                    <br />
                    Online Checkout
                  </h1>
                  <p className="text-xl opacity-90 mb-8 max-w-lg leading-relaxed">
                    PCI-compliant payment processing with 99.99% uptime SLA. Accept cards, mobile money, and bank transfers with our seamless integration.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-12">
                    <Button variant="primary" className="px-8 py-3 text-lg group">
                      <span>Get Started Now</span>
                      <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="secondary" className="px-8 py-3 text-lg">
                      Request Custom Demo
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 max-w-md">
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-5 h-5 text-green-300" />
                      <span className="text-sm">PCI DSS L1</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-300" />
                      <span className="text-sm">99.99% Uptime</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Smartphone className="w-5 h-5 text-purple-300" />
                      <span className="text-sm">Mobile Optimized</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-full h-full rounded-2xl border-2 border-purple-300/30 z-0"></div>
                <div className="relative z-10">
                  <Image
                    src="/demo/checkout.webp"
                    width={650}
                    height={450}
                    alt="Online Checkout Preview"
                    className="rounded-xl shadow-2xl border border-white/10"
                    priority
                  />
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-5 -right-5 bg-gradient-to-r from-[#e0c9a4] to-[#d4b881] text-[#130338] px-4 py-2 rounded-lg font-medium text-sm shadow-lg flex items-center"
                >
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Live Interactive Demo
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}