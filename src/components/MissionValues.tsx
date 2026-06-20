"use client";

import { motion } from "framer-motion";
import { Compass, Target, Shield, HeartHandshake, Zap, BarChart } from "lucide-react";

export function MissionValues() {
  return (
    <section className="py-24 bg-bg border-t border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Mission */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-none shadow-[0_10px_40px_rgba(18,154,220,0.05)] border border-primary/20"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-none flex items-center justify-center text-white mb-8">
            <Compass className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-navy mb-6">Vision</h2>
          <p className="text-2xl text-gray-600 font-light leading-relaxed mb-8"></p>
          <h2 className="text-4xl font-bold text-navy mb-6">Mission</h2>
          <p className="text-2xl text-gray-600 font-light leading-relaxed">
            to help businesses of all sizes and nature succeed in the digital world
          </p>
        </motion.div>
 
        {/* Values */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-navy mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-none bg-white text-secondary flex items-center justify-center flex-shrink-0 border border-primary/20">
                <BarChart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2">Data-Driven</h4>
              </div>
            </div>
 
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-none bg-white text-secondary flex items-center justify-center flex-shrink-0 border border-primary/20">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2">Adaptability</h4>
              </div>
            </div>
 
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-none bg-white text-secondary flex items-center justify-center flex-shrink-0 border border-primary/20">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2">Collaboration / Partnership</h4>
              </div>
            </div>
 
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-none bg-white text-secondary flex items-center justify-center flex-shrink-0 border border-primary/20">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-2">Integrity</h4>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
