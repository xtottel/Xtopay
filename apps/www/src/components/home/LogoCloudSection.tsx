"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const LogoCloudSection = () => {
  const logos = [
    { name: "MTN", src: "/brands/mtn.svg" },
    { name: "Vodafone", src: "/brands/Telecel.png" },
    { name: "Airtel", src: "/brands/at.svg" },
    { name: "Ecobank", src: "/brands/Ecobank.png" },
    { name: "Stanbic", src: "/brands/stanbic.png" },
  ];

  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#1E1A3A] py-15 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px]" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Africa&apos;s Financial Leaders
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Partnered with the continent&apos;s most innovative institutions
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="w-32 h-32 flex items-center justify-center p-4 bg-[#2A2250]/50 rounded-xl border border-[#4A3B8A]/30 hover:border-[#E0C9A4]/40 transition-all"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={128}
                height={128}
                className="object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloudSection;