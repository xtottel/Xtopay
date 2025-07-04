"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/ui/card"
import { Badge } from "@/ui/badge"
import { motion } from "framer-motion"
import { Zap, Shield, Smartphone, CreditCard } from "lucide-react"

export default function FeatureHighlightsSection() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Process transactions in under 2 seconds with our optimized payment engine."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Bank-Level Security",
      description: "End-to-end encryption and PCI DSS compliance for all transactions."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Ready",
      description: "Fully responsive design works on any device from smartphones to tablets."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Multi-Payment",
      description: "Accept cards, mobile wallets, QR codes, and more in one system."
    }
  ]

  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-[#130338] dark:text-[#130338]">
            Why Choose Xtopay
          </Badge>
          <h2 className="text-4xl font-bold text-[#130338] dark:text-white mb-4">
            Revolutionize Your Business Transactions
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Xtopay POS combines cutting-edge technology with intuitive design to deliver the ultimate payment experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-[#f9f7fd] dark:bg-[#1e0d4d] border-[#4d3b7d] dark:border-[#4d3b7d]">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4d3b7d] text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-[#130338] dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#4d3b7d] dark:text-[#e0c9a4]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}