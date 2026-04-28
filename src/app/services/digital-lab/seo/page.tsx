"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SeoCounters } from "@/components/SeoCounters";
import { motion } from "framer-motion";
import { Globe, Wrench, Link as LinkIcon, ShoppingBag, MapPin, ArrowRight } from "lucide-react";

const fullSeoFeatures = [
  {
    icon: Globe,
    title: "ON-PAGE OPTIMISATION",
    desc: "The content on your website pages must match the intent and expectations of users so Google ranks your page high in the search. We'll create unique content and make expert optimisations to drive new traffic and clicks.",
  },
  {
    icon: Wrench,
    title: "TECHNICAL SEO",
    desc: "There are hundreds of elements that fall under a technical SEO remit from site speed to re-directs. We'll identify and fix the technical elements of your site to give you a solid SEO foundation for further growth.",
  },
  {
    icon: LinkIcon,
    title: "MEDIA PLACEMENTS & LINKS",
    desc: "High-quality links from reputable sources will increase the trust of your brand in the eyes of Google and your target audience. We'll secure authority-boosting placements to generate impressions, clicks and online sales.",
  },
];

const specializedSeo = [
  {
    icon: ShoppingBag,
    title: "E-Commerce SEO",
    desc: "E-commerce SEO will bring in the right leads who have a direct interest in your brand. Save time and money by targeting a specific niche!",
    bgClass: "bg-cyan-50",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "People often look for services around them that are more convenient for them. Even if you provide service globally you can still attract visitors by being available to them on the local search results.",
    bgClass: "bg-blue-50",
  },
];

export default function SeoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 bg-white min-h-screen">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-500 font-bold tracking-widest uppercase mb-4"
          >
            Digital Lab
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-navy mb-8 leading-tight"
          >
            Search Engine Optimisation
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-500 font-light leading-relaxed max-w-4xl mx-auto"
          >
            Be Found and Visible on Search Engines!
          </motion.h3>
        </div>

        {/* Stats Section (SeoCounters) */}
        <SeoCounters />

        {/* Full-on-Full SEO Section */}
        <div className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-100 rounded-none blur-[100px] opacity-30 pointer-events-none" />
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">
              We do full-on-full SEO for your website
            </h2>
            <p className="text-xl text-gray-500 font-light">Or pick the one you like!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {fullSeoFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-10 border border-gray-100 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gray-50 flex items-center justify-center text-cyan-600 mb-8 group-hover:bg-cyan-50 transition-colors duration-300">
                    <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-black text-navy mb-4 tracking-wide">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Specialized SEO Types Section */}
        <div className="bg-navy py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500 rounded-none blur-[150px] opacity-20 pointer-events-none transform -translate-y-1/2" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Type of SEO you can pick:
              </h2>
              <div className="w-24 h-1 bg-cyan-400" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {specializedSeo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`${item.bgClass} p-12 hover:scale-[1.02] transition-transform duration-300 cursor-pointer group`}
                  >
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-white flex items-center justify-center text-navy shadow-md mr-6">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black text-navy">{item.title}</h3>
                    </div>
                    <p className="text-gray-700 font-light text-xl leading-relaxed mb-10">
                      {item.desc}
                    </p>
                    <div className="flex items-center text-cyan-700 font-bold tracking-widest uppercase text-sm group-hover:text-navy transition-colors">
                      Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
