"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Handshake, Star, Shield } from "lucide-react";

export default function PartnershipContent() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-15 sm:px-8">
        {/* Header Section */}
        {/* <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Partnership Guidelines for <span className="text-[#5a2d9f]">Xtopay</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building Ghana&apos;s next-generation payment infrastructure through meaningful collaborations
          </p>
        </motion.header> */}

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 bg-[#f9f5ff] p-8 rounded-xl border border-[#e1d7f0]"
        >
          <p className="text-gray-700 leading-relaxed">
            At Xtopay, we&apos;re not just building a fintech application — we&apos;re establishing the foundation for Ghana&apos;s digital commerce future. 
            This requires deliberate, strategic partnerships that create tangible value for all stakeholders.
          </p>
        </motion.section>

        {/* Partnership Criteria */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* What We Don't Want */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-semibold text-gray-900">Non-Aligned Partnerships</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Vanity partnerships without substantive contribution</span>
              </li>
              <li className="flex gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">PR-focused affiliations without technical integration</span>
              </li>
              <li className="flex gap-3">
                <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Mentorship-only proposals (we have established guidance)</span>
              </li>
            </ul>
          </motion.section>

          {/* What We Want */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-semibold text-gray-900">Ideal Partnerships</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Technical collaborations (payment processing, compliance tooling)</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Regulatory allies for DEMI license achievement</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Long-term infrastructure investors</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Co-creators focused on real value, not branding</span>
              </li>
            </ul>
          </motion.section>
        </div>

        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-[#5a2d9f] p-8 rounded-xl text-white">
            <blockquote className="text-xl italic leading-relaxed mb-6">
              &quot;We&apos;re not building on hype — we&apos;re building for history. Every partnership must reflect that commitment to lasting impact.&quot;
            </blockquote>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Xtopay Core Principle</span>
            </div>
          </div>
        </motion.section>

        {/* Partnership Promise */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="w-8 h-8 text-[#5a2d9f]" />
            <h2 className="text-2xl font-semibold text-gray-900">Our Partnership Commitment</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Star, text: "Clear expectations and defined responsibilities" },
              { icon: Shield, text: "Respect for your IP and contributions" },
              { icon: Handshake, text: "Shared growth over superficial metrics" },
              { icon: CheckCircle2, text: "Transparent decision-making processes" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <item.icon className="w-5 h-5 text-[#5a2d9f] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Closing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            If you&apos;re considering partnership with Xtopay, understand that we prioritize quality over quantity. 
            Our mission is long-term: to build world-class payment infrastructure from Ghana, by Ghanaians, 
            serving Africa and beyond.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="border-t border-gray-200 pt-8"
          >
            <p className="font-semibold text-gray-900">Collins Joe</p>
            <p className="text-gray-600">Founder & CEO, Xtopay</p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}