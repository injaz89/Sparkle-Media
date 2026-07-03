"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    number: "01",
    icon: "💻",
    title: "Web & App Development",
    description: "Bespoke digital experiences that tell your brand's story perfectly — fast, beautiful and conversion-optimised.",
    href: "/services/tech-lab/web-development",
    accent: "#00d4ff",
    tag: "Tech Lab",
    features: ["Custom Design", "CMS Integration", "Speed Optimised", "Mobile First"],
  },
  {
    number: "02",
    icon: "🔍",
    title: "SEO & AEO",
    description: "Rank higher on Google and appear in AI-powered search results to reach the audience that matters most.",
    href: "/services/digital-lab/seo",
    accent: "#a855f7",
    tag: "Digital Lab",
    features: ["Keyword Strategy", "Technical SEO", "AI Visibility", "Content Authority"],
  },
  {
    number: "03",
    icon: "📈",
    title: "Performance Marketing",
    description: "Data-driven paid campaigns on Google, Meta and more — designed to maximize ROAS and revenue.",
    href: "/services/digital-lab/paid-media",
    accent: "#00d4ff",
    tag: "Digital Lab",
    features: ["Google Ads", "Meta Ads", "ROAS Tracking", "AI Bidding"],
  },
  {
    number: "04",
    icon: "📱",
    title: "Social Media Marketing",
    description: "Engaging content and community management that builds brand loyalty and drives measurable results.",
    href: "/services/digital-lab/social-media",
    accent: "#38bdf8",
    tag: "Digital Lab",
    features: ["Content Strategy", "Community Mgmt", "Influencer Collab", "Analytics"],
  },
  {
    number: "05",
    icon: "🎥",
    title: "Photography & Video",
    description: "High-end visual production tailored for modern platforms — from product shoots to brand films.",
    href: "/services/creative-lab/photography",
    accent: "#a855f7",
    tag: "Creative Lab",
    features: ["Brand Films", "Product Shoots", "Reels & Shorts", "Drone Footage"],
  },
  {
    number: "06",
    icon: "✉️",
    title: "CRM & Email Marketing",
    description: "Automated email journeys that nurture leads, retain customers and maximize lifetime value.",
    href: "/services/digital-lab/email-marketing",
    accent: "#34d399",
    tag: "Digital Lab",
    features: ["Drip Campaigns", "Segmentation", "A/B Testing", "Automation"],
  },
];

function ServiceCard({ service, i }: { service: typeof services[0]; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={service.href}
      className="group relative rounded-2xl p-7 flex flex-col gap-4 overflow-hidden cursor-pointer transition-all duration-400"
      style={{
        background: hovered
          ? `linear-gradient(145deg, ${service.accent}10, ${service.accent}04)`
          : "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        border: hovered ? `1px solid ${service.accent}40` : "1px solid rgba(0,212,255,0.15)",
        boxShadow: hovered
          ? `0 20px 60px rgba(0,153,204,0.15), 0 0 0 1px ${service.accent}20`
          : "0 4px 20px rgba(0,153,204,0.06)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Neon top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
          opacity: hovered ? 1 : 0,
          boxShadow: `0 0 12px ${service.accent}`,
        }}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none transition-opacity duration-400"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${service.accent}12, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300"
            style={{
              background: `linear-gradient(135deg, ${service.accent}18, ${service.accent}08)`,
              border: `1px solid ${service.accent}25`,
              transform: hovered ? "scale(1.1) rotate(3deg)" : "scale(1) rotate(0deg)",
            }}
          >
            {service.icon}
          </div>
          <div>
            <span
              className="text-[9px] font-black uppercase tracking-widest block font-mono"
              style={{ color: service.accent }}
            >
              {service.tag}
            </span>
            <span
              className="text-[9px] font-mono"
              style={{ color: "rgba(0,0,0,0.3)" }}
            >
              {service.number}
            </span>
          </div>
        </div>

        {/* Arrow */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            border: `1px solid ${service.accent}40`,
            color: service.accent,
            transform: hovered ? "translate(4px, -4px)" : "translate(0, 0)",
            background: hovered ? `${service.accent}12` : "transparent",
          }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold transition-colors duration-200"
        style={{ color: "#060f2e", letterSpacing: "-0.02em" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-light text-sm leading-relaxed flex-1" style={{ color: "#64748b" }}>
        {service.description}
      </p>

      {/* Feature tags */}
      <div
        className="flex flex-wrap gap-2 overflow-hidden transition-all duration-400"
        style={{ maxHeight: hovered ? "80px" : "0px", opacity: hovered ? 1 : 0 }}
      >
        {service.features.map((f, j) => (
          <span
            key={j}
            className="text-[10px] font-bold px-2.5 py-1 rounded-full font-mono"
            style={{
              background: `${service.accent}12`,
              color: service.accent,
              border: `1px solid ${service.accent}25`,
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Bottom line */}
      <div
        className="h-px transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${service.accent}, transparent)`,
          opacity: hovered ? 0.6 : 0,
        }}
      />
    </motion.a>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden" style={{ background: "#f0faff" }}>
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px section-line" />

      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#00d4ff" }}>
              What We Do
            </span>
            <h2 className="text-5xl md:text-6xl mb-4" style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Our Services
            </h2>
            <div className="w-20 h-[2px]" style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)" }} />
          </motion.div>
          <motion.p
            className="text-lg md:text-xl font-light leading-relaxed"
            style={{ color: "#64748b" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            One stop destination for all your digital needs — strategy, content, technology and performance, all under one roof.
          </motion.p>
        </div>

        {/* Service card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} i={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/services"
            id="view-all-services-btn"
            className="inline-flex items-center gap-2 px-9 py-4 font-bold text-sm transition-all hover:scale-105 rounded-xl"
            style={{
              border: "1.5px solid rgba(0,212,255,0.4)",
              color: "#060f2e",
              background: "white",
              boxShadow: "0 4px 20px rgba(0,153,204,0.08)",
            }}
          >
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
