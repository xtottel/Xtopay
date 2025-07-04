"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IntegrationsSection() {
  const integrations = [
    { name: "Shopify", logo: "/shopify-logo.png" },
    { name: "WooCommerce", logo: "/woocommerce-logo.png" },
    { name: "QuickBooks", logo: "/quickbooks-logo.png" },
    { name: "Zapier", logo: "/zapier-logo.png" },
    { name: "Slack", logo: "/slack-logo.png" },
    { name: "Mailchimp", logo: "/mailchimp-logo.png" }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f5f2ff] dark:bg-[#1a0933]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#130338] dark:text-white mb-6">
            Works With Your Favorite Tools
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto mb-8">
            Connect Xtopay with hundreds of apps to automate your workflow.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white dark:bg-[#130338] rounded-lg shadow-sm"
              >
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}