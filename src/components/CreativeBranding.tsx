"use client";

import { motion } from "framer-motion";
import { Fingerprint, BookOpen, Mail } from "lucide-react";

export function CreativeBranding() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-100 rounded-none blur-[100px] opacity-50 pointer-events-none" 
        />
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 flex items-center">
            <Fingerprint className="w-10 h-10 mr-4 text-cyan-500" />
            Brand Story & Identity
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl">
            A brand is more than a logo. We craft the entire narrative, rules, and visual foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-10 rounded-none border border-gray-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-cyan-50 rounded-none flex items-center justify-center text-cyan-500 mb-6">
              <Fingerprint className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Logo Design</h3>
            <p className="text-gray-500 font-light">
              Crafting timeless, memorable marks that immediately communicate your brand&apos;s essence to the market.
            </p>
          </motion.div>

          <motion.div 
            className="bg-cyan-500 p-10 rounded-none border border-cyan-400 shadow-2xl shadow-cyan-500/20 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-14 h-14 bg-white rounded-none flex items-center justify-center text-cyan-300 mb-6">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Brand Guidelines</h3>
            <p className="text-white font-light">
              The rulebook for your brand. Typography, color palettes, tone of voice, and usage spacing mapped clearly.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-10 rounded-none border border-gray-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-14 h-14 bg-cyan-50 rounded-none flex items-center justify-center text-cyan-500 mb-6">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Letterheads & Assests</h3>
            <p className="text-gray-500 font-light">
              Corporate identity packs including business cards, letterheads, and email signatures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
