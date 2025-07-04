"use client";

import { motion } from "framer-motion";
import Button from "@/ui/Button";

export default function POSCTA() {
  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 bg-[#4d3b7d] dark:bg-[#4d3b7d]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-[#e0c9a4] max-w-3xl mx-auto mb-8"
        >
          Join thousands of businesses processing millions in transactions with Xtopay POS.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button className="bg-[#e0c9a4] hover:bg-[#d4b98c] text-[#130338] text-lg py-6 px-8">
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            className="bg-transparent hover:bg-[#3a2c5f] text-white border-white text-lg py-6 px-8"
          >
            Schedule Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
