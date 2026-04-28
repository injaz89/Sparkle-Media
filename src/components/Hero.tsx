"use client";

import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-white">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-300/20 rounded-none blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-300/20 rounded-none blur-3xl pointer-events-none mix-blend-multiply" />

      <motion.div
        className="max-w-5xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-navy leading-[1.1] tracking-tight mb-8"
        >
          Strategy-lead websites <br className="hidden md:block" />
          & marketing that{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            connect, convert, & grow
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Every brand has its own identity. We make them sparkle with data-driven
          strategies and creative excellence.
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center">
          <a
            href="#services"
            className="group relative px-8 py-4 bg-navy text-white text-lg font-medium rounded-none overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Check out our services
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
