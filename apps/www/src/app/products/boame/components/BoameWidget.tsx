"use client";

import { useState } from 'react';
import { Phone, CreditCard } from 'lucide-react';

const BoameWidget = () => {
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-1">Support My Work</h3>
        <p className="text-gray-400 text-sm">Send support via Mobile Money or card</p>
      </div>

      {success ? (
        <div className="bg-green-900/30 text-green-400 p-4 rounded-lg mb-4 text-center border border-green-800">
          Payment simulated successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-400 mb-2">
              Amount (GHS)
            </label>
            <div className="relative">
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="10.00"
                min="1"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
              disabled={isSubmitting}
            >
              <Phone className="w-5 h-5 mr-2" />
              {isSubmitting ? 'Processing...' : 'Pay with Mobile Money'}
            </button>
            
            <button
              type="button"
              className="w-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg border border-gray-600 transition-colors"
              disabled={isSubmitting}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              {isSubmitting ? 'Processing...' : 'Pay with Card'}
            </button>
          </div>
        </form>
      )}

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">Powered by <span className="text-blue-400">Xtopay Boame</span></p>
      </div>
    </div>
  );
};

export default BoameWidget;