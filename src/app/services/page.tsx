"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Search, Target, Share2, FileText, Mail, TrendingUp, Cpu } from "lucide-react";

/* ─────────────────────────────────────────
   ALL SERVICES DATA — 2 Labs, 8 Services
 ───────────────────────────────────────── */
const labs = [
  {
    id: "digital-lab",
    name: "Digital Lab",
    tagline: "Data-driven strategies that grow your brand online.",
    accent: "#00d4ff",
    glow: "rgba(0,212,255,0.18)",
    services: [
      {
        number: "01", icon: Search,
        title: "SEO & AEO",
        desc: "Rank higher on Google and appear in AI-powered search results to reach the audience that matters most.",
        href: "/services/digital-lab/seo",
        features: ["Keyword Strategy", "Technical SEO", "AI Visibility", "Content Authority"],
      },
      {
        number: "02", icon: Target,
        title: "Performance Marketing",
        desc: "Data-driven paid campaigns on Google, Meta and more — designed to maximize ROAS and revenue.",
        href: "/services/digital-lab/paid-media",
        features: ["Google Ads", "Meta Ads", "ROAS Tracking", "AI Bidding"],
      },
      {
        number: "03", icon: Share2,
        title: "Social Media Marketing",
        desc: "Engaging content and community management that builds brand loyalty and drives measurable results.",
        href: "/services/digital-lab/social-media",
        features: ["Content Strategy", "Community Mgmt", "Influencer Collab", "Analytics"],
      },
      {
        number: "04", icon: Mail,
        title: "CRM & Email Marketing",
        desc: "Automated email journeys that nurture leads, retain customers and maximize lifetime value.",
        href: "/services/digital-lab/email-marketing",
        features: ["Drip Campaigns", "Segmentation", "A/B Testing", "Automation"],
      },
      {
        number: "05", icon: FileText,
        title: "Content Marketing",
        desc: "Strategic content that tells your brand story, builds authority, and converts visitors into customers.",
        href: "/services/digital-lab/content-marketing",
        features: ["Blogs & Articles", "Social Content", "Landing Pages", "Vlogs"],
      },
      {
        number: "06", icon: TrendingUp,
        title: "SEM",
        desc: "Search engine marketing campaigns that put your brand right in front of high-intent buyers at the right moment.",
        href: "/services/digital-lab/sem",
        features: ["Google Search Ads", "Shopping Ads", "Display Network", "Remarketing"],
      },
    ],
  },
  {
    id: "tech-lab",
    name: "Tech Lab",
    tagline: "Beautiful, high-performance digital products built to convert.",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.18)",
    services: [
      {
        number: "01", icon: Globe,
        title: "Web & App Development",
        desc: "Bespoke digital experiences that tell your brand story perfectly — fast, beautiful and conversion-optimised.",
        href: "/services/tech-lab/web-development",
        features: ["Custom Design", "CMS Integration", "Speed Optimised", "Mobile First"],
      },
      {
        number: "02", icon: Cpu,
        title: "Software Development",
        desc: "Custom software solutions that automate operations, scale your business and solve complex challenges.",
        href: "/services/tech-lab/software-development",
        features: ["Custom Software", "API Integration", "Cloud Solutions", "Maintenance"],
      },
    ],
  },
];

const sparkleData = [
  { x: "5%",  y: "12%", delay: 0,   size: 8, duration: 3.4 },
  { x: "92%", y: "8%",  delay: 1.1, size: 6, duration: 4.2 },
  { x: "88%", y: "55%", delay: 0.5, size: 9, duration: 3.0 },
  { x: "7%",  y: "68%", delay: 1.7, size: 7, duration: 3.8 },
  { x: "50%", y: "3%",  delay: 0.8, size: 5, duration: 4.5 },
];

interface SparkleParticleProps {
  x: string;
  y: string;
  delay: number;
  size: number;
  duration: number;
}

function SparkleParticle({ x, y, delay, size, duration }: SparkleParticleProps) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ left: x, top: y, animation: "sparkle " + duration + "s ease-in-out " + delay + "s infinite" }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
          fill="rgba(0,212,255,0.55)"
        />
      </svg>
    </div>
  );
}

