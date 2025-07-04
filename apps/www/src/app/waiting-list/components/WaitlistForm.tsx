import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#4ade80]/20">
            <Check className="h-8 w-8 text-[#4ade80]" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-800">You&apos;re on the list!</h2>
          <p className="mb-6 text-gray-600">
            Thank you for joining the Xtopay waitlist. We&apos;ll notify you as soon as we launch.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setEmail("");
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#513b7e] px-6 py-3 font-medium text-white transition-colors hover:bg-[#3d2c5f] focus:outline-none focus:ring-2 focus:ring-[#a396c1]"
          >
            Join Another Email <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      ) : (
        <>
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Join Our Waitlist</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-[#7e6b9e] focus:outline-none focus:ring-2 focus:ring-[#7e6b9e]"
                placeholder="your@email.com"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#513b7e] px-6 py-3 font-medium text-white transition-all hover:bg-[#3d2c5f] focus:outline-none focus:ring-2 focus:ring-[#a396c1] disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Get Early Access <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            By joining, you agree to our Terms and Privacy Policy.
          </p>
        </>
      )}

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <div className="h-8 w-8 rounded-full bg-[#4ade80]"></div>
          <span className="text-sm text-gray-700">Verified Partner</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <div className="h-8 w-8 rounded-full bg-[#60a5fa]"></div>
          <span className="text-sm text-gray-700">PCI DSS Compliant</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
          <div className="h-8 w-8 rounded-full bg-[#f472b6]"></div>
          <span className="text-sm text-gray-700">Bank-Grade Security</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WaitlistForm;