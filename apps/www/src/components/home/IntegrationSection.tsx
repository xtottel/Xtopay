"use client";
import { motion } from "framer-motion";
import { Code, GitBranch, Cpu, Zap } from "lucide-react";
import { Container } from "@/layout/Container";

export const IntegrationSection = () => {
  const features = [
    {
      icon: <Code className="text-[#E0C9A4]" size={20} />,
      title: "Developer First",
      description: "REST APIs with comprehensive documentation",
    },
    {
      icon: <GitBranch className="text-[#E0C9A4]" size={20} />,
      title: "SDKs & Libraries",
      description: "Official libraries for all major languages",
    },
    {
      icon: <Cpu className="text-[#E0C9A4]" size={20} />,
      title: "Sandbox Environment",
      description: "Test with mock data before going live",
    },
    {
      icon: <Zap className="text-[#E0C9A4]" size={20} />,
      title: "Webhooks",
      description: "Real-time payment event notifications",
    },
  ];

  return (
    <section className="py-15 bg-[#1E1A3A]">
      <div className="container">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#2A2250]/50 rounded-full border border-[#4A3B8A]/50 mb-6">
                <span className="text-sm font-medium text-[#E0C9A4]">
                  DEVELOPER FRIENDLY
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Easy Integration
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Get started quickly with our well-documented APIs and developer
                tools. Go live in days, not months.
              </p>
              <button className="h-14 px-8 font-semibold border border-[#4A3B8A] bg-[#2A2250]/50 text-white hover:bg-[#3A2E7A] rounded-lg transition-colors">
                View API Documentation
              </button>
            </motion.div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-[#2A2250]/50 border border-[#4A3B8A]/30 p-6 rounded-xl hover:border-[#E0C9A4]/40 transition-all">
                      <div className="p-3 bg-[#E0C9A4]/10 rounded-lg w-fit mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-white font-medium text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/60">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
