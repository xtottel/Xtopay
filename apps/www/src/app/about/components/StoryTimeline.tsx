"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export function StoryTimeline() {
const milestones = [
  {
    year: "2025",
    title: "Founded in Ghana (Volta Region)",
    description:
      "Xtopay was launched with a bold vision to simplify cross-border payments and empower African businesses.",
    icon: "🚀"
  },
  {
    year: "2025 Q1",
    title: "Accepted into UNICEF Startup Lab (Cohort 5)",
    description:
      "Recognized as one of Ghana's most promising startups. Received expert mentorship, funding support, and access to a network of social innovators.",
    icon: "🌍"
  },
  {
    year: "2025 Q1",
    title: "Strategic Partnership with Sendexa",
    description:
      "Integrated advanced communication tools (SMS, OTP, Email, voice) through Sendexa, enhancing security and reliability for all payment flows.",
    icon: "📡"
  },
  {
    year: "2025 Q2",
    title: "Joined MojoPay Fintech Incubator",
    description:
      "Accelerated product development and go-to-market execution through dedicated mentorship and infrastructure support.",
    icon: "💡"
  }
];

  return (
    <section id="our-story" className="py-15 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600">
              From humble beginnings to becoming a pan-African payment leader
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop timeline line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 w-1 h-full bg-purple-100 transform -translate-x-1/2" />
          
          {/* Mobile timeline line (left-aligned) */}
          <div className="md:hidden absolute left-8 w-1 h-full bg-purple-100" />

          <div className="space-y-8 md:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Mobile layout - properly aligned left timeline */}
                <div className="md:hidden pl-16">
                  <div className="absolute left-9 w-12 h-12 rounded-full bg-white border-4 border-purple-100 flex items-center justify-center text-2xl shadow-sm -ml-6">
                    {milestone.icon}
                  </div>
                  <span className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-purple-100 text-purple-800">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>

                {/* Desktop layout */}
                <div className={`hidden md:flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center w-full`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                    <span className="inline-block px-3 py-1 mb-2 text-sm font-medium rounded-full bg-purple-100 text-purple-800">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-purple-100 flex items-center justify-center text-2xl shadow-sm z-10">
                    {milestone.icon}
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'pl-16' : 'pr-16'}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}