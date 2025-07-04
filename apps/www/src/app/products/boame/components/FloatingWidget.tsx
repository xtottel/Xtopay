// components/BoameWidget/FloatingWidget.tsx
"use client";

import { useState, useEffect } from "react";
import { X, HandHeart, ExternalLink } from "lucide-react";

const FloatingWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const widgetContainer = document.createElement("div");
    widgetContainer.id = "boame-widget-container";
    document.body.appendChild(widgetContainer);
    return () => {
      document.body.removeChild(widgetContainer);
    };
  }, []);

  const handleRedirect = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) < 1) {
      alert("Please enter a valid amount (minimum GHS 1).");
      return;
    }

    const params = new URLSearchParams();
    params.append("amount", amount);
    if (name) params.append("name", name);
    if (note) params.append("note", note);

    const url = `https://pay.xtopay.co/test`;
    window.open(url, "_blank");
  };

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 bg-[#4d3c7d] hover:bg-[#44326d] text-white p-3 rounded-full shadow-xl z-50 transition-all"
      >
        {isVisible ? <X size={22} /> : <HandHeart size={22} />}
      </button>

      {/* Widget Panel */}
      {isVisible && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden transition-all">
          {/* Header */}
          <div className="p-4 bg-[#f5f5fa] flex justify-between items-center border-b border-gray-200">
            <h3 className="text-gray-800 font-semibold text-lg">Support Me</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            {/* Amount Input */}
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-medium">
                Amount (GHS)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="10"
                min="1"
                required
              />
            </div>

            {/* Name Input */}
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-medium">
                Your Name (optional)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            {/* Note Input */}
            <div>
              <label className="block text-sm text-gray-700 mb-1 font-medium">
                Leave a Message (optional)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Thanks for your amazing work!"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleRedirect}
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Support Me
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 text-center border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Powered by <span className="text-blue-600 font-semibold">Xtopay</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingWidget;
