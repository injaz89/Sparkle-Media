"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Heart,
  Sparkles,
  Globe,
  MessageSquare,
  Rocket,
  GraduationCap,
  Search,
  Lightbulb,
  Trophy,
  HeartHandshake,
  Zap,
  Award
} from "lucide-react";

/* ─────────────────────────────────────────
   Brand SVG icons
───────────────────────────────────────── */
function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.52-4.06-1.39-.28-.2-.53-.44-.77-.69v7.74c.02 1.94-.49 3.94-1.78 5.37-1.61 1.86-4.22 2.7-6.66 2.1-2.44-.6-4.52-2.6-4.99-5.09C3.42 15.42 4.9 12.3 7.6 11.23c.8-.32 1.67-.4 2.51-.31v4.08c-.76-.15-1.58-.02-2.22.42-.76.54-1.12 1.54-.93 2.45.24 1.25 1.48 2.12 2.74 1.94 1.08-.13 1.91-.98 2.01-2.07.02-1.89.01-3.79.01-5.69V0h.8zm0 0" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Static data
───────────────────────────────────────── */
const heroSlides = [
  { headline: "Together We Create Magic", sub: "Collaboration, creativity and innovation drive everything we do every single day.", accent: "#00d4ff" },
  { headline: "Innovation Starts Here", sub: "Every campaign begins with bold ideas and the passionate energy of our team.", accent: "#38bdf8" },
  { headline: "Work Hard. Celebrate Together.", sub: "Success is best enjoyed as a team, and every milestone is worth celebrating.", accent: "#00d4ff" },
  { headline: "Grow With Us", sub: "We foster a workplace where learning, creativity and growth happen every single day.", accent: "#38bdf8" },
];

const perks = [
  { icon: Heart, title: "People-First Culture", desc: "Your wellbeing, balance, and growth are at the heart of everything we build here.", accent: "#00d4ff", glow: "rgba(0,212,255,0.20)" },
  { icon: Sparkles, title: "Creative Freedom", desc: "We encourage bold ideas, wild experimentation, and out-of-the-box innovation without limits.", accent: "#38bdf8", glow: "rgba(56,189,248,0.20)" },
  { icon: Globe, title: "Diverse Global Team", desc: "Talented specialists collaborating seamlessly across countries, time zones and disciplines.", accent: "#00d4ff", glow: "rgba(0,212,255,0.20)" },
  { icon: MessageSquare, title: "Collaborative Spirit", desc: "A flat hierarchy where every voice is heard, valued, celebrated and acted on.", accent: "#38bdf8", glow: "rgba(56,189,248,0.20)" },
  { icon: Rocket, title: "Rapid Career Growth", desc: "Fast-track your career with mentorship, real ownership, and constant stretch opportunities.", accent: "#00d4ff", glow: "rgba(0,212,255,0.20)" },
  { icon: GraduationCap, title: "Always Learning", desc: "Continuous training, certifications, and exposure to the latest tools keeps you razor-sharp.", accent: "#38bdf8", glow: "rgba(56,189,248,0.20)" },
];

const values = [
  { label: "Transparency", icon: Search, color: "#00d4ff" },
  { label: "Bold Thinking", icon: Lightbulb, color: "#38bdf8" },
  { label: "Ownership", icon: Trophy, color: "#00d4ff" },
  { label: "Empathy", icon: HeartHandshake, color: "#38bdf8" },
  { label: "Innovation", icon: Zap, color: "#00d4ff" },
  { label: "Excellence", icon: Award, color: "#38bdf8" },
];

const quotes = [
  { quote: "Working at Sparkle Media feels like being part of a family that genuinely cares about your growth and celebrates every win together.", name: "Inshath Ifham", role: "Founder & CEO", initial: "I", accent: "#00d4ff" },
  { quote: "The culture here is electric. Every single day I come in excited to learn something new and push the boundaries of what we build.", name: "Creative Lead", role: "Design & Branding", initial: "C", accent: "#38bdf8" },
  { quote: "There is no ceiling here. You are given real responsibility from day one, and the team support makes you unstoppable.", name: "Performance Strategist", role: "Paid Media & Analytics", initial: "P", accent: "#00d4ff" },
];

