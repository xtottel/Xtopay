"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Globe } from "lucide-react";
import Button from "@/ui/Button";
import { Card } from "@/ui/card";
import { Container } from "@/layout/Container";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0A081A] to-[#1E1A3A]">
      <Container>
        {/* Advanced Particle Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#3A2E7A]/30"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 10 + 2,
                height: Math.random() * 10 + 2,
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                x: [0, Math.random() * 500 - 250],
                y: [0, Math.random() * 500 - 250],
              }}
              transition={{
                duration: Math.random() * 40 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px]"
          style={{ y }}
        />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-[#2A2250]/50 rounded-full border border-[#4A3B8A]/50 mb-4"
            >
              <span className="h-2 w-2 bg-[#E0C9A4] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#E0C9A4]">
                NOW LIVE IN 12 AFRICAN COUNTRIES
              </span>
            </motion.div> */}

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0C9A4] to-[#F0D9B5]">
                Enterprise Payments
              </span>{" "}
              <br />
              Infrastructure for Africa
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-white/70 text-xl max-w-2xl leading-relaxed"
            >
              Powering the next generation of African commerce with our
              high-performance payment network and financial infrastructure.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button className="group relative overflow-hidden bg-gradient-to-r from-[#130338] to-[#F0D9B5] hover:from-[#E0C9A4]/90 hover:to-[#F0D9B5]/90 text-[#1E1A3A] h-14 px-8 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#E0C9A4]/20">
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button className="h-14 px-8 font-semibold border border-[#4A3B8A] bg-[#1E1A3A]/50 text-white hover:bg-[#2A2250] hover:border-[#5A4B9A] transition-colors duration-300">
                Contact Sales
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mt-12 hidden lg:grid"
            >
              <Card className="bg-[#2A2250]/50 border-[#4A3B8A]/30 p-5 flex items-start gap-4 hover:border-[#E0C9A4]/40 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="p-2 bg-[#E0C9A4]/10 rounded-lg">
                  <Zap className="text-[#E0C9A4]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium">
                    Real-time Processing
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    99.99% uptime SLA
                  </p>
                </div>
              </Card>
              <Card className="bg-[#2A2250]/50 border-[#4A3B8A]/30 p-5 flex items-start gap-4 hover:border-[#E0C9A4]/40 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="p-2 bg-[#E0C9A4]/10 rounded-lg">
                  <ShieldCheck className="text-[#E0C9A4]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium">
                    Bank-grade Security
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    PCI DSS Level 1 Certified
                  </p>
                </div>
              </Card>
              <Card className="bg-[#2A2250]/50 border-[#4A3B8A]/30 p-5 flex items-start gap-4 hover:border-[#E0C9A4]/40 transition-all duration-300 hover:translate-y-[-4px]">
                <div className="p-2 bg-[#E0C9A4]/10 rounded-lg">
                  <Globe className="text-[#E0C9A4]" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-medium">Pan-African</h3>
                  <p className="text-white/60 text-sm mt-1">
                    12 countries supported
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Floating Dashboard */}
          <motion.div
            className="lg:col-span-5 hidden lg:block relative"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: [0, -15, 0], opacity: 1 }}
            transition={{
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: { duration: 0.8 },
            }}
          >
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E0C9A4]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#4A3B8A]/20 rounded-full blur-3xl" />

            <motion.div
              className="relative w-full max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-2 bg-[#E0C9A4]/30 rounded-2xl blur-md opacity-70" />
              <div className="relative bg-[#1E1A3A] rounded-2xl overflow-hidden border border-[#4A3B8A]/50 shadow-2xl">
                {/* Dashboard Header */}
                <div className="p-6 bg-gradient-to-r from-[#2A2250] to-[#3A2E7A] border-b border-[#4A3B8A]/50">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-white font-bold text-xl">Xtopay</div>
                    <div className="text-xs text-white/60 bg-[#2A2250] px-3 py-1 rounded-full">
                      Live Dashboard
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-xs text-white/60 mb-2">Balance</div>
                      <div className="text-2xl font-bold text-white">
                        GHS 42,869.00
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-xs text-white/60 mb-2">
                        Today&apos;s Volume
                      </div>
                      <div className="text-2xl font-bold text-white">
                        GHS 8,742
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-medium">Transactions</h3>
                    <div className="text-xs text-white/60">Last 30 days</div>
                  </div>

                  {/* Animated Chart */}
                  <div className="h-48 mb-6">
                    <div className="flex items-end h-full gap-2">
                      {[30, 60, 90, 120, 90, 60, 90, 120, 90, 60, 90, 120].map(
                        (h, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              height: [`${h}%`, `${h - 15}%`, `${h}%`],
                            }}
                            transition={{
                              duration: 2 + i * 0.2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                            className="bg-gradient-to-t from-[#E0C9A4] to-[#F0D9B5] w-full rounded-t-sm"
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[#2A2250]/50 rounded-lg p-3 text-center">
                      <div className="text-xs text-white/60 mb-1">Success</div>
                      <div className="text-lg font-semibold text-[#E0C9A4]">
                        98.7%
                      </div>
                    </div>
                    <div className="bg-[#2A2250]/50 rounded-lg p-3 text-center">
                      <div className="text-xs text-white/60 mb-1">
                        Avg. Time
                      </div>
                      <div className="text-lg font-semibold text-white">
                        1.2s
                      </div>
                    </div>
                    <div className="bg-[#2A2250]/50 rounded-lg p-3 text-center">
                      <div className="text-xs text-white/60 mb-1">Total</div>
                      <div className="text-lg font-semibold text-white">
                        1,428
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
