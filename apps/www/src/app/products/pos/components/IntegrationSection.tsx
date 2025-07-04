"use client";
import { motion } from "framer-motion"
import { Badge } from "@/ui/badge"

export default function IntegrationSection() {
  const integrations = [
    { name: "Shopify", logo: "/logos/shopify.svg" },
    { name: "QuickBooks", logo: "/logos/quickbooks.svg" },
    { name: "Square", logo: "/logos/square.svg" },
    { name: "WooCommerce", logo: "/logos/woocommerce.svg" },
    { name: "Salesforce", logo: "/logos/salesforce.svg" },
    { name: "Zapier", logo: "/logos/zapier.svg" }
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
            Seamless Connectivity
          </Badge>
          <h2 className="text-4xl font-bold text-[#130338] dark:text-white mb-4">
            Works With Your Favorite Tools
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Xtopay integrates with the platforms you already use to streamline your operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
        >
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-center justify-center p-6 bg-[#f9f7fd] dark:bg-[#1e0d4d] rounded-lg">
              <img
                src={integration.logo}
                alt={integration.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}