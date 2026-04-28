"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "6+",
    label: "Operating Countries",
  },
  {
    value: "2M+",
    label: "Budget Handled (LKR)",
  },
  {
    value: "350+",
    label: "Digital Deliverables",
  },
  {
    value: "35+",
    label: "Team Members",
  },
];

export function Stats() {
  return (
    <section className="py-12 bg-white relative border-b border-gray-100 shadow-sm z-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-wrap md:flex-nowrap items-center justify-between gap-8 md:gap-12 divide-x divide-gray-100">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="text-center flex-1 w-full p-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-blue-600">
              {stat.value}
            </div>
            <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
