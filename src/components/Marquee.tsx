"use client";

import { motion } from "framer-motion";

const brands = [
  "VALENTINO",
  "ALSHAYA",
  "HERMÈS",
  "GRACO",
  "Macksons",
  "Swift Furnishing",
];

export function Marquee() {
  // Duplicate brands array to make the infinite scroll smooth
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase">
          Trusted by leading brands
        </h3>
      </div>
      <div className="relative w-full flex items-center">
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: [0, -1035] }} // Depends on the text width, but we can use CSS animation or Framer Motion for it.
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div
              key={i}
              className="mx-12 lg:mx-20 text-2xl lg:text-3xl font-bold text-gray-300 uppercase tracking-wider"
              style={{
                fontFamily: ["VALENTINO", "HERMÈS"].includes(brand) ? 'Times New Roman, serif' : 'inherit'
              }}
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
