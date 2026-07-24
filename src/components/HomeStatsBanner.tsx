"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 5,   suffix: "M+", prefix: "$", label: "Revenue Generated",   sub: "across all clients",      accent: "#00d4ff", bg: "rgba(0,212,255,0.08)"  },
  { value: 60,  suffix: "X",  prefix: "",  label: "Peak ROAS Delivered", sub: "lead generation",         accent: "#7c3aed", bg: "rgba(124,58,237,0.07)" },
  { value: 50,  suffix: "+",  prefix: "",  label: "Brands Grown",        sub: "and counting",            accent: "#7c3aed", bg: "rgba(124,58,237,0.07)" },
];

function AnimatedNumber({ end, suffix, prefix, accent }: { end: number; suffix: string; prefix: string; accent: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = end / (1600 / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span
      ref={ref}
      className="font-black tracking-[-0.04em]"
      style={{
        fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
        backgroundImage: `linear-gradient(135deg, ${accent} 0%, ${accent === "#00d4ff" ? "#0099cc" : "#5b21b6"} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1,
      }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export function HomeStatsBanner() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "#f0faff" }}
    >
      {/* Top / bottom subtle lines */}
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-line" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, #87d4f8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block text-[10px] font-black tracking-[.3em] uppercase font-mono"
            style={{ color: "#00d4ff" }}
          >
            ✦ Our Numbers Speak ✦
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col items-center text-center group rounded-2xl p-6 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0,212,255,0.15)",
                boxShadow: "0 4px 20px rgba(0,153,204,0.06)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -4,
                boxShadow: `0 12px 40px rgba(0,153,204,0.15), 0 0 0 1px ${stat.accent}30`,
                borderColor: stat.accent + "40",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.accent}, transparent)` }}
              />

              <AnimatedNumber end={stat.value} suffix={stat.suffix} prefix={stat.prefix} accent={stat.accent} />

              <p
                className="text-sm font-bold uppercase tracking-[.08em] mt-3 mb-1"
                style={{ color: "#060f2e" }}
              >
                {stat.label}
              </p>
              <p
                className="text-xs font-mono"
                style={{ color: "#94a3b8" }}
              >
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center mt-10 text-xs font-mono uppercase tracking-[.2em]"
          style={{ color: "#94a3b8" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Numbers verified from real client campaigns · Not projections
        </motion.p>
      </div>
    </section>
  );
}
