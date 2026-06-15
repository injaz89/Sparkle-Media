"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const achievements = [
  {
    client: "GR Events",
    result: "40X–60X ROAS",
    category: "Lead Generation",
    color: "from-[#3AADDB] to-[#0083B0]",
  },
  {
    client: "Gulabi Run",
    result: "50X ROAS",
    category: "Performance Marketing",
    color: "from-[#0083B0] to-[#3AADDB]",
  },
  {
    client: "Mobile Stop",
    result: "21X ROAS",
    category: "E-Commerce & Retail",
    color: "from-[#3AADDB] to-sky-500",
  },
  {
    client: "GR Events",
    result: "300% Growth",
    category: "SEO & Content",
    color: "from-sky-500 to-[#0083B0]",
  },
  {
    client: "Prestige Auto",
    result: "15X ROAS",
    category: "Paid Media",
    color: "from-[#0083B0] to-[#3AADDB]",
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
      {/* Client Achievements — light blue tint */}
      <section className="py-24 bg-[#EDF6FB] relative overflow-hidden">
        {/* Subtle wave pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 wave-bg"
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.3]"
          style={{
            backgroundImage: "radial-gradient(circle, #D1EBF5 1px, transparent 1px)",
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
            <span className="inline-block text-xs font-bold tracking-widest text-[#0083B0] uppercase mb-4">
              Proven Track Record
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A1128] mb-4">
              Client Achievements
            </h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">
              Real results for real businesses. These numbers aren&apos;t projections — they&apos;re
              what we delivered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                className="relative group bg-white border border-[#D1EBF5] hover:border-[#3AADDB]/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-sky-100/60 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <TrendingUp className="w-5 h-5 text-[#0083B0]" />
                </div>
                <p className="text-xs font-bold text-[#0083B0] uppercase tracking-widest mb-3">
                  {item.category}
                </p>
                <p
                  className={`text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.color} mb-2 leading-tight`}
                >
                  {item.result}
                </p>
                <p className="text-sm text-gray-500 font-medium">{item.client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Focus Is Simple — white */}
      <section className="py-20 bg-white border-b border-[#D1EBF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs font-bold tracking-widest text-[#0083B0] uppercase mb-4">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0A1128] mb-6 leading-tight">
                Our focus is simple.
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Generate measurable business growth through{" "}
                <span className="font-semibold text-[#0A1128]">data</span>,{" "}
                <span className="font-semibold text-[#0A1128]">creativity</span> and{" "}
                <span className="font-semibold text-[#0A1128]">performance marketing</span>.
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
                  className="flex items-center gap-3 p-4 bg-[#F0F8FF] border border-[#D1EBF5] hover:border-[#3AADDB]/50 hover:bg-[#EDF6FB] transition-all duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #3AADDB, #0083B0)" }}
                  >
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[#0A1128]">{item}</span>
                </motion.div>
              ))}
              <motion.div
                className="col-span-2 mt-2 p-4 bg-[#F0F8FF] border-l-[3px] border-[#3AADDB]"
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
