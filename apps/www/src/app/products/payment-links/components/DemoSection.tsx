"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/ui/Button";

export default function DemoSection() {
  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 bg-[#4d3b7d] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">See It In Action</h2>
            <p className="text-[#e0c9a4] mb-8 text-lg">
              Our payment links work seamlessly across all devices. Share via email, text, social media, or embed on your website.
            </p>
            <Button className="bg-[#e0c9a4] hover:bg-[#d1b98c] text-[#130338]">
              Try Demo Link
            </Button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="border-2 border-[#e0c9a4] rounded-lg overflow-hidden">
                <div className="bg-gray-100 h-96 flex items-center justify-center text-[#4d3b7d]">
                  {/* Replace with your actual image */}
                  <div className="text-center p-6">
                    <Image
                      src="/payment-link-demo.png"
                      alt="Payment Link Demo"
                      width={400}
                      height={400}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}