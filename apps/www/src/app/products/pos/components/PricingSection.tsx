"use client";
import Button from "@/ui/Button"
import { Badge } from "@/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/ui/card"
import { motion } from "framer-motion"
import {  CheckCircle2 } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 transactions/month",
        "Basic reporting",
        "Email support",
        "1 POS device"
      ],
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 500 transactions/month",
        "Advanced analytics",
        "Priority support",
        "Up to 3 POS devices",
        "Inventory management"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large businesses with custom needs",
      features: [
        "Unlimited transactions",
        "Dedicated account manager",
        "24/7 support",
        "Unlimited devices",
        "API access",
        "Custom integrations"
      ],
      cta: "Contact Sales"
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
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl font-bold text-[#130338] dark:text-white mb-4">
            Simple Pricing for Every Business
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            No hidden fees. Cancel anytime. 30-day money-back guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-[#e0c9a4] text-[#130338] dark:bg-[#e0c9a4] dark:text-[#130338]">
                    Most Popular
                  </Badge>
                </div>
              )}
              <Card className={`h-full ${plan.popular ? 'border-2 border-[#4d3b7d] dark:border-[#4d3b7d]' : ''}`}>
                <CardHeader>
                  <CardTitle className={`text-2xl ${plan.popular ? 'text-[#4d3b7d] dark:text-[#4d3b7d]' : 'text-[#130338] dark:text-white'}`}>
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-[#130338] dark:text-white">{plan.price}</span>
                    <span className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] ml-1">{plan.period}</span>
                  </div>
                  <CardDescription className="text-[#4d3b7d] dark:text-[#e0c9a4]">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-[#4d3b7d] dark:text-[#e0c9a4] mr-2" />
                        <span className="text-[#130338] dark:text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? 'bg-[#4d3b7d] hover:bg-[#3a2c5f] dark:bg-[#4d3b7d] dark:hover:bg-[#3a2c5f] text-white' : 'bg-[#e0c9a4] hover:bg-[#d4b98c] dark:bg-[#e0c9a4] dark:hover:bg-[#d4b98c] text-[#130338]'}`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}