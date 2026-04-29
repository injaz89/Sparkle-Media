"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Gauge, Search, CheckCircle2 } from "lucide-react";

export default function WebsiteOptimisationPage() {
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
            <Gauge className="w-12 h-12" />
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
            className="text-5xl md:text-7xl font-black text-navy mb-8"
          >
            Website Optimisation
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-500 font-light leading-relaxed max-w-4xl mx-auto"
          >
            Drive traffic. Engage consumers. Make the sale. Sparkle Media truly does it all.
          </motion.h3>
        </div>

        {/* Website Optimisation Section */}
        <div className="bg-navy py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500 rounded-none blur-[200px] opacity-20 pointer-events-none transform -translate-y-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-cyan-50 font-light text-lg leading-relaxed"
              >
                <p>
                  Websites drive a brand&apos;s online success. The easier it is for consumers to find and navigate a website, the more likely it is that those consumers will take action. It&apos;s a simple truth: a well-optimized website equals better results for a business.
                </p>
                <p>
                  Website optimization involves the implementation of technical and creative tactics to holistically improve a site&apos;s ability to drive business goals. Consumers bounce from a webpage in seconds if load time takes too long or the design is not mobile-friendly. Every bounce means a business is losing out on valuable leads.
                </p>
                <p>
                  By identifying issues that may inhibit consumers from converting and implementing effective solutions, <span className="font-bold text-white">Sparkle Media</span> helps our clients&apos; websites achieve optimal performance and, ultimately, boost sales. Our team of experts is well-versed in technical and creative optimization services.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 backdrop-blur-sm relative"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Optimization That Drives Action</h3>
                <p className="text-cyan-100 font-light leading-relaxed mb-6">
                  Backed by a decade of experience in designing, developing and improving client websites. Our development team works on the backend to keep sites running smoothly while talented designers identify ways to improve UX.
                </p>
                <p className="text-cyan-100 font-light leading-relaxed">
                  Our teams work in conjunction with expert content and SEO marketers to ensure websites are discoverable in the search engine results pages (SERPs). We&apos;re there every step of the way to make certain our clients get the best possible ROI.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* SEO Features */}
        <div className="py-24 bg-white max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-100 p-12 hover:shadow-2xl hover:border-cyan-200 transition-all duration-300"
            >
              <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
                <Search className="w-10 h-10 text-cyan-500 mr-6" />
                <h3 className="text-3xl font-black text-navy">Search Engine Optimization</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">Technical audits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">Keyword planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">Content optimizations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
