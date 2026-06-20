"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const achievements = [
  {
    client: "GR Events",
    result: "40X–60X ROAS",
    category: "Lead Generation",
    color: "from-[#39bcfc] to-[#129adc]",
  },
  {
    client: "Gulabi Run",
    result: "50X ROAS",
    category: "Performance Marketing",
    color: "from-[#129adc] to-[#39bcfc]",
  },
  {
    client: "Mobile Stop",
    result: "21X ROAS",
    category: "E-Commerce & Retail",
    color: "from-[#39bcfc] to-sky-500",
  },
  {
    client: "GR Events",
    result: "300% Growth",
    category: "SEO & Content",
    color: "from-sky-500 to-[#129adc]",
  },
  {
    client: "Prestige Auto",
    result: "15X ROAS",
    category: "Paid Media",
    color: "from-[#129adc] to-[#39bcfc]",
  },
];

const focusItems = [
  "Revenue Growth",
  "Qualified Leads",
  "Customer Acquisition",
  "Customer Retention",
  "Lifetime Value",
  "Return on Ad Spend (ROAS)",
];

export function ClientAchievements() {
  return (
    <>
      {/* Client Achievements — light bg */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#f0faff" }}>
        {/* Subtle wave pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 wave-bg"
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(circle, #87d4f8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#00d4ff" }}
            >
              Proven Track Record
            </span>
            <h2
              className="text-5xl md:text-6xl mb-4"
              style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
            >
              Client Achievements
            </h2>
            <p className="font-light max-w-2xl mx-auto" style={{ color: "#64748b" }}>
              Real results for real businesses. These numbers aren&apos;t projections — they&apos;re
              what we delivered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                className="relative group bg-white p-6 transition-all duration-300"
                style={{ border: "1px solid rgba(0,212,255,0.2)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, borderColor: "rgba(0,212,255,0.45)" }}
              >
                {/* Top accent bar on hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <TrendingUp className="w-5 h-5" style={{ color: "#00d4ff" }} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00d4ff" }}>
                  {item.category}
                </p>
                <p
                  className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2 leading-tight`}
                >
                  {item.result}
                </p>
                <p className="text-sm font-medium" style={{ color: "#64748b" }}>{item.client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus Is Simple */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#e8f7ff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
                style={{ color: "#00d4ff" }}
              >
                Our Mission
              </span>
              <h2
                className="text-5xl md:text-6xl mb-6 leading-tight"
                style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
              >
                Our focus is simple.
              </h2>
              <p className="text-xl font-light leading-relaxed" style={{ color: "#64748b" }}>
                Generate measurable business growth through{" "}
                <span className="font-semibold" style={{ color: "#060f2e" }}>data</span>,{" "}
                <span className="font-semibold" style={{ color: "#060f2e" }}>creativity</span> and{" "}
                <span className="font-semibold" style={{ color: "#060f2e" }}>performance marketing</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {focusItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white border border-primary/30 hover:border-primary hover:bg-white/95 transition-all duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #39bcfc, #129adc)" }}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[#0A1128]">{item}</span>
                </motion.div>
              ))}
              <motion.div
                className="col-span-2 mt-2 p-4 bg-white/65 border-l-[3px] border-[#39bcfc]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-sm text-gray-600 italic font-light">
                  Every campaign is built around{" "}
                  <span className="font-semibold text-[#0A1128]">business outcomes</span>, not marketing
                  activity.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
