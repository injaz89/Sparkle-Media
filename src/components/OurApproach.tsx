"use client";

import { motion } from "framer-motion";
import { Search, ScanLine, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research",
    desc: "A digital marketing specialist will always research your competitors as well as your customers to produce better content.",
    number: "01",
    grad: "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
  },
  {
    icon: ScanLine,
    title: "Assess",
    desc: "The competitors' and your brands' current situations need to be assessed to have a thorough understanding of what needs to be done.",
    number: "02",
    grad: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
  },
  {
    icon: Lightbulb,
    title: "Strategize",
    desc: "A well-structured strategy is sketched out, with risks analyzed in all aspects and contingency plans ready.",
    number: "03",
    grad: "linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%)",
  },
  {
    icon: Rocket,
    title: "Implement",
    desc: "And it is a matter of kick-starting an exemplary digital journey for your brand in an extraordinary way.",
    number: "04",
    grad: "linear-gradient(135deg, #0099cc 0%, #7c3aed 100%)",
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
          className="text-center mb-20"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-6 h-px z-10"
                    style={{ background: "linear-gradient(90deg, rgba(0,212,255,0.4), transparent)" }}
                  />
                )}

                <motion.div
                  className="relative overflow-hidden h-full p-8 transition-all duration-400"
                  style={{
                    background: "white",
                    border: "1px solid rgba(0,212,255,0.2)",
                  }}
                  whileHover={{ y: -6, borderColor: "rgba(0,212,255,0.5)" }}
                >
                  {/* Large watermark number */}
                  <div
                    className="absolute -top-4 -right-3 text-[90px] font-black pointer-events-none select-none leading-none"
                    style={{
                      backgroundImage: step.grad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      opacity: 0.07,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Top accent on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: step.grad }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: step.grad }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Step badge */}
                    <span
                      className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
                      style={{ color: "#00d4ff" }}
                    >
                      Step {step.number}
                    </span>

                    <h3
                      className="text-2xl mb-4"
                      style={{ color: "#060f2e", fontWeight: 300, letterSpacing: "-0.02em" }}
                    >
                      {step.title}
                    </h3>
                    <p className="font-light leading-relaxed text-sm" style={{ color: "#64748b" }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
