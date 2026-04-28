"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Research",
    desc: "A digital marketing specialist will always research your competitors as well as your customers to produce better content.",
  },
  {
    title: "Assess",
    desc: "The competitors' and your brand's current situation needs to be assessed to have a thorough understanding of what needs to be done and what needs to be avoided.",
  },
  {
    title: "Strategize",
    desc: "Then a well-structured strategy needs to be sketched out, with risks analyzed in all aspects and contingency plans ready.",
  },
  {
    title: "Implement",
    desc: "And it is a matter of kick-starting an exemplary digital journey for your brand in an extraordinary way.",
  }
];

export function OurApproach() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-navy mb-6">Our Approach</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className="relative p-8 rounded-none bg-white border border-gray-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="absolute -top-6 -right-6 text-[120px] font-black text-gray-50 opacity-50 z-0 pointer-events-none">
                0{i + 1}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-navy mb-4 pt-4">{step.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
