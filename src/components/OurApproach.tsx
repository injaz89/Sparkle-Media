"use client";

import { motion } from "framer-motion";
import { Search, ScanLine, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Research",
    desc: "A digital marketing specialist will always research your competitors as well as your customers to produce better content.",
    number: "01",
  },
  {
    icon: ScanLine,
    title: "Assess",
    desc: "The competitors' and your brands' current situations need to be assessed to have a thorough understanding of what needs to be done and what needs to be avoided.",
    number: "02",
  },
  {
    icon: Lightbulb,
    title: "Strategize",
    desc: "Then a well-structured strategy needs to be sketched out, with risks analyzed in all aspects and contingency plans ready.",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Implement",
    desc: "And it is a matter of kick-starting an exemplary digital journey for your brand in an extraordinary way.",
    number: "04",
  },
];

export function OurApproach() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#87d4f8] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold tracking-widest text-[#129adc] uppercase mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-6">Our Approach</h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg">
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
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-px bg-gradient-to-r from-[#87d4f8] to-[#87d4f8] z-10" />
                )}

                <div className="p-8 bg-white border border-[#87d4f8] hover:border-[#39bcfc]/50 hover:shadow-xl hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full">
                  {/* Large number watermark */}
                  <div className="absolute -top-4 -right-4 text-[100px] font-bold text-[#d6f2ff] opacity-100 z-0 pointer-events-none leading-none select-none">
                    {step.number}
                  </div>

                  <div className="relative z-10">
                    <div
                      className="w-12 h-12 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: "linear-gradient(135deg, #39bcfc, #129adc)" }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1128] mb-4">{step.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed text-sm">{step.desc}</p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#39bcfc] to-[#129adc] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
