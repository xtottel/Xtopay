"use client";
import { Card, CardContent } from "@/ui/card"
import { motion } from "framer-motion"
import { Badge } from "@/ui/badge"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Cafe Owner",
      content: "Xtopay has reduced our transaction times by 60% and made our checkout process so much smoother. Our customers love it!",
      avatar: "/avatars/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      role: "Retail Store Manager",
      content: "The analytics dashboard alone is worth the price. We've optimized our staffing based on transaction patterns and saved thousands.",
      avatar: "/avatars/michael-chen.jpg"
    },
    {
      name: "Emma Rodriguez",
      role: "Restaurant Owner",
      content: "Switching to Xtopay was the best decision we made last year. The support team is incredible and the system just works.",
      avatar: "/avatars/emma-rodriguez.jpg"
    }
  ]

  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 bg-[#f5f2ff] dark:bg-[#1a0933]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-[#130338] dark:text-[#130338]">
            Customer Stories
          </Badge>
          <h2 className="text-4xl font-bold text-[#130338] dark:text-white mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white dark:bg-[#130338]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#130338] dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-[#4d3b7d] dark:text-[#e0c9a4]">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-[#4d3b7d] dark:text-[#e0c9a4]">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}