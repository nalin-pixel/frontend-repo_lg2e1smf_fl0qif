import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Layers, BarChart3 } from 'lucide-react';

const stack = [
  {
    icon: Rocket,
    title: 'Go-To-Market Systems',
    lines: ['ICP resonance', 'Offer architecture', 'Outbound orchestration'],
  },
  {
    icon: Layers,
    title: 'Content Engine',
    lines: ['Signal > noise cadence', 'Proof-first narrative', 'Design system'],
  },
  {
    icon: BarChart3,
    title: 'Acquisition Analytics',
    lines: ['Attribution clarity', 'Lift measurement', 'Compounding insights'],
  },
];

export default function ServiceStack() {
  return (
    <section id="services" className="relative w-full bg-[#2D3741] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold sm:text-4xl"
        >
          The Service Stack
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stack.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-[#C0B283]"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-white/80" />
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-white/80">
                {item.lines.map((l) => (
                  <li key={l} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
                    {l}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
