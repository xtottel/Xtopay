"use client";
import { motion } from "framer-motion";
import { Badge } from "@/ui/badge";
import { FileText, Zap, ArrowRight } from "lucide-react";
import Button from "@/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#130338] to-[#4d3b7d] opacity-95"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-[#e0c9a4] text-[#130338]">
              Xtopay Smart Invoicing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Invoices <br />
              <span className="text-[#e0c9a4]">That Work Smarter</span>
            </h1>
            <p className="text-xl text-[#e0c9a4] mb-8">
              Create, send, and track invoices automatically. Get paid faster with our intelligent invoicing system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#e0c9a4] hover:bg-[#d1b98c] text-[#130338]">
                Try For Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-[#e0c9a4] mr-2" />
                <span>Auto-reminders</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-[#e0c9a4] mr-2" />
                <span>100+ Templates</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl shadow-2xl overflow-hidden border-2 border-[#e0c9a4]">
              <Image
                src="/smart-invoice-hero.png"
                alt="Smart Invoice Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#130338]/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}