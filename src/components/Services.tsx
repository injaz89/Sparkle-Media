"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Search, TrendingUp, Share2, Camera, Mail } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web & App Development",
    description: "Bespoke digital experiences that tell your brand's story perfectly — fast, beautiful and conversion-optimised.",
    href: "/services/tech-lab/web-development",
  },
  {
    icon: Search,
    title: "SEO & AEO",
    description: "Rank higher on Google and appear in AI-powered search results to reach the audience that matters most.",
    href: "/services/digital-lab/seo",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven paid campaigns on Google, Meta and more — designed to maximize ROAS and revenue.",
    href: "/services/digital-lab/paid-media",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engaging content and community management that builds brand loyalty and drives measurable results.",
    href: "/services/digital-lab/social-media",
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description: "High-end visual production tailored for modern platforms — from product shoots to brand films.",
    href: "/services/creative-lab/photography",
  },
  {
    icon: Mail,
    title: "CRM & Email Marketing",
    description: "Automated email journeys that nurture leads, retain customers and maximize lifetime value.",
    href: "/services/digital-lab/email-marketing",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#87d4f8] to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-bold tracking-widest text-[#129adc] uppercase mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A1128] mb-4">
              Our Services
            </h2>
            <div
              className="w-20 h-1"
              style={{ background: "linear-gradient(90deg, #39bcfc, #129adc)" }}
            />
          </motion.div>
          <motion.p
            className="text-gray-500 text-lg md:text-xl font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            One stop destination for all your digital needs — strategy, content, technology and performance, all under one roof.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.a
                href={service.href}
                key={i}
                className="group p-8 bg-white border border-[#87d4f8] hover:border-[#39bcfc]/50 hover:shadow-xl hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Bottom hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#39bcfc] to-[#129adc] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div
                  className="w-12 h-12 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #39bcfc, #129adc)" }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1128] mb-3 group-hover:text-[#129adc] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center gap-1 text-[#39bcfc] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/services"
            id="view-all-services-btn"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#87d4f8] text-[#0A1128] font-semibold hover:border-[#39bcfc] hover:text-[#129adc] transition-all text-sm"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
