"use client";

import { motion } from "framer-motion";

export function CultureGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Culture</h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            A glimpse into our daily life, celebrations, and creative sessions.
          </p>
        </div>

        {/* Masonry Layout Approximation using CSS columns or Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {[
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
            "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800",
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
          ].map((src, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid relative rounded-none overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
            >
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src={src} alt="Culture Gallery" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
