"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { LineChart, Target, PenTool, CheckCircle2 } from "lucide-react";

const approaches = [
  {
    title: "Data-driven social strategy",
    icon: LineChart,
    desc: "Using a data-led approach we determine the right audiences and platforms which align with your business objectives. Our finessed audience selection process taps into a world of new opportunities to give you a competitive edge.",
  },
  {
    title: "Campaign alignment",
    icon: Target,
    desc: "We seamlessly fit our paid social strategy into your wider digital strategy for a fully integrated campaign. Sometimes this means running seasonal promotion-led campaign bursts, and other times it may be an always-on awareness message to grow brand visibility.",
  },
  {
    title: "Ad copy and creative",
    icon: PenTool,
    desc: "By understanding your objectives and assigning the relevant platforms for your campaign, we select the best ad types for optimum performance. From carousels to video ads, we do it all, including creative design and carefully crafted copy.",
  },
];

const capabilities = [
  "Facebooks Ads",
  "Instagram Ads",
  "Twitter Ads",
  "LinkedIn Ads",
  "Pinterest Ads",
  "TikTok Ads",
  "Setting up or Overhaul Social Media Ad Accounts",
  "Audience Targeting Research",
  "Facebook Pixels and Catalog Management",
  "Conversion Tracking",
  "Ad Creative and Copy",
];

export default function PaidMediaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
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
            className="text-5xl md:text-7xl font-bold text-navy mb-8"
          >
            Paid Media Management
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl text-navy font-medium leading-relaxed mb-6">
              Lack of patience? Wanna rush results on social media?
            </h3>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-4">
              Let&apos;s boost the post and speed of growth!
            </p>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              Social media advertising is a smart way to grow your business and generate leads. With a diverse range of platforms to target all ages, paid social provides a unique and extremely in-depth way of targeting that no other marketing channel can provide.
            </p>
          </motion.div>
        </div>

        {/* How do we do it? */}
        <div className="bg-gray-50 py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-100 rounded-none blur-[120px] opacity-40 pointer-events-none transform -translate-y-1/2" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">How do we do it?</h2>
              <div className="w-24 h-1 bg-cyan-400 mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {approaches.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-10 shadow-xl shadow-cyan-900/5 hover:shadow-2xl hover:shadow-cyan-900/10 border-t-4 border-transparent hover:border-cyan-400 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-blue-50 flex items-center justify-center text-cyan-500 mb-8 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* What can we do for you? */}
        <div className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
                What can we <br className="hidden lg:block"/> do for you?
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-8">
                From simple awareness campaigns to complex conversion tracking, we handle every aspect of your paid media ecosystem to ensure maximum return on ad spend.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-navy text-white font-bold tracking-widest uppercase hover:bg-cyan-600 transition-colors shadow-lg hover:shadow-cyan-900/20"
              >
                Start a Campaign
              </a>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center p-4 bg-white border border-gray-100 hover:border-cyan-200 hover:shadow-lg transition-all group"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-navy font-medium">{cap}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
