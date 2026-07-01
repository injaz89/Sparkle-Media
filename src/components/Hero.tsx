"use client";

import { motion } from "framer-motion";

const trustItems = [
  { value: "60X", label: "ROAS Generated", sub: "Lead Generation" },
  { value: "20X", label: "ROAS Generated", sub: "E-Commerce & Retail" },
  { value: "300%+", label: "Organic Growth", sub: "SEO & Content" },
  { value: "360°", label: "Service Scope", sub: "All Digital Needs" },
];

/* ─── tiny SVG loop icon ─── */
function LoopIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    >
      <path d="M20 11a8 8 0 0 0-14-5M4 13a8 8 0 0 0 14 5" />
      <path d="M6 2v4H2M22 22v-4h-4" />
    </svg>
  );
}

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  } as const;

  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 900px 600px at 78% -5%, rgba(0,212,255,.13), transparent 60%)," +
          "radial-gradient(ellipse 700px 700px at 12% 110%, rgba(124,58,237,.1), transparent 55%)," +
          "linear-gradient(160deg, #060f2e 0%, #0d1b4b 55%, #071a3e 100%)",
      }}
    >
      {/* ── automation grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,.04) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(0,212,255,.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(120% 120% at 60% 30%, #000 35%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(120% 120% at 60% 30%, #000 35%, transparent 78%)",
        }}
      />

      {/* ── floating orb ── */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── diagonal lines ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#00d4ff 0px,#00d4ff 1px,transparent 1px,transparent 60px)",
        }}
      />

      {/* ════════════ MAIN LAYOUT ════════════ */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 py-36 lg:py-28 flex flex-col lg:flex-row items-center gap-14 lg:gap-16">

        {/* ── LEFT COLUMN ── */}
        <motion.div
          className="flex-1 min-w-0 flex flex-col items-center lg:items-start text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* eyebrow */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-7">
            <span
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.22em]"
              style={{
                fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
                color: "#00d4ff",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#7c3aed",
                  boxShadow: "0 0 0 4px rgba(124,58,237,.22)",
                }}
              />
              AI-powered performance marketing
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.02] tracking-[-0.03em] text-white mb-6"
            style={{ fontWeight: 700 }}
          >
            Turn ad spend into{" "}
            <br className="hidden sm:block" />
            <span
              style={{
                fontFamily: "'Lora', 'Georgia', serif",
                fontStyle: "italic",
                fontWeight: 600,
                backgroundImage:
                  "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-.01em",
                paddingRight: ".06em",
              }}
            >
              predictable
            </span>{" "}
            ROAS.
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ color: "rgba(255,255,255,0.55)", fontWeight: 300 }}
          >
            AI automations watch, test, and optimize every campaign around the
            clock — so you{" "}
            <strong className="text-white font-semibold">
              scale returns
            </strong>{" "}
            without scaling headcount.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12 w-full sm:w-auto"
          >
            <a
              href="https://calendly.com/sparklemediacreatives/30min"
              id="hero-strategy-call-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-[17px] text-sm font-semibold tracking-wide overflow-hidden transition-all hover:scale-105 rounded-[14px]"
              style={{
                background:
                  "linear-gradient(180deg, #2ee8ff 0%, #00d4ff 48%, #009ac2 100%)",
                color: "#06112e",
                boxShadow:
                  "0 14px 38px -12px rgba(0,212,255,.55), inset 0 1px 0 rgba(255,255,255,.35)",
              }}
            >
              <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[14px]" />
              <span className="relative z-10 flex items-center gap-3">
                Book a growth audit
                <svg
                  className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform"
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

            <a
              href="#services"
              id="hero-services-btn"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-[17px] text-sm font-semibold hover:scale-105 transition-all backdrop-blur-sm rounded-[14px]"
              style={{
                border: "1px solid rgba(0,212,255,.3)",
                color: "rgba(255,255,255,.85)",
                background: "rgba(0,212,255,.05)",
              }}
            >
              <span
                className="w-5 h-5 rounded-full inline-flex items-center justify-center text-[9px]"
                style={{
                  border: "1px solid rgba(0,212,255,.6)",
                  color: "#00d4ff",
                }}
              >
                ▶
              </span>
              See how it works
            </a>
          </motion.div>

          {/* trust bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-x-5 gap-y-2"
            style={{
              fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
              fontSize: "13px",
              letterSpacing: ".02em",
              color: "rgba(255,255,255,.45)",
            }}
          >
            <span>
              <span className="text-white font-semibold">$5M+</span> revenue
              generated
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full hidden sm:inline-block"
              style={{ background: "rgba(0,212,255,.35)" }}
            />
            <span>
              <span className="text-white font-semibold">38%</span> avg CAC
              reduction
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full hidden sm:inline-block"
              style={{ background: "rgba(0,212,255,.35)" }}
            />
            <span>
              <span className="text-white font-semibold">150K+</span> qualified
              leads
            </span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN — chart panel ── */}
        <motion.div
          className="flex-shrink-0 w-full max-w-[520px] lg:max-w-[480px] xl:max-w-[540px]"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="relative w-full rounded-[28px] p-7 sm:p-8"
            style={{
              background:
                "linear-gradient(165deg, rgba(255,255,255,.06), rgba(255,255,255,.015))",
              border: "1px solid rgba(0,212,255,.18)",
              boxShadow:
                "0 40px 80px -40px rgba(0,0,0,.65), inset 0 1px 0 rgba(0,212,255,.1)",
              backdropFilter: "blur(2px)",
            }}
          >
            {/* panel header */}
            <div className="flex justify-between items-start mb-5">
              <span
                className="text-xs uppercase tracking-[.22em]"
                style={{
                  fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
                  color: "rgba(255,255,255,.4)",
                }}
              >
                Real client results
              </span>
              <span
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.12em] rounded-full px-3 py-1.5"
                style={{
                  fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
                  color: "#00d4ff",
                  border: "1px solid rgba(0,212,255,.3)",
                  background: "rgba(0,212,255,.07)",
                }}
              >
                <LoopIcon /> AI · always on
              </span>
            </div>

            {/* stat readouts */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { k: "Revenue Generated", val: "$5M+", delta: "approx", up: true },
                { k: "CAC Reduction", val: "−38%", delta: "▼ avg", up: false },
                { k: "Leads Generated", val: "150K+", delta: "qualified", up: true },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl px-3 py-3"
                  style={{
                    border: "1px solid rgba(0,212,255,.14)",
                    background: "rgba(0,212,255,.04)",
                  }}
                >
                  <div
                    className="text-[10px] uppercase tracking-[.16em] mb-1.5"
                    style={{
                      fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
                      color: "rgba(255,255,255,.38)",
                    }}
                  >
                    {s.k}
                  </div>
                  <div
                    className="text-xl sm:text-2xl font-bold tracking-[-0.02em]"
                    style={{
                      color: s.up ? "#00d4ff" : "#fff",
                    }}
                  >
                    {s.val}
                    {s.delta && (
                      <span
                        className="text-[11px] font-medium ml-1.5"
                        style={{
                          fontFamily:
                            "ui-monospace,SFMono-Regular,Menlo,monospace",
                          color: "#7c3aed",
                        }}
                      >
                        {s.delta}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* chart */}
            <div className="relative" style={{ height: "220px" }}>
              {/* annotation tooltip */}
              <div
                className="absolute z-10 text-[11px] font-bold px-2.5 py-1.5 rounded-[8px] whitespace-nowrap"
                style={{
                  left: "65%",
                  top: "18%",
                  transform: "translate(-50%, -110%)",
                  fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
                  background:
                    "linear-gradient(180deg, #2ee8ff, #00d4ff)",
                  color: "#06112e",
                  boxShadow: "0 10px 24px -10px rgba(0,212,255,.6)",
                  letterSpacing: ".06em",
                }}
              >
                $5M+ Revenue
                <span
                  className="absolute left-1/2 -bottom-[5px] w-2.5 h-2.5 rounded-sm"
                  style={{
                    transform: "translateX(-50%) rotate(45deg)",
                    background: "#00d4ff",
                  }}
                />
              </div>

              <svg
                viewBox="0 0 600 240"
                preserveAspectRatio="none"
                style={{ display: "block", width: "100%", height: "100%", overflow: "visible" }}
              >
                <defs>
                  <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#00d4ff" stopOpacity=".35" />
                    <stop offset="1" stopColor="#00d4ff" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="heroStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#7c3aed" />
                    <stop offset="0.5" stopColor="#00d4ff" />
                    <stop offset="1" stopColor="#2ee8ff" />
                  </linearGradient>
                </defs>
                {/* grid lines */}
                <g stroke="rgba(0,212,255,.1)" strokeWidth="1">
                  <line x1="0" y1="48"  x2="600" y2="48"  />
                  <line x1="0" y1="104" x2="600" y2="104" />
                  <line x1="0" y1="160" x2="600" y2="160" />
                  <line x1="0" y1="216" x2="600" y2="216" />
                </g>
                {/* area fill */}
                <path
                  d="M0,218 C90,213 150,204 210,190 C280,174 330,150 390,120 C450,90 510,62 600,32 L600,240 L0,240 Z"
                  fill="url(#heroFill)"
                />
                {/* line */}
                <path
                  d="M0,218 C90,213 150,204 210,190 C280,174 330,150 390,120 C450,90 510,62 600,32"
                  fill="none"
                  stroke="url(#heroStroke)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* highlight dot */}
                <circle cx="390" cy="120" r="8" fill="#0d1b4b" stroke="#00d4ff" strokeWidth="3" />
                {/* end dot */}
                <circle cx="600" cy="32" r="5" fill="#00d4ff" />
              </svg>
            </div>

            {/* axis labels */}
            <div
              className="flex justify-between mt-3"
              style={{
                fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
                fontSize: "10px",
                letterSpacing: ".14em",
                color: "rgba(255,255,255,.3)",
              }}
            >
              {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span
          className="text-[10px] uppercase tracking-[.2em] font-semibold"
          style={{ color: "rgba(0,212,255,.5)" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, #00d4ff, transparent)",
            animation: "pulseGlow 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
