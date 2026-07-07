"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Globe, Search, Target, Share2, FileText, Mail, TrendingUp, Cpu, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

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

interface ServiceCardProps {
  service: any;
  accent: string;
  i: number;
}

function ServiceCard({ service, accent, i }: ServiceCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col h-full rounded-3xl p-8 overflow-hidden cursor-pointer"
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Top border beam glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      {/* Ambient background glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 200px 150px at 50% 0%, ${accent}15 0%, transparent 70%)`,
        }}
      />

      <Link href={service.href} className="flex flex-col h-full relative z-10">
        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{
                background: `linear-gradient(135deg, ${accent}18, ${accent}04)`,
                border: `1px solid ${accent}25`,
                color: accent,
              }}
            >
              <service.icon className="w-5 h-5" />
            </div>
            <div>
              <span
                className="text-[9px] font-bold uppercase tracking-widest font-mono block"
                style={{ color: "rgba(255, 255, 255, 0.35)" }}
              >
                {service.labId === "digital-lab" ? "Digital Lab" : "Tech Lab"}
              </span>
              <span
                className="text-[10px] font-black uppercase tracking-widest font-mono"
                style={{ color: accent }}
              >
                {service.number}
              </span>
            </div>
          </div>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ border: `1px solid ${accent}25`, color: accent, background: "rgba(255,255,255,0.02)" }}
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
          {service.title}
        </h3>
        <p className="text-sm font-light leading-relaxed flex-1 mb-6 text-white/55">
          {service.desc}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {service.features.map((f: string, j: number) => (
            <span
              key={j}
              className="text-[9px] font-bold px-3 py-1 rounded-full font-mono transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                color: "rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              {f}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesPage() {
  const [selectedLab, setSelectedLab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>(" ");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSearchQuery("");
  }, []);

  const allServices = labs.flatMap((lab) =>
    lab.services.map((service) => ({
      ...service,
      labId: lab.id,
      accent: lab.accent,
      glow: lab.glow,
    }))
  );

  const filteredServices = allServices.filter((service) => {
    const matchesLab = selectedLab === "all" || service.labId === selectedLab;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesLab && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="bg-[#020a20] min-h-screen relative overflow-hidden">
        {/* Background mesh grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.015) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(0,212,255,0.015) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 130% 120% at 50% 40%, #000 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 130% 120% at 50% 40%, #000 40%, transparent 80%)",
          }}
        />

        {/* Dynamic decorative background glow blobs */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-[#00d4ff]/8 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#7c3aed]/6 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-[#38bdf8]/6 blur-[130px] pointer-events-none rounded-full" />

        {/* ── HERO ── */}
        <section className="relative pt-36 pb-16 flex items-center">
          {sparkleData.map((s, i) => (
            <SparkleParticle key={i} {...s} />
          ))}

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 flex justify-center">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[.22em] font-mono"
                style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.25)", color: "#00d4ff" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
                Sparkle Media Capabilities
              </span>
            </motion.div>

            <motion.h1
              className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.1] tracking-[-0.04em] text-white mb-6 font-extrabold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Our{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #a855f7 60%, #38bdf8 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradientShift 3s ease-in-out infinite",
                }}
              >
                Expertise
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-light max-w-2xl mx-auto text-white/60 leading-relaxed mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              We combine creative strategy, technical expertise, and performance marketing to build and scale your brand online. Explore our specialized services.
            </motion.p>
          </div>
        </section>

        {/* ── FILTER & SEARCH PANEL ── */}
        {mounted && (
          <div className="relative z-20 max-w-7xl mx-auto px-6 mb-16">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center bg-white/[0.02] backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl">
              
              {/* Tab Pills */}
              <div className="flex gap-1.5 p-1 bg-black/25 rounded-2xl border border-white/5 w-full sm:w-auto overflow-x-auto scrollbar-none">
                {[
                  { id: "all", label: "All Services" },
                  { id: "digital-lab", label: "Digital Lab" },
                  { id: "tech-lab", label: "Tech Lab" }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedLab(cat.id)}
                    className="relative flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 z-10 whitespace-nowrap cursor-pointer"
                    style={{ color: selectedLab === cat.id ? "#020a20" : "rgba(255,255,255,0.7)" }}
                  >
                    {selectedLab === cat.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] to-[#38bdf8] rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Real-time Search Input */}
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search services (e.g. Web, SEO, Marketing)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 bg-black/25 rounded-2xl border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] transition-all font-sans"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-white/40 hover:text-white transition-colors cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

            </div>
          </div>
        )}

        {/* ── SERVICES GRID ── */}
        <div className="max-w-7xl mx-auto px-6 pb-28 relative z-10">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <ServiceCard 
                  key={service.href} 
                  service={service} 
                  accent={service.accent} 
                  i={0} 
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty search/filter state */}
          {filteredServices.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 bg-white/[0.01] rounded-3xl border border-white/5 backdrop-blur-md"
            >
              <p className="text-white/40 text-lg font-light">No services found matching your criteria.</p>
              <button 
                onClick={() => { setSelectedLab("all"); setSearchQuery(""); }}
                className="mt-6 px-6 py-3 rounded-2xl bg-[#00d4ff] hover:bg-[#38bdf8] text-[#020a20] text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 cursor-pointer"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>

        {/* ── BOTTOM CTA ── */}
        <section
          className="py-28 relative overflow-hidden border-t border-white/10"
          style={{
            background:
              "radial-gradient(ellipse 800px 500px at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 65%),"
              + "linear-gradient(160deg, #020a20 0%, #060f2e 60%, #050c25 100%)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,255,0.015) 1px, transparent 1px)," +
                "linear-gradient(90deg, rgba(0,212,255,0.015) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[.22em] font-mono mb-6"
                style={{ border: "1px solid rgba(0,212,255,0.2)", color: "#00d4ff", background: "rgba(0,212,255,0.05)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
                Ready to Grow?
              </span>
              <h2
                className="text-4xl md:text-5xl text-white mb-5 leading-tight font-extrabold tracking-tight"
                style={{ letterSpacing: "-0.04em" }}
              >
                Not sure which service is right for you?
              </h2>
              <p className="text-lg font-light mb-10 text-white/55">
                Book a free 30-minute strategy call and our experts will map the perfect solution for your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold rounded-2xl transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #2ee8ff 0%, #00d4ff 50%, #009ac2 100%)", color: "#04091f", boxShadow: "0 10px 30px -10px rgba(0,212,255,0.6)" }}
                >
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold rounded-2xl transition-all hover:scale-105"
                  style={{ border: "1px solid rgba(0,212,255,0.2)", color: "rgba(255,255,255,0.85)", background: "rgba(0,212,255,0.03)" }}
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