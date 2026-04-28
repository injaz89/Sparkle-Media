"use client";

import { motion } from "framer-motion";

type Feature = {
  title: string;
  desc: string;
  icon: any;
  link?: string;
  linkText?: string;
};

type InfoLayoutProps = {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
};

export function InfoLayout({ category, title, subtitle, description, features }: InfoLayoutProps) {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-50 rounded-none blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <motion.p 
              className="text-cyan-500 font-bold tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {category}
            </motion.p>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-navy mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h1>
            <motion.h3 
              className="text-2xl text-navy font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {subtitle}
            </motion.h3>
          </div>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl text-gray-500 font-light leading-relaxed border-l-4 border-cyan-400 pl-6">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={i}
                className="group p-10 rounded-none bg-white border border-gray-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-none flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{feature.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed mb-6">
                  {feature.desc}
                </p>
                {feature.link && feature.linkText && (
                  <a
                    href={feature.link}
                    className="inline-flex items-center text-cyan-600 font-semibold hover:text-navy transition-colors"
                  >
                    {feature.linkText}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
