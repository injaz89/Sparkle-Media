"use client";

import { motion } from "framer-motion";

const aiPlatforms = [
  { name: "ChatGPT", icon: "✦", color: "text-emerald-500" },
  { name: "Gemini", icon: "✧", color: "text-blue-500" },
  { name: "Claude", icon: "◈", color: "text-orange-500" },
  { name: "Perplexity", icon: "⬡", color: "text-[#3AADDB]" },
  { name: "AI Overviews", icon: "◉", color: "text-violet-500" },
];

const optimizationTypes = [
  {
    abbr: "SEO",
    full: "Search Engine Optimization",
    desc: "Rank prominently across traditional search engines with technical excellence and authority content.",
    accentColor: "#3AADDB",
    badgeBg: "#EDF6FB",
    badgeText: "#0083B0",
    badgeBorder: "#D1EBF5",
  },
  {
    abbr: "AEO",
    full: "Answer Engine Optimization",
    desc: "Structure your content to be selected as the direct answer by AI assistants and featured snippets.",
    accentColor: "#0083B0",
    badgeBg: "#E8F4FB",
    badgeText: "#005f82",
    badgeBorder: "#B8DCF0",
  },
  {
    abbr: "GEO",
    full: "Generative Engine Optimization",
    desc: "Optimize your brand to be cited and recommended by large language models like ChatGPT and Gemini.",
    accentColor: "#3AADDB",
    badgeBg: "#EDF6FB",
    badgeText: "#0083B0",
    badgeBorder: "#D1EBF5",
  },
];

export function AiSearch() {
  return (
    <section className="py-32 bg-[#F0F8FF] relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, #D1EBF5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(58,173,219,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3AADDB]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3AADDB]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold tracking-widest text-[#0083B0] uppercase mb-4">
            AI-First Search Visibility
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0A1128] mb-6">
            Is Your Brand Visible{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #3AADDB 0%, #0083B0 100%)" }}
            >
              In AI Search?
            </span>
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Customer behavior has changed. People no longer only search on Google.
          </p>
        </motion.div>

        {/* AI Platforms */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            They now ask:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {aiPlatforms.map((platform, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 px-6 py-3 bg-white border border-[#D1EBF5] hover:border-[#3AADDB]/60 hover:shadow-md hover:shadow-sky-100 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <span className={`text-lg font-bold ${platform.color}`}>
                  {platform.icon}
                </span>
                <span className="text-[#0A1128] font-semibold text-sm">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px bg-[#D1EBF5]" />
          <p className="text-sm text-[#0083B0] font-bold uppercase tracking-widest whitespace-nowrap">
            We optimize brands for
          </p>
          <div className="flex-1 h-px bg-[#D1EBF5]" />
        </div>

        {/* Optimization Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {optimizationTypes.map((type, i) => (
            <motion.div
              key={i}
              className="relative p-8 bg-white border border-[#D1EBF5] hover:shadow-xl hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-300 group"
              style={{ borderLeftColor: type.accentColor, borderLeftWidth: "3px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Hover top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: `linear-gradient(90deg, ${type.accentColor}, transparent)` }}
              />
              <span
                className="inline-block text-xs font-bold px-3 py-1 border mb-4 uppercase tracking-widest"
                style={{ background: type.badgeBg, color: type.badgeText, borderColor: type.badgeBorder }}
              >
                {type.abbr}
              </span>
              <h3 className="text-xl font-bold text-[#0A1128] mb-3">{type.full}</h3>
              <p className="text-gray-500 font-light leading-relaxed text-sm">{type.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto">
            So your business is{" "}
            <span className="font-semibold text-[#0A1128]">discoverable everywhere</span> your customers
            search — not just Google.
          </p>
          <a
            href="https://calendly.com/sparklemediacreatives/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 text-white font-bold text-sm transition-all hover:scale-105 shadow-md shadow-sky-200/60"
            style={{ background: "linear-gradient(135deg, #3AADDB, #0083B0)" }}
          >
            Get Discovered Everywhere
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
