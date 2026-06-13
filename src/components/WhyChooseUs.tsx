"use client";

import { motion } from "framer-motion";
import { Target, Users, TrendingUp, ShieldCheck, BarChart3, Repeat } from "lucide-react";

const focusAreas = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    desc: "Every decision we make is tied to growing your top and bottom line — not just marketing metrics.",
  },
  {
    icon: Target,
    title: "Qualified Leads",
    desc: "We don't just drive traffic. We attract the right people who are ready to become customers.",
  },
  {
    icon: Users,
    title: "Customer Acquisition",
    desc: "Scalable acquisition systems that consistently bring new customers into your business.",
  },
  {
    icon: Repeat,
    title: "Customer Retention",
    desc: "Great marketing doesn't stop at the sale. We help you keep customers coming back.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Value",
    desc: "We build strategies that maximize what each customer is worth to your business over time.",
  },
  {
    icon: BarChart3,
    title: "Return on Ad Spend",
    desc: "Rigorous ROAS tracking ensures every dollar in ad spend is accountable and optimized.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold tracking-widest text-cyan-500 uppercase mb-4">
              Why Sparkle Media
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight">
              Why Brands Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Sparkle Media
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="border-l-2 border-cyan-400 pl-6">
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Most agencies focus on impressions, likes and vanity metrics.
              </p>
              <p className="text-lg text-navy font-semibold mt-2">We focus on:</p>
            </div>
          </motion.div>
        </div>

        {/* Focus areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={i}
                className="group p-8 bg-white border border-gray-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-12 h-12 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{area.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">{area.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl font-medium text-navy mb-2">
            Every campaign is built around business outcomes, not marketing activity.
          </p>
          <p className="text-gray-500 font-light mb-8">
            Ready to start growing your revenue?
          </p>
          <a
            href="https://calendly.com/sparklemediacreatives/30min"
            target="_blank"
            rel="noopener noreferrer"
            id="why-us-cta-btn"
            className="inline-block px-10 py-4 bg-navy text-white font-semibold hover:shadow-[0_0_30px_rgba(0,180,219,0.3)] transition-all hover:bg-cyan-600"
          >
            Book a Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
