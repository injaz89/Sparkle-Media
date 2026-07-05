"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Zap, Users, Gem, BarChart3 } from "lucide-react";

const focusAreas = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    desc: "Every decision we make is tied to growing your top and bottom line — not just marketing metrics.",
    accent: "#00d4ff",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(0,212,255,0.03) 100%)",
  },
  {
    icon: Target,
    title: "Qualified Leads",
    desc: "We don't just drive traffic. We attract the right people who are ready to become your customers.",
    accent: "#38bdf8",
    gradient: "linear-gradient(135deg, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0.03) 100%)",
  },
  {
    icon: Zap,
    title: "Customer Acquisition",
    desc: "Scalable acquisition systems that consistently bring new customers into your business, month after month.",
    accent: "#00d4ff",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(0,212,255,0.03) 100%)",
  },
  {
    icon: Users,
    title: "Customer Retention",
    desc: "Great marketing doesn't stop at the sale. We help you keep customers coming back for more.",
    accent: "#38bdf8",
    gradient: "linear-gradient(135deg, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0.03) 100%)",
  },
  {
    icon: Gem,
    title: "Lifetime Value",
    desc: "We build strategies that maximize what each customer is worth to your business over time.",
    accent: "#00d4ff",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(0,212,255,0.03) 100%)",
  },
  {
    icon: BarChart3,
    title: "Return on Ad Spend",
    desc: "Rigorous ROAS tracking ensures every dollar in ad spend is accountable, optimized, and growing.",
    accent: "#38bdf8",
    gradient: "linear-gradient(135deg, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0.03) 100%)",
  },
];

const comparison = [
  { feature: "Data-Driven Decisions", us: true, them: false },
  { feature: "AI-Powered Optimisation", us: true, them: false },
  { feature: "Real ROAS Tracking", us: true, them: true },
  { feature: "Creative + Performance Together", us: true, them: false },
  { feature: "Transparent Reporting", us: true, them: false },
  { feature: "Business Outcome Focus", us: true, them: false },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "#f0faff" }}>
      <div className="absolute top-0 left-0 right-0 h-px section-line" />

      {/* Diagonal stripe background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 28px)" }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 0% 30%, rgba(0,212,255,0.08) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 100% 100%, rgba(124,58,237,0.06) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#00d4ff" }}>
              Why Sparkle Media
            </span>
            <h2
              className="text-5xl md:text-6xl leading-tight"
              style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
            >
              Why Brands Choose{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sparkle Media
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="pl-6 py-2" style={{ borderLeft: "3px solid #00d4ff" }}>
              <p className="text-lg font-light leading-relaxed" style={{ color: "#64748b" }}>
                Most agencies focus on impressions, likes and vanity metrics.
              </p>
              <p className="text-xl font-bold mt-2" style={{ color: "#060f2e" }}>
                We focus on what matters: <span style={{ color: "#00d4ff" }}>business outcomes.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Glassmorphism feature cards — 3×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {focusAreas.map((area, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl p-7 transition-all duration-400 cursor-default overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(0,212,255,0.15)",
                boxShadow: "0 4px 24px rgba(0,153,204,0.06), 0 1px 4px rgba(0,0,0,0.04)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 60px rgba(0,153,204,0.15), 0 0 0 1px ${area.accent}30`,
                borderColor: area.accent + "40",
              }}
            >
              {/* Card gradient overlay on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: area.gradient }}
              />

              {/* Neon top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${area.accent}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: area.gradient.replace("0.12", "0.15").replace("0.03", "0.08"),
                    border: `1px solid ${area.accent}25`,
                    color: area.accent,
                  }}
                >
                  <area.icon className="w-5 h-5" />
                </div>

                <h3
                  className="text-lg font-bold mb-2 transition-colors duration-200"
                  style={{ color: "#060f2e", letterSpacing: "-0.02em" }}
                >
                  {area.title}
                </h3>
                <p className="font-light text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {area.desc}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${area.accent}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(0,212,255,0.2)",
            boxShadow: "0 8px 40px rgba(0,153,204,0.1)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-3 gap-0 py-4 px-6"
            style={{ background: "linear-gradient(135deg, #060f2e 0%, #0d1b4b 100%)" }}
          >
            <div className="text-sm font-bold uppercase tracking-widest text-left" style={{ color: "rgba(255,255,255,0.4)" }}>
              Feature
            </div>
            <div className="text-center">
              <span
                className="inline-block text-sm font-black uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                  color: "#fff",
                }}
              >
                ✦ Sparkle Media
              </span>
            </div>
            <div className="text-sm font-bold uppercase tracking-widest text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
              Other Agencies
            </div>
          </div>

          {comparison.map((row, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-3 gap-0 py-4 px-6 group transition-colors duration-200"
              style={{
                background: i % 2 === 0 ? "rgba(255,255,255,0.95)" : "rgba(240,250,255,0.95)",
                borderTop: "1px solid rgba(0,212,255,0.08)",
              }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.06 }}
            >
              <span className="text-sm font-medium" style={{ color: "#060f2e" }}>{row.feature}</span>
              <div className="flex justify-center">
                {row.us ? (
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                ) : (
                  <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#fee2e2" }}>
                    <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="flex justify-center">
                {row.them ? (
                  <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#f0fdf4" }}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="#86efac" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                ) : (
                  <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#fef2f2" }}>
                    <svg className="w-3.5 h-3.5 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl font-light mb-2" style={{ color: "#060f2e" }}>
            Every campaign is built around business outcomes, not marketing activity.
          </p>
          <p className="font-light mb-8" style={{ color: "#64748b" }}>
            Ready to start growing your revenue?
          </p>
          <a
            href="https://calendly.com/sparklemediacreatives/30min"
            target="_blank"
            rel="noopener noreferrer"
            id="why-us-cta-btn"
            className="inline-block px-10 py-4 text-white font-bold transition-all hover:scale-105 rounded-xl"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              boxShadow: "0 8px 30px rgba(0,212,255,0.35), 0 4px 16px rgba(124,58,237,0.2)",
            }}
          >
            Book a Strategy Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
