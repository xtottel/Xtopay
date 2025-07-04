import React, { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Wallet, CreditCard, Zap } from "lucide-react";

const FeatureShowcase = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Mobile Money Integration",
      description: "Seamless payments with all major mobile money providers"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: "Card Payments",
      description: "Secure credit/debit card processing with 3D Secure"
    },
    {
      icon: <Wallet className="h-8 w-8 text-white" />,
      title: "Digital Wallets",
      description: "Support for all popular digital wallets in your region"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Instant Settlements",
      description: "Get paid instantly with our lightning-fast settlement system"
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="relative h-64 overflow-hidden rounded-lg bg-gradient-to-br from-[#f9f8ff] to-[#f0edff]">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center p-8 ${index === currentFeature ? 'z-10' : 'z-0'}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentFeature ? 1 : 0,
              y: index === currentFeature ? 0 : 20
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 rounded-full bg-[#513b7e] p-4 shadow-md">
              {feature.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-center text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFeature(index)}
              className={`h-2 w-2 rounded-full transition-all ${index === currentFeature ? 'bg-[#513b7e] w-4' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 text-center">
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="text-2xl font-bold text-gray-800">10,000+</div>
          <div className="text-sm text-gray-600">Businesses</div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="text-2xl font-bold text-gray-800">99.9%</div>
          <div className="text-sm text-gray-600">Uptime</div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="text-2xl font-bold text-gray-800">1.2s</div>
          <div className="text-sm text-gray-600">Avg. Processing</div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureShowcase;