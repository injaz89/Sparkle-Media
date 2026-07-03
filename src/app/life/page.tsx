"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Heart, Users, Sparkles, Coffee, ChevronLeft, ChevronRight,
  ArrowRight, MessageCircle, Phone, Briefcase,
} from "lucide-react";

// Real official SVG brand logos
function InstagramBrandIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookBrandIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinBrandIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TiktokBrandIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.52-4.06-1.39-.28-.2-.53-.44-.77-.69v7.74c.02 1.94-.49 3.94-1.78 5.37-1.61 1.86-4.22 2.7-6.66 2.1-2.44-.6-4.52-2.6-4.99-5.09C3.42 15.42 4.9 12.3 7.6 11.23c.8-.32 1.67-.4 2.51-.31v4.08c-.76-.15-1.58-.02-2.22.42-.76.54-1.12 1.54-.93 2.45.24 1.25 1.48 2.12 2.74 1.94 1.08-.13 1.91-.98 2.01-2.07.02-1.89.01-3.79.01-5.69V0h.8zm0 0" />
    </svg>
  );
}

// Real branded team slides — local images in /public
const heroSlides = [
  {
    image: "/life-team1.png",
    headline: "Together We Create Success",
    sub: "Collaboration, creativity and innovation drive everything we do.",
  },
  {
    image: "/life-team2.png",
    headline: "Innovation Starts Here",
    sub: "Every campaign begins with bold ideas and passionate teamwork.",
  },
  {
    image: "/life-team3.png",
    headline: "Work Hard. Celebrate Together.",
    sub: "Success is best enjoyed as a team, and every achievement is worth celebrating.",
  },
  {
    image: "/life-team4.png",
    headline: "Grow With Us",
    sub: "We foster a workplace where learning, creativity and growth happen every day.",
  },
];

const perks = [
  { 
    icon: Heart, 
    title: "People-First Culture", 
    desc: "Your wellbeing, balance, and growth are at the heart of everything we build.",
    accent: "#ff4b72"
  },
  { 
    icon: Sparkles, 
    title: "Creative Freedom", 
    desc: "We encourage bold ideas, wild experimentation, and out-of-the-box innovation.",
    accent: "#00d4ff"
  },
  { 
    icon: Users, 
    title: "Diverse Global Team", 
    desc: "Talented specialists collaborating seamlessly across countries and disciplines.",
    accent: "#7c3aed"
  },
  { 
    icon: Coffee, 
    title: "Collaborative Spirit", 
    desc: "A flat hierarchy where every voice is heard, valued, and celebrated.",
    accent: "#0099cc"
  },
];

