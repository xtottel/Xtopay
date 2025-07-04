"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
import { Quote } from "lucide-react";

export default function EducationTestimonials() {
  const testimonials = [
    {
      quote: "Xtopay reduced our tuition collection time by 75% and eliminated payment tracking errors. The parent portal has been particularly valuable for engagement.",
      name: "Dr. Sarah Johnson",
      title: "Principal, Greenfield Academy",
      avatar: "/avatars/sarah-johnson.jpg"
    },
    {
      quote: "As a university bursar, I appreciate how Xtopay handles our complex payment plans and international student payments seamlessly.",
      name: "Michael Chen",
      title: "Bursar, Pacific University",
      avatar: "/avatars/michael-chen.jpg"
    },
    {
      quote: "The automated reminders have significantly reduced our late payments, and parents love the convenience of multiple payment options.",
      name: "Priya Patel",
      title: "Finance Director, Sunrise Schools",
      avatar: "/avatars/priya-patel-edu.jpg"
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
            Trusted by <span className="text-cyan-600">Leading Institutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Join hundreds of schools and universities who rely on Xtopay for their payment processing.
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
              <Quote className="w-8 h-8 text-cyan-500 mb-6 rotate-180" />
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
            href="/customers/education"
            className="inline-flex items-center px-6 py-3 border border-gray-300 hover:border-cyan-400 text-gray-700 font-medium rounded-lg transition-colors hover:text-cyan-600"
          >
            View Education Case Studies
          </a>
        </motion.div>
      </Container>
    </section>
  );
}