import React from 'react';
import { motion } from 'framer-motion';

export default function VisualProof() {
  return (
    <section className="relative w-full bg-[#2D3741] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          Visual Proof
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-0"
          >
            <div className="aspect-[4/3] w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_55%)]" />
          </motion.div>

          {/* Right panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-white/10 via-white/5 to-transparent p-0"
          >
            <div className="aspect-[4/3] w-full bg-[conic-gradient(from_45deg_at_50%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
          </motion.div>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-white/70">
          Stills pulled from live funnels and product surfaces. Proof before prose.
        </p>
      </div>
    </section>
  );
}
