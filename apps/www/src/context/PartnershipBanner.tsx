"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOCAL_STORAGE_KEY = "partnershipBannerDismissed";

export default function PartnershipBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem(LOCAL_STORAGE_KEY) === "true";
    setVisible(!isDismissed);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-gradient-to-r from-[#f9f5ff] to-[#f3edff] text-[#4c2b88] border-b border-[#e1d7f0] px-6 py-4"
          role="banner"
          aria-label="Partnership announcement"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center  text-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base font-medium">
                <span className="text-[#4c2b88] text-center font-semibold">Exploring Partnership Opportunities with Xtopay?</span> —{" "}
                <Link
                  href="/partnerships/guidelines"
                  className="text-[#6c3fc2] hover:text-[#5a2d9f] underline underline-offset-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6c3fc2] focus:ring-offset-2 rounded px-1"
                  aria-label="Learn about partnership requirements"
                >
                  Read this first
                </Link>
              </p>
            </div>
            
            <button
              onClick={handleDismiss}
              aria-label="Close banner"
              className="p-1 hover:bg-[#e9e0f5] rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#6c3fc2] self-end md:self-center"
            >
              <X className="w-4 h-4 text-[#5a2d9f] hover:text-[#4c2b88]" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}