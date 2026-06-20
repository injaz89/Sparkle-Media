"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Heart, Users, Sparkles, Coffee, ChevronLeft, ChevronRight,
  ArrowRight, MessageCircle, Phone, Briefcase, ExternalLink,
} from "lucide-react";

// Hero slider
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
    headline: "Where Ideas Spark",
    sub: "A culture built on creativity, collaboration, and ambition.",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600",
    headline: "We Work as One",
    sub: "Diverse minds united by a shared passion for digital excellence.",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600",
    headline: "Always Innovating",
    sub: "Staying ahead with the latest trends, tools, and strategies.",
  },
  {
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600",
    headline: "Grow With Us",
    sub: "A place where your career, creativity, and character flourish.",
  },
];

// Culture gallery
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800", caption: "Brainstorming Sessions", tall: true },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800", caption: "Client Strategy Meetings", tall: false },
  { src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800", caption: "Creative Workshop", tall: false },
  { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800", caption: "Team Collaboration", tall: true },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800", caption: "Growth Reviews", tall: false },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800", caption: "Celebrating Wins", tall: false },
  { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800", caption: "Office Life", tall: true },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800", caption: "Design Reviews", tall: false },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800", caption: "Content Creation", tall: false },
];

// Team
const teamMembers = [
  {
    name: "Inshath Ifham",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600",
    quote: "We built Sparkle to make every brand shine bright in the digital world.",
  },
  {
    name: "Milsath Ahamed",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
    quote: "Our strength lies in the diversity and passion of our people.",
  },
  {
    name: "Kawsheka Radhakrishnan",
    role: "Chief Creative Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
    quote: "Creativity isn't just what we do — it's who we are.",
  },
  {
    name: "Abdullah Buhary",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
    quote: "Every great campaign starts with great operations behind the scenes.",
  },
];

const perks = [
  { icon: Heart, title: "People-First Culture", desc: "Your wellbeing and growth are at the heart of everything we do." },
  { icon: Sparkles, title: "Creative Freedom", desc: "We encourage bold ideas, experimentation, and innovation." },
  { icon: Users, title: "Diverse Team", desc: "15+ talented individuals across 6+ countries and disciplines." },
  { icon: Coffee, title: "Collaborative Spirit", desc: "A flat hierarchy where every voice matters and is heard." },
];

// Social media links
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
    icon: Briefcase,
    href: "https://www.linkedin.com/company/sparkle-media-pvt-ltd/?viewAsMember=true",
    color: "from-blue-500 to-blue-600",
    handle: "Sparkle Media Pvt Ltd",
  },
  {
    name: "TikTok",
    icon: ExternalLink,
    href: "https://www.tiktok.com/@sparklemedia_?lang=en",
    color: "from-gray-800 to-gray-900",
    handle: "@sparklemedia_",
  },
];

// ── HIDDEN: Testimonials (kept for future use) ──
// const testimonials = [
//   {
//     name: "Arjun Perera",
//     role: "CEO, GR Events",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
//     text: "Sparkle Media completely transformed how we acquire leads. The ROAS we achieved was beyond anything we thought possible. They don't just run ads — they engineer results.",
//     stars: 5,
//   },
//   {
//     name: "Dilshan Fernando",
//     role: "Director, Mobile Stop",
//     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
//     text: "21X ROAS in our first campaign. The team at Sparkle knows exactly what they're doing and they communicate every step of the way. Highly recommend.",
//     stars: 5,
//   },
//   {
//     name: "Priya Nair",
//     role: "Marketing Head, Prestige Auto Detailers",
//     avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
//     text: "We saw 15X ROAS and a dramatic improvement in lead quality. Sparkle Media is not your average agency — they are true performance partners.",
//     stars: 5,
//   },
// ];

