"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Search, TrendingUp, Share2, Camera, Mail } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web & App Development",
    description: "Bespoke digital experiences that tell your brand's story perfectly — fast, beautiful and conversion-optimised.",
    href: "/services/tech-lab/web-development",
    grad: "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
    glowColor: "rgba(0,212,255,0.3)",
  },
  {
    icon: Search,
    title: "SEO & AEO",
    description: "Rank higher on Google and appear in AI-powered search results to reach the audience that matters most.",
    href: "/services/digital-lab/seo",
    grad: "linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%)",
    glowColor: "rgba(124,58,237,0.3)",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven paid campaigns on Google, Meta and more — designed to maximize ROAS and revenue.",
    href: "/services/digital-lab/paid-media",
    grad: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
    glowColor: "rgba(0,212,255,0.3)",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engaging content and community management that builds brand loyalty and drives measurable results.",
    href: "/services/digital-lab/social-media",
    grad: "linear-gradient(135deg, #0099cc 0%, #00d4ff 100%)",
    glowColor: "rgba(0,153,204,0.3)",
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description: "High-end visual production tailored for modern platforms — from product shoots to brand films.",
    href: "/services/creative-lab/photography",
    grad: "linear-gradient(135deg, #7c3aed 0%, #0099cc 100%)",
    glowColor: "rgba(124,58,237,0.3)",
  },
  {
    icon: Mail,
    title: "CRM & Email Marketing",
    description: "Automated email journeys that nurture leads, retain customers and maximize lifetime value.",
    href: "/services/digital-lab/email-marketing",
    grad: "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
    glowColor: "rgba(0,212,255,0.3)",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden" style={{ background: "#f0faff" }}>
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px section-line" />

      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-4"
              style={{ color: "#00d4ff" }}
            >
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.a
                href={service.href}
                key={i}
                className="group relative p-8 block overflow-hidden transition-all duration-400"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,212,255,0.2)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ boxShadow: `0 20px 60px ${service.glowColor}` }}
                />

                {/* Top gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: service.grad }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: service.grad, borderRadius: "2px" }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3
                  className="text-xl mb-3 group-hover:opacity-80 transition-colors"
                  style={{ color: "#060f2e", fontWeight: 500, letterSpacing: "-0.02em" }}
                >
                  {service.title}
                </h3>
                <p className="leading-relaxed font-light text-sm" style={{ color: "#64748b" }}>
                  {service.description}
                </p>

                {/* Learn more */}
                <div
                  className="mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "#00d4ff" }}
                >
                  Learn more
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(225deg, ${service.glowColor} 0%, transparent 70%)`,
                  }}
                />
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/services"
            id="view-all-services-btn"
            className="inline-flex items-center gap-2 px-9 py-4 font-semibold text-sm transition-all hover:scale-105"
            style={{
              border: "1.5px solid rgba(0,212,255,0.5)",
              color: "#060f2e",
              background: "white",
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
