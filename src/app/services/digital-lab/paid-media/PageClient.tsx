"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Users, Target, PenTool, TrendingUp, BarChart3, Globe, Briefcase, Share2, Play, ArrowRight } from "lucide-react";
import { ServiceMobileNav } from "@/components/ServiceNavigation";

const stats = [
  { value: "71%", label: "of consumers discover products and brands through social media" },
  { value: "Days", label: "Paid media campaigns can generate results within days, not months" },
  { value: "Significantly Higher", label: "Customer acquisition efficiency vs businesses relying solely on organic reach" },
];

const results = [
  { client: "Prestige Auto Detailers", result: "15X ROAS", category: "Automotive" },
  { client: "GR Events", result: "40X–60X ROAS", category: "Lead Generation" },
  { client: "Gulabi Run", result: "50X ROAS", category: "Events" },
  { client: "GR Events", result: "300% Organic Growth", category: "Social Media" },
  { client: "Mobile Stop", result: "21X ROAS", category: "E-Commerce" },
];

const approaches = [
  {
    icon: Users,
    title: "Audience Intelligence",
    desc: "Successful campaigns begin with understanding your customers. We conduct detailed audience research to identify who your ideal customers are, where they spend their time online, and what motivates them to take action. By leveraging platform data, consumer insights, and behavioural signals, we build audience segments that maximize relevance and improve conversion rates.",
  },
  {
    icon: Target,
    title: "Strategic Campaign Planning",
    desc: "Every campaign is aligned with your business objectives. Whether you're launching a new product, generating leads, increasing online sales, or expanding into new markets, we create tailored paid media strategies designed to support your growth goals. Our campaigns are built with clear KPIs, measurable outcomes, and scalable frameworks that allow continuous improvement.",
  },
  {
    icon: PenTool,
    title: "Creative That Converts",
    desc: "The success of any paid campaign depends heavily on the creative. Our team develops high-performing ad creatives, persuasive copywriting, and conversion-focused messaging designed to capture attention and drive action. From static creatives and carousel ads to video campaigns and motion graphics, every asset is designed with performance in mind.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    desc: "Launching a campaign is only the beginning. Our specialists continuously monitor performance, test new audiences, optimize bidding strategies, improve creatives, and refine targeting to maximize return on ad spend. This ensures your campaigns continue improving as more data becomes available.",
  },
];

const platforms = [
  {
    icon: Globe,
    name: "Meta Advertising",
    desc: "Facebook and Instagram advertising campaigns designed for lead generation, sales, engagement, and customer acquisition.",
    color: "from-primary to-secondary",
  },
  {
    icon: Briefcase,
    name: "LinkedIn Advertising",
    desc: "Professional targeting solutions ideal for B2B businesses, corporate services, recruitment, and high-value lead generation.",
    color: "from-secondary to-primary",
  },
  {
    icon: Play,
    name: "TikTok Advertising",
    desc: "Creative-first campaigns designed to capture attention and reach highly engaged audiences.",
    color: "from-primary to-secondary",
  },
  {
    icon: Share2,
    name: "Multi-Platform Campaigns",
    desc: "Integrated advertising strategies that connect multiple platforms into a unified customer acquisition system.",
    color: "from-secondary to-primary",
  },
];

const capabilities = [
  "Facebook Advertising",
  "Instagram Advertising",
  "LinkedIn Advertising",
  "TikTok Advertising",
  "Pinterest Advertising",
  "X (Twitter) Advertising",
  "Campaign Strategy Development",
  "Paid Media Audits",
  "Ad Account Setup & Restructuring",
  "Audience Research & Segmentation",
  "Meta Pixel & Conversion API Setup",
  "Catalog & E-Commerce Integration",
  "Conversion Tracking & Analytics",
  "Landing Page Optimization",
  "Creative Design & Ad Production",
  "Ad Copywriting",
  "Performance Reporting & Insights",
  "Lead Generation Campaigns",
  "E-Commerce Advertising",
  "Retargeting Campaigns",
];

const outcomes = [
  "Generate qualified leads",
  "Increase online sales",
  "Reduce acquisition costs",
  "Improve return on ad spend",
  "Scale profitably",
  "Build long-term customer value",
];

