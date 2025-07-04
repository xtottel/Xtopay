"use client";
import { motion } from "framer-motion";
//import { Home, Mail } from "lucide-react";
import Link from "next/link";
//import Button from "@/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2ff] to-[#e0c9a4] dark:from-[#1a0933] dark:to-[#4d3b7d] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-[#130338] p-8 sm:p-12 rounded-2xl shadow-xl border border-[#e0c9a4] dark:border-[#4d3b7d]"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4d3b7d] dark:text-[#e0c9a4] mb-6"
          >
            <span className="text-9xl font-bold block">404</span>
            <span className="text-2xl font-medium block mt-2">Page Not Found</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] mb-8 max-w-lg mx-auto"
          >
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Button asChild className="bg-[#4d3b7d] hover:bg-[#3a2c5f] dark:bg-[#4d3b7d] dark:hover:bg-[#3a2c5f] text-white">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Return Home
              </Link>
            </Button>
            <Button variant="outline" className="text-[#4d3b7d] border-[#4d3b7d] hover:bg-[#f5f2ff] dark:text-white dark:border-white dark:hover:bg-white/10">
              <Link href="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </Link>
            </Button>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-[#e0c9a4] dark:border-[#4d3b7d] pt-6"
          >
            <p className="text-sm text-[#4d3b7d] dark:text-[#e0c9a4] mb-2">
              While you&apos;re here, check out these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/products/payment-links" className="text-sm px-3 py-1 rounded-full bg-[#f5f2ff] dark:bg-[#1a0933] text-[#4d3b7d] dark:text-[#e0c9a4] hover:bg-[#e0c9a4] dark:hover:bg-[#4d3b7d] transition-colors">
                Payment Links
              </Link>
              <Link href="/products/invoicing" className="text-sm px-3 py-1 rounded-full bg-[#f5f2ff] dark:bg-[#1a0933] text-[#4d3b7d] dark:text-[#e0c9a4] hover:bg-[#e0c9a4] dark:hover:bg-[#4d3b7d] transition-colors">
                Smart Invoicing
              </Link>
              <Link href="/products/subscriptions" className="text-sm px-3 py-1 rounded-full bg-[#f5f2ff] dark:bg-[#1a0933] text-[#4d3b7d] dark:text-[#e0c9a4] hover:bg-[#e0c9a4] dark:hover:bg-[#4d3b7d] transition-colors">
                Recurring Billing
              </Link>
              <Link href="/pricing" className="text-sm px-3 py-1 rounded-full bg-[#f5f2ff] dark:bg-[#1a0933] text-[#4d3b7d] dark:text-[#e0c9a4] hover:bg-[#e0c9a4] dark:hover:bg-[#4d3b7d] transition-colors">
                Pricing
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}