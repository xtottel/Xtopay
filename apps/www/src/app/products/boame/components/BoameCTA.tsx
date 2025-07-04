"use client";

import { motion } from "framer-motion";
import { Container } from "@/layout/Container";
//import Button from "@/ui/Button";

export default function BoameCTA() {
  return (
    <section className="py-15 bg-blue-600">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Start Receiving Support in Minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
          >
            Create your free Boame widget today. No coding required.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 font-medium text-lg">
              Create Your Boame Widget
            </button>

            {/* <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700"
            >
              Create Your Boame Widget
            </Button> */}

            <p className="mt-4 text-blue-100">Requires a free Xtopay account</p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
