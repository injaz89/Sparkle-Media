"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kevin Caraco",
    role: "Head of Marketing",
    company: "Select Group",
    avatar: "K",
    grad: "linear-gradient(135deg, #00d4ff, #7c3aed)",
    content:
      "Sparkle Media completely revolutionized our digital presence. Their attention to detail and data-driven approach led to phenomenal growth in our conversions. Within 3 months, we saw a 240% increase in qualified leads. Highly recommend!",
    rating: 5,
  },
  {
    name: "Benali Sari",
    role: "Brand Director",
    company: "Mysk",
    avatar: "B",
    grad: "linear-gradient(135deg, #7c3aed, #00d4ff)",
    content:
      "Working with them was an absolute game changer. The aesthetic of our brand has been elevated to luxury standards, and the leads have never been better. The team's creativity combined with their strategic thinking is truly unmatched.",
    rating: 5,
    featured: true,
  },
  {
    name: "Rania Al-Hassan",
    role: "CEO",
    company: "Prestige Auto",
    avatar: "R",
    grad: "linear-gradient(135deg, #0099cc, #00d4ff)",
    content:
      "We partnered with Sparkle Media for a full brand overhaul and digital campaign. The results were extraordinary — our social media engagement tripled and our website traffic grew by 180% in just two months. A world-class team!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Dark gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #060f2e 0%, #0d1b4b 50%, #071a3e 100%)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 20%, rgba(0,212,255,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 80%, rgba(124,58,237,0.14) 0%, transparent 60%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,212,255,0.1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
            style={{ color: "#00d4ff" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Stories
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl mb-6 text-white"
            style={{ fontWeight: 200, letterSpacing: "-0.04em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our Clients{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Say
            </span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg font-light"
            style={{ color: "rgba(255,255,255,0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real success stories and glowing endorsements from the brands we&apos;ve helped sparkle.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col p-8 overflow-hidden group transition-all duration-400"
              style={{
                background: t.featured
                  ? "linear-gradient(145deg, rgba(0,212,255,0.1) 0%, rgba(124,58,237,0.1) 100%)"
                  : "rgba(255,255,255,0.04)",
                border: t.featured
                  ? "1px solid rgba(0,212,255,0.35)"
                  : "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, borderColor: "rgba(0,212,255,0.5)" }}
            >
              {/* Featured glow */}
              {t.featured && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: "0 0 60px rgba(0,212,255,0.15) inset" }}
                />
              )}

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: t.grad }}
              />

              {/* Large quote */}
              <div className="absolute top-5 right-6 opacity-[0.08]">
                <Quote className="w-16 h-16 text-white fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" style={{ color: "#fbbf24" }} />
                ))}
              </div>

              {/* Content */}
              <p className="font-light leading-relaxed mb-8 flex-1 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-4 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: t.grad }}
                >
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">{t.name}</h4>
                  <p className="text-xs font-light mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{t.role}</p>
                  <p
                    className="text-xs font-semibold mt-0.5"
                    style={{
                      backgroundImage: t.grad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
