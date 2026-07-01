"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Heart, Users, Sparkles, Coffee, ChevronLeft, ChevronRight,
  ArrowRight, MessageCircle, Phone, Briefcase, ExternalLink,
} from "lucide-react";

// Hero slider with high-quality collaborative team vibes
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
    headline: "Where Ideas Spark",
    sub: "A culture built on creativity, collaboration, and relentless ambition.",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600",
    headline: "We Work as One",
    sub: "Diverse minds united by a shared passion for digital excellence.",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600",
    headline: "Always Innovating",
    sub: "Staying ahead of the curve with the latest trends, tools, and creative strategies.",
  },
  {
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600",
    headline: "Grow With Us",
    sub: "A fast-paced environment where your career, creativity, and character flourish.",
  },
];

const perks = [
  { 
    icon: Heart, 
    title: "People-First Culture", 
    desc: "Your wellbeing, balance, and growth are at the heart of everything we build.",
    glow: "rgba(244,63,94,0.15)"
  },
  { 
    icon: Sparkles, 
    title: "Creative Freedom", 
    desc: "We encourage bold ideas, wild experimentation, and out-of-the-box innovation.",
    glow: "rgba(0,212,255,0.15)"
  },
  { 
    icon: Users, 
    title: "Diverse Global Team", 
    desc: "Talented specialists collaborating seamlessly across countries and disciplines.",
    glow: "rgba(124,58,237,0.15)"
  },
  { 
    icon: Coffee, 
    title: "Collaborative Spirit", 
    desc: "A flat hierarchy where every voice is heard, valued, and celebrated.",
    glow: "rgba(0,153,204,0.15)"
  },
];

const socials = [
  {
    name: "Instagram",
    icon: ExternalLink,
    href: "https://www.instagram.com/sparklemedia_/",
    color: "from-pink-500 to-rose-500",
    handle: "@sparklemedia_",
  },
  {
    name: "Facebook",
    icon: ExternalLink,
    href: "https://www.facebook.com/profile.php?id=100083969542491",
    color: "from-blue-600 to-blue-700",
    handle: "Sparkle Media",
  },
  {
    name: "LinkedIn",
    icon: ExternalLink,
    href: "https://www.linkedin.com/company/sparkle-media-creatives",
    color: "from-blue-700 to-cyan-600",
    handle: "Sparkle Media Pvt Ltd",
  },
  {
    name: "TikTok",
    icon: ExternalLink,
    href: "https://www.tiktok.com/@sparklemedia_",
    color: "from-gray-900 to-gray-800",
    handle: "@sparklemedia_",
  },
];

