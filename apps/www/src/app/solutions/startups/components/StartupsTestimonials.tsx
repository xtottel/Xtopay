"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { Quote } from "lucide-react";

export default function StartupsTestimonials() {
  const testimonials = [
    {
      quote: "Xtopay's startup program helped us save thousands in payment processing fees during our critical early growth phase. Their APIs were a breeze to integrate.",
      name: "Sarah Chen",
      title: "CEO, BloomTech",
      avatar: "/avatars/sarah-chen.jpg"
    },
    {
      quote: "As a technical founder, I appreciate how well-documented and stable Xtopay's APIs are. We switched from another provider and haven't looked back.",
      name: "James Rodriguez",
      title: "CTO, NexaAI",
      avatar: "/avatars/james-rodriguez.jpg"
    },
    {
      quote: "The dedicated startup support team at Xtopay helped us navigate complex payment flows for our marketplace. Their expertise was invaluable.",
      name: "Priya Patel",
      title: "COO, ShareSpace",
      avatar: "/avatars/priya-patel.jpg"
    }
  ];

  return (
    <section className="py-15 bg-gray-50">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Trusted by <span className="text-pink-600">Innovative Startups</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Join thousands of fast-growing companies who rely on Xtopay for their payments infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
            >
              <Quote className="w-8 h-8 text-pink-500 mb-6 rotate-180" />
              <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
                  {/* Replace with actual Image component in Next.js */}
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/customers"
            className="inline-flex items-center px-6 py-3 border border-gray-300 hover:border-pink-400 text-gray-700 font-medium rounded-lg transition-colors hover:text-pink-600"
          >
            View More Customer Stories
          </a>
        </motion.div>
      </Container>
    </section>
  );
}