"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp, ShieldCheck, BarChart3, Repeat } from "lucide-react";

const focusAreas = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    desc: "Every decision we make is tied to growing your top and bottom line — not just marketing metrics.",
    grad: "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
  },
  {
    icon: Target,
    title: "Qualified Leads",
    desc: "We don't just drive traffic. We attract the right people who are ready to become customers.",
    grad: "linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%)",
  },
  {
    icon: Users,
    title: "Customer Acquisition",
    desc: "Scalable acquisition systems that consistently bring new customers into your business.",
    grad: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
  },
  {
    icon: Repeat,
    title: "Customer Retention",
    desc: "Great marketing doesn't stop at the sale. We help you keep customers coming back.",
    grad: "linear-gradient(135deg, #0099cc 0%, #00d4ff 100%)",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Value",
    desc: "We build strategies that maximize what each customer is worth to your business over time.",
    grad: "linear-gradient(135deg, #7c3aed 0%, #0099cc 100%)",
  },
  {
    icon: BarChart3,
    title: "Return on Ad Spend",
    desc: "Rigorous ROAS tracking ensures every dollar in ad spend is accountable and optimized.",
    grad: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "#f0faff" }}>
      <div className="absolute top-0 left-0 right-0 h-px section-line" />

      {/* Left radial glow */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 30%, rgba(0,212,255,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={i}
                className="group relative p-8 overflow-hidden transition-all duration-400"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,212,255,0.2)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, borderColor: "rgba(0,212,255,0.45)" }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: area.grad }}
                />

                {/* Bottom corner glow */}
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 100% 100%, rgba(0,212,255,0.15), transparent 70%)`,
                  }}
                />

                <div
                  className="w-14 h-14 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: area.grad }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3
                  className="text-xl mb-3"
                  style={{ color: "#060f2e", fontWeight: 400, letterSpacing: "-0.02em" }}
                >
                  {area.title}
                </h3>
                <p className="font-light leading-relaxed text-sm" style={{ color: "#64748b" }}>
                  {area.desc}
                </p>
              </motion.div>
            );
          })}
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
