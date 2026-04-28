"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Search, TrendingUp, Share2, Camera } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web & App Development",
    description: "Bespoke digital experiences that tell your brand's story perfectly.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Rank higher and reach the audience that matters most.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven campaigns designed to maximize ROI.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engaging content that builds community and loyalty.",
  },
  {
    icon: Camera,
    title: "Photography / Video",
    description: "High-end visual production tailored for modern platforms.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              What We Do
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>
          <p className="text-gray-500 text-lg md:text-xl font-light">
            To help businesses of all sizes succeed in the digital world by being the one stop destination for all your digital needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="group p-8 rounded-none bg-gray-50 border border-gray-100 hover:border-cyan-100 hover:bg-cyan-50/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-white rounded-none shadow-sm flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
