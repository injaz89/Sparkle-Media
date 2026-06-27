"use client";

import { motion } from "framer-motion";

const focusAreas = [
  {
    title: "Revenue Growth",
    desc: "Every decision we make is tied to growing your top and bottom line — not just marketing metrics.",
    accent: "#00d4ff",
    metric: "↑ Rev",
  },
  {
    title: "Qualified Leads",
    desc: "We don't just drive traffic. We attract the right people who are ready to become customers.",
    accent: "#7c3aed",
    metric: "→ IQL",
  },
  {
    title: "Customer Acquisition",
    desc: "Scalable acquisition systems that consistently bring new customers into your business.",
    accent: "#00d4ff",
    metric: "+ CAC",
  },
  {
    title: "Customer Retention",
    desc: "Great marketing doesn't stop at the sale. We help you keep customers coming back.",
    accent: "#0099cc",
    metric: "♻ LTV",
  },
  {
    title: "Lifetime Value",
    desc: "We build strategies that maximize what each customer is worth to your business over time.",
    accent: "#7c3aed",
    metric: "× CLV",
  },
  {
    title: "Return on Ad Spend",
    desc: "Rigorous ROAS tracking ensures every dollar in ad spend is accountable and optimized.",
    accent: "#00d4ff",
    metric: "% ROAS",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "#f0faff" }}>
      <div className="absolute top-0 left-0 right-0 h-px section-line" />

      {/* Diagonal stripe background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 28px)",
        }}
      />

      {/* Left radial glow */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 30%, rgba(0,212,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header — asymmetric split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#00d4ff" }}
            >
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
            <div
              className="pl-6 py-2"
              style={{ borderLeft: "3px solid #00d4ff" }}
            >
              <p className="text-lg font-light leading-relaxed" style={{ color: "#64748b" }}>
                Most agencies focus on impressions, likes and vanity metrics.
              </p>
              <p className="text-lg font-semibold mt-2" style={{ color: "#060f2e" }}>
                We focus on:
              </p>
            </div>
          </motion.div>
        </div>

        {/* Focus area rows — pill/badge style, not boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 divide-y md:divide-y-0" style={{ borderColor: "rgba(0,212,255,0.1)" }}>
          {/* Left column */}
          <div className="divide-y" style={{ borderColor: "rgba(0,212,255,0.1)" }}>
            {focusAreas.slice(0, 3).map((area, i) => (
              <motion.div
                key={i}
                className="group flex items-start gap-5 py-7 relative overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
              >
                {/* Hover sweep */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, ${area.accent}06 0%, transparent 70%)` }}
                />
                {/* Metric pill */}
                <div
                  className="flex-shrink-0 w-16 h-8 flex items-center justify-center text-[10px] font-black tracking-wider rounded-sm transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `${area.accent}14`,
                    color: area.accent,
                    border: `1px solid ${area.accent}30`,
                  }}
                >
                  {area.metric}
                </div>
                <div className="relative z-10">
                  <h3
                    className="text-base font-semibold mb-1 group-hover:opacity-70 transition-opacity"
                    style={{ color: "#060f2e" }}
                  >
                    {area.title}
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="divide-y md:border-l md:pl-12" style={{ borderColor: "rgba(0,212,255,0.1)" }}>
            {focusAreas.slice(3).map((area, i) => (
              <motion.div
                key={i}
                className="group flex items-start gap-5 py-7 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 + 0.15 }}
              >
                {/* Hover sweep */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, ${area.accent}06 0%, transparent 70%)` }}
                />
                {/* Metric pill */}
                <div
                  className="flex-shrink-0 w-16 h-8 flex items-center justify-center text-[10px] font-black tracking-wider rounded-sm transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: `${area.accent}14`,
                    color: area.accent,
                    border: `1px solid ${area.accent}30`,
                  }}
                >
                  {area.metric}
                </div>
                <div className="relative z-10">
                  <h3
                    className="text-base font-semibold mb-1 group-hover:opacity-70 transition-opacity"
                    style={{ color: "#060f2e" }}
                  >
                    {area.title}
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
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
            className="inline-block px-10 py-4 text-white font-semibold transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              boxShadow: "0 8px 30px rgba(0,212,255,0.3), 0 4px 16px rgba(124,58,237,0.2)",
            }}
          >
            Book a Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
