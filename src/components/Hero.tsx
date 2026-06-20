"use client";

import { motion } from "framer-motion";

const trustItems = [
  { value: "60X", label: "ROAS Generated", sub: "Lead Generation" },
  { value: "20X", label: "ROAS Generated", sub: "E-Commerce & Retail" },
  { value: "300%+", label: "Organic Growth", sub: "SEO & Content" },
  { value: "360°", label: "Service Scope", sub: "All Digital Needs" },
];

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  } as const;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">

      {/* ── Deep gradient background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, #060f2e 0%, #0d1b4b 40%, #071a3e 70%, #060f2e 100%)",
        }}
      />

      {/* ── Radial glow top-right (cyan) ── */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(0,212,255,0.18) 0%, transparent 55%)",
        }}
      />

      {/* ── Radial glow bottom-left (violet) ── */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 10% 90%, rgba(124,58,237,0.18) 0%, transparent 55%)",
        }}
      />

      {/* ── Animated floating orb ── */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Grid dot overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,212,255,0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* ── Animated diagonal lines ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 60px)",
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto px-6 text-center relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Badge ── */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2.5 px-5 py-2 border text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm"
            style={{
              borderColor: "rgba(0,212,255,0.35)",
              background: "rgba(0,212,255,0.08)",
              color: "#00d4ff",
            }}
          >
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{
                background: "#00d4ff",
                boxShadow: "0 0 8px #00d4ff",
                animation: "pulseGlow 2s ease-in-out infinite",
              }}
            />
            Performance Marketing Agency · Sri Lanka
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.04] tracking-[-0.04em] mb-6 text-white"
          style={{ fontWeight: 200 }}
        >
          We{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 300,
            }}
          >
            Engineer
          </span>
          <br className="hidden md:block" />
          Your Brand&apos;s{" "}
          <span className="relative inline-block">
            <span style={{ fontWeight: 300 }}>Digital Presence</span>
            {/* Animated underline */}
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-[2px]"
              style={{
                background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
              }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.9, ease: "easeOut" }}
            />
          </span>
          .
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)", fontWeight: 300 }}
        >
          An exemplary digital marketing journey for your brand — with a{" "}
          <span className="font-semibold text-white">360° wide scope</span>{" "}
          to cover all your digital needs through data, creativity and performance.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://calendly.com/sparklemediacreatives/30min"
            id="hero-strategy-call-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 text-white text-sm font-semibold overflow-hidden transition-all hover:scale-105 inline-flex items-center gap-3 tracking-wide"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
              boxShadow: "0 0 30px rgba(0,212,255,0.4), 0 4px 24px rgba(124,58,237,0.25)",
            }}
          >
            {/* Shimmer */}
            <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-3">
              Book a Free Strategy Call
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>

          <a
            href="#services"
            id="hero-services-btn"
            className="group px-8 py-4 text-sm font-semibold hover:scale-105 transition-all inline-flex items-center gap-3 backdrop-blur-sm"
            style={{
              border: "1px solid rgba(0,212,255,0.35)",
              color: "rgba(255,255,255,0.85)",
              background: "rgba(0,212,255,0.06)",
            }}
          >
            View Our Services
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* ── Stats Bar ── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ border: "1px solid rgba(0,212,255,0.18)" }}
        >
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="px-6 py-7 flex flex-col items-center text-center group cursor-default transition-all duration-300"
              style={{
                background: "rgba(0,212,255,0.04)",
                borderRight: i < 3 ? "1px solid rgba(0,212,255,0.15)" : undefined,
              }}
            >
              <motion.span
                className="text-3xl md:text-4xl mb-1"
                style={{
                  backgroundImage: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 700,
                }}
                whileHover={{ scale: 1.08 }}
              >
                {item.value}
              </motion.span>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.15em]">{item.label}</span>
              <span className="text-[11px] mt-0.5" style={{ color: "rgba(0,212,255,0.6)" }}>{item.sub}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold" style={{ color: "rgba(0,212,255,0.6)" }}>Scroll</span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, #00d4ff, transparent)",
            animation: "pulseGlow 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
