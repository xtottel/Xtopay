"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Smartphone, ShoppingCart } from "lucide-react";

export default function UseCasesSection() {
  const useCases = [
    {
      title: "Invoices",
      description: "Add payment links to your invoices for faster collection",
      icon: <Mail className="h-5 w-5" />
    },
    {
      title: "Social Media",
      description: "Share payment links directly on your social channels",
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      title: "Mobile Sales",
      description: "Accept payments on-the-go without hardware",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      title: "E-commerce",
      description: "Sell products without a full online store",
      icon: <ShoppingCart className="h-5 w-5" />
    }
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
            Perfect For All Your Business Needs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#130338] p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4d3b7d] mb-4 mx-auto">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#130338] dark:text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-[#4d3b7d] dark:text-[#e0c9a4]">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}