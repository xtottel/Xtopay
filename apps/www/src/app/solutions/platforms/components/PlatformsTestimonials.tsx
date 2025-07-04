"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { Quote } from "lucide-react";

export default function PlatformsTestimonials() {
  const testimonials = [
    {
      quote: "Xtopay's wallet infrastructure allowed us to launch our marketplace payments in half the time it would have taken to build in-house.",
      name: "Alex Rivera",
      title: "CTO, HandyMarket",
      avatar: "/avatars/alex-rivera.jpg"
    },
    {
      quote: "The payouts API saved us countless hours of manual payment processing. We now pay our freelancers instantly with full automation.",
      name: "Sarah Johnson",
      title: "CEO, TalentPlatform",
      avatar: "/avatars/sarah-johnson.jpg"
    },
    {
      quote: "As a SaaS company, integrating Xtopay gave our customers the payment flexibility they needed without us becoming a payments company.",
      name: "Michael Chen",
      title: "Product Lead, BizTools",
      avatar: "/avatars/michael-chen.jpg"
    }
  ];

  return (
    <section className="py-15 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Trusted by <span className="text-orange-600">Leading Platforms</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Join hundreds of platforms processing millions in transactions with Xtopay.
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
              <Quote className="w-8 h-8 text-orange-500 mb-6 rotate-180" />
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
            href="/customers/platforms"
            className="inline-flex items-center px-6 py-3 border border-gray-300 hover:border-orange-400 text-gray-700 font-medium rounded-lg transition-colors hover:text-orange-600"
          >
            View Platform Case Studies
          </a>
        </motion.div>
      </Container>
    </section>
  );
}