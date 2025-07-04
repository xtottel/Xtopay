"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/layout/Container";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Xtopay reduced our payment processing costs by 40% while improving success rates.",
      author: "Nana Kwame",
      role: "CTO, AfriMarket",
      avatar: "/avatars/avatar1.jpg"
    },
    {
      quote: "The most reliable payment infrastructure we've used in the African market.",
      author: "Amina Diallo",
      role: "Head of Payments, KudiBank",
      avatar: "/avatars/avatar2.jpg"
    },
    {
      quote: "Implementation was seamless with their developer-friendly APIs.",
      author: "Tunde Okafor",
      role: "Lead Engineer, ShopAfrika",
      avatar: "/avatars/avatar3.jpg"
    }
  ];

  return (
    <section className="py-15 bg-white relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What our customers say about our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-gray-50 border-2 border-gray-200 hover:border-[#4e3b7d]/60 p-8 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                <Quote className="text-[#4e3b7d] mb-4" size={24} />
                <p className="text-gray-700 text-lg mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};