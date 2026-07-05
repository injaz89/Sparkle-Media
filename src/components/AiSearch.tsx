"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Bot } from "lucide-react";

const aiPlatforms = [
  { name: "ChatGPT", icon: "✦", color: "#10a37f" },
  { name: "Gemini", icon: "✧", color: "#4285f4" },
  { name: "Claude", icon: "◈", color: "#d97706" },
  { name: "Perplexity", icon: "⬡", color: "#a855f7" },
  { name: "AI Overviews", icon: "◉", color: "#00d4ff" },
];

const optimizationTypes = [
  {
    abbr: "SEO",
    full: "Search Engine Optimization",
    desc: "Rank prominently across traditional search engines with technical excellence and authority content.",
    accentColor: "#00d4ff",
    icon: Search,
    detail: "Keyword Research · Technical SEO · Link Building · Content Strategy",
  },
  {
    abbr: "AEO",
    full: "Answer Engine Optimization",
    desc: "Structure your content to be selected as the direct answer by AI assistants and featured snippets.",
    accentColor: "#38bdf8",
    icon: Lightbulb,
    detail: "Featured Snippets · FAQ Schema · Voice Search · Entity Optimization",
  },
  {
    abbr: "GEO",
    full: "Generative Engine Optimization",
    desc: "Optimize your brand to be cited and recommended by large language models like ChatGPT and Gemini.",
    accentColor: "#00d4ff",
    icon: Bot,
    detail: "LLM Training Data · Brand Authority · Citation Building · AI Indexing",
  },
];

