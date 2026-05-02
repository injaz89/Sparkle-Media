"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

// Case studies placeholder — hidden until real content is available
const caseStudies = [
  {
    client: "Select Group",
    industry: "Hospitality & Lifestyle",
    result: "240% increase in qualified leads",
    duration: "3 months",
    services: ["Social Media Marketing", "Paid Media", "Content Strategy"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
  },
  {
    client: "Prestige Auto",
    industry: "Automotive",
    result: "180% growth in organic traffic",
    duration: "6 months",
    services: ["SEO", "Photography", "Branding"],
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=800",
  },
  {
    client: "Mysk",
    industry: "Luxury Hospitality",
    result: "3× engagement rate boost",
    duration: "4 months",
    services: ["Brand Strategy", "Video Production", "Social Media"],
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800",
  },
];

export function CaseStudies() {
  // HIDDEN — set display to block when case study content is ready
  return (
    <section id="case-studies" className="py-32 bg-navy relative overflow-hidden" style={{ display: "none" }}>
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-4">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Case Studies</h2>
          </div>
          <p className="text-gray-400 font-light max-w-sm md:text-right">
            Real campaigns, real results. Dive into the success stories we&apos;ve engineered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.image}
                  alt={study.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-cyan-400/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{study.client}</h3>
                </div>

                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-4">
                  {study.result}
                </p>

                <p className="text-gray-500 text-xs mb-4">Campaign Duration: {study.duration}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.services.map((service, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 bg-white/5 text-gray-400 border border-white/10"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group/link transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
