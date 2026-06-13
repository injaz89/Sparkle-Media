"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const achievements = [
  {
    client: "GR Events",
    result: "40X–60X ROAS",
    category: "Lead Generation",
    color: "from-cyan-400 to-blue-500",
  },
  {
    client: "Gulabi Run",
    result: "50X ROAS",
    category: "Performance Marketing",
    color: "from-blue-400 to-indigo-500",
  },
  {
    client: "Mobile Stop",
    result: "21X ROAS",
    category: "E-Commerce & Retail",
    color: "from-cyan-500 to-teal-400",
  },
  {
    client: "GR Events",
    result: "300% Organic Growth",
    category: "SEO & Content",
    color: "from-indigo-400 to-blue-500",
  },
  {
    client: "Prestige Auto Detailers",
    result: "15X ROAS",
    category: "Paid Media",
    color: "from-blue-500 to-cyan-400",
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
      {/* Client Achievements */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #00B4DB 0%, transparent 60%), radial-gradient(circle at 80% 50%, #0083B0 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold tracking-widest text-cyan-400 uppercase mb-4">
              Proven Track Record
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Client Achievements
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              Real results for real businesses. These numbers aren&apos;t projections — they&apos;re
              what we delivered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                className="relative group bg-white/5 border border-white/10 hover:border-cyan-400/40 p-6 transition-all duration-300 hover:bg-white/8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
                  {item.category}
                </p>
                <p
                  className={`text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2 leading-tight`}
                >
                  {item.result}
                </p>
                <p className="text-sm text-gray-400 font-medium">{item.client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus Is Simple */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs font-bold tracking-widest text-cyan-500 uppercase mb-4">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
                Our focus is simple.
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Generate measurable business growth through{" "}
                <span className="font-semibold text-navy">data</span>,{" "}
                <span className="font-semibold text-navy">creativity</span> and{" "}
                <span className="font-semibold text-navy">performance marketing</span>.
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
                  className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-100 hover:border-cyan-200 hover:bg-cyan-50/50 transition-all duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-navy">{item}</span>
                </motion.div>
              ))}
              <motion.div
                className="col-span-2 mt-2 p-4 bg-navy/5 border-l-2 border-cyan-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <p className="text-sm text-gray-600 italic font-light">
                  Every campaign is built around{" "}
                  <span className="font-semibold text-navy">business outcomes</span>, not marketing
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
