"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Plus, Users, Calendar, BarChart3 } from "lucide-react";

const packages = [
  {
    name: "Bronze",
    price: "LKR 27,000",
    desc: "Test your Social Media Performance!",
    features: [
      "6 Static posts (Resizing will be charged additionally)",
      "Content Scheduling (2 social media channels)",
      "Community Management (Partial)",
      "Tier 3 Designer",
      "Hashtag Strategy and Research (Every 3 month)",
      "Content languages (English, Sinhala and Tamil)",
      "Competitor Analysis",
      "Updated Social Media Strategy every 12 month",
    ],
    adds: [
      "Monthly analysis report - LKR 7000",
      "20 sec animation video - LKR 10,000",
      "Paid Media Management - LKR 5000",
    ],
  },
  {
    name: "Silver",
    price: "LKR 59,000",
    desc: "Build your brand community and brand awareness!",
    features: [
      "12 Static posts (Resizing will be charged additionally)",
      "Content Scheduling (2 - 4 social media channels, incl. GMB)",
      "Community Management (Partial)",
      "Monthly updated Facebook cover photo (FREE)",
      "Tier 2 Designer",
      "Hashtag Strategy and Research (Every month)",
      "Content languages (English, Sinhala and Tamil)",
      "Competitor Analysis",
      "Updated Social Media Strategy every 6 month",
      "Monthly analysis report",
    ],
    adds: [
      "1 FREE Blog Article - 500-700 words",
      "30 sec animation video - LKR 12,000",
      "FREE Paid Media Management",
    ],
  },
  {
    name: "Gold",
    price: "LKR 98,000",
    desc: "A journey of never ending creativity to your brand and engagement with your audience.",
    features: [
      "21 Static posts (Free Resizing)",
      "Content Scheduling (2 - 5 social media channels, incl. GMB)",
      "Community Management (9am to 6pm)",
      "Monthly updated Facebook cover photo (FREE)",
      "Tier 1 Designer",
      "TikTok Account Set Up & 4 videos per month (Basic)",
      "Hashtag Strategy and Research (Every month)",
      "Content languages (English, Sinhala and Tamil)",
      "Competitor Analysis",
      "Updated Social Media Strategy every 3 month",
      "Monthly analysis report",
    ],
    adds: [
      "20 sec animation video - LKR 10,000",
      "30 sec animation video - LKR 12,000",
      "FREE Paid Media Management",
      "1 FREE Blog Article - 800-1000 words",
    ],
  },
  {
    name: "Platinum",
    price: "LKR 164,000",
    desc: "Comprehensive social media dominance and dedicated presence.",
    features: [
      "32 Static posts (Free Resizing)",
      "Content Scheduling (2 - 5 social media channels, incl. GMB)",
      "Community Management (9am to 6pm)",
      "Monthly updated Facebook cover photo (FREE)",
      "Tier 1 Designer",
      "TikTok Account Set Up & 8 videos per month (Basic)",
      "Hashtag Strategy and Research (Every month)",
      "Content languages (English, Sinhala and Tamil)",
      "Competitor Analysis",
      "Updated Social Media Strategy every 3 month",
      "Monthly analysis report",
    ],
    adds: [
      "20 sec animation video - LKR 10,000",
      "30 sec animation video - LKR 12,000",
      "FREE Paid Media Management",
      "1 FREE Blog Article - 800-1000 words",
    ],
  },
];

const benefits = [
  {
    title: "Get to Know Your User",
    icon: Users,
    desc: "Our agency creates accessible, interactive material that engages your audience in addition to keeping an eye on and managing your social media community.",
  },
  {
    title: "Consistency is Key",
    icon: Calendar,
    desc: "We provide consistent content by using calendars and scheduled scheduling. Regular blogging posting helps your audience recognise your brand's voice and message, which creates an impactful relationship with them.",
  },
  {
    title: "Reporting and Analysis",
    icon: BarChart3,
    desc: "Our skilled social media managers will routinely assess performance and plan fresh approaches to boost performance and account growth.",
  },
];

export default function SocialMediaPage() {
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
            Social Media Marketing
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl text-navy font-medium leading-relaxed mb-6">
              We help you choose the right platforms and target the right audience on Social Media!
            </h3>
            <div className="text-xl text-gray-500 font-light leading-relaxed space-y-4">
              <p>Unleash your brand with Social Media Marketing.</p>
              <p>
                Social media is an ever-changing landscape with altering algorithms and topical trends; to keep your competitive edge, you must prioritize your social media management strategy.
              </p>
              <p>
                Do you see your social media as just an administrative task? Do you often scramble to put a post together at the last minute after realizing you haven&apos;t posted in a few weeks? Perhaps no matter what you post, you can&apos;t seem to achieve the results you want to see?
              </p>
              <p className="font-medium text-cyan-600">
                If you are looking for a more strategic approach and one that delivers results, we can help. Check out our Social Media Packages:
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vertical Packages List */}
        <div className="max-w-7xl mx-auto px-6 space-y-16 mb-24">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-100 hover:border-cyan-200 p-8 md:p-12 shadow-xl shadow-cyan-900/5 hover:shadow-cyan-900/10 transition-all duration-300 relative overflow-hidden flex flex-col lg:flex-row gap-12"
            >
              {/* Left Column: Title & Price */}
              <div className="lg:w-1/3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100 pb-8 lg:pb-0 lg:pr-8">
                <div>
                  <h2 className="text-4xl font-black text-navy mb-4 tracking-wide">{pkg.name}</h2>
                  <p className="text-gray-500 font-light text-lg mb-8">{pkg.desc}</p>
                </div>
                <div>
                  <p className="text-cyan-600 font-bold tracking-widest uppercase mb-2 text-sm">Monthly Investment</p>
                  <p className="text-4xl md:text-5xl font-black text-navy">{pkg.price}</p>
                </div>
              </div>

              {/* Right Column: Features & Add-ons */}
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-navy font-bold text-lg mb-6 border-b border-gray-100 pb-2">Included Features</h4>
                  <ul className="space-y-4">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-gray-600 font-light text-sm md:text-base">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-navy font-bold text-lg mb-6 border-b border-gray-100 pb-2">Add Up +</h4>
                  <ul className="space-y-4">
                    {pkg.adds.map((add, i) => (
                      <li key={i} className="flex items-start text-gray-600 font-light text-sm md:text-base">
                        <Plus className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{add}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Customized Package Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-none blur-[100px] opacity-20 pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Customized Package</h2>
            <p className="text-cyan-100 font-light text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              We do understand the need for a customized package. Let&apos;s pick the best for your brand. Should you wish to handpick the necessary services?
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-cyan-500 text-white font-bold tracking-widest uppercase hover:bg-cyan-400 transition-colors"
            >
              Get in touch right away
            </a>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-10 border border-gray-100 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-cyan-50 flex items-center justify-center text-cyan-600 mb-8">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4">{benefit.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {benefit.desc}
                    </p>
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
