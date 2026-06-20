"use client";

import { motion } from "framer-motion";
import { PenTool, Layers, Layout, Monitor } from "lucide-react";
import { useState } from "react";

const lookbook = [
  { id: "brochures", title: "Brochures", icon: Layout, desc: "High-end corporate literature and digital brochures designed to convert." },
  { id: "social", title: "Social Creatives", icon: Monitor, desc: "Scroll-stopping social media graphics that demand attention." },
  { id: "billboards", title: "Billboards", icon: Layers, desc: "Large format out-of-home advertising for maximum physical visibility." }
];

export function CreativeGraphics() {
  const [activeItem, setActiveItem] = useState("social");

  return (
    <section className="py-24 bg-bg border-t border-primary/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 flex items-center md:justify-center">
            <PenTool className="w-10 h-10 mr-4 text-secondary" />
            Graphic Design Lookbook
          </h2>
          <p className="text-xl text-gray-700 font-light max-w-2xl md:mx-auto">
            Explore our diverse portfolio of graphic design capabilities tailored for modern brands.
          </p>
        </div>

        {/* Lookbook Interactive Interface */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Controls */}
          <div className="w-full md:w-1/3 space-y-4">
            {lookbook.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full text-left p-6 rounded-none transition-all duration-300 border ${
                    isActive 
                      ? "bg-white border-primary shadow-xl shadow-sky-100/60 text-navy block" 
                      : "bg-white border-primary/20 hover:border-primary text-gray-500"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <Icon className={`w-6 h-6 mr-3 ${isActive ? 'text-secondary' : 'text-gray-400'}`} />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className={`font-light text-sm ${isActive ? 'text-gray-600' : 'text-gray-450'}`}>
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Viewer */}
          <div className="w-full md:w-2/3 bg-bg border border-primary/20 rounded-none h-[400px] md:h-[auto] relative overflow-hidden flex items-center justify-center p-8">
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full bg-white rounded-none shadow-xl border border-primary/20 flex items-center justify-center relative overflow-hidden group"
            >
              {/* Mock content representation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="relative z-10 text-center p-6">
                <PenTool className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-navy font-bold tracking-widest uppercase opacity-50">
                  {activeItem} preview
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
