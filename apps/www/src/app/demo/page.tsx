"use client";

import React, { useState } from "react";
import {  Loader2, Lock, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import CheckoutDemoHero from "./components/CheckoutDemoHero";

const Demo = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePay = () => {
    if (!form.name || !form.email || !form.phone) {
      return; // Basic validation
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 2000); // Faster simulation for demo purposes
  };

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <>
      <CheckoutDemoHero />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#513b7e] to-[#3e2e61] p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">Xtopay Checkout Demo</h1>
                <p className="text-sm opacity-90">Secure payment processing</p>
              </div>
              <div className="bg-white/20 p-2 rounded-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-[#513b7e] focus:border-transparent dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g. Ama Asante"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-[#513b7e] focus:border-transparent dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g. ama@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-[#513b7e] focus:border-transparent dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g. 0551234567"
                  required
                />
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Amount to pay
                  </span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    GHS 10.00
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePay}
                disabled={loading || !form.name || !form.email || !form.phone}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#513b7e] px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-[#3e2e61] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5" />
                    Preparing Secure Payment...
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5" />
                    Pay GHS 10.00
                  </>
                )}
              </button>

              {/* Security Badge */}
              <div className="flex flex-col items-center pt-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-700 px-4 py-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                  <Lock className="h-4 w-4 text-green-500" strokeWidth={2.5} />
                  <span>
                    Secured by{" "}
                    <Link
                      href="https://xtopay.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#513b7e] hover:underline dark:text-blue-400"
                    >
                      Xtopay
                    </Link>
                  </span>
                </div>
                <p className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
                  You&apos;ll be redirected to our secure payment gateway
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Iframe Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden dark:bg-gray-800 mx-4">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-5 w-5 text-[#513b7e] dark:text-blue-400" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Xtopay Secure Checkout
                  </h3>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-red-500 transition p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {!iframeLoaded && (
                <div className="flex flex-col items-center justify-center h-96">
                  <Loader2 className="animate-spin h-8 w-8 text-[#513b7e] dark:text-blue-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Loading secure payment gateway...
                  </p>
                </div>
              )}

              <iframe
                src="https://pay.xtopay.co/test"
                className={`w-full h-[600px] ${iframeLoaded ? "block" : "hidden"}`}
                title="Xtopay Secure Payment Gateway"
                onLoad={handleIframeLoad}
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-modals"
              />

              <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  <Lock className="inline h-3 w-3 mr-1" />
                  All transactions are secured with 256-bit SSL encryption
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Demo;
