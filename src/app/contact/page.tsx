"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Header & Text */}
          <div>
            <motion.p 
              className="text-cyan-500 font-bold tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Let&apos;s Talk
            </motion.p>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-navy mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Kick-start an exemplary digital journey.
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-500 font-light leading-relaxed max-w-lg mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Leave your details below and our team will get back to you within 24 hours to schedule a discovery call.
            </motion.p>
            
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2">Call Us</p>
                <a href="tel:+94776540689" className="text-3xl font-light text-navy hover:text-cyan-500 transition-colors">
                  (+94) 77 654 0689
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2">Email</p>
                <a href="mailto:hello@sparklemedia.lk" className="text-3xl font-light text-navy hover:text-cyan-500 transition-colors">
                  hello@sparklemedia.lk
                </a>
              </div>
            </motion.div>
          </div>

          {/* Premium Discovery Form */}
          <motion.div 
            className="bg-gray-50 rounded-none-[3rem] p-12 md:p-16 border border-gray-100 shadow-2xl shadow-cyan-900/5 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/50 rounded-none blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />
            
            <form className="relative z-10 space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-navy uppercase tracking-widest mb-3">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-xl text-navy focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-gray-300 font-light"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-navy uppercase tracking-widest mb-3">Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-xl text-navy focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-gray-300 font-light"
                  placeholder="+94 77 XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-navy uppercase tracking-widest mb-3">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-xl text-navy focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-gray-300 font-light"
                  placeholder="john@example.com"
                />
              </div>

              <div className="pt-8">
                <button 
                  type="button" 
                  className="w-full group bg-navy text-white px-8 py-5 rounded-none text-lg font-bold flex items-center justify-between hover:bg-cyan-600 transition-all shadow-xl shadow-navy/20 hover:shadow-cyan-500/40"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  );
}
