"use client";
import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export const StatsSection = () => {
  const stats = [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "12", label: "Countries" },
    { value: "3.2M", label: "Daily Transactions" },
    { value: "98.7%", label: "Success Rate" },
  ];

  return (
    <section className="py-15 bg-[#1E1A3A] relative overflow-hidden">
      <Container>
      <div className="absolute inset-0 opacity-10 bg-[url('/circuit-pattern.svg')] bg-cover" />
      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powering Africa&apos;s Digital Economy
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Billions processed annually with industry-leading reliability
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#E0C9A4] mb-3">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
};