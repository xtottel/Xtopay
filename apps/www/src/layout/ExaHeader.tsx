"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/ui/Button";
import Image from "next/image";
import { Container } from "./Container";
import {
  AlignRight,
  X,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  FileText,
  Repeat,
  // Send,
  ShoppingCart,
  GraduationCap,
  Network,
  Rocket,
  CodeXml,
  HelpCircle,
  Search,
  Mail,
  Link2,
  // SmartphoneNfc,
  ReceiptCent,
  HandHeart,
} from "lucide-react";
//import Contactless from "react-icons/si";
import { SiContactlesspayment as Contactless } from "react-icons/si";
//import { PiContactlessPaymentFill as Contactless } from "react-icons/pi";

const navItems = [
  {
    name: "Products",
    href: "#",
    subLinks: [
      {
        name: "Online Checkout",
        href: "/products/checkout",
        description:
          "Accept payments instantly with our embeddable modal or hosted page — no code needed.",
        icon: <ShoppingCart className="w-5 h-5" />,
        color:
          "bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-300",
        cta: false,
      },
      {
        name: "Payment Links",
        href: "/products/payment-links",
        description:
          "Create shareable payment links for one-time or recurring payments.",
        icon: <Link2 className="w-5 h-5" />,
        color:
          "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300",
        cta: false,
      },
      {
        name: "Smart Invoicing",
        href: "/products/invoicing",
        description:
          "Create and send branded digital invoices with built-in payment options.",
        icon: <ReceiptCent className="w-5 h-5" />,
        color:
          "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300",
        cta: false,
      },
      {
        name: "Recurring Billing",
        href: "/products/subscriptions",
        description:
          "Charge customers automatically with flexible subscription and installment plans.",
        icon: <Repeat className="w-5 h-5" />,
        color:
          "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300",
        cta: false,
      },
      // {
      //   name: "Payouts",
      //   href: "/products/payouts",
      //   description:
      //     "Send money to mobile wallets or bank accounts across Ghana with full tracking.",
      //   icon: <Send className="w-5 h-5" />,
      //   color:
      //     "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300",
      //   cta: false,
      // },
      {
        name: "Point of Sale",
        href: "/products/pos",
        description:
          "Accept card payments in-person with our mobile POS app and card reader.",
        icon: <Contactless className="w-5 h-5" />,
        color: "bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300",
        cta: false,
      },
      {
        name: "Boame",
        href: "/products/boame",
        description:
          "Let friends, fans, or customers support you instantly via MoMo or card — no code needed.",
        icon: <HandHeart className="w-5 h-5" />, // assuming you're using Lucide or similar
        color:
          "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300",
        cta: false,
      },
    ],
  },
  {
    name: "Solutions",
    href: "#",
    subLinks: [
      {
        name: "For Startups",
        href: "/solutions/startups",
        description:
          "Launch faster with ready-to-use payments and dashboard tools.",
        icon: <Rocket className="w-5 h-5" />,
        color:
          "bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-300",
        cta: false,
      },
      {
        name: "For Platforms",
        href: "/solutions/platforms",
        description:
          "Handle user-to-user payments with our wallets and payouts API.",
        icon: <Network className="w-5 h-5" />,
        color:
          "bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-300",
        cta: false,
      },
      {
        name: "For Schools",
        href: "/solutions/education",
        description:
          "Accept tuition fees and track student payments with ease.",
        icon: <GraduationCap className="w-5 h-5" />,
        color:
          "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/50 dark:text-cyan-300",
        cta: false,
      },
      {
        name: "For Developers",
        href: "/solutions/developers",
        description: "Build modern fintech apps using our flexible APIs.",
        icon: <CodeXml className="w-5 h-5" />,
        color:
          "bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300",
        cta: false,
      },
    ],
  },
  {
    name: "Developers",
    href: "/developers",
  },
  {
    name: "Resources",
    href: "#",
    subLinks: [
      {
        name: "Blog",
        href: "/blog",
        description: "Latest news and insights from our team",
        icon: <FileText className="w-5 h-5" />,
        color:
          "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300",
        cta: false,
      },
      {
        name: "Help Center",
        href: "/help",
        description: "FAQs, billing help, and guides.",
        icon: <HelpCircle className="w-5 h-5" />,
        color:
          "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300",
        cta: false,
      },
      {
        name: "Why was I debited?",
        href: "/lookup",
        description: "Find out why you were charged by Xtopay.",
        icon: <Search className="w-5 h-5" />,
        color:
          "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200",
        cta: false,
      },
      {
        name: "Contact Us",
        href: "/contact",
        description: "Get in touch with our support team.",
        icon: <Mail className="w-5 h-5" />,
        color:
          "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300",
        cta: false,
      },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export function ExaHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenSubMenu(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(dropdownRefs.current).forEach(([, ref]) => {
        if (ref && !ref.contains(event.target as Node)) {
          setOpenSubMenu(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b transition-all duration-300 ${
        isScrolled
          ? "border-gray-200/80 dark:border-gray-800/80 shadow-sm"
          : "border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeAllMenus}
          >
            <Image
              src="/logos/xtopay.png"
              width={100}
              height={20}
              alt="Sendexa Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={(el) => {
                    dropdownRefs.current[item.name] = el;
                  }}
                  onMouseEnter={() => setOpenSubMenu(item.name)}
                  onMouseLeave={() => setOpenSubMenu(null)}
                >
                  {/* The rest of the navigation item rendering goes here */}
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? "text-[#4d3b7d] dark:text-teal-400 font-semibold"
                          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.subLinks && (
                        <ChevronDown
                          className={`ml-1 w-4 h-4 inline-block transition-transform ${
                            openSubMenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>
                  </motion.div>

                  {/* Desktop Mega Menu */}
                  {item.subLinks && (
                    <AnimatePresence>
                      {openSubMenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{
                            type: "spring",
                            damping: 20,
                            stiffness: 300,
                          }}
                          className="absolute left-0 mt-1 w-[36rem] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl py-4 z-50 border border-gray-200/80 dark:border-gray-700/80"
                        >
                          <div className="grid grid-cols-2 gap-4 px-6">
                            {item.subLinks.map((subLink) => (
                              <motion.div
                                key={subLink.name}
                                whileHover={{
                                  x: 5,
                                  transition: {
                                    type: "spring",
                                    stiffness: 300,
                                  },
                                }}
                              >
                                <Link
                                  href={subLink.href}
                                  className={`block p-3 rounded-lg transition-all ${
                                    subLink.cta
                                      ? // ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500"
                                        "bg-gradient-to-r from-[#4d3b7d] to-[#16335c] text-white hover:from-[#4d3b7d]/90 hover:to-purple-500"
                                      : pathname === subLink.href
                                        ? "bg-blue-50 dark:bg-gray-800"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                  }`}
                                  onClick={closeAllMenus}
                                >
                                  <div className="flex items-start">
                                    {/* Icon container with conditional background */}
                                    <div
                                      className={`flex-shrink-0 mr-3 rounded-lg p-2 ${
                                        subLink.cta
                                          ? "bg-white/20"
                                          : subLink.color
                                      }`}
                                    >
                                      {subLink.icon}
                                    </div>

                                    {/* Text content: title and description */}
                                    <div>
                                      <div
                                        className={`font-medium ${
                                          subLink.cta
                                            ? "text-white"
                                            : "text-gray-900 dark:text-white"
                                        }`}
                                      >
                                        {subLink.name}
                                      </div>
                                      <div
                                        className={`text-xs mt-1 ${
                                          subLink.cta
                                            ? "text-white/80"
                                            : "text-gray-500 dark:text-gray-400"
                                        }`}
                                      >
                                        {subLink.description}
                                      </div>
                                    </div>

                                    {/* Optional CTA arrow icon aligned to the right */}
                                    {subLink.cta && (
                                      <ArrowRight className="ml-auto w-4 h-4 opacity-80" />
                                    )}
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ) : null
            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="secondary"
                className="gap-2"
                onClick={() => (window.location.href = "/signup")}
              >
                <span>Sign Up</span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                className="gap-2"
                onClick={() => (window.location.href = "/demo")}
              >
                <span>Try Checkout</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <AlignRight className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeAllMenus}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-10/11 max-w-md bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-xl z-50 border-l border-gray-200/80 dark:border-gray-800/80"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800 h-20">
                {/* Sendexa Logo */}
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={closeAllMenus}
                >
                  <Image
                    src="/logos/xtopay.png"
                    width={100}
                    height={20}
                    alt="Sendexa Logo"
                  />
                </Link>

                <button
                  onClick={closeAllMenus}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="h-[calc(100vh-5rem)] overflow-y-auto p-4">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Link
                          href={item.href}
                          className={`text-base font-medium ${
                            pathname === item.href
                              ? "text-[#4d3b7d] dark:text-teal-400"
                              : "text-gray-900 dark:text-white"
                          }`}
                          onClick={closeAllMenus}
                        >
                          {item.name}
                        </Link>
                        {item.subLinks && (
                          <button
                            onClick={() => toggleSubMenu(item.name)}
                            className="p-1 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                            aria-expanded={openSubMenu === item.name}
                          >
                            {openSubMenu === item.name ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                        )}
                      </div>

                      {/* Mobile Submenu - Updated to match working example */}
                      {item.subLinks && (
                        <AnimatePresence>
                          {openSubMenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 ml-4 border-l-2 border-gray-200 dark:border-gray-700 overflow-hidden"
                            >
                              <div className="space-y-2 py-2">
                                {item.subLinks.map((subLink) => (
                                  <Link
                                    key={subLink.name}
                                    href={subLink.href}
                                    className={`block p-3 rounded-lg transition-all ${
                                      subLink.cta
                                        ? "bg-gradient-to-r from-[#4d3b7d] to-[#16335c] text-white"
                                        : pathname === subLink.href
                                          ? "bg-blue-50 dark:bg-gray-800"
                                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                                    onClick={closeAllMenus}
                                  >
                                    <div className="flex items-start">
                                      <div
                                        className={`flex-shrink-0 mr-3 rounded-lg p-2 ${
                                          subLink.cta
                                            ? "bg-white/20"
                                            : subLink.color
                                        }`}
                                      >
                                        {subLink.icon}
                                      </div>
                                      <div>
                                        <div
                                          className={`font-medium ${
                                            subLink.cta
                                              ? "text-white"
                                              : "text-gray-900 dark:text-white"
                                          }`}
                                        >
                                          {subLink.name}
                                        </div>
                                        <div
                                          className={`text-xs mt-1 ${
                                            subLink.cta
                                              ? "text-white/80"
                                              : "text-gray-500 dark:text-gray-400"
                                          }`}
                                        >
                                          {subLink.description}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 p-4 space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="secondary"
                      className="w-full gap-2"
                      onClick={() => {
                        closeAllMenus();
                        window.location.href = "/signup";
                      }}
                    >
                      <span>Sign Up</span>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="primary"
                      className="w-full gap-2"
                      onClick={() => {
                        closeAllMenus();
                        window.location.href = "/demo";
                      }}
                    >
                      <span>Try Checkout</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
