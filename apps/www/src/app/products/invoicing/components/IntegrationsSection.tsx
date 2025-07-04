"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  { name: "QuickBooks", logo: "/quickbooks-logo.png", category: "Accounting" },
  { name: "Xero", logo: "/xero-logo.png", category: "Accounting" },
  { name: "Shopify", logo: "/shopify-logo.png", category: "E-commerce" },
  { name: "WooCommerce", logo: "/woocommerce-logo.png", category: "E-commerce" },
  { name: "Slack", logo: "/slack-logo.png", category: "Communication" },
  { name: "Zapier", logo: "/zapier-logo.png", category: "Automation" },
  { name: "Mailchimp", logo: "/mailchimp-logo.png", category: "Marketing" },
  { name: "HubSpot", logo: "/hubspot-logo.png", category: "CRM" }
];

export default function IntegrationsSection() {
  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#130338]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#130338] dark:text-white mb-6">
            Works With Your <span className="text-[#4d3b7d] dark:text-[#e0c9a4]">Favorite Tools</span>
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Connect Xtopay Smart Invoicing with the apps you already use.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-[#f5f2ff] dark:bg-[#1a0933] rounded-lg hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-medium text-[#130338] dark:text-white mb-1">
                {integration.name}
              </h3>
              <span className="text-sm text-[#4d3b7d] dark:text-[#e0c9a4]">
                {integration.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}