export default function LifeAtSparkleMediaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  return (
    <>
      <Navbar />
      <main 
        className="min-h-screen text-white overflow-hidden" 
        style={{
          background: "linear-gradient(160deg, #060f2e 0%, #0d1b4b 55%, #071a3e 100%)"
        }}
      >
        {/* ── BACKGROUND GLOWS & GRID OVERLAYS ── */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        
        {/* automation grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,.04) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(0,212,255,.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, #000 60%, transparent 95%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 60%, transparent 95%)",
          }}
        />

        {/* ── HERO SLIDER ── */}
        <section className="relative h-screen overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].headline}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #060f2e 10%, rgba(6,15,46,0.5) 60%, transparent)" }} />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex flex-col items-center justify-center pt-24 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="text-center px-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/35 flex items-center justify-center backdrop-blur-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                  >
                    <Heart className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                </div>
                <h1 
                  className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" 
                  style={{ letterSpacing: "-0.04em" }}
                >
                  {heroSlides[currentSlide].headline.split(" ").map((w, idx) => (
                    idx === 1 ? (
                      <span 
                        key={idx}
                        className="gradient-text font-serif italic font-medium px-2"
                        style={{
                          backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}
                      >
                        {w}
                      </span>
                    ) : ` ${w} `
                  ))}
                </h1>
                <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                  {heroSlides[currentSlide].sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide controls */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
              <button 
                onClick={prevSlide} 
                className="w-12 h-12 border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center rounded-full backdrop-blur-md bg-white/5"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2.5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all duration-300 h-2 rounded-full ${i === currentSlide ? "w-10 bg-cyan-400" : "w-2 bg-white/30"}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide} 
                className="w-12 h-12 border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center rounded-full backdrop-blur-md bg-white/5"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-32 relative">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#00d4ff" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Culture
            </motion.span>
            <motion.h2
              className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Life at Sparkle Media
            </motion.h2>
            <div className="space-y-6 text-white/70 text-lg md:text-xl font-light leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Life at Sparkle Media can be exciting and rewarding. You get to work with a diverse team of people who are passionate about digital marketing and are constantly learning and innovating.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                You&apos;ll be involved in the creative process of developing campaigns, creating content, and measuring results. You&apos;ll also be exposed to the latest technologies and strategies so you can stay ahead of the competition.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                The hours can be long and the work can be demanding, but the rewards can be great. Working with Sparkle Media can be very rewarding, as you get to help businesses reach their goals and build their brand.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── PERKS (Beautiful Glass Cards) ── */}
        <section className="py-24 relative border-y border-white/10" style={{ background: "rgba(6,15,46,0.3)" }}>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={i}
                    className="p-8 relative overflow-hidden transition-all duration-500 group rounded-[20px]"
                    style={{
                      background: "linear-gradient(165deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                      border: "1px solid rgba(0,212,255,0.12)",
                      boxShadow: "0 20px 40px -20px rgba(0,0,0,0.4)"
                    }}
                    whileHover={{ 
                      y: -8, 
                      borderColor: "rgba(0,212,255,0.4)",
                      boxShadow: `0 30px 60px -15px ${perk.glow}, inset 0 1px 0 rgba(255,255,255,0.1)`
                    }}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {/* Glowing effect inside card */}
                    <div 
                      className="absolute -right-10 -top-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"
                      style={{ background: perk.glow }}
                    />
                    
                    <div
                      className="w-14 h-14 flex items-center justify-center text-white mb-6 rounded-xl transition-all duration-300"
                      style={{ 
                        background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                        boxShadow: "0 8px 24px -6px rgba(0,212,255,0.4)"
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl mb-3 font-semibold text-white group-hover:text-cyan-300 transition-colors">{perk.title}</h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed">{perk.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── LET'S TALK ── */}
        <section className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
 
              {/* Left: Copy + Contact Options */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight text-white">
                  Let&apos;s Talk!
                </h2>
                <div className="pl-6 mb-12 space-y-4" style={{ borderLeft: "3px solid #7c3aed" }}>
                  <p className="text-xl font-bold text-cyan-100">Excited to give your brand into good hands and kick-start an exemplary digital journey?</p>
                  <p className="text-lg text-white/70 font-light">We are equally excited as you are!</p>
                  <p className="text-lg text-white/50 font-light">Let&apos;s sit for a quick chat!</p>
                </div>
 
                {/* Contact Options */}
                <div className="space-y-5 mb-12">
                  <a
                    href="https://calendly.com/sparklemediacreatives/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 text-white transition-all group rounded-2xl relative overflow-hidden"
                    style={{ 
                      background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                      boxShadow: "0 10px 30px rgba(0,212,255,0.25)"
                    }}
                  >
                    <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-base">Book a Strategy Call</p>
                      <p className="text-cyan-100/70 text-xs font-light mt-0.5">Schedule a 30-minute session with our team</p>
                    </div>
                    <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1.5 transition-transform" />
                  </a>
 
                  <a
                    href="https://wa.me/message/RBCP6CKB5PX6C1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 text-white transition-all group rounded-2xl relative overflow-hidden"
                    style={{ 
                      background: "linear-gradient(135deg, #0099cc 0%, #00d4ff 100%)",
                      boxShadow: "0 10px 30px rgba(0,153,204,0.25)"
                    }}
                  >
                    <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-base">Ping Us on WhatsApp</p>
                      <p className="text-cyan-100/70 text-xs font-light mt-0.5">Quick response, real conversations</p>
                    </div>
                    <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
 
                {/* CEO Section (Premium Glass Box) */}
                <div 
                  className="p-8 rounded-[24px]" 
                  style={{ 
                    background: "linear-gradient(165deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)",
                    border: "1px solid rgba(0,212,255,0.18)",
                    boxShadow: "0 25px 50px -25px rgba(0,0,0,0.5)"
                  }}
                >
                  <p className="text-xs font-bold text-white/40 uppercase tracking-[0.16em] mb-5">Speak with our Founder & CEO</p>
                  <div className="flex items-center gap-5 mb-6">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl flex-shrink-0"
                      style={{ 
                        background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                        boxShadow: "0 8px 20px rgba(0,212,255,0.3)"
                      }}
                    >
                      I
                    </div>
                    <div>
                      <p className="font-extrabold text-white text-xl">Inshath Ifham</p>
                      <p className="text-cyan-400 text-sm font-medium">Founder — Chairman & CEO</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://calendly.com/sparklemediacreatives/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded-xl transition-all hover:scale-105"
                      style={{ 
                        background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                        boxShadow: "0 6px 20px rgba(0,212,255,0.25)"
                      }}
                    >
                      Talk Now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohamed-inshath"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all bg-white/5 border hover:bg-white/10 hover:border-cyan-400"
                      style={{ borderColor: "rgba(0,212,255,0.25)", color: "rgba(255,255,255,0.85)" }}
                    >
                      LinkedIn <Briefcase className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
 
              {/* Right: Form + Social */}
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                {/* Form (Premium Glass Card) */}
                <div 
                  className="p-8 sm:p-10 mb-10 relative overflow-hidden rounded-[28px]" 
                  style={{ 
                    background: "linear-gradient(165deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(0,212,255,0.18)",
                    boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)"
                  }}
                >
                  <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/20 blur-3xl opacity-40 pointer-events-none -translate-y-1/2 translate-x-1/2" />
                  <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send Us a Message</h3>
                  <form className="relative z-10 space-y-6">
                    <div>
                      <label htmlFor="life-name" className="block text-xs font-bold text-white/50 uppercase tracking-[0.16em] mb-2.5">
                        Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="life-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/20 font-light"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="life-phone" className="block text-xs font-bold text-white/50 uppercase tracking-[0.16em] mb-2.5">
                        Contact Number <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="life-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/20 font-light"
                        placeholder="+94 77 XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="life-email" className="block text-xs font-bold text-white/50 uppercase tracking-[0.16em] mb-2.5">
                        E-Mail Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="life-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/20 font-light"
                        placeholder="you@example.com"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full group text-white px-8 py-[18px] text-sm font-bold uppercase tracking-widest flex items-center justify-between transition-all hover:scale-[1.02] rounded-xl"
                      style={{ 
                        background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                        boxShadow: "0 10px 24px rgba(0,212,255,0.25)"
                      }}
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </form>
                </div>
 
                {/* Social Media */}
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-[0.16em] mb-5">Stalk Us on Social Media</p>
                  <div className="grid grid-cols-2 gap-4">
                    {socials.map((social, i) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105"
                          style={{ 
                            background: "linear-gradient(165deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                            border: "1px solid rgba(0,212,255,0.12)",
                          }}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br ${social.color} flex items-center justify-center text-white rounded-xl flex-shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-white text-sm">{social.name}</p>
                            <p className="text-white/40 text-xs font-light mt-0.5">{social.handle}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
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
