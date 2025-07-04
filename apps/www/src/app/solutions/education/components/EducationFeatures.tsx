"use client";

import { CreditCard, BookOpen, Users, FileText, Bell, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function EducationFeatures() {
  const features = [
    {
      icon: CreditCard,
      title: "Tuition Collection",
      description: "Accept payments via mobile money, cards, or bank transfers with automated receipts.",
      delay: 0.3
    },
    {
      icon: BookOpen,
      title: "Student Management",
      description: "Track payments by student, class, or program with detailed reporting.",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Parent Portal",
      description: "Give parents secure access to view invoices and payment history.",
      delay: 0.5
    },
    {
      icon: FileText,
      title: "Custom Invoicing",
      description: "Create professional invoices with your school branding and flexible payment plans.",
      delay: 0.6
    },
    {
      icon: Bell,
      title: "Automated Reminders",
      description: "Reduce late payments with scheduled reminders for upcoming and overdue fees.",
      delay: 0.7
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "PCI-DSS compliant with bank-level security for all transactions.",
      delay: 0.8
    }
  ];

  return (
    <section className="py-15 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Comprehensive <span className="text-cyan-600">Education Payment Tools</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Everything schools need to streamline financial operations and improve parent engagement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-cyan-300 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="bg-cyan-50 text-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto border border-cyan-100">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}