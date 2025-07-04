"use client";
import { motion } from "framer-motion";
import { Badge } from "@/ui/badge";
import { Repeat, Zap, ArrowRight } from "lucide-react";
import Button from "@/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#130338] to-[#3a2c5f]">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-[#e0c9a4] text-[#130338]">
              Xtopay Recurring Billing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automate Your <span className="text-[#e0c9a4]">Recurring Revenue</span>
            </h1>
            <p className="text-xl text-[#e0c9a4] mb-8">
              Set it once and get paid automatically. Reduce churn and increase predictability with our powerful recurring billing system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#e0c9a4] hover:bg-[#d1b98c] text-[#130338]">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                See How It Works
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-white">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Repeat className="h-5 w-5 text-[#e0c9a4] mr-2" />
                <span>Flexible Billing Cycles</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                <Zap className="h-5 w-5 text-[#e0c9a4] mr-2" />
                <span>Smart Dunning</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-2 border-[#e0c9a4] bg-white p-2">
              <Image
                src="/recurring-billing-dashboard.png"
                alt="Recurring Billing Dashboard"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#e0c9a4] text-[#130338] px-4 py-2 rounded-lg shadow-lg font-medium">
                MRR: $24,382
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}