/* ── Radar Visual ── */
function RadarVisual() {
  const rings = [1, 2, 3, 4];
  return (
    <div className="relative flex items-center justify-center" style={{ width: "280px", height: "280px" }}>
      {/* Radar rings */}
      {rings.map((r, i) => (
        <div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: `${r * 64}px`,
            height: `${r * 64}px`,
            borderColor: `rgba(0,212,255,${0.25 - i * 0.05})`,
            animation: `radarPulse ${2.5 + i * 0.8}s ease-out ${i * 0.5}s infinite`,
          }}
        />
      ))}

      {/* Radar sweep line */}
      <motion.div
        className="absolute w-full h-[1px] origin-left"
        style={{
          background: "linear-gradient(90deg, rgba(0,212,255,0.8), transparent)",
          top: "50%",
          left: "50%",
          width: "50%",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Center dot */}
      <div
        className="absolute w-3 h-3 rounded-full z-10"
        style={{ background: "#00d4ff", boxShadow: "0 0 16px rgba(0,212,255,0.8), 0 0 32px rgba(0,212,255,0.4)" }}
      />

      {/* Orbiting platform dots */}
      {aiPlatforms.map((p, i) => {
        const angle = (i / aiPlatforms.length) * 360;
        const radius = 100;
        const rad = (angle * Math.PI) / 180;
        const x = Math.round(Math.cos(rad) * radius * 10000) / 10000;
        const y = Math.round(Math.sin(rad) * radius * 10000) / 10000;
        return (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center"
            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                background: `radial-gradient(circle, ${p.color}30, ${p.color}10)`,
                border: `1.5px solid ${p.color}60`,
                boxShadow: `0 0 12px ${p.color}40`,
                color: p.color,
              }}
            >
              {p.icon}
            </div>
            <span
              className="text-[9px] font-mono font-bold mt-1 whitespace-nowrap"
              style={{ color: p.color }}
            >
              {p.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Flip Card ── */
function FlipCard({ type, i }: { type: typeof optimizationTypes[0]; i: number }) {
  return (
    <motion.div
      className="group relative h-56"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.15 }}
    >
      <div
        className="relative w-full h-full transition-all duration-700"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl p-7 flex flex-col justify-between group-hover:[transform:rotateY(180deg)] transition-all duration-700"
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${type.accentColor}30`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            boxShadow: "0 4px 24px rgba(0,153,204,0.08)",
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0" style={{ color: type.accentColor }}>
                <type.icon className="w-6 h-6" />
              </span>
              <span
                className="text-xs font-black px-3 py-1 rounded-full border uppercase tracking-widest"
                style={{
                  background: type.accentColor + "15",
                  color: type.accentColor,
                  borderColor: type.accentColor + "40",
                }}
              >
                {type.abbr}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#060f2e", letterSpacing: "-0.02em" }}>{type.full}</h3>
            <p className="text-sm font-light leading-relaxed" style={{ color: "#64748b" }}>{type.desc}</p>
          </div>
          <div
            className="absolute bottom-3 right-3 text-[10px] font-mono uppercase tracking-widest"
            style={{ color: type.accentColor }}
          >
            Hover for details →
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl p-7 flex flex-col justify-center [transform:rotateY(180deg)] group-hover:[transform:rotateY(360deg)] transition-all duration-700"
          style={{
            background: `linear-gradient(135deg, ${type.accentColor}18, ${type.accentColor}05)`,
            border: `1px solid ${type.accentColor}40`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <span
            className="text-3xl font-black mb-3 block"
            style={{
              backgroundImage: `linear-gradient(135deg, ${type.accentColor}, #fff)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {type.abbr}
          </span>
          <h3 className="font-bold text-base mb-4" style={{ color: "#060f2e" }}>{type.full}</h3>
          <div className="space-y-2">
            {type.detail.split(" · ").map((d, j) => (
              <div key={j} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: type.accentColor }}
                />
                <span className="text-xs font-medium" style={{ color: "#060f2e" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function AiSearch() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "#e8f7ff" }}>
      {/* Background dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #87d4f8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39bcfc]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39bcfc]/30 to-transparent" />

      {/* Central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 65%)", filter: "blur(40px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#00d4ff" }}>
            AI-First Search Visibility
          </span>
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
          >
            Is Your Brand Visible{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              In AI Search?
            </span>
          </h2>
          <p className="font-light max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "#64748b" }}>
            Customer behaviour has changed. People no longer only search on Google — they ask AI.
          </p>
        </motion.div>

        {/* Main: radar + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Radar visual */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="relative p-12 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, rgba(240,250,255,0.8) 70%)",
                border: "1px solid rgba(0,212,255,0.2)",
              }}
            >
              <RadarVisual />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <div
                className="p-5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,212,255,0.2)" }}
              >
                <p className="font-bold text-base" style={{ color: "#060f2e" }}>
                  "Hey ChatGPT, what&apos;s the best digital marketing agency in Dubai?"
                </p>
                <p className="text-sm font-light mt-1" style={{ color: "#64748b" }}>— Your potential customer</p>
              </div>
              <div
                className="p-5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,212,255,0.2)" }}
              >
                <p className="font-bold text-base" style={{ color: "#060f2e" }}>
                  "Gemini, find me a performance marketing agency with proven ROAS."
                </p>
                <p className="text-sm font-light mt-1" style={{ color: "#64748b" }}>— Your potential customer</p>
              </div>
              <p className="text-lg font-semibold" style={{ color: "#060f2e" }}>
                Will they find{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  your brand?
                </span>
              </p>
              <p className="font-light leading-relaxed" style={{ color: "#64748b" }}>
                We make sure the answer is always <strong style={{ color: "#060f2e" }}>yes</strong> — across every AI platform and search engine.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#87d4f8]" />
          <p className="text-sm text-[#129adc] font-black uppercase tracking-widest whitespace-nowrap">
            We optimize brands for all of this
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#87d4f8]" />
        </div>

        {/* Flip cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {optimizationTypes.map((type, i) => (
            <FlipCard key={i} type={type} i={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto mb-0">
            So your business is{" "}
            <span className="font-semibold text-[#0A1128]">discoverable everywhere</span> your customers search — not just Google.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
