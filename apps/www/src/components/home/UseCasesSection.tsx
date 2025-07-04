"use client";
import { motion } from "framer-motion";
import { CreditCard, Globe, Cpu, Server } from "lucide-react";
import { Card } from "@/ui/card";
import { Container } from "@/layout/Container";

export const UseCasesSection = () => {
  const useCases = [
    {
      title: "E-commerce",
      description: "Seamless checkout experiences",
      icon: <CreditCard className="text-[#4e3b7d]" size={20} />,
    },
    {
      title: "Digital Banking",
      description: "Modern infrastructure for neobanks",
      icon: <Server className="text-[#4e3b7d]" size={20} />,
    },
    {
      title: "SaaS Companies",
      description: "Recurring billing in local currencies",
      icon: <Cpu className="text-[#4e3b7d]" size={20} />,
    },
    {
      title: "Remittances",
      description: "Low-cost cross-border transfers",
      icon: <Globe className="text-[#4e3b7d]" size={20} />,
    },
  ];

  return (
    <section className="py-15 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tailored solutions for your industry
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you&apos;re a startup or enterprise, our platform adapts to
              your requirements.
            </p>
          </motion.div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white border-2 border-gray-200 hover:border-[#4e3b7d] p-6 transition-all duration-300 hover:shadow-md group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#4e3b7d]/10 rounded-lg group-hover:bg-[#4e3b7d]/20 transition-colors">
                        {useCase.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-medium text-lg mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};