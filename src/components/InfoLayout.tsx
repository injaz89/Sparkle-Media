"use client";

import { motion } from "framer-motion";

type Feature = {
  title: string;
  desc: string;
  icon: any;
  link?: string;
  linkText?: string;
};

type InfoLayoutProps = {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
};

export function InfoLayout({ category, title, subtitle, description, features }: InfoLayoutProps) {
  return (
    <main className="pt-32 pb-24 min-h-screen relative overflow-hidden" style={{ background: "#f0faff" }}>
      {/* Background glow */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 100% 30%, rgba(0,212,255,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 100%, rgba(124,58,237,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <motion.p
              className="text-xs font-bold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#00d4ff" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {category}
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl mb-8 leading-tight"
              style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h1>
            <motion.h3
              className="text-2xl font-light leading-relaxed"
              style={{ color: "#334155" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.h3>
          </div>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p
              className="text-xl font-light leading-relaxed pl-6"
              style={{
                color: "#64748b",
                borderLeft: "3px solid #00d4ff",
              }}
            >
              {description}
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                className="group relative p-10 bg-white transition-all duration-300"
                style={{ border: "1px solid rgba(0,212,255,0.2)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgba(0,212,255,0.45)" }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, #00d4ff, #7c3aed)" }}
                />

                <div
                  className="w-14 h-14 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{ color: "#060f2e", fontWeight: 300, letterSpacing: "-0.02em" }}
                >
                  {feature.title}
                </h3>
                <p className="font-light leading-relaxed mb-6" style={{ color: "#64748b" }}>
                  {feature.desc}
                </p>
                {feature.link && feature.linkText && (
                  <a
                    href={feature.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: "#00d4ff" }}
                  >
                    {feature.linkText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
