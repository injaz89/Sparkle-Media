"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-white min-h-screen">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 mx-auto rounded-none flex items-center justify-center text-white mb-8 shadow-2xl shadow-cyan-500/30"
          >
            <Cpu className="w-12 h-12" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-500 font-bold tracking-widest uppercase mb-4"
          >
            Tech Lab
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-navy mb-8 leading-tight"
          >
            Software Development <br className="hidden md:block"/> & Implementation
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-500 font-light leading-relaxed max-w-4xl mx-auto"
          >
            You're ready to transform your idea into a reality. Let us help you make sure that your project goes smoothly from start to finish.
          </motion.h3>
        </div>

        {/* Software Development & Implementation Content */}
        <div className="py-24 bg-gray-50 relative overflow-hidden border-t border-gray-100">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-none blur-[150px] opacity-20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              <div className="lg:w-1/2 relative z-10">
                <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                  Software Development Services are the new way to get your company off the ground. Software development services have become more popular than ever before, and now more than ever we can help you take the time and money out of building your own software.
                </p>
                <div className="p-6 bg-white border-l-4 border-cyan-400 shadow-sm mb-6">
                  <p className="text-navy font-medium text-lg">
                    With our dedicated teams and staff augmentation services, we have the expertise you need to get your project done right—and done fast.
                  </p>
                </div>
                <p className="text-gray-600 font-light text-lg leading-relaxed">
                  We know that it's not an easy task, and we're here to help. Sparkle Media provides high-quality, cost-effective, reliable, full-cycle bespoke software development that matches your specific needs, budget, and timeframe. Increase your competitive advantage with a custom solution. Sparkle Media also provides QA & software testing services to fulfill all your quality and testing needs.
                </p>
              </div>

              <div className="lg:w-1/2 space-y-6 text-gray-600 font-light text-lg leading-relaxed relative z-10">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 shadow-2xl shadow-cyan-900/5 mb-8"
                >
                  <h3 className="text-2xl font-bold text-navy mb-4">Dedicated Teams</h3>
                  <p>
                    We offer tailor-made software development services for startups, medium-sized companies, and large enterprises. Sparkle Media's Dedicated Team model provides high-quality software development services for our clients, offering a simple, affordable answer to build-up of any software project. Team sizes are adjusted to accommodate changing requirements.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-10 shadow-2xl shadow-cyan-900/5"
                >
                  <h3 className="text-2xl font-bold text-navy mb-4">Staff Augmentation</h3>
                  <p>
                    Staff augmentation is a staffing solution designed to provide IT expertise on an as-needed basis. By using an IT staff augmentation service, companies can augment their in-house IT staff with qualified, experienced engineers on a short or long-term basis. Don't let your team be spread too thin by trying to do it all yourself.
                  </p>
                </motion.div>
              </div>

            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
