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
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  } as const;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#bae7fe] wave-bg">
      {/* Soft blue radial glow */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(57,188,252,0.15) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 80%, rgba(18,154,220,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto px-6 text-center relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-[#39bcfc]/30 shadow-sm shadow-sky-200 text-[#129adc] text-xs font-bold uppercase tracking-[0.15em]">
            <span className="w-2 h-2 rounded-full bg-[#39bcfc] animate-pulse inline-block" />
            Performance Marketing Agency · Sri Lanka
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-[#0A1128] leading-[1.06] tracking-tight mb-6"
        >
          We{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #39bcfc 0%, #129adc 100%)" }}
          >
            Engineer
          </span>
          <br className="hidden md:block" />
          Your Brand&apos;s{" "}
          <span className="relative inline-block">
            Digital Presence
            {/* Underline accent */}
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-[#39bcfc] to-[#129adc]"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
            />
          </span>
          .
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          An exemplary digital marketing journey for your brand — with a{" "}
          <span className="font-semibold text-[#0A1128]">360° wide scope</span>{" "}
          to cover all your digital needs through data, creativity and performance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://calendly.com/sparklemediacreatives/30min"
            id="hero-strategy-call-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 text-white text-base font-bold overflow-hidden transition-all hover:scale-105 inline-flex items-center gap-3 shadow-lg shadow-sky-300/60"
            style={{ background: "linear-gradient(135deg, #39bcfc 0%, #129adc 100%)" }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Book a Free Strategy Call
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          <a
            href="#services"
            id="hero-services-btn"
            className="group px-8 py-4 bg-white/70 backdrop-blur-sm border-2 border-[#39bcfc]/40 text-[#0A1128] text-base font-semibold hover:border-[#39bcfc] hover:text-[#129adc] transition-all inline-flex items-center gap-3"
          >
            View Our Services
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#39bcfc]/25 border border-[#39bcfc]/30 shadow-sm shadow-sky-200/50"
        >
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="bg-white/75 backdrop-blur-sm px-6 py-6 flex flex-col items-center text-center group hover:bg-white/90 transition-colors duration-200"
            >
              <span
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ backgroundImage: "linear-gradient(135deg, #39bcfc, #129adc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                {item.value}
              </span>
              <span className="text-xs font-bold text-[#0A1128] uppercase tracking-widest">{item.label}</span>
              <span className="text-[11px] text-gray-400 mt-0.5">{item.sub}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#129adc]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#39bcfc] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