const socials = [
  { name: "Instagram", handle: "@sparklemedia_", href: "https://www.instagram.com/sparklemedia_/", Icon: InstagramIcon, bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" },
  { name: "Facebook", handle: "Sparkle Media", href: "https://www.facebook.com/profile.php?id=100083969542491", Icon: FacebookIcon, bg: "#1877F2" },
  { name: "LinkedIn", handle: "Sparkle Media Pvt Ltd", href: "https://www.linkedin.com/company/sparkle-media-creatives", Icon: LinkedInIcon, bg: "#0A66C2" },
  { name: "TikTok", handle: "@sparklemedia_", href: "https://www.tiktok.com/@sparklemedia_", Icon: TikTokIcon, bg: "#010101" },
];

const sparkleData = [
  { x: "8%",  y: "18%", delay: 0,   size: 10, duration: 3.2 },
  { x: "20%", y: "70%", delay: 0.9, size: 7,  duration: 4.1 },
  { x: "90%", y: "22%", delay: 0.4, size: 9,  duration: 2.8 },
  { x: "83%", y: "65%", delay: 1.3, size: 6,  duration: 3.7 },
  { x: "55%", y: "10%", delay: 0.6, size: 8,  duration: 2.6 },
  { x: "68%", y: "85%", delay: 1.9, size: 7,  duration: 3.5 },
  { x: "35%", y: "42%", delay: 2.2, size: 5,  duration: 4.0 },
  { x: "75%", y: "48%", delay: 0.2, size: 11, duration: 3.6 },
];

function SparkleParticle({ x, y, delay, size, duration }: { x: string; y: string; delay: number; size: number; duration: number }) {
  return (
    <div className="absolute pointer-events-none" style={{ left: x, top: y, animation: `sparkle ${duration}s ease-in-out ${delay}s infinite` }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="rgba(0,212,255,0.6)" />
      </svg>
    </div>
  );
}

export default function LifeAtSparkleMediaPage() {
  const [slide, setSlide] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setQuoteIdx((p) => (p + 1) % quotes.length), 4500);
    return () => clearInterval(t);
  }, []);

  const darkBg = "radial-gradient(ellipse 1000px 700px at 80% -10%, rgba(0,212,255,0.18) 0%, transparent 60%),radial-gradient(ellipse 800px 800px at 5% 110%, rgba(124,58,237,0.15) 0%, transparent 55%),linear-gradient(160deg, #020a20 0%, #060f2e 40%, #0a0e2e 70%, #050c25 100%)";

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: "#f0faff" }}>

        {/* ── HERO ── */}
        <section className="relative w-full min-h-screen flex items-center overflow-hidden" style={{ background: darkBg }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,212,255,0.035) 1px, transparent 1px),linear-gradient(90deg, rgba(0,212,255,0.035) 1px, transparent 1px)", backgroundSize: "72px 72px", maskImage: "radial-gradient(ellipse 130% 130% at 50% 30%, #000 40%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 130% 130% at 50% 30%, #000 40%, transparent 80%)" }} />
          <motion.div className="absolute pointer-events-none" style={{ width: "600px", height: "600px", top: "-10%", right: "5%", background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 65%)", filter: "blur(80px)" }} animate={{ scale: [1,1.3,1], x: [0,30,0], y: [0,-20,0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute pointer-events-none" style={{ width: "500px", height: "500px", bottom: "-5%", left: "-5%", background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 65%)", filter: "blur(80px)" }} animate={{ scale: [1,1.2,1], x: [0,-20,0], y: [0,20,0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
          <motion.div className="absolute pointer-events-none" style={{ width: "350px", height: "350px", top: "40%", left: "30%", background: "radial-gradient(circle, rgba(0,153,204,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} animate={{ scale: [1,1.4,1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
          {sparkleData.map((s, i) => <SparkleParticle key={i} {...s} />)}
          <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: "repeating-linear-gradient(45deg,#00d4ff 0px,#00d4ff 1px,transparent 1px,transparent 80px)" }} />

          <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center text-center pt-36 pb-32">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8">
              <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-[.2em] font-mono" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.08))", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
                <span className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: "0 0 8px rgba(0,212,255,0.9)", animation: "pulseGlow 2s ease-in-out infinite" }} />
                Life at Sparkle Media
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.h1 key={slide} className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.0] tracking-[-0.03em] text-white mb-6" style={{ fontWeight: 800 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
                <span style={{ backgroundImage: `linear-gradient(135deg, ${heroSlides[slide].accent} 0%, #a855f7 60%, ${heroSlides[slide].accent} 100%)`, backgroundSize: "200% 200%", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "gradientShift 3s ease-in-out infinite", fontFamily: "'Lora','Georgia',serif", fontStyle: "italic" }}>
                  {heroSlides[slide].headline}
                </span>
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p key={`sub-${slide}`} className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl" style={{ color: "rgba(255,255,255,0.52)", fontWeight: 300 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                {heroSlides[slide].sub}
              </motion.p>
            </AnimatePresence>

            <div className="flex gap-2 mb-12">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} className="transition-all duration-300 h-1.5 rounded-full" style={{ width: i === slide ? "32px" : "8px", background: i === slide ? "#00d4ff" : "rgba(255,255,255,0.25)" }} />
              ))}
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-4 items-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <Link href="/contact" id="life-hero-join-btn" className="group relative inline-flex items-center gap-3 px-8 py-[18px] text-sm font-bold tracking-wide rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(135deg, #2ee8ff 0%, #00d4ff 50%, #009ac2 100%)", color: "#04091f", boxShadow: "0 14px 40px -12px rgba(0,212,255,0.65)", animation: "pulseGlow 3s ease-in-out infinite" }}>
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <span className="relative z-10">Join Our Team</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <a href="#culture" id="life-explore-btn" className="inline-flex items-center gap-3 px-8 py-[18px] text-sm font-semibold rounded-2xl transition-all duration-300 hover:scale-105" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "rgba(255,255,255,0.85)", background: "rgba(0,212,255,0.06)" }}>
                Explore Culture ↓
              </a>
            </motion.div>

            <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
              <span className="text-[9px] uppercase tracking-[.22em] font-mono font-semibold" style={{ color: "rgba(0,212,255,0.45)" }}>Scroll</span>
              <motion.div className="w-[1px] h-10" style={{ background: "linear-gradient(to bottom, #00d4ff, transparent)" }} animate={{ scaleY: [1,0.6,1], opacity: [0.8,0.3,0.8] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
            </motion.div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section style={{ background: "linear-gradient(135deg, #060f2e 0%, #0d1b4b 40%, #060f2e 100%)", borderTop: "1px solid rgba(0,212,255,0.15)", borderBottom: "1px solid rgba(0,212,255,0.15)" }}>
          <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { val: "50+",   label: "Team Members Worldwide", accent: "#00d4ff" },
              { val: "5+",    label: "Years of Excellence",    accent: "#38bdf8" },
              { val: "150K+", label: "Leads Generated",        accent: "#00d4ff" },
              { val: "98%",   label: "Team Satisfaction Rate", accent: "#38bdf8" },
            ].map((s, i) => (
              <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-4xl md:text-5xl font-black tracking-[-0.04em] mb-2" style={{ backgroundImage: `linear-gradient(135deg, ${s.accent}, #fff 70%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.val}</div>
                <div className="text-xs font-mono uppercase tracking-[.16em]" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CULTURE INTRO ── */}
        <section id="culture" className="py-28 relative overflow-hidden" style={{ background: "#f0faff" }}>
          <div className="absolute top-0 left-0 right-0 h-px section-line" />
          <div className="absolute top-0 left-0 w-[600px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle at 0% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle at 100% 100%, rgba(124,58,237,0.05) 0%, transparent 60%)" }} />
          <div className="max-w-4xl mx-auto px-6 text-center relative">
            <motion.span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#00d4ff" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Our Culture</motion.span>
            <motion.h2 className="text-5xl md:text-6xl mb-10 leading-tight" style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Life at{" "}<span style={{ backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Sparkle Media</span>
            </motion.h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              {[
                "Life at Sparkle Media is exciting and rewarding. You get to work with a diverse team of people who are passionate about digital marketing, constantly learning, and innovating together.",
                "You will be involved in the creative process of developing campaigns, creating content, and measuring results while being exposed to the latest AI-powered technologies that stay ahead of the competition.",
                "The work is demanding but deeply fulfilling. We directly help businesses reach their goals and build their brand, and every team member feels the impact of their contribution.",
              ].map((p, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>{p}</motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* ── PERKS ── */}
        <section className="py-32 relative overflow-hidden" style={{ background: "radial-gradient(ellipse 800px 600px at 80% 0%, rgba(0,212,255,0.10) 0%, transparent 60%),radial-gradient(ellipse 700px 700px at 5% 100%, rgba(124,58,237,0.10) 0%, transparent 55%),linear-gradient(160deg, #020a20 0%, #060f2e 50%, #050c25 100%)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center mb-16">
              <motion.span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5 font-mono" style={{ color: "#00d4ff" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Why Work With Us</motion.span>
              <motion.h2 className="text-5xl md:text-6xl text-white leading-tight" style={{ fontWeight: 200, letterSpacing: "-0.04em" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                What Makes Us{" "}<span style={{ backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Different</span>
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, i) => (
                <motion.div key={i} className="group relative rounded-2xl p-8 cursor-default overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -6 }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background: `radial-gradient(ellipse 200px 150px at 50% 0%, ${perk.glow} 0%, transparent 70%)` }} />
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, transparent, ${perk.accent}, transparent)` }} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${perk.accent}20, ${perk.accent}08)`, border: `1px solid ${perk.accent}30`, boxShadow: `0 4px 20px ${perk.glow}`, color: perk.accent }}>
                      <perk.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-white">{perk.title}</h3>
                    <p className="font-light text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{perk.desc}</p>
                    <div className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ background: `linear-gradient(90deg, ${perk.accent}, transparent)` }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="py-32 relative overflow-hidden" style={{ background: "#f0faff" }}>
          <div className="absolute top-0 left-0 right-0 h-px section-line" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle at 0% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)" }} />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#00d4ff" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>What We Stand For</motion.span>
                <motion.h2 className="text-5xl md:text-6xl mb-8 leading-tight" style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  Our Core{" "}<span style={{ backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Values</span>
                </motion.h2>
                <motion.div className="pl-6 py-2" style={{ borderLeft: "3px solid #00d4ff" }} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <p className="text-lg font-light leading-relaxed" style={{ color: "#64748b" }}>These are not words on a wall. They are the principles that guide every decision we make, every campaign we run, and every person we hire.</p>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {values.map((v, i) => (
                  <motion.div key={i} className="group relative rounded-2xl p-6 text-center cursor-default overflow-hidden" style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(0,212,255,0.12)", boxShadow: "0 4px 24px rgba(0,153,204,0.06)" }} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }}>
                    <div className="flex justify-center mb-3" style={{ color: v.color }}>
                      <v.icon className="w-7 h-7" />
                    </div>
                    <div className="text-sm font-bold" style={{ color: "#060f2e" }}>{v.label}</div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: v.color }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM QUOTES ── */}
        <section className="py-32 relative overflow-hidden" style={{ background: "radial-gradient(ellipse 700px 500px at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 60%),linear-gradient(160deg, #020a20 0%, #060f2e 60%, #050c25 100%)" }}>
          <div className="max-w-4xl mx-auto px-6 relative text-center">
            <motion.span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-8 font-mono" style={{ color: "#00d4ff" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Voices from the Team</motion.span>
            <AnimatePresence mode="wait">
              <motion.div key={quoteIdx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.5 }}>
                <div className="text-[80px] leading-none font-serif mb-4" style={{ color: "rgba(0,212,255,0.15)" }}>&ldquo;</div>
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Lora','Georgia',serif", fontStyle: "italic" }}>{quotes[quoteIdx].quote}</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-lg" style={{ background: `linear-gradient(135deg, ${quotes[quoteIdx].accent}, #38bdf8)` }}>{quotes[quoteIdx].initial}</div>
                  <div className="text-left">
                    <p className="text-white font-bold text-sm">{quotes[quoteIdx].name}</p>
                    <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>{quotes[quoteIdx].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-10">
              {quotes.map((_, i) => (
                <button key={i} onClick={() => setQuoteIdx(i)} className="transition-all duration-300 h-1.5 rounded-full" style={{ width: i === quoteIdx ? "28px" : "8px", background: i === quoteIdx ? "#00d4ff" : "rgba(255,255,255,0.2)" }} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SOCIAL MEDIA ── */}
        <section className="py-28 relative overflow-hidden" style={{ background: "#f0faff" }}>
          <div className="absolute top-0 left-0 right-0 h-px section-line" />
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <motion.span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#00d4ff" }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>Follow Our Journey</motion.span>
              <motion.h2 className="text-5xl md:text-6xl leading-tight" style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                Find Us on{" "}<span style={{ backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Social Media</span>
              </motion.h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {socials.map((s, i) => (
                <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(0,212,255,0.12)", boxShadow: "0 4px 24px rgba(0,153,204,0.06)" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,153,204,0.14)" }}>
                  <div className="w-12 h-12 flex items-center justify-center text-white rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: s.bg }}><s.Icon /></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-base" style={{ color: "#060f2e" }}>{s.name}</p>
                    <p className="text-sm font-light" style={{ color: "#64748b" }}>{s.handle}</p>
                  </div>
                  <svg className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="#060f2e"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── LETS TALK ── */}
        <section className="py-32 relative overflow-hidden" style={{ background: "radial-gradient(ellipse 900px 600px at 50% 50%, rgba(0,212,255,0.12) 0%, transparent 65%),linear-gradient(160deg, #020a20 0%, #060f2e 50%, #050c25 100%)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="max-w-5xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[.18em] font-mono mb-6" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", background: "rgba(0,212,255,0.07)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
                  {"Let's Talk"}
                </span>
                <h2 className="text-5xl md:text-6xl text-white mb-6 leading-tight" style={{ fontWeight: 200, letterSpacing: "-0.04em" }}>
                  Ready to Start{" "}<span style={{ backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #38bdf8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Something Great?</span>
                </h2>
                <p className="text-lg font-light mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>Whether you want to join the team or grow your brand, we are excited to connect with you.</p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/contact" id="life-cta-call-btn" className="group relative inline-flex items-center gap-3 px-7 py-4 text-sm font-bold tracking-wide rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(135deg, #2ee8ff 0%, #00d4ff 50%, #009ac2 100%)", color: "#04091f", boxShadow: "0 10px 30px -10px rgba(0,212,255,0.6)" }}>
                    <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <span className="relative z-10">Book a Strategy Call</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                  <a href="https://wa.me/message/RBCP6CKB5PX6C1" target="_blank" rel="noopener noreferrer" id="life-whatsapp-btn" className="inline-flex items-center gap-3 px-7 py-4 text-sm font-semibold rounded-2xl transition-all hover:scale-105" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "rgba(255,255,255,0.85)", background: "rgba(0,212,255,0.06)" }}>{"WhatsApp Us"}</a>
                </div>
                <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,212,255,0.15)", backdropFilter: "blur(12px)" }}>
                  <p className="text-[10px] font-bold uppercase tracking-[.2em] font-mono mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Speak with our Founder & CEO</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-xl" style={{ background: "linear-gradient(135deg, #00d4ff, #38bdf8)" }}>I</div>
                    <div>
                      <p className="font-bold text-white text-sm">Inshath Ifham</p>
                      <p className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>Founder — Chairman & CEO</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #00d4ff, #38bdf8)", color: "#04091f" }}>Talk Now →</Link>
                    <a href="https://www.linkedin.com/in/mohamed-inshath" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all hover:scale-105" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "rgba(255,255,255,0.7)", background: "rgba(0,212,255,0.07)" }}><LinkedInIcon /> LinkedIn</a>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                <div className="rounded-[28px] p-8" style={{ background: "linear-gradient(165deg, rgba(255,255,255,0.06) 0%, rgba(0,212,255,0.03) 50%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(0,212,255,0.22)", boxShadow: "0 40px 80px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(0,212,255,0.12)", backdropFilter: "blur(12px)", animation: "cardGlowPulse 4s ease-in-out infinite" }}>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.8)" }} />
                      <span className="text-[10px] uppercase tracking-[.22em] font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>Join the family</span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[.12em] rounded-full px-3 py-1.5 font-mono" style={{ color: "#00d4ff", border: "1px solid rgba(0,212,255,0.3)", background: "rgba(0,212,255,0.07)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
                      Now Hiring
                    </span>
                  </div>
                  {[
                    { role: "Performance Marketing Lead", type: "Full-time", color: "#00d4ff" },
                    { role: "Content Creator & Strategist", type: "Full-time", color: "#38bdf8" },
                    { role: "Graphic Designer", type: "Full-time", color: "#00d4ff" },
                    { role: "SEO & GEO Specialist", type: "Full-time", color: "#38bdf8" },
                  ].map((r, i, arr) => (
                    <div key={i} className="flex items-center justify-between py-4" style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(0,212,255,0.08)" : "none" }}>
                      <div>
                        <p className="text-sm font-semibold text-white">{r.role}</p>
                        <p className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>{r.type}</p>
                      </div>
                      <div className="text-[10px] font-bold px-3 py-1 rounded-full font-mono" style={{ background: `${r.color}15`, color: r.color, border: `1px solid ${r.color}30` }}>Open</div>
                    </div>
                  ))}
                  <Link href="/contact" className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #2ee8ff 0%, #00d4ff 50%, #009ac2 100%)", color: "#04091f" }}>Apply Now →</Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
