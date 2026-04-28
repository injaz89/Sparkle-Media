"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export function CreativeVideo() {
  return (
    <section className="py-24 bg-white text-navy overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
          <PlayCircle className="w-10 h-10 mr-4 text-cyan-400" />
          Video Production
        </h2>
        <p className="text-xl text-blue-100 font-light max-w-2xl">
          Cinematic storytelling built to convert. From full scale commercial shoots to rapid mobile-first TikTok content.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Full Scale Video */}
        <motion.div 
          className="relative h-[400px] rounded-none overflow-hidden group bg-gray-900 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Simulated Video BG Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 opacity-40" />
          
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <h3 className="text-3xl font-bold mb-2">Full Scale Video</h3>
            <p className="text-blue-200 font-light">High-end commercial films with professional crews, lighting, and heavy editing.</p>
          </div>
        </motion.div>

        {/* Mobile First */}
        <motion.div 
          className="relative h-[400px] rounded-none overflow-hidden group bg-gray-900 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Simulated Video BG Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900 to-transparent opacity-80 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 opacity-40" />
          
          <div className="absolute top-8 right-8 z-20">
            {/* 3-Second Challenge Micro-Interaction */}
            <motion.div 
              className="bg-red-500 text-navy text-xs font-black uppercase tracking-widest px-4 py-2 rounded-none flex items-center shadow-lg shadow-red-500/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="w-2 h-2 bg-white rounded-none mr-2 animate-ping" />
              3-sec challenge
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 p-8 z-20">
            <h3 className="text-3xl font-bold mb-2">Mobile First</h3>
            <p className="text-cyan-100 font-light">Fast-paced, highly engaging vertical content for TikTok, Reels, and Shorts.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