export default function PaidMediaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] pointer-events-none opacity-60" />

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 relative z-10">
          
          {/* Mobile Service Navigation */}
          <ServiceMobileNav />

          {/* Centered Single Column Content Layout */}
          <div className="max-w-5xl mx-auto space-y-12 w-full mt-8">

            {/* ── HERO ── */}
            <div className="space-y-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm"
              >
                Digital Lab
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-4 leading-[1.05] text-center"
              >
                Paid Media{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Marketing
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl font-bold text-navy mb-6 text-center"
              >
                Scale Faster With Ads
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl mx-auto py-6 border-y border-primary/20"
              >
                <p className="text-lg text-gray-650 font-light leading-relaxed text-center">
                  Reach the right audience. Generate qualified leads. Turn advertising spend into
                  measurable revenue.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-8 justify-center"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors"
                >
                  Book Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all bg-white"
                >
                  Start a Campaign
                </Link>
              </motion.div>

              {/* Hero Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-primary/10"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col p-5 bg-white border border-primary/20 hover:border-primary transition-colors shadow-md">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                      {stat.value}
                    </span>
                    <p className="text-gray-650 font-light text-xs leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>



            {/* ── WHAT WE DO ── */}
            <section className="py-8 border-t border-primary/20 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(#0A1128 1px, transparent 1px), linear-gradient(90deg, #0A1128 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
              <div className="relative z-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs font-bold tracking-widest text-secondary uppercase mb-4 block">
                      Our Mission
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                      Performance Marketing That Turns Ad Spend Into Revenue
                    </h2>
                    <div className="border-l-2 border-secondary pl-6 space-y-4">
                      <p className="text-gray-700 font-light leading-relaxed">
                        Most businesses don&apos;t need more traffic.{" "}
                        <span className="text-navy font-semibold">They need more customers.</span>
                      </p>
                      <p className="text-gray-700 font-light leading-relaxed">
                        At Sparkle Media, we build data-driven ad campaigns that connect your business
                        with the right audience at the right time, transforming advertising budgets into
                        measurable business growth.
                      </p>
                      <p className="text-gray-700 font-light leading-relaxed">
                        Whether your goal is to generate online sales, capture leads, download apps,
                        or build brand awareness, our performance marketing specialists optimize every
                        campaign for the outcomes that drive your success.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-secondary text-white p-10 border border-secondary shadow-xl shadow-sky-200/50 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary blur-[80px] opacity-40 pointer-events-none" />
                    <div className="relative z-10">
                      <Users className="w-12 h-12 text-white mb-6 animate-pulse" />
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Optimizing for Business Growth
                      </h3>
                      <p className="text-white/90 font-light leading-relaxed mb-6">
                        Many agencies focus on impressions, clicks, or likes. We believe marketing
                        campaigns should deliver tangible revenue.
                      </p>
                      <p className="text-white/90 font-light leading-relaxed mb-8">
                        We continuously test, refine, and optimize targeting, bidding, creative
                        assets, and landing pages to lower your acquisition costs and maximize your
                        advertising budget.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold hover:bg-bg hover:text-navy transition-colors"
                      >
                        Book Strategy Call
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── CLIENT CASE STUDIES ── */}
            <section className="py-8 border-t border-primary/20">
              <div>
                <div className="text-center mb-16">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">Case Studies</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Results We Have Generated</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {results.map((item, i) => {
                    const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc", "#7c3aed"];
                    const accent = accentMap[i % accentMap.length];
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="group relative bg-white p-8 border border-primary/20 hover:border-primary hover:shadow-lg transition-all"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${accent}60, transparent)` }} />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">{item.category}</span>
                        <h3 className="text-xl font-bold text-navy mb-4">{item.client}</h3>
                        <div className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:scale-105 transition-transform origin-left">
                          {item.result}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ── OUR APPROACH ── */}
            <section className="py-8 border-t border-primary/20">
              <div>
                <div className="text-center mb-16">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">How We Work</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Our Approach</h2>
                </div>
                {/* Numbered editorial rows — no icon boxes */}
                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    {/* Dashed vertical line */}
                    <div
                      className="absolute left-[19px] top-8 bottom-8 w-px hidden sm:block"
                      style={{
                        backgroundImage: "repeating-linear-gradient(180deg, rgba(0,212,255,0.3) 0px, rgba(0,212,255,0.3) 6px, transparent 6px, transparent 12px)",
                      }}
                    />
                    <div className="space-y-0 divide-y" style={{ borderColor: "rgba(0,212,255,0.1)" }}>
                      {approaches.map((item, i) => {
                        const accentMap = ["#00d4ff", "#4db8ff", "#7c3aed", "#0099cc"];
                        const accent = accentMap[i % accentMap.length];
                        return (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative flex gap-8 py-8 sm:pl-14"
                          >
                            {/* Circle step number */}
                            <div
                              className="hidden sm:flex absolute left-0 top-8 w-10 h-10 rounded-full items-center justify-center flex-shrink-0 border-2 transition-all duration-300 group-hover:scale-110 bg-bg"
                              style={{
                                borderColor: `${accent}50`,
                                background: `radial-gradient(circle, ${accent}14, transparent)`,
                              }}
                            >
                              <span
                                className="text-xs font-black"
                                style={{
                                  backgroundImage: `linear-gradient(135deg, ${accent}, ${accent}88)`,
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                }}
                              >
                                {String(i + 1).padStart(2, "0")}
                              </span>
                            </div>
                            {/* Content */}
                            <div className="flex-1 relative overflow-hidden">
                              <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{ background: `linear-gradient(90deg, ${accent}06 0%, transparent 60%)` }}
                              />
                              <span
                                className="sm:hidden inline-block text-xs font-black tracking-widest mb-2"
                                style={{ color: accent }}
                              >
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <h3 className="text-2xl font-bold text-navy mb-3">{item.title}</h3>
                              <p className="text-gray-655 font-light leading-relaxed">{item.desc}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── PLATFORMS WE MANAGE ── */}
            <section className="py-8 border-t border-primary/20 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 50%, #39bcfc 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10">
                <div className="text-center mb-16">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">Where We Run Your Ads</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Platforms We Manage</h2>
                </div>
                {/* Editorial row layout — no icon boxes */}
                <div className="max-w-3xl mx-auto space-y-0 divide-y" style={{ borderColor: "rgba(0,212,255,0.12)" }}>
                  {platforms.map((platform, i) => {
                    const Icon = platform.icon;
                    const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc"];
                    const accent = accentMap[i % accentMap.length];
                    return (
                      <motion.div
                        key={platform.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 py-7 relative overflow-hidden"
                      >
                        {/* Hover sweep */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ background: `linear-gradient(90deg, ${accent}08 0%, transparent 60%)` }}
                        />
                        {/* Inline icon ─ no box */}
                        <div
                          className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{ color: accent }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        {/* Divider line */}
                        <div
                          className="hidden sm:block flex-shrink-0 w-px h-8"
                          style={{ background: `linear-gradient(180deg, transparent, ${accent}50, transparent)` }}
                        />
                        {/* Content */}
                        <div className="flex-1 relative z-10">
                          <h3 className="text-base font-bold text-navy mb-1">{platform.name}</h3>
                          <p className="text-gray-500 font-light text-sm leading-relaxed">{platform.desc}</p>
                        </div>
                        {/* Arrow */}
                        <div
                          className="flex-shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                          style={{ color: accent }}
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* ── WHAT WE CAN DO FOR YOU (Moved Outside Grid) ── */}
        <section className="py-12 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col xl:flex-row gap-16 items-start">
              <div className="xl:w-1/3 xl:sticky xl:top-32">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">Full Service</span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6 leading-tight">
                  What We Can Do For You
                </h2>
                <p className="text-gray-750 font-light leading-relaxed mb-8">
                  From simple awareness campaigns to complex conversion tracking, we handle every
                  aspect of your paid media ecosystem to ensure maximum return on ad spend.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors"
                >
                  Start a Campaign
                </Link>
              </div>

              <div className="xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-3 p-4 bg-white border border-primary/20 hover:border-primary hover:shadow-md transition-all group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-navy font-semibold text-sm">{cap}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY SPARKLE MEDIA (Moved Outside Grid) ── */}
        <section className="py-12 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">Why Sparkle Media</span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6 leading-tight">
                  Why Businesses Choose Sparkle Media
                </h2>
                <div className="border-l-2 border-secondary pl-6 space-y-3">
                  <p className="text-xl font-semibold text-navy">We don&apos;t optimize for impressions.</p>
                  <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    We optimize for outcomes.
                  </p>
                </div>
                <p className="text-gray-755 font-light mt-6 mb-4">Our focus is on helping businesses:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {outcomes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-navy font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-secondary text-white p-10 border border-secondary shadow-xl shadow-sky-200/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary blur-[80px] opacity-40 pointer-events-none" />
                <div className="relative z-10">
                  <BarChart3 className="w-12 h-12 text-white mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Data + Creativity + Accountability
                  </h3>
                  <p className="text-white/90 font-light leading-relaxed mb-6">
                    Every campaign is backed by data, powered by creativity, and measured against
                    real business objectives.
                  </p>
                  <p className="text-white/90 font-light leading-relaxed mb-8">
                    Because at the end of the day, successful marketing isn&apos;t about spending more.
                    It&apos;s about generating more from every dollar invested.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold hover:bg-bg hover:text-navy transition-colors"
                  >
                    Book a Strategy Call
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