const socials = [
  {
    name: "Instagram",
    icon: InstagramBrandIcon,
    href: "https://www.instagram.com/sparklemedia_/",
    // Instagram brand gradient
    bgStyle: { background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" },
    handle: "@sparklemedia_",
  },
  {
    name: "Facebook",
    icon: FacebookBrandIcon,
    href: "https://www.facebook.com/profile.php?id=100083969542491",
    // Facebook official blue
    bgStyle: { backgroundColor: "#1877F2" },
    handle: "Sparkle Media",
  },
  {
    name: "LinkedIn",
    icon: LinkedinBrandIcon,
    href: "https://www.linkedin.com/company/sparkle-media-creatives",
    // LinkedIn official blue
    bgStyle: { backgroundColor: "#0A66C2" },
    handle: "Sparkle Media Pvt Ltd",
  },
  {
    name: "TikTok",
    icon: TiktokBrandIcon,
    href: "https://www.tiktok.com/@sparklemedia_",
    // TikTok official black
    bgStyle: { backgroundColor: "#010101" },
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
      <main className="min-h-screen bg-bg pt-24 pb-12">
        {/* Decorative background glows */}
        <div className="absolute top-32 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-32 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

        {/* ── HERO SLIDER ── */}
        <section className="relative w-full h-[650px] overflow-hidden mb-24 rounded-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.03 }}
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
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/55 to-transparent" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="text-center px-6 max-w-4xl mx-auto mb-8"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-5">
                  <span className="w-12 h-[2px] rounded-none" style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)" }} />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  {heroSlides[currentSlide].headline}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                  {heroSlides[currentSlide].sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide controls */}
            <div className="flex items-center gap-6">
              <button 
                onClick={prevSlide} 
                className="w-10 h-10 border border-white/20 text-white hover:border-primary hover:text-primary transition-all flex items-center justify-center rounded-none bg-navy/20 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all duration-300 h-1.5 rounded-none ${i === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/30"}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide} 
                className="w-10 h-10 border border-white/20 text-white hover:border-primary hover:text-primary transition-all flex items-center justify-center rounded-none bg-navy/20 backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-12 mb-16 relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#0099cc" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Culture
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-navy"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Life at Sparkle Media
            </motion.h2>
            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Life at Sparkle Media is exciting and rewarding. You get to work with a diverse team of people who are passionate about digital marketing, constantly learning, and innovating together.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                You&apos;ll be involved in the creative process of developing campaigns, creating content, and measuring results. You&apos;ll also be exposed to the latest technologies and strategies to stay ahead of the competition.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                The hours can be long and the work demanding, but the rewards are great. Working with Sparkle Media is highly fulfilling, as we directly help businesses reach their goals and build their brand.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── PERKS (Beautiful White/Theme Cards) ── */}
        <section className="py-16 mb-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={i}
                  className="p-8 relative bg-white border border-gray-100 rounded-none transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    boxShadow: "0 8px 30px rgba(0, 153, 204, 0.04)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center text-white mb-6 rounded-none"
                    style={{ 
                      background: `linear-gradient(135deg, ${perk.accent}, #00d4ff)`,
                      boxShadow: "0 6px 15px rgba(0, 212, 255, 0.2)"
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{perk.title}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">{perk.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── LET'S TALK ── */}
        <section className="py-12 max-w-7xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
 
            {/* Left: Copy + Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-navy tracking-tight">
                Let&apos;s Talk!
              </h2>
              <div className="pl-6 mb-10 space-y-3 border-l-2 border-primary">
                <p className="text-lg font-bold text-navy">Excited to give your brand into good hands and kick-start an exemplary digital journey?</p>
                <p className="text-gray-600 font-light">We are equally excited as you are!</p>
                <p className="text-gray-500 font-light">Let&apos;s sit for a quick chat!</p>
              </div>
 
              {/* Contact Options */}
              <div className="space-y-4 mb-10">
                <a
                  href="https://calendly.com/sparklemediacreatives/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 text-white hover:opacity-90 transition-opacity rounded-none"
                  style={{ 
                    background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                    boxShadow: "0 6px 20px rgba(0,212,255,0.2)"
                  }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-none flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Book a Strategy Call</p>
                    <p className="text-white/80 text-xs font-light">Schedule a 30-minute session with our team</p>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </a>
 
                <a
                  href="https://wa.me/message/RBCP6CKB5PX6C1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 text-white hover:opacity-90 transition-opacity rounded-none"
                  style={{ 
                    background: "linear-gradient(135deg, #0099cc 0%, #00d4ff 100%)",
                    boxShadow: "0 6px 20px rgba(0,153,204,0.2)"
                  }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-none flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Ping Us on WhatsApp</p>
                    <p className="text-white/80 text-xs font-light">Quick response, real conversations</p>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </a>
              </div>
 
              {/* CEO Section (Clean White Box) */}
              <div 
                className="p-6 rounded-none bg-white border border-gray-100" 
                style={{ 
                  boxShadow: "0 8px 30px rgba(0, 153, 204, 0.03)",
                }}
              >
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Speak with our Founder & CEO</p>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-none flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0"
                    style={{ 
                      background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                    }}
                  >
                    I
                  </div>
                  <div>
                    <p className="font-bold text-navy text-base">Inshath Ifham</p>
                    <p className="text-gray-500 text-xs font-light">Founder — Chairman & CEO</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://calendly.com/sparklemediacreatives/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-bold rounded-none transition-all hover:bg-secondary"
                  >
                    Talk Now <ArrowRight className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohamed-inshath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-none border border-gray-200 text-navy bg-white hover:bg-gray-50 transition-colors"
                  >
                    LinkedIn <Briefcase className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
 
            {/* Right: Form + Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* Form */}
              <div 
                className="p-8 mb-8 bg-white border border-gray-100 rounded-none" 
                style={{ 
                  boxShadow: "0 8px 30px rgba(0, 153, 204, 0.04)",
                }}
              >
                <h3 className="text-xl font-bold text-navy mb-6">Send Us a Message</h3>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="life-name" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="life-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-200 py-2.5 text-base text-navy focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="life-phone" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      Contact Number <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      id="life-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-200 py-2.5 text-base text-navy focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                      placeholder="+94 77 XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="life-email" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">
                      E-Mail Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="life-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-gray-200 py-2.5 text-base text-navy focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300 font-light"
                      placeholder="you@example.com"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full group text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all hover:bg-secondary rounded-none"
                    style={{ 
                      background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                    }}
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
 
              {/* Social Media (Real Logos) */}
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Stalk Us on Social Media</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socials.map((social, i) => {
                    const BrandIcon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-none bg-white border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
                        style={{ 
                          boxShadow: "0 4px 20px rgba(0, 153, 204, 0.02)",
                        }}
                      >
                        <div 
                          className="w-10 h-10 flex items-center justify-center text-white rounded-none flex-shrink-0 transition-transform group-hover:scale-105"
                          style={social.bgStyle}
                        >
                          <BrandIcon />
                        </div>
                        <div>
                          <p className="font-bold text-navy text-sm">{social.name}</p>
                          <p className="text-gray-400 text-xs font-light mt-0.5">{social.handle}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
