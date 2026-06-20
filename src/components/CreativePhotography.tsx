"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const categories = [
  {
    name: "Commercial",
    span: "col-span-1 md:col-span-2 row-span-2",
    grad: "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
  },
  {
    name: "Product",
    span: "col-span-1",
    grad: "linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%)",
  },
  {
    name: "Corporate",
    span: "col-span-1",
    grad: "linear-gradient(135deg, #0099cc 0%, #7c3aed 100%)",
  },
  {
    name: "Event",
    span: "col-span-1",
    grad: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
  },
  {
    name: "Social Media",
    span: "col-span-1",
    grad: "linear-gradient(135deg, #7c3aed 0%, #0099cc 100%)",
  },
];

export function CreativePhotography() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "#f0faff",
        borderTop: "1px solid rgba(0,212,255,0.15)",
        borderBottom: "1px solid rgba(0,212,255,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
            style={{ color: "#00d4ff" }}
          >
            Creative Lab
          </span>
          <h2
            className="text-5xl md:text-6xl mb-4 flex items-center gap-4"
            style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
          >
            <Camera className="w-10 h-10 flex-shrink-0" style={{ color: "#00d4ff" }} />
            Photography
          </h2>
          <p className="text-xl font-light max-w-2xl leading-relaxed" style={{ color: "#64748b" }}>
            High-fidelity visuals that capture the true essence of your brand across all formats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              className={`${cat.span} relative overflow-hidden group cursor-pointer`}
              style={{ background: cat.grad }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
              />
              <div className="absolute inset-0 p-8 flex items-end">
                <h3 className="text-2xl md:text-3xl font-light text-white tracking-wide group-hover:-translate-y-2 transition-transform duration-300"
                  style={{ letterSpacing: "-0.02em" }}>
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
