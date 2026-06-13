"use client";

import { motion } from "framer-motion";

const aiPlatforms = [
  { name: "ChatGPT", icon: "✦", color: "from-emerald-400 to-teal-500" },
  { name: "Gemini", icon: "✧", color: "from-blue-400 to-indigo-500" },
  { name: "Claude", icon: "◈", color: "from-orange-400 to-amber-500" },
  { name: "Perplexity", icon: "⬡", color: "from-cyan-400 to-blue-500" },
  { name: "AI Overviews", icon: "◉", color: "from-violet-400 to-purple-500" },
];

const optimizationTypes = [
  {
    abbr: "SEO",
    full: "Search Engine Optimization",
    desc: "Rank prominently across traditional search engines with technical excellence and authority content.",
    color: "border-cyan-400",
    badge: "bg-cyan-50 text-cyan-600 border-cyan-200",
  },
  {
    abbr: "AEO",
    full: "Answer Engine Optimization",
    desc: "Structure your content to be selected as the direct answer by AI assistants and featured snippets.",
    color: "border-blue-400",
    badge: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    abbr: "GEO",
    full: "Generative Engine Optimization",
    desc: "Optimize your brand to be cited and recommended by large language models like ChatGPT and Gemini.",
    color: "border-indigo-400",
    badge: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
];

export function AiSearch() {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,219,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-4">
            AI-First Search Visibility
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Is Your Brand Visible{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              In AI Search?
            </span>
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
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
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
            They now ask:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {aiPlatforms.map((platform, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <span
                  className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${platform.color}`}
                >
                  {platform.icon}
                </span>
                <span className="text-white font-semibold text-sm">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-16">
          <div className="flex-1 h-px bg-white/10" />
          <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest whitespace-nowrap">
            We optimize brands for
          </p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Optimization Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {optimizationTypes.map((type, i) => (
            <motion.div
              key={i}
              className={`relative p-8 bg-white/5 border-l-2 ${type.color} border-t border-r border-b border-white/10 hover:bg-white/8 transition-all duration-300 group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span
                className={`inline-block text-xs font-bold px-3 py-1 border mb-4 ${type.badge}`}
              >
                {type.abbr}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{type.full}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">{type.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-gray-400 font-light text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          So your business is{" "}
          <span className="text-white font-semibold">discoverable everywhere</span> your customers
          search — not just Google.
        </motion.p>
      </div>
    </section>
  );
}
