"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const graphicTypes = [
  {
    number: "01",
    title: "Brochures & Magazine Design",
    desc: "Capture your readers' attention and leave a lasting impression.",
    accent: "#00d4ff",
    colorBg: "linear-gradient(135deg, #00d4ff22, #0099cc11)",
    symbol: "B",
  },
  {
    number: "02",
    title: "Social Media & Digital Creatives",
    desc: "Take your advertising campaigns to the next level with eye-catching designs that get your message noticed.",
    accent: "#7c3aed",
    colorBg: "linear-gradient(135deg, #7c3aed22, #4c1d9511)",
    symbol: "S",
  },
  {
    number: "03",
    title: "Email and Powerpoint Designs",
    desc: "Create email and powerpoint templates that are both visually appealing and effective in communicating your message.",
    accent: "#00b4db",
    colorBg: "linear-gradient(135deg, #00b4db22, #0099cc11)",
    symbol: "E",
  },
  {
    number: "04",
    title: "Billboards and Banners",
    desc: "If you're looking for a way to get more attention for your enterprise, business banners and billboards are two of the best.",
    accent: "#4db8ff",
    colorBg: "linear-gradient(135deg, #4db8ff22, #00d4ff11)",
    symbol: "B",
  },
];

export default function GraphicDesigningPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: "#f0faff" }}>

        {/* ── HERO ── */}
        <section className="pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 60% 20%, rgba(0,212,255,0.1) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(124,58,237,0.08) 0%, transparent 55%)" }} />

          {/* Decorative shapes */}
          <div className="absolute top-32 right-20 w-56 h-56 rounded-full opacity-10 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }} />
          <div className="absolute bottom-10 left-32 w-32 h-32 opacity-8 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #7c3aed, #00d4ff)", transform: "rotate(45deg)" }} />

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-24 h-24 mx-auto rounded-[2rem] rotate-3 flex items-center justify-center text-white mb-8"
              style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 20px 60px rgba(0,212,255,0.4)" }}
            >
              <svg className="w-12 h-12 -rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-xs font-bold tracking-[0.18em] uppercase mb-5" style={{ color: "#00d4ff" }}>
              Creative Lab
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl mb-6" style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}>
              Graphic Designing
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8" style={{ color: "#64748b" }}>
              Give your brand life with creativity!
            </motion.p>
            <motion.a
              href="https://calendly.com/sparklemediacreatives/30min"
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 8px 30px rgba(0,212,255,0.35)" }}
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </div>
        </section>

        {/* ── About copy ── */}
        <section className="py-20 relative" style={{ borderTop: "1px solid rgba(0,212,255,0.15)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden p-10 md:p-16 space-y-6"
              style={{ background: "white", border: "1px solid rgba(0,212,255,0.18)", boxShadow: "0 20px 60px rgba(0,212,255,0.08)" }}
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{ background: "radial-gradient(circle at 100% 0%, rgba(0,212,255,0.12) 0%, transparent 70%)" }} />
              <div className="absolute bottom-0 left-0 w-1 h-full"
                style={{ background: "linear-gradient(180deg, #00d4ff, #7c3aed)" }} />
              <p className="text-lg font-light text-gray-600 leading-loose pl-4">
                Sparkle Media&apos;s graphic design incorporates the latest trends and best practices into a work of art. Our graphic designers are well-trained to deliver creative solutions that not only make your brand stand out but also ensure your brand reaches out to a broad audience through effective branding.
              </p>
              <p className="text-lg font-light text-gray-600 leading-loose pl-4">
                Our team of experienced designers will help you create a fresh, convincing, and memorable brand identity to establish a great impression on prospective clients while remaining at the forefront of technology.
              </p>
              <p className="text-base font-semibold text-navy border-l-4 border-secondary pl-6 italic">
                Whether you&apos;re looking for a new logo or business cards, leaflets and posters, we&apos;ve got you covered with many more stunning visuals for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Graphic Types — bento cards ── */}
        <section className="py-24 relative overflow-hidden" style={{ borderTop: "1px solid rgba(0,212,255,0.12)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5" style={{ color: "#00d4ff" }}>Our Services</span>
              <h2 className="text-5xl md:text-6xl" style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}>
                Choose the type of creativity<br className="hidden md:block" /> your brand really needs!
              </h2>
            </motion.div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {graphicTypes.map((type, i) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="group relative overflow-hidden p-10 transition-all duration-300"
                  style={{ background: "white", border: "1px solid rgba(0,212,255,0.18)" }}
                  whileHover={{ y: -4 }}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${type.accent}70, transparent)` }} />
                  <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(180deg, ${type.accent}, ${type.accent}44)` }} />

                  {/* Large bg watermark */}
                  <div className="absolute -right-4 -bottom-6 text-[100px] font-black leading-none select-none pointer-events-none"
                    style={{ backgroundImage: `linear-gradient(135deg, ${type.accent}20, transparent)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {type.symbol}
                  </div>

                  {/* Hover bg */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `linear-gradient(135deg, ${type.accent}05 0%, transparent 60%)` }} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-black" style={{ color: `${type.accent}90` }}>{type.number}</span>
                      <div className="flex-1 h-px" style={{ background: `${type.accent}30` }} />
                    </div>
                    <h3 className="text-2xl mb-3" style={{ color: "#060f2e", fontWeight: 400, letterSpacing: "-0.02em" }}>{type.title}</h3>
                    <p className="text-base font-light leading-relaxed" style={{ color: "#64748b" }}>{type.desc}</p>
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: type.accent }}>Learn More</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke={type.accent}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
