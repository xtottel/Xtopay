"use client";
import { motion } from "framer-motion";
import { RefreshCw, Home, Mail, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Button from "@/ui/Button";

export default function ServerError() {
  const handleRefresh = () => {
    window.location.reload();
  };

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
            className="flex flex-col items-center mb-6"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
              <AlertTriangle className="h-10 w-10 text-red-500 dark:text-red-400" />
            </div>
            <span className="text-5xl font-bold text-[#4d3b7d] dark:text-[#e0c9a4]">500</span>
            <span className="text-2xl font-medium text-[#4d3b7d] dark:text-[#e0c9a4] mt-2">
              Server Error
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] mb-8 max-w-lg mx-auto"
          >
            Something went wrong on our end. We&apos;re working to fix it!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Button
              onClick={handleRefresh}
              className="bg-[#4d3b7d] hover:bg-[#3a2c5f] dark:bg-[#4d3b7d] dark:hover:bg-[#3a2c5f] text-white"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
            <Button asChild variant="outline" className="text-[#4d3b7d] border-[#4d3b7d] hover:bg-[#f5f2ff] dark:text-white dark:border-white dark:hover:bg-white/10">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-[#4d3b7d] hover:bg-[#f5f2ff] dark:text-white dark:hover:bg-white/10">
              <Link href="/contact">
                <Mail className="h-4 w-4 mr-2" />
                Contact Support
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-[#e0c9a4] dark:border-[#4d3b7d] pt-6"
          >
            <p className="text-sm text-[#4d3b7d] dark:text-[#e0c9a4] mb-4">
              In the meantime, you might want to:
            </p>
            <ul className="space-y-2 text-sm text-left max-w-xs mx-auto">
              <li className="flex items-start">
                <span className="text-[#4d3b7d] dark:text-[#e0c9a4] mr-2">•</span>
                <span>Check your network connection</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4d3b7d] dark:text-[#e0c9a4] mr-2">•</span>
                <span>Clear your browser cache</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#4d3b7d] dark:text-[#e0c9a4] mr-2">•</span>
                <span>Try again in a few minutes</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}