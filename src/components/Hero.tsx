"use client";

import { motion } from "framer-motion";

const trustItems = [
  "60X ROAS Generated (Lead Generation)",
  "20X ROAS Generated (E-Commerce & Retail)",
  "300%+ Organic Growth Achieved",
  "Multi-Country Campaign Experience",
  "Millions Managed in Ad Spend",
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
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-300/15 rounded-none blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-300/15 rounded-none blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-200/10 blur-3xl pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0A1128 1px, transparent 1px), linear-gradient(90deg, #0A1128 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="max-w-5xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
            Performance Marketing Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-black text-navy leading-[1.08] tracking-tight mb-8"
        >
          We Don&apos;t Chase Metrics.{" "}
          <br className="hidden md:block" />
          We{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Engineer Revenue Growth.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Sparkle Media helps ambitious brands{" "}
          <span className="font-semibold text-navy">acquire customers</span>,{" "}
          <span className="font-semibold text-navy">increase retention</span>, and{" "}
          <span className="font-semibold text-navy">scale profitably</span> through performance
          marketing, SEO, AI-first search visibility, and conversion-focused digital experiences.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="flex justify-center mb-16">
          <a
            href="https://calendly.com/sparklemediacreatives/30min"
            id="hero-strategy-call-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-navy text-white text-lg font-semibold overflow-hidden transition-transform hover:scale-105 inline-flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              Book Strategy Call
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-gray-600 font-medium"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-cyan-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {item}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
