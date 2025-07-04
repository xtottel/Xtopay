"use client";
import { motion } from "framer-motion";
import { BarChart2, TrendingUp, Users, Repeat } from "lucide-react";
import Image from "next/image";

export default function DashboardSection() {
  const metrics = [
    {
      name: "Monthly Recurring Revenue",
      value: "$24,382",
      change: "+12%",
      icon: <BarChart2 className="h-6 w-6" />
    },
    {
      name: "Subscriber Growth",
      value: "142",
      change: "+8%",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      name: "Active Customers",
      value: "1,284",
      change: "+5%",
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "Renewal Rate",
      value: "92%",
      change: "+3%",
      icon: <Repeat className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-15 px-4 sm:px-6 lg:px-8 bg-[#4d3b7d] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">
            Powerful <span className="text-[#e0c9a4]">Subscription Analytics</span>
          </h2>
          <p className="text-xl text-[#e0c9a4] max-w-3xl mx-auto">
            Track all your key subscription metrics in one place.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e0c9a4] text-[#130338]">
                    {metric.icon}
                  </div>
                  <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded">
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{metric.value}</h3>
                <p className="text-sm text-[#e0c9a4]">{metric.name}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-xl p-4 backdrop-blur-sm"
          >
            <Image
              src="/recurring-analytics.png"
              alt="Subscription Analytics Dashboard"
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}