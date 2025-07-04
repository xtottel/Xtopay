"use client";
import { motion } from "framer-motion";
import Button from "@/ui/Button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#130338] to-[#4d3b7d]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Invoicing?
          </h2>
          <p className="text-xl text-[#e0c9a4] mb-8 max-w-2xl mx-auto">
            Join thousands of businesses saving hours every week with Xtopay Smart Invoicing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#e0c9a4] hover:bg-[#d1b98c] text-[#130338]">
              Start Free 14-Day Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}