"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaYoutube,
  // FaYCombinator,
  FaGooglePlay,
  FaAppStoreIos,
} from "react-icons/fa";

export const ExaFooter = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Products",
      items: [
        { name: "Online Checkout", href: "/products/checkout" },
        { name: "Payment Links", href: "/products/payment-links" },
        { name: "Smart Invoicing", href: "/products/invoicing" },
        { name: "Recurring Billing", href: "/products/subscriptions" },
        { name: "Point of Sale", href: "/products/pos" },
      ],
    },
    {
      title: "Developers",
      items: [
        { name: "API Reference", href: "/developers/api" },
        { name: "Webhooks", href: "/developers/webhooks" },
        { name: "Code Samples", href: "/developers/samples" },
        { name: "Testing", href: "/developers/sandbox" },
        { name: "API Status", href: "/status" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Documentation", href: "/developers" },
        { name: "Compliance Center", href: "/legal/compliance" },
        { name: "Industry Reports", href: "/reports" },
        { name: "Case Studies", href: "/cases-studies" },
        { name: "Legal Pages", href: "/legal" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About", href: "/about" },
        { name: "Leadership", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];

  const socialIcons = [
    {
      icon: FaFacebook,
      href: "https://facebook.com/xtopay",
      label: "Facebook",
      className: "hover:text-blue-600",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/xtopay",
      label: "Twitter/X",
      className: "hover:text-blue-400",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@xtopay",
      label: "YouTube",
      className: "hover:text-red-600",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/company/xtopay",
      label: "LinkedIn",
      className: "hover:text-blue-600",
    },
    {
      icon: FaGithub,
      href: "https://github.com/xtopay",
      label: "GitHub",
      className: "hover:text-gray-300",
    },
    {
      icon: FaAppStoreIos,
      href: "https://apps.apple.com/app/xtopay/id123456",
      label: "App Store",
      className: "hover:text-blue-600",
    },
    {
      icon: FaGooglePlay,
      href: "https://play.google.com/store/apps/details?id=com.xtopay",
      label: "Google Play",
      className: "hover:text-green-600",
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/logos/xtopay.png"
                  width={160}
                  height={32}
                  alt="Xtopay Logo"
                  className="h-8 w-auto"
                  priority
                />
              </motion.div>
            </Link>
            <p className="text-sm text-gray-400">
              Xtopay is a leading payment platform that simplifies online
              transactions for businesses of all sizes. Our mission is to
              empower merchants with the tools they need to succeed in the
              digital economy.
            </p>
            {/* <p className="text-sm text-gray-400 leading-relaxed">
              Powering digital payments with enterprise-grade infrastructure.
              PCI DSS Level 1 certified, bank-grade encryption, and 99.99%
              uptime SLA — built for scale, speed, and security.
            </p> */}

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              {socialIcons.map(
                ({ icon: Icon, href, label, className }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-2 rounded-md bg-gray-900 hover:bg-gray-800 transition-all border border-gray-800 ${className}`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {links.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.items.map((link) => (
                      <motion.li key={link.name} whileHover={{ x: 2 }}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition font-medium"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 my-6"
        />

        {/* Final Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
            aria-label={`Copyright ${currentYear} Sendexa, Inc.`}
          >
            &copy; {currentYear}{" "}
            <span className="font-medium text-[#edd6b2] transition-colors duration-300 underline-offset-2">
              Xtopay Limited.
            </span>
            . All rights reserved.
          </motion.p>

          {/* Built with Love by Xtottel Ltd */}
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 transition-all group"
          >
            <p className="transition-all duration-300">
              Built with <span className="text-red-500"> 💚</span> by{" "}
              <span className="font-medium text-[#50397d] group-hover:text-[#edd6b2] transition-colors duration-300">
                Xtottel Ltd
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
