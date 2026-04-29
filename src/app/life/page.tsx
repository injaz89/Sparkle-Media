"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LifeAtSparkleMediaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-white min-h-screen flex flex-col">
        
        {/* Life at Sparkle Media Content */}
        <div className="bg-navy flex-grow flex items-center py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500 rounded-none blur-[200px] opacity-10 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-8"
            >
              <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white mb-8"
            >
              Life at Sparkle Media
            </motion.h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-400 mx-auto mb-12" />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl text-cyan-50 font-light leading-relaxed mb-8"
            >
              Life at Sparkle Media can be exciting and rewarding. You get to work with a diverse team of people who are passionate about digital marketing and are constantly learning and innovating.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-cyan-100 font-light leading-relaxed mb-8"
            >
              You'll be involved in the creative process of developing campaigns, creating content, and measuring results. You'll also be exposed to the latest technologies and strategies so you can stay ahead of the competition. 
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="border-t border-white/10 pt-12 mt-12"
            >
              <p className="text-2xl text-cyan-50 font-medium italic leading-relaxed">
                "The hours can be long and the work can be demanding, but the rewards can be great. Working with Sparkle Media can be very rewarding, as you get to help businesses reach their goals and build their brand."
              </p>
            </motion.div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
