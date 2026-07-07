"use client";

import { motion } from "framer-motion";
import { Target, BarChart, Zap, HeartHandshake, Shield, Eye, Rocket } from "lucide-react";


const values = [
  { icon: BarChart,     title: "Data-Driven",              desc: "Every decision is backed by data, insights and measurable outcomes.", accent: "#00d4ff", glow: "rgba(0,212,255,0.20)" },
  { icon: Zap,          title: "Adaptability",             desc: "We pivot with market shifts and embrace change as a competitive advantage.", accent: "#38bdf8", glow: "rgba(56,189,248,0.20)" },
  { icon: HeartHandshake, title: "Collaboration",          desc: "We work alongside clients as true partners, celebrating every milestone.", accent: "#00d4ff", glow: "rgba(0,212,255,0.20)" },
  { icon: Shield,       title: "Integrity",                desc: "Transparency and honesty underpin every relationship and recommendation.", accent: "#38bdf8", glow: "rgba(56,189,248,0.20)" },
  { icon: Eye,          title: "Clarity",                  desc: "We cut through complexity to deliver clear strategies and results.", accent: "#00d4ff", glow: "rgba(0,212,255,0.20)" },
  { icon: Rocket,       title: "Growth Mindset",           desc: "We continuously learn, iterate and push boundaries to achieve excellence.", accent: "#38bdf8", glow: "rgba(56,189,248,0.20)" },
];

export function MissionValues() {
  return (
    <>
      {/* ── VISION & MISSION ── */}
      <section
        className="py-32 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 800px 600px at 80% 0%, rgba(0,212,255,0.10) 0%, transparent 60%), radial-gradient(ellipse 700px 700px at 5% 100%, rgba(124,58,237,0.10) 0%, transparent 55%), linear-gradient(160deg, #020a20 0%, #060f2e 50%, #050c25 100%)",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 font-mono"
              style={{ color: "#00d4ff" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Purpose
            </motion.span>
            <motion.h2
              className="text-5xl md:text-6xl text-white leading-tight"
              style={{ fontWeight: 200, letterSpacing: "-0.04em" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Vision &{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mission
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision card */}
            <motion.div
              className="group relative rounded-2xl p-10 overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 300px 200px at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)" }}
              />
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, #00d4ff, transparent)" }} />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.08))",
                    border: "1px solid rgba(0,212,255,0.30)",
                    boxShadow: "0 4px 20px rgba(0,212,255,0.15)",
                    color: "#00d4ff",
                  }}
                >
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  To become the most trusted and results-driven digital marketing partner for businesses worldwide — empowering every brand to shine in a crowded digital landscape.
                </p>
              </div>
            </motion.div>

            {/* Mission card */}
            <motion.div
              className="group relative rounded-2xl p-10 overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 300px 200px at 50% 0%, rgba(56,189,248,0.08) 0%, transparent 70%)" }}
              />
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, #38bdf8, transparent)" }} />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(56,189,248,0.08))",
                    border: "1px solid rgba(56,189,248,0.30)",
                    boxShadow: "0 4px 20px rgba(56,189,248,0.15)",
                    color: "#38bdf8",
                  }}
                >
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-lg font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  To help businesses of all sizes and nature succeed in the digital world — delivering accountable, performance-driven marketing that creates real, lasting impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "#f0faff" }}>
        <div className="absolute top-0 left-0 right-0 h-px section-line" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle at 0% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle at 100% 100%, rgba(124,58,237,0.05) 0%, transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: "#00d4ff" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What We Stand For
            </motion.span>
            <motion.h2
              className="text-5xl md:text-6xl mb-5 leading-tight"
              style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Core{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Values
              </span>
            </motion.h2>
            <motion.p
              className="font-light max-w-2xl mx-auto text-lg"
              style={{ color: "#64748b" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              These are not words on a wall. They are the principles that guide every decision we make, every campaign we run, and every person we hire.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  className="group relative rounded-2xl p-8 cursor-default overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(0,212,255,0.12)",
                    boxShadow: "0 4px 24px rgba(0,153,204,0.06)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse 200px 150px at 50% 0%, ${v.glow} 0%, transparent 70%)` }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${v.accent}, transparent)` }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${v.accent}20, ${v.accent}08)`,
                        border: `1px solid ${v.accent}30`,
                        boxShadow: `0 4px 20px ${v.glow}`,
                        color: v.accent,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold mb-2" style={{ color: "#060f2e" }}>{v.title}</h3>
                    <p className="font-light text-sm leading-relaxed" style={{ color: "#64748b" }}>{v.desc}</p>
                    <div className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: `linear-gradient(90deg, ${v.accent}, transparent)` }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
