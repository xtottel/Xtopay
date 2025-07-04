"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Xtopay's smart invoicing cut our payment time in half. The auto-reminders alone are worth the price.",
    name: "Sarah Johnson",
    title: "CEO, Creative Agency",
    avatar: "/avatar-sarah.jpg"
  },
  {
    quote: "I went from spending hours on invoices to just minutes. The templates make me look professional without the work.",
    name: "Michael Chen",
    title: "Freelance Designer",
    avatar: "/avatar-michael.jpg"
  },
  {
    quote: "Our international clients love being able to pay in their local currency. It's eliminated so many headaches.",
    name: "Emma Rodriguez",
    title: "Founder, Consulting Firm",
    avatar: "/avatar-emma.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 bg-[#4d3b7d] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">
            Loved by Businesses Worldwide
          </h2>
          <p className="text-xl text-[#e0c9a4] max-w-3xl mx-auto">
            Join thousands of businesses who trust Xtopay for their invoicing needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            >
              <Quote className="h-8 w-8 text-[#e0c9a4] mb-4" />
              <p className="text-lg mb-6">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-[#e0c9a4]">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}