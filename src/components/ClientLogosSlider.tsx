"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

// Real client logos
const clients = [
  { name: "Transguard", img: "/client-transguard.jpg" },
  { name: "Xcuses", img: "/client-xcuses.png" },
  { name: "Macksons", img: "/client-macksons.png" },
  { name: "Prestige Auto Detailers", img: "/client-prestige-auto.png" },
  { name: "Gems & Gifts Jewelry", img: "/client-gems-gifts.jpg" },
  { name: "ICCT", img: "/client-icct.jpg" },
  { name: "Real Estate", img: "/client-realestate.png" },
  { name: "Graco", img: "/client-graco.webp" },
  { name: "Kandy Vehicle Mart", img: "/client-kandy-vehicle-mart.png" },
  { name: "Swift Furnishing", img: "/client-swift-furnishing.png" },
  { name: "HiAcuity", img: "/client-hiacuity.png" },
  { name: "Nexcite Technology", img: "/client-nexcite.png" },
  { name: "MyBaby Cuddles", img: "/client-mybaby-cuddles.webp" },
  { name: "Made in Ceylon", img: "/client-made-in-ceylon.png" },
  { name: "Silik Jay", img: "/client-silik-jay.jpg" },
];

export function ClientLogosSlider({ title = "Trusted by leading brands", dark = false }: { title?: string; dark?: boolean }) {
  const duplicated = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className={`py-16 overflow-hidden border-b ${dark ? "border-white/10" : "border-[rgba(0,212,255,0.15)]"}`}
      style={{ background: dark ? "#0d1b4b" : "#f0faff" }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3
          className="text-xs font-bold tracking-[0.18em] uppercase"
          style={{ color: dark ? "rgba(255,255,255,0.6)" : "#00d4ff" }}
        >
          {title}
        </h3>
      </div>

      <div className="relative w-full flex items-center">
        {/* Edge fades */}
        <div
          className="absolute left-0 w-32 h-full z-10"
          style={{ background: `linear-gradient(to right, ${dark ? "#0d1b4b" : "#f0faff"}, transparent)` }}
        />
        <div
          className="absolute right-0 w-32 h-full z-10"
          style={{ background: `linear-gradient(to left, ${dark ? "#0d1b4b" : "#f0faff"}, transparent)` }}
        />

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
                dark ? "opacity-75 hover:opacity-100" : "opacity-85 hover:opacity-100"
              } transition-opacity duration-300`}
            >
              {client.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={client.img}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain"
                  style={{ filter: "none" }}
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
