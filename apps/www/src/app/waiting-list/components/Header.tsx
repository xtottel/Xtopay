import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
        <Zap className="h-8 w-8 text-white" />
      </div>
      <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
        Join the <span className="text-[#c7b8e8]">Xtopay</span> Revolution
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-white/80">
        Be among the first to experience our next-generation payment gateway with
        cutting-edge features and unparalleled performance.
      </p>
    </motion.header>
  );
};

export default Header;