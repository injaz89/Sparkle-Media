"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    client: "GR Events",
    result: "40X–60X",
    suffix: "ROAS",
    category: "Lead Generation",
    color: "#00d4ff",
    bgFrom: "rgba(0,212,255,0.08)",
    span: 2,
  },
  {
    client: "Gulabi Run",
    result: "50X",
    suffix: "ROAS",
    category: "Performance Marketing",
    color: "#7c3aed",
    bgFrom: "rgba(124,58,237,0.07)",
    span: 1,
  },
  {
    client: "Mobile Stop",
    result: "21X",
    suffix: "ROAS",
    category: "E-Commerce & Retail",
    color: "#0099cc",
    bgFrom: "rgba(0,153,204,0.08)",
    span: 1,
  },
  {
    client: "GR Events",
    result: "300%",
    suffix: "Growth",
    category: "SEO & Content",
    color: "#39bcfc",
    bgFrom: "rgba(57,188,252,0.08)",
    span: 1,
  },
  {
    client: "Prestige Auto",
    result: "15X",
    suffix: "ROAS",
    category: "Paid Media",
    color: "#7c3aed",
    bgFrom: "rgba(124,58,237,0.07)",
    span: 1,
  },
];

const focusItems = [
  "Revenue Growth",
  "Qualified Leads",
  "Customer Acquisition",
  "Customer Retention",
  "Lifetime Value",
  "Return on Ad Spend (ROAS)",
];

export function ClientAchievements() {
  return (
    <>
      {/* ── Client Achievements — Light bento grid ── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ background: "#f0faff" }}
      >
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
          className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none hidden md:block"
          style={{
            background: "radial-gradient(circle at 90% 10%, rgba(0,212,255,0.08) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none hidden md:block"
          style={{
            background: "radial-gradient(circle at 10% 90%, rgba(124,58,237,0.06) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-block text-[10px] font-black tracking-[.28em] uppercase mb-5 font-mono"
              style={{ color: "#00d4ff" }}
            >
              ✦ Proven Track Record ✦
            </span>
            <h2
              className="text-5xl md:text-6xl mb-5"
              style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
            >
              Real Results.{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Real Clients.
              </span>
            </h2>
            <p className="font-light max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
              These numbers aren&apos;t projections — they&apos;re what we actually delivered.
            </p>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Hero card — spans 2 cols */}
            <motion.div
              className="col-span-2 relative group overflow-hidden rounded-2xl p-8 md:p-10 flex flex-col justify-between"
              style={{
                background: "white",
                border: "1px solid rgba(0,212,255,0.2)",
                minHeight: "220px",
                boxShadow: "0 8px 40px rgba(0,153,204,0.1)",
              }}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(0,153,204,0.18)" }}
            >
              {/* Colored top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background: `linear-gradient(90deg, ${achievements[0].color}, ${achievements[0].color}55)`,
                }}
              />
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ background: `linear-gradient(180deg, ${achievements[0].color}, ${achievements[0].color}44)` }}
              />
              {/* Watermark */}
              <div
                className="absolute right-4 bottom-0 text-[130px] font-black leading-none select-none pointer-events-none"
                style={{ color: achievements[0].color, opacity: 0.04 }}
              >
                {achievements[0].result}
              </div>
              {/* Bg tint */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `linear-gradient(135deg, ${achievements[0].bgFrom}, transparent 70%)` }}
              />

              <span
                className="text-[10px] font-black uppercase tracking-widest mb-4 block font-mono relative z-10"
                style={{ color: achievements[0].color }}
              >
                {achievements[0].category}
              </span>

              <div className="relative z-10">
                <div className="flex items-end gap-3 mb-2">
                  <span
                    className="font-black leading-none"
                    style={{
                      fontSize: "clamp(3.5rem,8vw,5.5rem)",
                      backgroundImage: `linear-gradient(135deg, ${achievements[0].color} 0%, ${achievements[0].color}88 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {achievements[0].result}
                  </span>
                  <span className="text-2xl font-bold mb-2" style={{ color: achievements[0].color }}>
                    {achievements[0].suffix}
                  </span>
                </div>
                <p className="text-sm font-semibold" style={{ color: "#64748b" }}>
                  {achievements[0].client}
                </p>
              </div>
            </motion.div>

            {/* Remaining cards */}
            {achievements.slice(1).map((item, i) => (
              <motion.div
                key={i}
                className="relative group overflow-hidden rounded-2xl p-6 flex flex-col justify-between"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,212,255,0.15)",
                  minHeight: "180px",
                  boxShadow: "0 4px 20px rgba(0,153,204,0.06)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(0,153,204,0.14)" }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}44)` }}
                />
                {/* Left accent */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(180deg, ${item.color}80, transparent)` }}
                />
                {/* Hover tint */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${item.bgFrom}, transparent 70%)` }}
                />

                <span
                  className="text-[9px] font-black uppercase tracking-widest mb-3 block font-mono relative z-10"
                  style={{ color: item.color }}
                >
                  {item.category}
                </span>

                <div className="relative z-10">
                  <div className="flex items-end gap-2 mb-1">
                    <span
                      className="text-4xl font-black leading-none"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${item.color} 0%, ${item.color}88 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.result}
                    </span>
                    <span className="text-sm font-bold mb-0.5" style={{ color: item.color }}>
                      {item.suffix}
                    </span>
                  </div>
                  <p className="text-xs font-semibold" style={{ color: "#94a3b8" }}>
                    {item.client}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Focus — Light blue section ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "#e8f7ff" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#87d4f8] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#87d4f8] to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(circle, #87d4f8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5 font-mono" style={{ color: "#00d4ff" }}>
                Our Mission
              </span>
              <h2
                className="text-5xl md:text-6xl mb-6 leading-tight"
                style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
              >
                Our focus is{" "}
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  simple.
                </span>
              </h2>
              <p className="text-xl font-light leading-relaxed" style={{ color: "#64748b" }}>
                Generate measurable business growth through{" "}
                <span className="font-semibold" style={{ color: "#060f2e" }}>data</span>,{" "}
                <span className="font-semibold" style={{ color: "#060f2e" }}>creativity</span> and{" "}
                <span className="font-semibold" style={{ color: "#060f2e" }}>performance marketing</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {focusItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-sky-100/60 hover:-translate-y-0.5 transition-all duration-200 rounded-xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded"
                    style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
                  >
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "#0A1128" }}>{item}</span>
                </motion.div>
              ))}

              <motion.div
                className="col-span-2 mt-2 p-4 bg-white/70 border-l-[3px] border-[#00d4ff] rounded-r-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-sm text-gray-600 italic font-light">
                  Every campaign is built around{" "}
                  <span className="font-semibold text-[#0A1128]">business outcomes</span>, not marketing activity.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
