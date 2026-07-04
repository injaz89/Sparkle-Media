"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ── Rotating headline phrases ── */
const HEADLINES = [
  { pre: "Turn ad spend into", highlight: "predictable ROAS", post: "" },
  { pre: "Get discovered on", highlight: "ChatGPT & Google", post: "" },
  { pre: "Scale leads without", highlight: "scaling headcount", post: "" },
  { pre: "Grow revenue with", highlight: "AI-powered marketing", post: "" },
];

/* ── Count-up hook ── */
function useCountUp(end: number, duration = 2000, suffix = "", prefix = "") {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref, prefix, suffix };
}

/* ── Sparkle particle ── */
function SparkleParticle({ x, y, delay, size, duration }: { x: string; y: string; delay: number; size: number; duration: number }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x, top: y,
        animation: `sparkle ${duration}s ease-in-out ${delay}s infinite`,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
          fill="rgba(0,212,255,0.6)"
        />
      </svg>
    </div>
  );
}

/* ── 3D tilt card ── */
function TiltCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }
  function onLeave() { x.set(0); y.set(0); }

  const stats = [
    { label: "Revenue Generated", val: "$5M+", delta: "approx", up: true },
    { label: "CAC Reduction", val: "−38%", delta: "▼ avg", up: false },
    { label: "Leads Generated", val: "150K+", delta: "qualified", up: true },
  ];

  return (
    <motion.div
      style={{ rotateX: springX, rotateY: springY, perspective: 1000, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-full rounded-[28px] p-7 sm:p-8 cursor-default"
      initial={{ opacity: 0, x: 80, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Card glow border */}
      <div
        className="absolute inset-0 rounded-[28px] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(0,212,255,0.25) 0%, rgba(124,58,237,0.15) 50%, rgba(0,212,255,0.1) 100%)",
          padding: "1px",
        }}
      >
        <div className="absolute inset-0 rounded-[28px]" style={{ background: "linear-gradient(165deg, rgba(10,20,60,0.97), rgba(6,15,46,0.99))" }} />
      </div>

      <div
        className="relative rounded-[28px] p-7 sm:p-8"
        style={{
          background: "linear-gradient(165deg, rgba(255,255,255,0.06) 0%, rgba(0,212,255,0.03) 50%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(0,212,255,0.22)",
          boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(0,212,255,0.12)",
          backdropFilter: "blur(12px)",
          animation: "cardGlowPulse 4s ease-in-out infinite",
        }}
      >
        {/* Panel header */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.8)" }} />
            <span className="text-[10px] uppercase tracking-[.22em] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
              Real client results
            </span>
          </div>
          <span
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.12em] rounded-full px-3 py-1.5 font-mono"
            style={{ color: "#00d4ff", border: "1px solid rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.07)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
            AI · always on
          </span>
        </div>

        {/* Stat readouts */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl px-3 py-3"
              style={{ border: "1px solid rgba(0,212,255,0.14)", background: "rgba(0,212,255,0.05)" }}
            >
              <div className="text-[9px] uppercase tracking-[.16em] mb-1.5 font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
                {s.label}
              </div>
              <div className="text-xl sm:text-2xl font-black tracking-[-0.02em]" style={{ color: s.up ? "#00d4ff" : "#fff" }}>
                {s.val}
                <span className="text-[10px] font-medium ml-1 font-mono" style={{ color: "#7c3aed" }}>{s.delta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="relative" style={{ height: "200px" }}>
          {/* Tooltip */}
          <div
            className="absolute z-10 text-[10px] font-black px-2.5 py-1.5 rounded-[8px] whitespace-nowrap font-mono"
            style={{
              left: "63%", top: "14%", transform: "translate(-50%, -110%)",
              background: "linear-gradient(180deg, #2ee8ff, #00d4ff)",
              color: "#06112e", boxShadow: "0 10px 24px -10px rgba(0,212,255,0.7)",
              letterSpacing: ".06em",
            }}
          >
            $5M+ Revenue
            <span className="absolute left-1/2 -bottom-[5px] w-2 h-2 rounded-sm" style={{ transform: "translateX(-50%) rotate(45deg)", background: "#00d4ff" }} />
          </div>
          <svg viewBox="0 0 600 200" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100%", overflow: "visible" }}>
            <defs>
              <linearGradient id="heroFill2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#00d4ff" stopOpacity=".4" />
                <stop offset="1" stopColor="#00d4ff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="heroStroke2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#7c3aed" />
                <stop offset="0.5" stopColor="#00d4ff" />
                <stop offset="1" stopColor="#2ee8ff" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <g stroke="rgba(0,212,255,0.08)" strokeWidth="1">
              <line x1="0" y1="40" x2="600" y2="40" />
              <line x1="0" y1="90" x2="600" y2="90" />
              <line x1="0" y1="140" x2="600" y2="140" />
              <line x1="0" y1="190" x2="600" y2="190" />
            </g>
            <path d="M0,192 C90,188 150,178 210,165 C280,150 330,128 390,100 C450,72 510,44 600,18 L600,200 L0,200 Z" fill="url(#heroFill2)" />
            <motion.path
              d="M0,192 C90,188 150,178 210,165 C280,150 330,128 390,100 C450,72 510,44 600,18"
              fill="none" stroke="url(#heroStroke2)" strokeWidth="2.5" strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeOut" }}
            />
            <motion.circle cx="390" cy="100" r="6" fill="#060f2e" stroke="#00d4ff" strokeWidth="2.5" filter="url(#glow)"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} />
            <motion.circle cx="600" cy="18" r="5" fill="#00d4ff" filter="url(#glow)"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} />
          </svg>
        </div>

        {/* X-axis */}
        <div className="flex justify-between mt-2 font-mono" style={{ fontSize: "9px", letterSpacing: ".14em", color: "rgba(255,255,255,0.28)" }}>
          {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map((m) => <span key={m}>{m}</span>)}
        </div>

        {/* Trust bar at bottom */}
        <div className="mt-4 pt-4 flex items-center gap-3 flex-wrap" style={{ borderTop: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="flex -space-x-1">
            {["GR", "MB", "PA", "MS"].map((c, i) => (
              <div key={i} className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black text-white border border-white/10"
                style={{ background: i % 2 === 0 ? "linear-gradient(135deg,#00d4ff,#7c3aed)" : "linear-gradient(135deg,#7c3aed,#0099cc)", zIndex: 4 - i }}>
                {c}
              </div>
            ))}
          </div>
          <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>50+ brands growing</span>
          <div className="ml-auto flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3" fill="#fbbf24" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Typewriter headline ── */
function TypewriterHeadline() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "erasing">("typing");
  const [charCount, setCharCount] = useState(0);
  const headline = HEADLINES[idx];
  const fullHighlight = headline.highlight;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (charCount < fullHighlight.length) {
        timer = setTimeout(() => setCharCount(c => c + 1), 60);
      } else {
        timer = setTimeout(() => setPhase("pause"), 2200);
      }
    } else if (phase === "pause") {
      timer = setTimeout(() => setPhase("erasing"), 100);
    } else {
      if (charCount > 0) {
        timer = setTimeout(() => setCharCount(c => c - 1), 35);
      } else {
        setIdx(i => (i + 1) % HEADLINES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timer);
  }, [phase, charCount, fullHighlight]);

  return (
    <h1 className="text-[clamp(2.6rem,5.5vw,5.2rem)] leading-[1.0] tracking-[-0.03em] text-white mb-6" style={{ fontWeight: 800 }}>
      {headline.pre}{" "}
      <br className="hidden sm:block" />
      <span style={{
        backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #a855f7 60%, #00d4ff 100%)",
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "gradientShift 3s ease-in-out infinite",
        fontFamily: "'Lora', 'Georgia', serif",
        fontStyle: "italic",
        fontWeight: 700,
      }}>
        {fullHighlight.slice(0, charCount)}
      </span>
      <span
        style={{
          display: "inline-block",
          width: "3px",
          height: "0.85em",
          marginLeft: "2px",
          background: "#00d4ff",
          verticalAlign: "middle",
          animation: "cursorBlink 1s step-end infinite",
          boxShadow: "0 0 10px rgba(0,212,255,0.8)",
        }}
      />
    </h1>
  );
}

/* ── Stat counter block ── */
function StatCounter({ end, suffix, prefix, label }: { end: number; suffix: string; prefix: string; label: string }) {
  const { count, ref } = useCountUp(end, 1800, suffix, prefix);
  return (
    <div ref={ref} className="flex flex-col">
      <span
        className="text-3xl sm:text-4xl font-black tracking-[-0.04em]"
        style={{
          backgroundImage: "linear-gradient(135deg, #00d4ff, #fff 60%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      <span className="text-[11px] font-mono uppercase tracking-[.16em] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
    </div>
  );
}

const sparkles = [
  { x: "8%",  y: "15%", delay: 0,    size: 10, duration: 3.1 },
  { x: "18%", y: "72%", delay: 0.8,  size: 7,  duration: 4.2 },
  { x: "92%", y: "20%", delay: 0.4,  size: 9,  duration: 2.7 },
  { x: "85%", y: "68%", delay: 1.2,  size: 6,  duration: 3.8 },
  { x: "52%", y: "8%",  delay: 0.6,  size: 8,  duration: 2.5 },
  { x: "65%", y: "88%", delay: 1.8,  size: 7,  duration: 3.4 },
  { x: "30%", y: "40%", delay: 2.1,  size: 5,  duration: 4.0 },
  { x: "78%", y: "45%", delay: 0.2,  size: 11, duration: 3.6 },
];

export function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 1000px 700px at 80% -10%, rgba(0,212,255,0.18) 0%, transparent 60%)," +
          "radial-gradient(ellipse 800px 800px at 5% 110%, rgba(124,58,237,0.15) 0%, transparent 55%)," +
          "radial-gradient(ellipse 600px 400px at 50% 50%, rgba(124,58,237,0.04) 0%, transparent 70%)," +
          "linear-gradient(160deg, #020a20 0%, #060f2e 40%, #0a0e2e 70%, #050c25 100%)",
      }}
    >
      {/* ── Animated mesh grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.035) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(0,212,255,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 130% 130% at 65% 30%, #000 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 130% 130% at 65% 30%, #000 40%, transparent 80%)",
        }}
      />

      {/* ── Animated gradient orbs ── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "600px", height: "600px",
          top: "-10%", right: "5%",
          background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "500px", height: "500px",
          bottom: "-5%", left: "-5%",
          background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "350px", height: "350px",
          top: "40%", left: "30%",
          background: "radial-gradient(circle, rgba(0,153,204,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── Sparkle particles ── */}
      {sparkles.map((s, i) => <SparkleParticle key={i} {...s} />)}

      {/* ── Diagonal accent lines ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg,#00d4ff 0px,#00d4ff 1px,transparent 1px,transparent 80px)" }}
      />

      {/* ════════ MAIN LAYOUT ════════ */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 py-36 lg:py-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* ── LEFT COLUMN ── */}
        <motion.div
          className="flex-1 min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.2 } } }}
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25,0.46,0.45,0.94] } } }}
            className="flex justify-center lg:justify-start mb-7"
          >
            <span
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[.2em] font-mono"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.08))",
                border: "1px solid rgba(0,212,255,0.3)",
                color: "#00d4ff",
                boxShadow: "0 0 20px rgba(0,212,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: "0 0 8px rgba(0,212,255,0.9)", animation: "pulseGlow 2s ease-in-out infinite" }} />
              AI-Powered Performance Marketing
            </span>
          </motion.div>

          {/* Typewriter headline */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="w-full"
          >
            <TypewriterHeadline />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(255,255,255,0.52)", fontWeight: 300 }}
          >
            AI automations watch, test and optimise every campaign around the clock —{" "}
            <strong className="text-white font-semibold">so you scale revenue</strong>, not headcount.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12 w-full sm:w-auto"
          >
            {/* Primary CTA */}
            <a
              href="https://calendly.com/sparklemediacreatives/30min"
              id="hero-strategy-call-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-[18px] text-sm font-bold tracking-wide rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #2ee8ff 0%, #00d4ff 50%, #009ac2 100%)",
                color: "#04091f",
                boxShadow: "0 0 0 0 rgba(0,212,255,0.6), 0 14px 40px -12px rgba(0,212,255,0.65), inset 0 1px 0 rgba(255,255,255,0.4)",
                animation: "pulseGlow 3s ease-in-out infinite",
              }}
            >
              <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <span className="relative z-10 flex items-center gap-3">
                Book a Free Growth Audit
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#services"
              id="hero-services-btn"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-[18px] text-sm font-semibold rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              style={{
                border: "1px solid rgba(0,212,255,0.3)",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(0,212,255,0.06)",
              }}
            >
              <span className="w-6 h-6 rounded-full inline-flex items-center justify-center text-[10px]"
                style={{ border: "1.5px solid rgba(0,212,255,0.7)", color: "#00d4ff" }}>▶</span>
              See Our Work
            </a>
          </motion.div>

          {/* Live stat counters */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
            className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10 w-full"
          >
            <StatCounter end={5} suffix="M+" prefix="$" label="Revenue Generated" />
            <div className="w-px" style={{ background: "rgba(0,212,255,0.15)", height: "40px", alignSelf: "center" }} />
            <StatCounter end={150} suffix="K+" prefix="" label="Qualified Leads" />
            <div className="w-px" style={{ background: "rgba(0,212,255,0.15)", height: "40px", alignSelf: "center" }} />
            <StatCounter end={60} suffix="X" prefix="" label="Peak ROAS" />
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-2 font-mono text-[11px]"
            style={{ color: "rgba(255,255,255,0.38)", letterSpacing: ".04em" }}
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              No long-term lock-ins
            </span>
            <span className="w-1 h-1 rounded-full hidden sm:block" style={{ background: "rgba(0,212,255,0.3)" }} />
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Results-guaranteed approach
            </span>
            <span className="w-1 h-1 rounded-full hidden sm:block" style={{ background: "rgba(0,212,255,0.3)" }} />
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              AI-powered 24/7 optimisation
            </span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN — 3D tilt card ── */}
        <div className="flex-shrink-0 w-full max-w-[520px] lg:max-w-[480px] xl:max-w-[530px]">
          <TiltCard />
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-[9px] uppercase tracking-[.22em] font-mono font-semibold" style={{ color: "rgba(0,212,255,0.45)" }}>Scroll</span>
        <motion.div
          className="w-[1px] h-10"
          style={{ background: "linear-gradient(to bottom, #00d4ff, transparent)" }}
          animate={{ scaleY: [1, 0.6, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
