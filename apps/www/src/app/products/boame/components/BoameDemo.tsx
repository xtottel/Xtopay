"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";

export default function BoameDemo() {
  return (
    <section className="py-15 bg-gradient-to-b from-pink-50 via-pink-100 to-white
">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Boame in Action</h2>
            <p className="text-xl text-gray-600">Try our interactive demo below</p>
          </motion.div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-xs">
                  {/* Demo widget would go here */}
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-4">Support My Work</h3>
                    <div className="space-y-4 max-w-xs mx-auto">
                      <input 
                        type="number" 
                        placeholder="Enter amount (GHS)" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                        Send via Mobile Money
                      </button>
                      <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg border border-gray-300">
                        Pay with Card
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-xl font-medium mb-4">How to Add to Your Site</h3>
                <div className="bg-gray-800 rounded-lg p-4 text-gray-100 font-mono text-sm overflow-x-auto">
                  <pre>{`<!-- Add this to your website -->\n<script src="https://xtopay.com/boame.js"></script>\n<div class="boame-widget" data-user="your-username"></div>`}</pre>
                </div>
                <p className="mt-4 text-gray-600">Or simply share your Boame link: <span className="font-medium">xtopay.com/boame/you</span></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}