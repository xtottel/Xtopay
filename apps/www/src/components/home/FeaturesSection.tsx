"use client";
import { motion } from "framer-motion";
import { Cpu, Server, CreditCard, Users } from "lucide-react";
import { Card } from "@/ui/card";
import { Container } from "@/layout/Container";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Cpu className="text-[#4e3b7d]" size={24} />,
      title: "Advanced Infrastructure",
      description: "Distributed architecture ensures 99.99% uptime",
    },
    {
      icon: <Server className="text-[#4e3b7d]" size={24} />,
      title: "Local Processing",
      description: "In-region processing for compliance and speed",
    },
    {
      icon: <CreditCard className="text-[#4e3b7d]" size={24} />,
      title: "Omnichannel Payments",
      description: "Unified API for all payment methods",
    },
    {
      icon: <Users className="text-[#4e3b7d]" size={24} />,
      title: "Enterprise Support",
      description: "Dedicated technical account managers",
    },
  ];

  return (
    <section className="py-15 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for African Market Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our platform combines global technology with local expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border-2 border-gray-200 hover:border-[#4e3b7d] p-8 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="p-3 bg-[#4e3b7d]/10 rounded-lg w-fit mb-6 group-hover:bg-[#4e3b7d]/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-gray-900 font-medium text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};