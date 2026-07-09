"use client";

import { motion } from "framer-motion";
import { Users, Trophy, Globe, Zap } from "lucide-react";

const sparkleData = [
  { x: "6%",  y: "20%", delay: 0,   size: 9,  duration: 3.2 },
  { x: "18%", y: "72%", delay: 0.9, size: 6,  duration: 4.1 },
  { x: "88%", y: "18%", delay: 0.4, size: 10, duration: 2.8 },
  { x: "82%", y: "68%", delay: 1.3, size: 7,  duration: 3.7 },
  { x: "52%", y: "8%",  delay: 0.6, size: 8,  duration: 2.6 },
  { x: "70%", y: "82%", delay: 1.9, size: 6,  duration: 3.5 },
  { x: "34%", y: "40%", delay: 2.2, size: 5,  duration: 4.0 },
  { x: "76%", y: "44%", delay: 0.2, size: 11, duration: 3.6 },
];

function SparkleParticle({ x, y, delay, size, duration }: { x: string; y: string; delay: number; size: number; duration: number }) {
  return (
    <div className="absolute pointer-events-none hidden md:block" style={{ left: x, top: y, animation: `sparkle ${duration}s ease-in-out ${delay}s infinite` }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="rgba(0,212,255,0.6)" />
      </svg>
    </div>
  );
}

const stats = [
  { icon: Users,  val: "50+",   label: "Team Members",     accent: "#00d4ff" },
  { icon: Trophy, val: "5+",    label: "Years of Excellence", accent: "#38bdf8" },
  { icon: Globe,  val: "150K+", label: "Leads Generated",  accent: "#00d4ff" },
  { icon: Zap,    val: "98%",   label: "Client Satisfaction", accent: "#38bdf8" },
];

const darkBg =
  "radial-gradient(ellipse 1000px 700px at 80% -10%, rgba(0,212,255,0.18) 0%, transparent 60%), radial-gradient(ellipse 800px 800px at 5% 110%, rgba(124,58,237,0.15) 0%, transparent 55%), linear-gradient(160deg, #020a20 0%, #060f2e 40%, #0a0e2e 70%, #050c25 100%)";

export function AboutHero() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative w-full min-h-screen flex items-center overflow-hidden"
        style={{ background: darkBg }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.035) 1px, transparent 1px),linear-gradient(90deg, rgba(0,212,255,0.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 130% 130% at 50% 30%, #000 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 130% 130% at 50% 30%, #000 40%, transparent 80%)",
          }}
        />

        {/* Glow orbs */}
        <motion.div
          className="absolute pointer-events-none hidden md:block"
          style={{ width: "600px", height: "600px", top: "-10%", right: "5%", background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 65%)", filter: "blur(80px)" }}
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute pointer-events-none hidden md:block"
          style={{ width: "500px", height: "500px", bottom: "-5%", left: "-5%", background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)", filter: "blur(80px)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute pointer-events-none hidden md:block"
          style={{ width: "350px", height: "350px", top: "40%", left: "30%", background: "radial-gradient(circle, rgba(0,153,204,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Sparkle particles */}
        {sparkleData.map((s, i) => <SparkleParticle key={i} {...s} />)}

        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center text-center pt-36 pb-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[.2em] font-mono"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.08))",
                border: "1px solid rgba(0,212,255,0.3)",
                color: "#00d4ff",
              }}
            >
              <span
                className="w-2 h-2 rounded-full bg-cyan-400"
                style={{ boxShadow: "0 0 8px rgba(0,212,255,0.9)", animation: "pulseGlow 2s ease-in-out infinite" }}
              />
              About Us
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.0] tracking-[-0.03em] text-white mb-6"
            style={{ fontWeight: 800 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            We Are a{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #a855f7 60%, #00d4ff 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientShift 3s ease-in-out infinite",
                fontFamily: "'Lora','Georgia',serif",
                fontStyle: "italic",
              }}
            >
              Digital Growth
            </span>{" "}
            Agency
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-6 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.52)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            We are a digital marketing startup dedicated to helping businesses of all sizes succeed in the online world — combining performance marketing, creative storytelling and technology.
          </motion.p>



          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <span className="text-[9px] uppercase tracking-[.22em] font-mono font-semibold" style={{ color: "rgba(0,212,255,0.45)" }}>Scroll</span>
            <motion.div
              className="w-[1px] h-10"
              style={{ background: "linear-gradient(to bottom, #00d4ff, transparent)" }}
              animate={{ scaleY: [1, 0.6, 1], opacity: [0.8, 0.3, 0.8] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section
        id="mission"
        style={{
          background: "linear-gradient(135deg, #060f2e 0%, #0d1b4b 40%, #060f2e 100%)",
          borderTop: "1px solid rgba(0,212,255,0.15)",
          borderBottom: "1px solid rgba(0,212,255,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${s.accent}20, ${s.accent}08)`,
                    border: `1px solid ${s.accent}30`,
                    color: s.accent,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div
                  className="text-4xl md:text-5xl font-black tracking-[-0.04em] mb-2"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${s.accent}, #fff 70%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.val}
                </div>
                <div className="text-xs font-mono uppercase tracking-[.16em]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "#f0faff" }}>
        <div className="absolute top-0 left-0 right-0 h-px section-line" />
        <div className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle at 0% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle at 100% 100%, rgba(124,58,237,0.05) 0%, transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#00d4ff" }}>
                Who We Are
              </span>
              <h2
                className="text-5xl md:text-6xl mb-8 leading-tight"
                style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
              >
                Built For Businesses That{" "}
                <span style={{ backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Expect Results
                </span>
              </h2>
              <div className="pl-6 py-2.5 mb-8" style={{ borderLeft: "3px solid #00d4ff" }}>
                <p className="text-xl font-bold leading-normal" style={{ backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  At Sparkle Media, we help businesses grow by turning ideas into impactful digital experiences.
                </p>
              </div>
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-base">
                {[
                  "We are a full-service digital marketing agency passionate about helping brands build a strong online presence, connect with the right audience, and achieve measurable growth. By combining strategic thinking, creative storytelling, and data-driven marketing, we deliver solutions that create real business impact.",
                  "Every brand has a unique story, and we believe its marketing should reflect that. Rather than relying on one-size-fits-all strategies, we take the time to understand your business, industry, and goals to craft customized marketing solutions that drive meaningful results.",
                  "The digital world is constantly evolving—and so are we. At Sparkle Media, staying ahead isn't just something we do; it's part of who we are. We continuously keep up with the latest marketing trends, platform updates, AI-powered solutions, automation technologies, and industry best practices to ensure our clients benefit from the most effective and innovative strategies available. By embracing new tools and adapting to changes early, we help businesses stay competitive in an ever-changing digital landscape.",
                  "Beyond delivering marketing services, we believe in building lasting partnerships. We take the time to understand your vision, collaborate closely with your team, and create strategies that align with your long-term business goals. Your success is our success, and we're committed to growing alongside your brand.",
                  "From social media marketing and paid advertising to branding, website development, content creation, search engine optimization, and performance marketing, our team works collaboratively to ensure every campaign is purposeful, creative, and results-driven.",
                  "At Sparkle Media, we're more than a service provider—we're your digital growth partner, committed to helping your business adapt, evolve, and thrive through innovative marketing solutions that deliver lasting results."
                ].map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Right — belief cards */}
            <motion.div
              className="grid grid-cols-1 gap-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {[
                { title: "Performance-First", body: "Every strategy is designed to produce measurable ROI, not just visibility.", color: "#00d4ff" },
                { title: "Creative at Heart", body: "Storytelling and design are at the core of everything we produce.", color: "#38bdf8" },
                { title: "Technology-Driven", body: "We leverage AI-powered tools and analytics to stay ahead of the competition.", color: "#7c3aed" },
                { title: "Human-Centered", body: "We genuinely partner with our clients, celebrating every milestone together.", color: "#00d4ff" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="group flex items-start gap-5 p-6 rounded-2xl cursor-default overflow-hidden relative"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(0,212,255,0.12)",
                    boxShadow: "0 4px 24px rgba(0,153,204,0.06)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${card.color}20, ${card.color}08)`, border: `1px solid ${card.color}30` }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ background: card.color, boxShadow: `0 0 8px ${card.color}80` }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 text-sm" style={{ color: "#060f2e" }}>{card.title}</h3>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "#64748b" }}>{card.body}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
