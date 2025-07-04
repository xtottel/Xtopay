import { motion } from "framer-motion";

export function NewsletterCTA() {
  return (
    <section className="py-14 bg-[#4e3b7d] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Get <span className="text-[#e0c9a4]">Insights</span> Directly
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          Subscribe to my newsletter for exclusive content on African tech,
          entrepreneurship, and innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 w-full rounded-lg border border-white/30 bg-transparent text-white placeholder-white/70 
              focus:outline-none focus:ring-2 focus:ring-[#e0c9a4] focus:border-[#e0c9a4] transition"
          />
          <button className="px-6 py-3 bg-[#e0c9a4] text-[#4e3b7d] font-medium rounded-lg hover:bg-[#d4b98c] transition">
            Subscribe
          </button>
        </motion.div>
      </div>
    </section>
  );
}
