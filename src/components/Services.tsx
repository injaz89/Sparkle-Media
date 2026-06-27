"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web & App Development",
    description: "Bespoke digital experiences that tell your brand's story perfectly — fast, beautiful and conversion-optimised.",
    href: "/services/tech-lab/web-development",
    accent: "#00d4ff",
    tag: "Tech Lab",
  },
  {
    number: "02",
    title: "SEO & AEO",
    description: "Rank higher on Google and appear in AI-powered search results to reach the audience that matters most.",
    href: "/services/digital-lab/seo",
    accent: "#7c3aed",
    tag: "Digital Lab",
  },
  {
    number: "03",
    title: "Performance Marketing",
    description: "Data-driven paid campaigns on Google, Meta and more — designed to maximize ROAS and revenue.",
    href: "/services/digital-lab/paid-media",
    accent: "#00d4ff",
    tag: "Digital Lab",
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description: "Engaging content and community management that builds brand loyalty and drives measurable results.",
    href: "/services/digital-lab/social-media",
    accent: "#0099cc",
    tag: "Digital Lab",
  },
  {
    number: "05",
    title: "Photography & Video",
    description: "High-end visual production tailored for modern platforms — from product shoots to brand films.",
    href: "/services/creative-lab/photography",
    accent: "#7c3aed",
    tag: "Creative Lab",
  },
  {
    number: "06",
    title: "CRM & Email Marketing",
    description: "Automated email journeys that nurture leads, retain customers and maximize lifetime value.",
    href: "/services/digital-lab/email-marketing",
    accent: "#00d4ff",
    tag: "Digital Lab",
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

        {/* Service list — editorial rows */}
        <div className="space-y-0 divide-y" style={{ borderColor: "rgba(0,212,255,0.12)" }}>
          {services.map((service, i) => (
            <motion.a
              href={service.href}
              key={i}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 py-8 relative overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {/* Hover bg sweep */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `linear-gradient(90deg, ${service.accent}08 0%, transparent 60%)` }}
              />

              {/* Left: oversized number */}
              <div className="flex-shrink-0 w-20 text-right">
                <span
                  className="text-6xl font-black leading-none select-none"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${service.accent}, rgba(${service.accent === "#7c3aed" ? "124,58,237" : "0,212,255"},0.3))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    opacity: 0.18,
                    transition: "opacity 0.3s",
                  }}
                >
                  {service.number}
                </span>
              </div>

              {/* Divider line */}
              <div
                className="hidden sm:block flex-shrink-0 w-px h-12 group-hover:h-16 transition-all duration-300"
                style={{ background: `linear-gradient(180deg, transparent, ${service.accent}, transparent)` }}
              />

              {/* Centre: title + desc */}
              <div className="flex-1 relative z-10">
                <div className="flex items-center gap-3 mb-1">
                  <h3
                    className="text-xl font-medium transition-colors duration-200 group-hover:opacity-70"
                    style={{ color: "#060f2e", letterSpacing: "-0.02em" }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 opacity-60"
                    style={{
                      color: service.accent,
                      border: `1px solid ${service.accent}`,
                      borderRadius: "2px",
                    }}
                  >
                    {service.tag}
                  </span>
                </div>
                <p className="font-light text-sm leading-relaxed max-w-xl" style={{ color: "#64748b" }}>
                  {service.description}
                </p>
              </div>

              {/* Right: arrow */}
              <div className="flex-shrink-0 flex items-center gap-2 ml-auto">
                <span
                  className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                  style={{ color: service.accent }}
                >
                  Explore
                </span>
                <div
                  className="w-10 h-10 flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `${service.accent}40`,
                    color: service.accent,
                    background: `${service.accent}08`,
                  }}
                >
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
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
