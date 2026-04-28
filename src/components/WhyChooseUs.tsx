"use client";

import { motion } from "framer-motion";
import { LineChart, Lightbulb, TrendingUp } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Are you tired of ineffective marketing campaigns that fail to deliver results? At Sparkle Media, we believe in using data-driven strategies and creative thinking to drive real success for our clients. With a team of experienced professionals and a proven track record of success, we are confident that we can help your business reach its goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Data-Driven */}
          <motion.div 
            className="p-8 rounded-none bg-white shadow-xl shadow-cyan-900/5 hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-none flex items-center justify-center text-cyan-600 mb-6">
              <LineChart className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Data-Driven Focus</h3>
            <p className="text-gray-500 font-light">
              We leverage deep analytics and performance tracking to ensure every decision we make maximizes your ROI.
            </p>
          </motion.div>

          {/* Creative Excellence */}
          <motion.div 
            className="p-8 rounded-none bg-white shadow-xl shadow-cyan-900/5 hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-none flex items-center justify-center text-cyan-600 mb-6">
              <Lightbulb className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Creative Excellence</h3>
            <p className="text-gray-500 font-light">
              From high-end photography to bespoke branding, our aesthetic elevates your digital presence to luxury standards.
            </p>
          </motion.div>

          {/* Proven Results */}
          <motion.div 
            className="p-8 rounded-none bg-white shadow-xl shadow-cyan-900/5 hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-none flex items-center justify-center text-cyan-600 mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Proven Results</h3>
            <p className="text-gray-500 font-light">
              We focus on conversions. With a track record of scaling engagement and sales, our methods are tested and proven.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-2xl font-medium text-navy mb-6">Up for the challenge? Reach out to us!</p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-navy text-white font-semibold rounded-none hover:shadow-[0_0_20px_rgba(0,180,219,0.4)] transition-all hover:bg-cyan-600"
          >
            Book a Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
