"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Gauge } from "lucide-react";

const optimizationFocus = [
  {
    num: "01",
    title: "Technical Audits",
    desc: "We perform deep diagnostics on page speed, indexability, security, structure, and redirect paths to eliminate any roadblocks.",
    accent: "#00d4ff",
  },
  {
    num: "02",
    title: "Keyword & Search Intent Planning",
    desc: "Finding and targeting the highest-converting searches your buyers make daily, positioning your brand as the obvious solution.",
    accent: "#7c3aed",
  },
  {
    num: "03",
    title: "On-Page & Content Optimizations",
    desc: "Writing search-optimized, high-converting metadata, schema, and web copy that engages visitors and wins higher rankings.",
    accent: "#4db8ff",
  },
];

export default function WebsiteOptimisationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 min-h-screen" style={{ background: "#f0faff" }}>
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 mx-auto rounded-[2rem] rotate-3 flex items-center justify-center text-white mb-8"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 20px 60px rgba(0,212,255,0.4)" }}
          >
            <Gauge className="w-12 h-12 -rotate-3" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-[0.18em] uppercase mb-5"
            style={{ color: "#00d4ff" }}
          >
            Tech Lab
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl mb-8"
            style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
          >
            Website Optimisation
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-light leading-relaxed max-w-4xl mx-auto"
            style={{ color: "#64748b" }}
          >
            Drive traffic. Engage consumers. Make the sale. Sparkle Media truly does it all.
          </motion.h3>
        </div>

        {/* Website Optimisation Intro Section */}
        <div className="py-24 border-t border-primary/20 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary blur-[200px] opacity-20 pointer-events-none transform -translate-y-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-650 font-light text-lg leading-relaxed"
              >
                <p>
                  Websites drive a brand&apos;s online success. The easier it is for consumers to find and navigate a website, the more likely it is that those consumers will take action. It&apos;s a simple truth: a well-optimized website equals better results for a business.
                </p>
                <p>
                  Website optimization involves the implementation of technical and creative tactics to holistically improve a site&apos;s ability to drive business goals. Consumers bounce from a webpage in seconds if load time takes too long or the design is not mobile-friendly. Every bounce means a business is losing out on valuable leads.
                </p>
                <p>
                  By identifying issues that may inhibit consumers from converting and implementing effective solutions, <span className="font-bold text-navy">Sparkle Media</span> helps our clients&apos; websites achieve optimal performance and, ultimately, boost sales. Our team of experts is well-versed in technical and creative optimization services.
                </p>
              </motion.div>
 
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-primary/20 p-10 relative overflow-hidden"
                style={{ boxShadow: "0 20px 60px rgba(0,212,255,0.08)" }}
              >
                {/* Left gradient accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "linear-gradient(180deg, #00d4ff, #7c3aed)" }} />
                <h3 className="text-2xl font-bold text-navy mb-4">Optimization That Drives Action</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Backed by a decade of experience in designing, developing and improving client websites. Our development team works on the backend to keep sites running smoothly while talented designers identify ways to improve UX.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  Our teams work in conjunction with expert content and SEO marketers to ensure websites are discoverable in the search engine results pages (SERPs). We&apos;re there every step of the way to make certain our clients get the best possible ROI.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Dynamic Numbered Stepper Columns for SEO features */}
        <div className="py-24 max-w-7xl mx-auto px-6 border-t border-primary/20">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: "#00d4ff" }}>
              Our Focus Areas
            </span>
            <h2 className="text-4xl md:text-5xl" style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}>
              Search Engine Optimization
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {optimizationFocus.map((focus, i) => (
              <motion.div
                key={focus.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white p-8 overflow-hidden transition-all duration-300"
                style={{ border: "1px solid rgba(0,212,255,0.18)" }}
                whileHover={{ y: -4, borderColor: `${focus.accent}40` }}
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${focus.accent}60, transparent)` }} />
                <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(180deg, ${focus.accent}, ${focus.accent}44)` }} />
                
                {/* Large watermark number */}
                <div className="absolute right-4 bottom-2 text-[80px] font-black leading-none select-none pointer-events-none"
                  style={{ backgroundImage: `linear-gradient(135deg, ${focus.accent}15, transparent)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {focus.num}
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-black tracking-widest mb-3 block" style={{ color: focus.accent }}>
                    {focus.num}
                  </span>
                  <h3 className="text-xl font-bold text-navy mb-4 leading-snug">{focus.title}</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{focus.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
