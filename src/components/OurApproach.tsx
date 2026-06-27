"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Research",
    desc: "A digital marketing specialist will always research your competitors as well as your customers to produce better content.",
    accent: "#00d4ff",
    symbol: "◎",
  },
  {
    number: "02",
    title: "Assess",
    desc: "The competitors' and your brands' current situations need to be assessed to have a thorough understanding of what needs to be done.",
    accent: "#4db8ff",
    symbol: "◈",
  },
  {
    number: "03",
    title: "Strategize",
    desc: "A well-structured strategy is sketched out, with risks analyzed in all aspects and contingency plans ready.",
    accent: "#7c3aed",
    symbol: "◆",
  },
  {
    number: "04",
    title: "Implement",
    desc: "And it is a matter of kick-starting an exemplary digital journey for your brand in an extraordinary way.",
    accent: "#0099cc",
    symbol: "▲",
  },
];

export function OurApproach() {
  return (
    <section className="py-32 relative overflow-hidden" style={{ background: "#f0faff" }}>
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px section-line" />

      {/* Background orb */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 100%, rgba(124,58,237,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
            style={{ color: "#00d4ff" }}
          >
            How We Work
          </span>
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
          >
            Our Approach
          </h2>
          <p className="font-light max-w-2xl mx-auto text-lg" style={{ color: "#64748b" }}>
            A proven four-step process that turns market insight into measurable business growth.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <motion.div
            className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, #00d4ff40, #7c3aed40, #0099cc40)" }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
              >
                {/* Circle node */}
                <div className="relative mb-10">
                  {/* Outer ring */}
                  <div
                    className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `${step.accent}18` }}
                  />
                  <div
                    className="relative w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center border-2 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: `radial-gradient(135deg at 30% 30%, ${step.accent}22 0%, ${step.accent}08 100%)`,
                      borderColor: `${step.accent}40`,
                    }}
                  >
                    {/* Symbol watermark */}
                    <span
                      className="absolute text-3xl opacity-10 select-none"
                      style={{ color: step.accent }}
                    >
                      {step.symbol}
                    </span>
                    <span
                      className="text-3xl font-black leading-none"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${step.accent} 0%, ${step.accent}88 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="text-xl mb-3 font-medium"
                  style={{ color: "#060f2e", letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="font-light leading-relaxed text-sm" style={{ color: "#64748b" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stepper */}
        <div className="lg:hidden relative pl-8">
          {/* Vertical connecting line */}
          <div
            className="absolute left-[19px] top-6 bottom-6 w-px"
            style={{ background: "linear-gradient(180deg, #00d4ff40, #7c3aed40, #0099cc40)" }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative flex gap-6 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Circle node */}
                <div
                  className="absolute -left-8 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `radial-gradient(135deg, ${step.accent}20, ${step.accent}08)`,
                    borderColor: `${step.accent}50`,
                  }}
                >
                  <span
                    className="text-sm font-black"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${step.accent}, ${step.accent}aa)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-xl mb-2 font-medium"
                    style={{ color: "#060f2e", letterSpacing: "-0.02em" }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-light leading-relaxed text-sm" style={{ color: "#64748b" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
