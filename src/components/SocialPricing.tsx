"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type PackageType = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  adds: string[];
};

const packages: Record<string, PackageType> = {
  Bronze: {
    name: "Bronze",
    price: "LKR 27,000",
    desc: "Test your Social Media Performance!",
    features: [
      "6 Static posts (Resizing will be charged additionally)",
      "Content Scheduling (2 social media channels)",
      "Monthly updated Facebook cover photo (FREE)",
      "Tier 3 Designer",
      "Hashtag Strategy and Research (Every 3 month)",
      "Content languages (English, Sinhala and Tamil)",
      "Competitor Analysis",
      "Updated Social Media Strategy every 12 month"
    ],
    adds: [
      "Monthly analysis report - LKR 7000",
      "20 sec animation video - LKR 10,000",
      "Paid Media Management - LKR 5000"
    ]
  },
  Silver: {
    name: "Silver",
    price: "LKR 59,000",
    desc: "Build your brand community and brand awareness!",
    features: [
      "12 Static posts (Resizing will be charged additionally)",
      "Content Scheduling (2-4 social media channels)",
      "Community Management (Partial)",
      "Monthly updated Facebook cover photo (FREE)",
      "Tier 2 Designer",
      "Hashtag Strategy and Research (Every month)",
      "Content languages (English, Sinhala and Tamil)",
      "Competitor Analysis",
      "Updated Social Media Strategy every 6 month",
      "Monthly analysis report"
    ],
    adds: [
      "1 FREE Blog Article - 500-700 words",
      "30 sec animation video - LKR 12,000",
      "FREE Paid Media Management"
    ]
  },
  Gold: {
    name: "Gold",
    price: "LKR 98,000",
    desc: "A journey of endless creativity to your brand and engagement.",
    features: [
      "21 Static posts (Free Resizing)",
      "Content Scheduling (2-5 social media channels)",
      "Community Management (9am to 6pm)",
      "Monthly updated Facebook cover photo (FREE)",
      "Tier 1 Designer",
      "Hashtag Strategy and Research (Every month)",
      "TikTok Account Set Up & 4 videos per month",
      "Content languages (English, Sinhala and Tamil)",
      "Competitor Analysis",
      "Updated Social Media Strategy every 3 month",
      "Monthly analysis report"
    ],
    adds: [
      "20 sec animation video - LKR 10,000",
      "FREE Paid Media Management",
      "1 FREE Blog Article - 800-1000 words"
    ]
  },
  Platinum: {
    name: "Platinum",
    price: "LKR 164,000",
    desc: "Comprehensive social media dominance and dedicated presence.",
    features: [
      "32 Static posts (Free Resizing)",
      "Content Scheduling (2-5 social media channels)",
      "Community Management (9am to 6pm)",
      "Monthly updated Facebook cover photo (FREE)",
      "Tier 1 Designer",
      "Hashtag Strategy and Research (Every month)",
      "TikTok Account Set Up & 8 videos per month",
      "Content languages (English, Sinhala and Tamil)",
      "Competitor Analysis",
      "Updated Social Media Strategy every 3 month",
      "Monthly analysis report"
    ],
    adds: [
      "30 sec animation video - LKR 12,000",
      "FREE Paid Media Management",
      "1 FREE Blog Article - 800-1000 words"
    ]
  }
};

export function SocialPricing() {
  const tabs = ["Bronze", "Silver", "Gold", "Platinum"];
  const [activeTab, setActiveTab] = useState("Gold");

  const currentPkg = packages[activeTab];

  return (
    <section className="bg-gray-50 py-20 rounded-none-[3rem] mx-6">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-none text-lg font-bold transition-all relative ${
                activeTab === tab ? "text-navy" : "text-gray-400 hover:text-cyan-500"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white shadow-xl shadow-cyan-900/10 rounded-none"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Pricing Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-12 md:p-16 rounded-none shadow-2xl shadow-cyan-900/10 border border-cyan-100 relative overflow-hidden"
          >
            {/* Background Blob */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-none blur-3xl opacity-50 pointer-events-none" />

            <div className="flex flex-col md:flex-row justify-between mb-12 pb-10 border-b border-gray-100">
              <div>
                <h3 className="text-4xl font-black text-navy mb-4">{currentPkg.name}</h3>
                <p className="text-gray-500 font-light text-xl max-w-sm leading-relaxed">{currentPkg.desc}</p>
              </div>
              <div className="mt-8 md:mt-0 md:text-right">
                <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-2">Monthly Retainer</p>
                <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  {currentPkg.price}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-navy font-bold text-lg mb-6">What&apos;s Included:</p>
                <ul className="space-y-5">
                  {currentPkg.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start text-gray-600 font-light"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-navy font-bold text-lg mb-6">Value Add-ons (+):</p>
                <ul className="space-y-5">
                  {currentPkg.adds.map((add, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start text-gray-600 font-light"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.05) }}
                    >
                      <div className="w-6 h-6 rounded-none bg-blue-50 text-blue-500 flex items-center justify-center mr-3 flex-shrink-0 text-sm font-bold">+</div>
                      <span className="leading-relaxed">{add}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-16">
                  <a
                    href="#contact"
                    className="block w-full py-5 text-center bg-navy text-white text-lg font-bold rounded-none hover:shadow-[0_0_20px_rgba(0,180,219,0.4)] transition-all hover:bg-cyan-600"
                  >
                    Select {currentPkg.name} Plan
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
