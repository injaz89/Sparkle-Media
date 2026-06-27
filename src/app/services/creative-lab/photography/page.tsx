"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const photographyTypes = [
  {
    number: "01",
    title: "Corporate Team Photography",
    desc: "Ready to share your company's story with the world.",
    accent: "#00d4ff",
    symbol: "◈",
  },
  {
    number: "02",
    title: "Product Photography",
    desc: "Clean and clear photography highlighting your products best features.",
    accent: "#7c3aed",
    symbol: "◆",
  },
  {
    number: "03",
    title: "Commercial Photography",
    desc: "Showcase your products in the best light.",
    accent: "#00b4db",
    symbol: "◎",
  },
  {
    number: "04",
    title: "Event Photography",
    desc: "Capture the perfect moments of any event or occasion.",
    accent: "#4db8ff",
    symbol: "▲",
  },
  {
    number: "05",
    title: "Social Media Photography",
    desc: "Capturing the highest quality photos and editing them to perfection.",
    accent: "#7c3aed",
    symbol: "◇",
  },
];

export default function PhotographyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: "#f0faff" }}>

        {/* ── HERO ── */}
        <section className="pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
            style={{ background: "radial-gradient(circle at 90% 10%, rgba(0,212,255,0.12) 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(circle at 0% 100%, rgba(124,58,237,0.08) 0%, transparent 60%)" }} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-bold tracking-[0.18em] uppercase mb-5"
                  style={{ color: "#00d4ff" }}
                >
                  Creative Lab
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-8xl mb-6"
                  style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
                >
                  Photo&shy;graphy
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="h-px flex-1 max-w-[60px]" style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)" }} />
                  <p className="text-xl font-light" style={{ color: "#64748b" }}>
                    Capture moments with a story!
                  </p>
                </motion.div>
                <motion.a
                  href="https://calendly.com/sparklemediacreatives/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 8px 30px rgba(0,212,255,0.3)" }}
                >
                  Book a Session
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>

              {/* Right: intro copy */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="relative overflow-hidden p-10 text-white"
                style={{ background: "linear-gradient(135deg, #060f2e 0%, #0d1b4b 100%)" }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 100% 0%, rgba(0,212,255,0.25) 0%, transparent 70%)" }} />
                <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 0% 100%, rgba(124,58,237,0.2) 0%, transparent 70%)" }} />
                <div className="relative z-10 space-y-5 text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
                  <p>
                    If you are a brand or entrepreneur looking to work with a photographer who understands social media as well as traditional photography, Sparkle Media can help you create engaging content that leads to success.
                  </p>
                  <p>
                    Our bespoke approach means your brand will benefit from our experience, creativity and passion to deliver captivating high-quality content that followers want to engage with!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Photography Types ── */}
        <section className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(0,212,255,0.15)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, rgba(0,212,255,0.015) 0px, rgba(0,212,255,0.015) 1px, transparent 1px, transparent 30px)" }} />

          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5" style={{ color: "#00d4ff" }}>
                Our Specialties
              </span>
              <h2 className="text-5xl md:text-6xl" style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}>
                What sort of photographs<br className="hidden md:block" /> are you willing to capture?
              </h2>
            </motion.div>

            {/* Editorial numbered rows */}
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-[19px] top-6 bottom-6 w-px hidden sm:block"
                style={{ backgroundImage: "repeating-linear-gradient(180deg, rgba(0,212,255,0.35) 0px, rgba(0,212,255,0.35) 6px, transparent 6px, transparent 12px)" }} />
              <div className="space-y-0 divide-y" style={{ borderColor: "rgba(0,212,255,0.12)" }}>
                {photographyTypes.map((type, i) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 }}
                    className="group relative flex gap-8 py-8 sm:pl-14"
                  >
                    {/* Circle step node */}
                    <div
                      className="hidden sm:flex absolute left-0 top-8 w-10 h-10 rounded-full items-center justify-center flex-shrink-0 border-2 transition-all duration-300 group-hover:scale-110"
                      style={{ borderColor: `${type.accent}50`, background: `radial-gradient(circle, ${type.accent}18, transparent)` }}
                    >
                      <span className="text-xs font-black"
                        style={{ backgroundImage: `linear-gradient(135deg, ${type.accent}, ${type.accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {type.number}
                      </span>
                    </div>
                    {/* Hover sweep */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `linear-gradient(90deg, ${type.accent}07 0%, transparent 60%)` }} />
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="sm:hidden text-xs font-black" style={{ color: type.accent }}>{type.number}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5" style={{ color: type.accent, border: `1px solid ${type.accent}40` }}>
                          {type.symbol}
                        </span>
                      </div>
                      <h3 className="text-xl font-medium mb-2" style={{ color: "#060f2e", letterSpacing: "-0.02em" }}>{type.title}</h3>
                      <p className="font-light text-sm leading-relaxed" style={{ color: "#64748b" }}>{type.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
