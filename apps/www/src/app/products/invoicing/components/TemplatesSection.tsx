"use client";
import { motion } from "framer-motion";
import { FileText, Palette, Code, Download } from "lucide-react";
import Image from "next/image";

export default function TemplatesSection() {
  const templateFeatures = [
    {
      title: "100+ Professionally Designed",
      description: "Choose from our collection of beautiful templates",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Fully Customizable",
      description: "Change colors, fonts, and layouts to match your brand",
      icon: <Palette className="h-5 w-5" />
    },
    {
      title: "Developer Friendly",
      description: "Access our API for custom implementations",
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Multiple Formats",
      description: "Export as PDF, Word, or HTML",
      icon: <Download className="h-5 w-5" />
    }
  ];

  const templates = [
    { name: "Modern", image: "/template-modern.png" },
    { name: "Classic", image: "/template-classic.png" },
    { name: "Minimal", image: "/template-minimal.png" },
    { name: "Creative", image: "/template-creative.png" }
  ];

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
            Stunning <span className="text-[#4d3b7d] dark:text-[#e0c9a4]">Invoice Templates</span>
          </h2>
          <p className="text-lg text-[#4d3b7d] dark:text-[#e0c9a4] max-w-3xl mx-auto">
            Make a professional impression with beautifully designed invoice templates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <ul className="space-y-6">
              {templateFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4d3b7d] text-[#e0c9a4] mt-1 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#130338] dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#4d3b7d] dark:text-[#e0c9a4]">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden border border-[#e0c9a4]/20 shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={template.image}
                  alt={`${template.name} Template`}
                  width={400}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-white font-medium">{template.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}