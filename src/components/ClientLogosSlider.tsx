"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

// Client logo images from /public (add more as they arrive in Drive)
const clients = [
  { name: "HiAcuity", img: "/hiacuity.png" },
  { name: "Made in Ceylon", img: "/made_in_ceylon.png" },
  { name: "Prestige Auto", img: "/prestige_auto.png" },
  // Text fallbacks for clients awaiting logo upload
  { name: "Select Group", img: null },
  { name: "Mysk", img: null },
  { name: "Alshaya", img: null },
  { name: "Swift Furnishing", img: null },
  { name: "Macksons", img: null },
];

export function ClientLogosSlider({ title = "Trusted by leading brands", dark = false }: { title?: string; dark?: boolean }) {
  const duplicated = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className={`py-16 overflow-hidden border-b ${dark ? "bg-navy border-white/10" : "bg-white border-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className={`text-xs font-bold tracking-widest uppercase ${dark ? "text-gray-400" : "text-gray-400"}`}>
          {title}
        </h3>
      </div>

      <div className="relative w-full flex items-center">
        {/* Edge fades */}
        <div className={`absolute left-0 w-32 h-full bg-gradient-to-r ${dark ? "from-navy" : "from-white"} to-transparent z-10`} />
        <div className={`absolute right-0 w-32 h-full bg-gradient-to-l ${dark ? "from-navy" : "from-white"} to-transparent z-10`} />

        <motion.div
          className="flex whitespace-nowrap items-center gap-0"
          animate={{ x: [0, -2400] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {duplicated.map((client, i) => (
            <div
              key={i}
              className={`mx-10 lg:mx-16 flex items-center justify-center h-14 w-36 flex-shrink-0 ${
                dark ? "opacity-40 hover:opacity-100" : "opacity-50 hover:opacity-100"
              } transition-opacity duration-300`}
            >
              {client.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain"
                  style={{ filter: dark ? "brightness(0) invert(1)" : "grayscale(100%)" }}
                />
              ) : (
                <span
                  className={`text-xl lg:text-2xl font-bold uppercase tracking-wider ${dark ? "text-gray-500" : "text-gray-300"}`}
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
