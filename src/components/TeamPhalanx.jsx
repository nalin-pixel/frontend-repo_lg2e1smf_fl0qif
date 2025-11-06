import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { role: 'Strategy', metrics: ['ICP → Offer Fit', 'Win paths mapped'] },
  { role: 'Acquisition', metrics: ['Channels tuned', 'Conversion lift'] },
  { role: 'Design', metrics: ['Systemized UI', 'Proof-first visuals'] },
  { role: 'Engineering', metrics: ['Fast stacks', 'Data integrity'] },
];

export default function TeamPhalanx() {
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
          Team Phalanx
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {team.map((t, idx) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              {/* Helmet silhouette */}
              <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-white/30">
                <div className="mx-auto mt-6 h-0.5 w-10 -skew-x-6 bg-white/50" />
              </div>
              <h3 className="text-lg font-medium">{t.role}</h3>
              <ul className="mt-3 space-y-1 text-sm text-white/70">
                {t.metrics.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
