"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/ui/card";
import { Badge } from "@/ui/badge";
import { motion } from "framer-motion";
import { Zap,  Smartphone, CreditCard, Phone } from "lucide-react";

export default function PaymentMethodsSection() {
  const methods = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Card Payments",
      description: "Accept all major credit and debit cards with our secure terminals"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Wallets",
      description: "Support for Apple Pay, Google Pay, and other digital wallets"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "USSD Payments",
      description: "Receive payments via simple USSD codes - no smartphone needed"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Transfers",
      description: "Real-time bank transfers with instant confirmation"
    }
  ];

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
            Flexible Payments
          </Badge>
          <h2 className="text-4xl font-bold text-[#130338] dark:text-white mb-4">
            Accept Payments Any Way Your Customers Prefer
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            From high-tech to low-tech, we&apos;ve got every payment method covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-[#f9f7fd] dark:bg-[#1e0d4d] border-[#4d3b7d] dark:border-[#4d3b7d]">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#4d3b7d] text-white mb-4 mx-auto">
                    {method.icon}
                  </div>
                  <CardTitle className="text-[#130338] dark:text-white text-center">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#4d3b7d] dark:text-[#e0c9a4] text-center">
                    {method.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}