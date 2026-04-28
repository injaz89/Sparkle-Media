"use client";

import { motion } from "framer-motion";
import { Users, Server } from "lucide-react";

export function TechSoftwareDev() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 flex items-center justify-center">
            <Server className="w-10 h-10 mr-4 text-cyan-500" />
            Software Development
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
            Scale your technical capabilities with our flexible development models, providing top-tier engineering talent on demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Staff Augmentation Block */}
          <motion.div 
            className="bg-white rounded-none p-10 border border-gray-100 shadow-xl shadow-cyan-900/5 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100 to-transparent rounded-none-bl-full opacity-50 pointer-events-none" />
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-cyan-50 rounded-none flex items-center justify-center text-cyan-600 mr-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-navy">Staff Augmentation</h3>
            </div>
            <p className="text-gray-500 font-light text-lg leading-relaxed mb-8">
              Seamlessly integrate our expert developers into your existing team. Skip the hiring overhead and instantly scale your delivery capacity with pre-vetted professionals ready to adapt to your agile workflows.
            </p>
            <ul className="space-y-3">
              {["Rapid Onboarding", "Flexible Contracts", "Skill-specific matching"].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 rounded-none bg-cyan-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dedicated Team Block */}
          <motion.div 
            className="bg-white rounded-none p-10 border border-gray-100 shadow-xl shadow-cyan-900/5 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-none-br-full opacity-50 pointer-events-none" />
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-blue-50 rounded-none flex items-center justify-center text-blue-600 mr-6">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-navy">Dedicated Team</h3>
            </div>
            <p className="text-gray-500 font-light text-lg leading-relaxed mb-8">
              Offload your entire project to our managed delivery team. We provide product managers, designers, engineers, and QA to own the product lifecycle from conception to deployment.
            </p>
            <ul className="space-y-3">
              {["End-to-End Delivery", "Managed Architecture", "Quality Assurance included"].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <div className="w-2 h-2 rounded-none bg-blue-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
