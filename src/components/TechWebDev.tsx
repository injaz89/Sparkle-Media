"use client";

import { motion } from "framer-motion";
import { Globe, Database, ShoppingCart, CreditCard } from "lucide-react";
import Image from "next/image";

const capabilities = [
  { icon: Database, title: "PHP/MySQL Custom Systems", desc: "Bespoke database-driven solutions tailored for your internal logic." },
  { icon: ShoppingCart, title: "eCommerce Stores", desc: "High-converting online stores built on scalable infrastructures." },
  { icon: CreditCard, title: "Payment Gateways", desc: "Seamless local and international payment gateway integrations." },
];

export function TechWebDev() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 flex items-center justify-center">
            <Globe className="w-10 h-10 mr-4 text-cyan-500" />
            Web Development
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
            We don&apos;t just build websites; we build digital platforms. Optimized for performance, security, and conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Capabilities */}
          <div className="space-y-8">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div 
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-14 h-14 bg-cyan-50 text-cyan-500 rounded-none flex items-center justify-center shrink-0 mr-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-2">{cap.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{cap.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Portfolio Highlights */}
          <div className="relative h-[600px] w-full">
            <motion.div 
              className="absolute top-0 right-0 w-[80%] h-[350px] rounded-none overflow-hidden shadow-2xl shadow-cyan-900/20 z-10 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image src="/prestige_auto.png" alt="Prestige Auto Detailers" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-none text-sm font-bold text-navy shadow-sm">
                Prestige Auto Detailers
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 left-0 w-[70%] h-[350px] rounded-none overflow-hidden shadow-2xl shadow-cyan-900/20 z-20 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Image src="/hiacuity.png" alt="HiAcuity" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-none text-sm font-bold text-navy shadow-sm">
                HiAcuity
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
