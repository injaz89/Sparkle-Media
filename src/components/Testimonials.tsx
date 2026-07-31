"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Kevin Caraco",
    role: "Head of Marketing",
    company: "Select Group",
    avatar: "K",
    grad: "linear-gradient(135deg, #00d4ff, #7c3aed)",
    content:
      "Sparkle Media completely revolutionized our digital presence. Their attention to detail and data-driven approach led to phenomenal growth in our conversions. Within 3 months, we saw a 240% increase in qualified leads. Highly recommend!",
    metric: "240% ↑ Leads",
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
    metric: "Luxury Benchmark",
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
    metric: "180% ↑ Traffic",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {[...Array(rating)].map((_, i) => (
        <motion.svg
          key={i}
          className="w-4 h-4"
          fill="#fbbf24"
          viewBox="0 0 24 24"
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </motion.svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next, paused]);

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Dark gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #060f2e 0%, #0d1b4b 50%, #071a3e 100%)" }}
      />

      {/* Glow orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle at 20% 20%, rgba(0,212,255,0.13) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle at 80% 80%, rgba(124,58,237,0.15) 0%, transparent 60%)" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,212,255,0.08) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.span
            className="inline-block text-xs font-black tracking-[.28em] uppercase mb-5 font-mono"
            style={{ color: "#00d4ff" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ✦ Client Stories ✦
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-6 text-white"
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
            style={{ color: "rgba(255,255,255,0.45)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real success stories from the brands we&apos;ve helped sparkle.
          </motion.p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* All 3 cards visible on desktop, single on mobile */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col p-8 overflow-hidden rounded-2xl cursor-default transition-all duration-500"
                style={{
                  background: i === current
                    ? "linear-gradient(145deg, rgba(0,212,255,0.12) 0%, rgba(124,58,237,0.1) 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: i === current
                    ? "1px solid rgba(0,212,255,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  boxShadow: i === current ? "0 0 50px rgba(0,212,255,0.15)" : "none",
                  transform: i === current ? "scale(1.02)" : "scale(1)",
                }}
                onClick={() => setCurrent(i)}
                whileHover={{ y: -4 }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{
                    background: t.grad,
                    opacity: i === current ? 1 : 0.3,
                  }}
                />

                {/* Big quote */}
                <div className="absolute top-5 right-6 opacity-[0.06]">
                  <svg className="w-16 h-16 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <StarRating rating={t.rating} />

                {/* Metric badge */}
                <div className="mb-4">
                  <span
                    className="inline-block text-xs font-black px-3 py-1 rounded-full font-mono"
                    style={{
                      background: "rgba(0,212,255,0.12)",
                      color: "#00d4ff",
                      border: "1px solid rgba(0,212,255,0.25)",
                    }}
                  >
                    {t.metric}
                  </span>
                </div>

                <p className="font-light leading-relaxed mb-8 flex-1 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ background: t.grad }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{t.name}</h4>
                    <p className="text-xs font-light mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{t.role}</p>
                    <p
                      className="text-xs font-bold mt-0.5"
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

          {/* Mobile: single auto-carousel */}
          <div className="lg:hidden overflow-hidden relative h-[380px] min-[480px]:h-[300px] sm:h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="absolute inset-0 flex flex-col p-6 sm:p-8 justify-between overflow-hidden rounded-2xl"
                style={{
                  background: "linear-gradient(145deg, rgba(0,212,255,0.1) 0%, rgba(124,58,237,0.08) 100%)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  backdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: testimonials[current].grad }} />
                <div>
                  <StarRating rating={testimonials[current].rating} />
                  <p className="font-light leading-relaxed mb-6 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                    &ldquo;{testimonials[current].content}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: testimonials[current].grad }}>
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{testimonials[current].name}</h4>
                    <p className="text-xs font-light mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", background: "rgba(0,212,255,0.06)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current
                      ? "linear-gradient(90deg, #00d4ff, #7c3aed)"
                      : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", background: "rgba(0,212,255,0.06)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
