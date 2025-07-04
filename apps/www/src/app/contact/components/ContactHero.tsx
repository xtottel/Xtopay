"use client";

import { Mail} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16"
    >
      {/* Dynamic Glow - Purple to match the feature color */}
      <div className="absolute top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      <Container>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-purple-400 rounded-full mb-6"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">We&apos;re Here to Help</span>
          </motion.div>

          <motion.h1
            id="contact-hero-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Contact Our <span className="text-purple-400">Support Team</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Get in touch with our support team for assistance with payments,
            technical issues, or general inquiries about Xtopay services.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">support@xtopay.com</p>
              <a href="mailto:support@xtopay.com" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Send Message
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">+233 123 456 789</p>
              <a href="tel:+233123456789" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Call Now
              </a>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Live Chat</h3>
              <p className="text-gray-400 mb-4">Available 24/7</p>
              <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Start Chat
              </button>
            </div>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}
