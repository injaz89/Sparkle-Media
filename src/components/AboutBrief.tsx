"use client";

import { motion } from "framer-motion";
import { Building2, Hotel, ShoppingBag, Globe, CalendarCheck, Briefcase } from "lucide-react";

const industries = [
  { icon: Building2, name: "Real Estate" },
  { icon: Hotel, name: "Hospitality" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Globe, name: "E-Commerce" },
  { icon: CalendarCheck, name: "Events" },
  { icon: Briefcase, name: "Professional Services" },
];

const beliefs = [
  {
    text: "Every strategy we build is designed to help businesses grow sustainably.",
  },
  {
    text: "Every campaign we launch is accountable to real business outcomes.",
  },
  {
    text: "Every piece of content is created to attract, convert and retain customers.",
  },
];

export function AboutBrief() {
  return (
    <section className="py-32 bg-[#eef9ff] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#87d4f8] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#87d4f8] to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, #87d4f8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest text-[#129adc] uppercase mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A1128] mb-6 leading-tight">
              Built For Businesses That{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg, #39bcfc 0%, #129adc 100%)" }}
              >
                Expect Results
              </span>
            </h2>
            <div className="border-l-[3px] border-[#39bcfc] pl-6 mb-8 bg-white/60 py-4 pr-4">
              <p className="text-xl text-[#0A1128] font-semibold">
                Sparkle Media was founded with a simple belief:
              </p>
              <p
                className="text-2xl font-black text-transparent bg-clip-text mt-1"
                style={{ backgroundImage: "linear-gradient(135deg, #39bcfc 0%, #129adc 100%)" }}
              >
                Marketing should be accountable.
              </p>
            </div>
            <p className="text-gray-500 font-light leading-relaxed mb-8">
              Our team combines performance marketing, creative storytelling, technology and
              analytics to create marketing systems that attract, convert and retain customers.
            </p>

            <div className="space-y-4">
              {beliefs.map((belief, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5"
                    style={{ background: "linear-gradient(135deg, #39bcfc, #129adc)" }}
                  >
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-gray-600 font-light">{belief.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/about"
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 border-2 border-[#87d4f8] text-[#0A1128] font-semibold hover:border-[#39bcfc] hover:text-[#129adc] transition-all text-sm bg-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Learn About Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: Industries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest text-[#129adc] uppercase mb-6">
              Industries We Serve
            </span>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={i}
                    className="group flex items-center gap-4 p-5 bg-white border border-[#87d4f8] hover:border-[#39bcfc]/50 hover:shadow-lg hover:shadow-sky-100/60 hover:-translate-y-0.5 transition-all duration-300"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: "linear-gradient(135deg, #39bcfc, #129adc)" }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-[#0A1128] text-sm">{industry.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
