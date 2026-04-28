"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "Prestige Auto Detailers",
    industry: "AUTOMOTIVE & LUXURY",
    color: "from-blue-600 to-cyan-600",
    image: "/prestige_auto.png",
  },
  {
    name: "HiAcuity",
    industry: "HEALTHCARE TECH",
    color: "from-indigo-600 to-blue-600",
    image: "/hiacuity.png",
  },
  {
    name: "Made in Ceylon",
    industry: "E-COMMERCE & BRANDING",
    color: "from-cyan-600 to-teal-500",
    image: "/made_in_ceylon.png",
  },
];

export function Projects() {
  return (
    <section id="recent-launches" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Recent Launches
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative bg-gray-50 rounded-none p-8 cursor-pointer border border-cyan-100 transition-all hover:shadow-2xl hover:shadow-cyan-900/20"
              whileHover={{ scale: 1.03, y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-none`}
              />
              
              <div className="h-48 md:h-64 bg-white rounded-none mb-8 items-center justify-center overflow-hidden relative border border-gray-200 group-hover:border-cyan-500/50 transition-colors">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Gradient overlay for text readability if needed, or just styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10" />
              </div>

              <div className="relative z-20">
                <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-3">
                  {project.industry}
                </p>
                <h3 className="text-2xl font-semibold text-navy mb-6">
                  {project.name}
                </h3>
                
                <div className="flex items-center text-navy/70 group-hover:text-cyan-400 transition-colors">
                  <span className="text-sm font-medium">View project</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
