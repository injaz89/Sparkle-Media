"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const categories = [
  { name: "Commercial", span: "col-span-1 md:col-span-2 row-span-2", bg: "bg-secondary" },
  { name: "Product", span: "col-span-1", bg: "bg-primary" },
  { name: "Corporate", span: "col-span-1", bg: "bg-[#0e7db3]" },
  { name: "Event", span: "col-span-1", bg: "bg-[#28abeb]" },
  { name: "Social Media", span: "col-span-1", bg: "bg-secondary" },
];

export function CreativePhotography() {
  return (
    <section className="py-24 bg-bg border-y border-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 flex items-center">
            <Camera className="w-10 h-10 mr-4 text-secondary" />
            Photography
          </h2>
          <p className="text-xl text-gray-700 font-light max-w-2xl">
            High-fidelity visuals that capture the true essence of your brand across all formats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className={`${cat.span} ${cat.bg} rounded-none relative overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              {/* Optional background image hook here */}
              <div className="absolute inset-0 p-8 flex items-end">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide group-hover:translate-y-[-10px] transition-transform duration-300">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
