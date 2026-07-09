"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HomeCtaBanner() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #e0f6ff 0%, #f0faff 40%, #e8f3ff 70%, #eef0ff 100%)",
      }}
    >
      {/* Top and bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-line" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, #87d4f8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow blobs */}
      <motion.div
        className="absolute pointer-events-none hidden md:block"
        style={{
          width: "600px", height: "350px",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, rgba(124,58,237,0.06) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute top-0 left-0 w-[350px] h-[350px] pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(circle at 0% 0%, rgba(0,212,255,0.1) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(circle at 100% 100%, rgba(124,58,237,0.08) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Diagonal accent lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Sparkle particles */}
      {[
        { x: "8%",  y: "20%", delay: 0 },
        { x: "92%", y: "15%", delay: 1 },
        { x: "12%", y: "75%", delay: 0.5 },
        { x: "88%", y: "70%", delay: 1.5 },
        { x: "50%", y: "8%",  delay: 0.8 },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: s.x, top: s.y,
            animation: `sparkle ${3 + i * 0.5}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
              fill="rgba(0,212,255,0.45)"
            />
          </svg>
        </div>
      ))}

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Urgency label */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black tracking-[.25em] uppercase font-mono"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#0099cc",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#00d4ff", animation: "pulseGlow 2s ease-in-out infinite" }}
            />
            Limited Spots This Month
          </span>
        </motion.div>

        {/* Big headline */}
        <motion.h2
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          style={{ color: "#060f2e", letterSpacing: "-0.04em" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Ready to{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 60%, #00d4ff 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 4s ease-in-out infinite",
            }}
          >
            grow your revenue?
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#64748b" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Book a free 30-minute growth audit and discover exactly how to{" "}
          <span className="font-semibold" style={{ color: "#060f2e" }}>scale your returns with AI-powered marketing</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Primary */}
          <Link
            href="/contact"
            id="cta-banner-primary-btn"
            className="group relative inline-flex items-center gap-3 px-10 py-5 text-base font-black rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #2ee8ff 0%, #00d4ff 50%, #009ac2 100%)",
              color: "#04091f",
              boxShadow: "0 8px 40px rgba(0,212,255,0.4), 0 4px 16px rgba(0,153,204,0.2), inset 0 1px 0 rgba(255,255,255,0.4)",
            }}
          >
            <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <span className="relative z-10 flex items-center gap-3">
              Book My Free Audit
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>

          {/* Secondary */}
          <Link
            href="/services"
            id="cta-banner-secondary-btn"
            className="inline-flex items-center gap-3 px-10 py-5 text-base font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
            style={{
              border: "1.5px solid rgba(0,212,255,0.4)",
              color: "#060f2e",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 20px rgba(0,153,204,0.08)",
            }}
          >
            See Our Services
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: "✦", text: "No obligation, 100% free" },
            { icon: "✦", text: "Results in 30 days or less" },
            { icon: "✦", text: "50+ brands already growing" },
          ].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest"
              style={{ color: "#94a3b8" }}
            >
              <span style={{ color: "#00d4ff" }}>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
