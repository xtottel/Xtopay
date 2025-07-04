"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { Quote } from "lucide-react";

export default function DevelopersTestimonials() {
  const testimonials = [
    {
      quote: "Xtopay's API documentation is some of the best I've worked with. We had payments live in our app in under a week.",
      name: "Alex Chen",
      title: "Lead Developer, FintechApp",
      avatar: "/avatars/alex-chen.jpg"
    },
    {
      quote: "The webhook implementation was so straightforward. We now process thousands of payments daily with complete reliability.",
      name: "Sarah Johnson",
      title: "CTO, PaySolutions",
      avatar: "/avatars/sarah-johnson-dev.jpg"
    },
    {
      quote: "As a solo developer, Xtopay's SDKs saved me months of payment infrastructure work. I could focus on my core product.",
      name: "Miguel Rodriguez",
      title: "Founder, BudgetTool",
      avatar: "/avatars/miguel-rodriguez.jpg"
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
            Trusted by <span className="text-blue-600">Developers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 font-mono"
          >
            Join thousands of developers building with Xtopay&apos;s APIs.
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
              <Quote className="w-8 h-8 text-blue-500 mb-6 rotate-180" />
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
      </Container>
    </section>
  );
}