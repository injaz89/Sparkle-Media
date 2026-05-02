"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, Users, Sparkles, Coffee, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Hero slider images — team & culture vibe
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

// Culture gallery grid
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    caption: "Brainstorming Sessions",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
    caption: "Client Strategy Meetings",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=800",
    caption: "Creative Workshop",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
    caption: "Team Collaboration",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    caption: "Growth Reviews",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
    caption: "Celebrating Wins",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800",
    caption: "Office Life",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
    caption: "Design Reviews",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800",
    caption: "Content Creation",
    tall: false,
  },
];

// Team members for the "meet the people" section
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
  {
    icon: Heart,
    title: "People-First Culture",
    desc: "Your wellbeing and growth are at the heart of everything we do.",
  },
  {
    icon: Sparkles,
    title: "Creative Freedom",
    desc: "We encourage bold ideas, experimentation, and innovation.",
  },
  {
    icon: Users,
    title: "Diverse Team",
    desc: "35+ talented individuals across 6+ countries and disciplines.",
  },
  {
    icon: Coffee,
    title: "Collaborative Spirit",
    desc: "A flat hierarchy where every voice matters and is heard.",
  },
];

export default function LifeAtSparkleMediaPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      <main className="bg-white min-h-screen">

        {/* ====== HERO SLIDER ====== */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Content */}
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
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                  {heroSlides[currentSlide].headline}
                </h1>
                <p className="text-xl text-cyan-100 font-light max-w-2xl mx-auto">
                  {heroSlides[currentSlide].sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide controls */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
              <button
                onClick={prevSlide}
                className="w-10 h-10 border border-white/30 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`transition-all duration-300 rounded-none ${
                      i === currentSlide ? "w-8 h-2 bg-cyan-400" : "w-2 h-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 border border-white/30 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ====== INTRO ====== */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.span
              className="inline-block text-xs font-bold tracking-widest text-cyan-600 uppercase mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Culture
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight"
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
              Life at Sparkle Media is exciting, rewarding, and constantly evolving. You get to work with a diverse team of people who are passionate about digital marketing and are always learning, creating, and innovating.
            </motion.p>
            <motion.p
              className="text-lg text-gray-500 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              You&apos;ll be involved in the creative process of developing campaigns, producing content, and measuring results — all while being exposed to the latest technologies and strategies that keep you ahead of the game.
            </motion.p>
          </div>
        </section>

        {/* ====== PERKS ====== */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={i}
                    className="text-center p-8 bg-white border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-50 flex items-center justify-center text-cyan-600 mx-auto mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3">{perk.title}</h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{perk.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====== GALLERY ====== */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.span
                className="inline-block text-xs font-bold tracking-widest text-cyan-600 uppercase mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                A Glimpse Inside
              </motion.span>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-navy mb-4"
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
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-500 flex items-end">
                      <div className="p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                        <p className="text-white text-sm font-semibold uppercase tracking-widest">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== MEET THE TEAM ====== */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <motion.span
                className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                The People
              </motion.span>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
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
                  className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm font-light italic leading-relaxed">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== QUOTE ====== */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12" />
              <blockquote className="text-2xl md:text-3xl font-light text-navy leading-relaxed italic mb-10">
                &ldquo;The hours can be long and the work can be demanding, but the rewards are great. Working with Sparkle Media means helping businesses reach their goals and building a brand that truly sparkles.&rdquo;
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-10" />

              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold hover:bg-cyan-600 transition-colors"
              >
                Join Our Team
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