interface ServiceItem {
  number: string;
  icon: any;
  title: string;
  desc: string;
  href: string;
  features: string[];
}

interface ServiceCardProps {
  service: ServiceItem;
  accent: string;
  i: number;
}

function ServiceCard({ service, accent, i }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.07 }}
    >
      <Link
        href={service.href}
        className="group relative flex flex-col h-full rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-2"
        style={{
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(0,212,255,0.15)",
          boxShadow: "0 4px 24px rgba(0,153,204,0.06)",
        }}
      >
        {/* Neon top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(90deg, transparent, " + accent + ", transparent)",
            boxShadow: "0 0 10px " + accent,
          }}
        />
        {/* Corner glow */}
        <div
          className="absolute top-0 right-0 w-28 h-28 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "radial-gradient(circle at 100% 0%, " + accent + "18, transparent 70%)" }}
        />

        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{
                background: "linear-gradient(135deg, " + accent + "20, " + accent + "08)",
                border: "1px solid " + accent + "28",
                color: accent,
              }}
            >
              <service.icon className="w-5 h-5" />
            </div>
            <span
              className="text-[9px] font-black uppercase tracking-widest font-mono"
              style={{ color: accent }}
            >
              {service.number}
            </span>
          </div>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ border: "1px solid " + accent + "35", color: accent }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>

        <h3
          className="text-lg font-bold mb-2 flex-none"
          style={{ color: "#060f2e", letterSpacing: "-0.02em" }}
        >
          {service.title}
        </h3>
        <p className="text-sm font-light leading-relaxed flex-1 mb-5" style={{ color: "#64748b" }}>
          {service.desc}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-1.5">
          {service.features.map((f, j) => (
            <span
              key={j}
              className="text-[9px] font-bold px-2 py-0.5 rounded-full font-mono"
              style={{
                background: accent + "12",
                color: accent,
                border: "1px solid " + accent + "22",
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300"
          style={{ background: "linear-gradient(90deg, " + accent + ", transparent)" }}
        />
      </Link>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section
          className="relative min-h-[60vh] flex items-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 900px 600px at 80% -10%, rgba(0,212,255,0.16) 0%, transparent 60%)," +
              "radial-gradient(ellipse 700px 700px at 5% 110%, rgba(124,58,237,0.14) 0%, transparent 55%)," +
              "linear-gradient(160deg, #020a20 0%, #060f2e 45%, #050c25 100%)",
          }}
        >
          {/* Mesh grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,255,0.032) 1px, transparent 1px)," +
                "linear-gradient(90deg, rgba(0,212,255,0.032) 1px, transparent 1px)",
              backgroundSize: "68px 68px",
              maskImage: "radial-gradient(ellipse 130% 120% at 50% 40%, #000 40%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 130% 120% at 50% 40%, #000 40%, transparent 80%)",
            }}
          />
          {/* Animated orbs */}
          <motion.div
            className="absolute pointer-events-none"
            style={{ width: "500px", height: "500px", top: "-15%", right: "5%", background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 65%)", filter: "blur(80px)" }}
            animate={{ scale: [1, 1.3, 1], x: [0, 25, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute pointer-events-none"
            style={{ width: "400px", height: "400px", bottom: "-10%", left: "0%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)", filter: "blur(80px)" }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          {sparkleData.map((s, i) => <SparkleParticle key={i} {...s} />)}

          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 pt-36 pb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[.22em] font-mono"
                style={{ background: "rgba(0,212,255,0.10)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
                Everything We Offer
              </span>
            </motion.div>

            <motion.h1
              className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.0] tracking-[-0.04em] text-white mb-6"
              style={{ fontWeight: 800 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              All{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #a855f7 60%, #00d4ff 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradientShift 3s ease-in-out infinite",
                }}
              >
                Services
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-light max-w-2xl"
              style={{ color: "rgba(255,255,255,0.50)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              One destination for strategy, data, and technology. Two specialist labs. Eight world-class services — all under one roof.
            </motion.p>

            {/* Lab jump links */}
            <motion.div className="flex flex-wrap gap-3 mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              {labs.map((lab) => (
                <a
                  key={lab.id}
                  href={"#" + lab.id}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[.14em] transition-all hover:scale-105"
                  style={{ border: "1px solid " + lab.accent + "40", color: lab.accent, background: lab.accent + "0c" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: lab.accent }} />
                  {lab.name}
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── LAB SECTIONS ── */}
        {labs.map((lab, labIdx) => (
          <section
            key={lab.id}
            id={lab.id}
            className="py-24 relative overflow-hidden"
            style={{
              background:
                labIdx % 2 === 0
                  ? "#f0faff"
                  : "linear-gradient(160deg, #020a20 0%, #060f2e 60%, #050c25 100%)",
            }}
          >
            {/* Decorators per alternating bg */}
            {labIdx % 2 === 0 ? (
              <>
                <div className="absolute top-0 left-0 right-0 h-px section-line" />
                <div
                  className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
                  style={{ background: "radial-gradient(circle at 100% 0%, " + lab.glow + " 0%, transparent 60%)" }}
                />
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px)," +
                      "linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                  }}
                />
                <motion.div
                  className="absolute pointer-events-none"
                  style={{ width: "500px", height: "500px", top: "10%", right: "-5%", background: "radial-gradient(circle, " + lab.glow + " 0%, transparent 65%)", filter: "blur(80px)" }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
              </>
            )}

            <div className="max-w-7xl mx-auto px-6 relative">
              {/* Lab header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <span
                    className="text-[10px] font-black uppercase tracking-[.22em] font-mono block mb-2"
                    style={{ color: lab.accent }}
                  >
                    {lab.name}
                  </span>
                  <h2
                    className="text-4xl md:text-5xl leading-tight"
                    style={{
                      color: labIdx % 2 !== 0 ? "#fff" : "#060f2e",
                      fontWeight: 200,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {lab.name}
                  </h2>
                  <p
                    className="mt-2 text-sm font-light"
                    style={{ color: labIdx % 2 !== 0 ? "rgba(255,255,255,0.45)" : "#64748b" }}
                  >
                    {lab.tagline}
                  </p>
                </motion.div>
                <motion.span
                  className="inline-flex items-center gap-2 text-xs font-bold font-mono px-4 py-2 rounded-full"
                  style={{
                    background: lab.accent + "12",
                    color: lab.accent,
                    border: "1px solid " + lab.accent + "28",
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {lab.services.length} {lab.services.length === 1 ? "Service" : "Services"}
                </motion.span>
              </div>

              {/* Service cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {lab.services.map((service, i) => (
                  <ServiceCard key={i} service={service} accent={lab.accent} i={i} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── BOTTOM CTA ── */}
        <section
          className="py-28 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 800px 500px at 50% 50%, rgba(0,212,255,0.12) 0%, transparent 65%),"
              + "linear-gradient(160deg, #020a20 0%, #060f2e 60%, #050c25 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px)," +
                "linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="max-w-3xl mx-auto px-6 text-center relative">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[.22em] font-mono mb-6"
                style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", background: "rgba(0,212,255,0.07)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
                Ready to Grow?
              </span>
              <h2
                className="text-4xl md:text-5xl text-white mb-5 leading-tight"
                style={{ fontWeight: 200, letterSpacing: "-0.04em" }}
              >
                Not sure which service is right for you?
              </h2>
              <p className="text-lg font-light mb-10" style={{ color: "rgba(255,255,255,0.48)" }}>
                Book a free 30-minute strategy call and our experts will map the perfect solution for your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold rounded-2xl transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #2ee8ff 0%, #00d4ff 50%, #009ac2 100%)", color: "#04091f", boxShadow: "0 10px 30px -10px rgba(0,212,255,0.6)" }}
                >
                  Book a Free Strategy Call
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold rounded-2xl transition-all hover:scale-105"
                  style={{ border: "1px solid rgba(0,212,255,0.3)", color: "rgba(255,255,255,0.85)", background: "rgba(0,212,255,0.06)" }}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}