// ── HIDDEN: Case Studies (kept for future use) ──
// const caseStudies = [
//   { client: "GR Events", result: "60X ROAS", category: "Lead Generation", image: "" },
//   { client: "Mobile Stop", result: "21X ROAS", category: "E-Commerce", image: "" },
//   { client: "Prestige Auto Detailers", result: "15X ROAS", category: "Automotive", image: "" },
// ];

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
      <main className="min-h-screen" style={{ background: "#f0faff" }}>

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
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #060f2e, rgba(6,15,46,0.6) 50%, transparent)" }} />
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
                  <Heart className="w-10 h-10 text-pink-400 animate-pulse" />
                </div>
                <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight" style={{ fontWeight: 200, letterSpacing: "-0.04em" }}>
                  {heroSlides[currentSlide].headline}
                </h1>
                <p className="text-xl text-cyan-100 font-light max-w-2xl mx-auto">
                  {heroSlides[currentSlide].sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide controls */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
              <button onClick={prevSlide} className="w-10 h-10 border border-white/30 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all duration-300 rounded-none ${i === currentSlide ? "w-8 h-2 bg-cyan-400" : "w-2 h-2 bg-white/40"}`}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="w-10 h-10 border border-white/30 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-24" style={{ background: "#f0faff" }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.span
              className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#00d4ff" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Culture
            </motion.span>
            <motion.h2
              className="text-5xl md:text-6xl mb-8 leading-tight"
              style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Life at Sparkle Media
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 font-light leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Life at Sparkle Media can be exciting and rewarding. You get to work with a diverse team of people who are passionate about digital marketing and are constantly learning and innovating.
            </motion.p>
            <motion.p
              className="text-lg text-gray-500 font-light leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              You&apos;ll be involved in the creative process of developing campaigns, creating content, and measuring results. You&apos;ll also be exposed to the latest technologies and strategies so you can stay ahead of the competition.
            </motion.p>
            <motion.p
              className="text-lg text-gray-500 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              The hours can be long and the work can be demanding, but the rewards can be great. Working with Sparkle Media can be very rewarding, as you get to help businesses reach their goals and build their brand.
            </motion.p>
          </div>
        </section>

        {/* ── PERKS ── */}
        <section className="py-16" style={{ background: "#e8f7ff", borderTop: "1px solid rgba(0,212,255,0.15)", borderBottom: "1px solid rgba(0,212,255,0.15)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={i}
                    className="text-center p-8 bg-white transition-all duration-300"
                    style={{ border: "1px solid rgba(0,212,255,0.2)" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div
                      className="w-14 h-14 flex items-center justify-center text-white mx-auto mb-5"
                      style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg mb-3" style={{ color: "#060f2e", fontWeight: 500 }}>{perk.title}</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{perk.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="py-24" style={{ background: "#f0faff" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span
                className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
                style={{ color: "#00d4ff" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                A Glimpse Inside
              </motion.span>
              <motion.h2
                className="text-5xl md:text-6xl mb-4"
                style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Our Culture Gallery
              </motion.h2>
              <motion.p
                className="text-gray-500 font-light max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                From daily standups to celebration nights — real moments, real people, real Sparkle.
              </motion.p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="break-inside-avoid relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                >
                  <div className={`relative ${img.tall ? "h-80" : "h-56"} overflow-hidden`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-500 flex items-end">
                      <div className="p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                        <p className="text-white text-sm font-semibold uppercase tracking-widest">{img.caption}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEET THE TEAM ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: "#e8f7ff", borderTop: "1px solid rgba(0,212,255,0.15)", borderBottom: "1px solid rgba(0,212,255,0.15)" }}>
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,212,255,0.1) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.span
                className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
                style={{ color: "#00d4ff" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The People
              </motion.span>
              <motion.h2
                className="text-5xl md:text-6xl mb-4"
                style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Meet Some of Our Team
              </motion.h2>
            </div>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  className="group relative overflow-hidden bg-white transition-all duration-300"
                  style={{ border: "1px solid rgba(0,212,255,0.2)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="relative h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-navy font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00d4ff" }}>{member.role}</p>
                    <p className="text-gray-500 text-sm font-light italic leading-relaxed">&ldquo;{member.quote}&rdquo;</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HIDDEN TESTIMONIALS BLOCK (ready for future) ── */}
        {/* 
        <section className="py-24 bg-gray-50" style={{ display: "none" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase">What Our Clients Say</span>
              <h2 className="text-4xl font-bold text-navy mt-3">Client Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white border border-gray-100 p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 object-cover" />
                    <div>
                      <p className="font-bold text-navy text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* ── HIDDEN CASE STUDIES BLOCK (ready for future) ──
        <section className="py-24 bg-navy" style={{ display: "none" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Proven Results</span>
              <h2 className="text-4xl font-bold text-white mt-3">Case Studies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((cs, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8">
                  <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{cs.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-2">{cs.client}</h3>
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">{cs.result}</p>
                </div>
              {/* ── LET'S TALK ── */}
        <section className="py-24" style={{ background: "#f0faff" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
 
              {/* Left: Copy + contact options */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-[#129adc] uppercase tracking-widest mb-4 block">Get In Touch</span>
                <h2 className="text-5xl md:text-6xl mb-6 leading-tight" style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}>
                  Let&apos;s Talk!
                </h2>
                <div className="pl-6 mb-10 space-y-3" style={{ borderLeft: "3px solid #00d4ff" }}>
                  <p className="text-xl font-bold text-navy">Excited to give your brand into good hands and kick-start an exemplary digital journey?</p>
                  <p className="text-lg text-gray-600 font-light">We are equally excited as you are!</p>
                  <p className="text-lg text-gray-500 font-light">Let&apos;s sit for a quick chat!</p>
                </div>
 
                {/* Contact options */}
                <div className="space-y-4 mb-10">
                  <a
                    href="https://calendly.com/sparklemediacreatives/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 text-white hover:opacity-90 transition-opacity group"
                    style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
                  >
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Book a Strategy Call</p>
                      <p className="text-cyan-100 text-xs font-light">Schedule a 30-minute session with our team</p>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </a>
 
                  <a
                    href="https://wa.me/message/RBCP6CKB5PX6C1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 text-white hover:opacity-90 transition-opacity group"
                    style={{ background: "linear-gradient(135deg, #0099cc, #00d4ff)" }}
                  >
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Ping Us on WhatsApp</p>
                      <p className="text-cyan-100 text-xs font-light">Quick response, real conversations</p>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
 
                {/* CEO section */}
                <div className="bg-white p-6" style={{ border: "1px solid rgba(0,212,255,0.2)" }}>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Speak with our CEO</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
                    >
                      I
                    </div>
                    <div>
                      <p className="font-bold text-navy text-lg">Inshath Ifham</p>
                      <p className="text-gray-500 text-sm font-light">Founder — Chairman & CEO</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://calendly.com/sparklemediacreatives/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-semibold transition-opacity hover:opacity-80"
                      style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
                    >
                      Talk Now <ArrowRight className="w-3 h-3" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohamed-inshath"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-white transition-colors"
                      style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#060f2e" }}
                    >
                      LinkedIn <Briefcase className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
 
              {/* Right: Form + Social */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {/* Form */}
                <div className="bg-white p-10 mb-8 relative overflow-hidden" style={{ border: "1px solid rgba(0,212,255,0.2)" }}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />
                  <h3 className="text-2xl font-bold text-navy mb-8 relative z-10">Send Us a Message</h3>
                  <form className="relative z-10 space-y-6">
                    <div>
                      <label htmlFor="life-name" className="block text-xs font-bold text-navy uppercase tracking-widest mb-2">
                        Name <span className="text-[#129adc]">*</span>
                      </label>
                      <input
                        type="text"
                        id="life-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-lg text-navy focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="life-phone" className="block text-xs font-bold text-navy uppercase tracking-widest mb-2">
                        Contact Number <span className="text-[#129adc]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="life-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-lg text-navy focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                        placeholder="+94 77 XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="life-email" className="block text-xs font-bold text-navy uppercase tracking-widest mb-2">
                        E-Mail Address <span className="text-[#129adc]">*</span>
                      </label>
                      <input
                        type="email"
                        id="life-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-lg text-navy focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                        placeholder="you@example.com"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full group text-white px-8 py-4 text-sm font-bold uppercase tracking-widest flex items-center justify-between hover:opacity-90 transition-opacity"
                      style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
 
                {/* Social Media */}
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Stalk Us on Social Media</p>
                  <div className="grid grid-cols-2 gap-3">
                    {socials.map((social, i) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 bg-white transition-all group"
                          style={{ border: "1px solid rgba(0,212,255,0.2)" }}
                        >
                          <div className={`w-9 h-9 bg-gradient-to-br ${social.color} flex items-center justify-center text-white flex-shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-navy text-xs">{social.name}</p>
                            <p className="text-gray-400 text-xs font-light">{social.handle}</p>
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
