"use client";

import { motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Button from "@/ui/Button";
import { ArrowRight, Code } from "lucide-react";
//import { useEffect } from "react";
import { cn } from "@/lib/utils";

export default function MobileHero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", damping: 10 } },
  };

  // Animation values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, rgba(255, 221, 169, 0.15), transparent 80%)`;

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-[#130338] to-[#0a0120] px-4 py-12 text-white md:hidden"
      onPointerMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
        radius.set(Math.max(width, height) / 2);
      }}
    >
      {/* Interactive background gradient */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ background }}
      />

      {/* Floating particles - reduced quantity for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20, x: Math.random() * 100 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, Math.random() * 100], // Reduced movement for mobile
              x: [Math.random() * 100, Math.random() * 100 + 30], // Reduced movement
              transition: {
                duration: 5 + Math.random() * 5, // Faster animation
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 3,
              },
            }}
            className="absolute h-0.5 w-0.5 rounded-full bg-[#e0c9a4]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Enhanced headline with better mobile sizing */}
          <motion.h1
            variants={item}
            className="mb-4 text-3xl font-bold leading-snug"
          >
            Enterprise <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-[#e0c9a4] via-[#f8e8c8] to-[#e0c9a4] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient text-4xl">
                Payments
              </span>
            </span>
            <motion.span 
              variants={item}
              className="block text-2xl mt-2"
            >
              Infrastructure for Africa
            </motion.span>
          </motion.h1>

          {/* Subheading with optimized mobile text */}
          <motion.p
            variants={item}
            className="mb-6 max-w-xs text-base text-white/80 leading-relaxed"
          >
            <TypewriterEffect 
              text="Powering African commerce with high-performance payment infrastructure."
              delay={0.5}
              wordDelay={0.03} // Faster typing for mobile
            />
          </motion.p>

          {/* CTA Buttons with better mobile sizing */}
          <motion.div
            variants={item}
            className="flex w-full max-w-xs flex-col space-y-3"
          >
            <Button
              size="lg"
              className={cn(
                "w-full relative overflow-hidden",
                "bg-[linear-gradient(110deg,#e0c9a4,45%,#f0d9b5,55%,#e0c9a4)]",
                "bg-[length:250%_auto] text-[#130338] hover:bg-[position:100%_center]",
                "transition-all duration-500 text-sm" // Smaller text
              )}
            >
              <span className="relative z-10">Contact Sales</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
              <span className="absolute inset-0 bg-[#e0c9a4] opacity-0 hover:opacity-20 transition-opacity" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/20 bg-white/5 text-white hover:bg-white/20 hover:text-white group text-sm" // Smaller text
            >
              <span className="relative z-10">Developer Docs</span>
              <Code className="ml-2 h-4 w-4 relative z-10 group-hover:rotate-180 transition-transform" />
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Simplified floating elements for mobile */}
      <PaymentElementsAnimation />
    </section>
  );
}

// Optimized TypewriterEffect for mobile
function TypewriterEffect({ text, delay = 0, wordDelay = 0.05 }: { text: string; delay?: number; wordDelay?: number }) {
  const words = text.split(" ");
  
  return (
    <div className="flex flex-wrap justify-center">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.2, // Faster animation
            delay: delay + i * wordDelay
          }}
          className="mr-1"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

// Simplified floating payment elements for mobile
function PaymentElementsAnimation() {
  const elements = [
    { icon: "🌍", size: "text-lg", delay: 0 },
    { icon: "📈", size: "text-xl", delay: 0.2 },
    { icon: "💵", size: "text-base", delay: 0.4 },
  ];

  return (
    <>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [-20, -80], // Reduced movement
            x: Math.random() > 0.5 ? [0, 20] : [0, -20], // Reduced movement
            transition: {
              duration: 6 + Math.random() * 3, // Faster animation
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
              delay: el.delay,
              ease: "linear",
            },
          }}
          className={`absolute ${el.size} pointer-events-none`}
          style={{
            left: `${15 + Math.random() * 70}%`, // Keep more within screen bounds
            bottom: "0%",
          }}
        >
          {el.icon}
        </motion.div>
      ))}
    </>
  );
}