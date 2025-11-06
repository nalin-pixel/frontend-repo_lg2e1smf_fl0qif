import React from 'react';
import { motion } from 'framer-motion';

export default function FooterCTA() {
  return (
    <footer id="cta" className="relative w-full bg-[#2D3741] py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Book a working session
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-white/80"
        >
          One conversation. Clear next steps. Measurable lift.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3"
        >
          <div className="aspect-[16/9] w-full">
            <iframe
              title="Calendly"
              src="https://calendly.com/"
              className="h-full w-full"
            />
          </div>
        </motion.div>

        <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} Luxury Verticalised</p>
      </div>
    </footer>
  );
}
