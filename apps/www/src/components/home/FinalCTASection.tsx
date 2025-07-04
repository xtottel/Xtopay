"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone} from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-15 bg-gradient-to-br from-[#4e3b7d] to-[#1E1A3A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px]" />
      <div className="container px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start accepting payments across Africa today
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses processing billions through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-[#E0C9A4] to-[#F0D9B5] hover:from-[#E0C9A4]/90 hover:to-[#F0D9B5]/90 text-[#1E1A3A] font-semibold h-14 px-8 rounded-lg">
                <span className="relative z-10 flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button className="h-14 px-8 font-semibold border border-white/20 bg-white/10 text-white hover:bg-white/20 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Phone size={18} /> Contact Sales
              </button>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="flex items-center gap-3">
                <Mail className="text-[#E0C9A4]" size={20} />
                <span className="text-white">hello@xtopay.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#E0C9A4]" size={20} />
                <span className="text-white">+234 800 000 0000</span>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};