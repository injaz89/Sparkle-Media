"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Target, PenTool, TrendingUp, BarChart3, Globe, Briefcase, Share2, Play } from "lucide-react";

const stats = [
  { value: "71%", label: "of consumers discover products and brands through social media" },
  { value: "Days", label: "Paid media campaigns can generate results within days, not months" },
  { value: "Significantly Higher", label: "Customer acquisition efficiency vs businesses relying solely on organic reach" },
];

const results = [
  { client: "Mobile Stop", result: "21X ROAS", category: "E-Commerce" },
  { client: "Prestige Auto Detailers", result: "15X ROAS", category: "Automotive" },
  { client: "GR Events", result: "40X–60X ROAS", category: "Lead Generation" },
  { client: "Gulabi Run", result: "50X ROAS", category: "Events" },
  { client: "GR Events", result: "300% Organic Growth", category: "Social Media" },
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
      <main className="bg-bg min-h-screen">

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 relative overflow-hidden bg-bg">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] pointer-events-none opacity-60" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
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
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-4 leading-[1.05]"
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
                  className="text-2xl font-bold text-navy mb-6"
                >
                  Scale Faster With Ads
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-gray-700 font-light leading-relaxed mb-8"
                >
                  Reach the right audience. Generate qualified leads. Turn advertising spend into
                  measurable revenue.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href="https://calendly.com/sparklemediacreatives/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors"
                  >
                    Book Strategy Call
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all"
                  >
                    Start a Campaign
                  </a>
                </motion.div>
              </div>

              {/* Why Invest stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="space-y-4"
              >
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Why Invest in Paid Media?</p>
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-5 p-5 bg-white border border-primary/20 hover:border-primary transition-colors shadow-md">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary flex-shrink-0 min-w-[80px]">
                      {stat.value}
                    </span>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO ── */}
        <section className="py-20 bg-bg border-t border-primary/20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#0A1128 1px, transparent 1px), linear-gradient(90deg, #0A1128 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                    From lead generation and e-commerce sales to event registrations and brand
                    awareness, our paid media specialists create campaigns designed to maximize
                    return on investment and deliver results that matter.
                  </p>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">
                  Proven Results — Recent Campaign Highlights
                </p>
                <div className="space-y-3">
                  {results.map((r, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-between p-4 bg-white border border-primary/20 hover:border-primary shadow-md transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                    >
                      <div>
                        <p className="text-navy font-semibold">{r.client}</p>
                        <p className="text-xs text-gray-500 font-light">{r.category}</p>
                      </div>
                      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        {r.result}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-600 text-xs font-light mt-4 italic">
                  These results were built through audience research, strategic campaign planning,
                  compelling creatives, and continuous optimization.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHY PERFORMANCE MARKETING MATTERS ── */}
        <section className="py-20 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                className="text-xs font-bold text-secondary uppercase tracking-widest"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Why It Matters
              </motion.span>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Why Performance Marketing Matters
              </motion.h2>
              <motion.div
                className="space-y-5 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-gray-700 font-light leading-relaxed text-lg">
                  Today&apos;s consumers spend hours every day across social media platforms, search
                  engines, websites, and mobile applications. Performance marketing allows your
                  business to reach highly targeted audiences based on their interests, behaviors,
                  demographics, purchase intent, and online activity.
                </p>
                <p className="text-gray-700 font-light leading-relaxed text-lg">
                  Instead of waiting for customers to find you, we place your brand directly in
                  front of the people most likely to convert. Whether your objective is lead
                  generation, e-commerce sales, event registrations, app downloads, or brand
                  awareness, paid media remains one of the fastest ways to scale growth when
                  executed correctly.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── OUR APPROACH ── */}
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Our Approach</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approaches.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-10 border border-primary/20 hover:border-primary hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-14 h-14 bg-white border border-primary/20 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PLATFORMS WE MANAGE ── */}
        <section className="py-24 bg-bg border-t border-primary/20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 50%, #39bcfc 0%, transparent 60%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Where We Run Your Ads</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Platforms We Manage</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform, i) => {
                const Icon = platform.icon;
                return (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-primary/20 hover:border-primary p-8 transition-all duration-300 hover:shadow-xl hover:shadow-sky-100/60"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} flex items-center justify-center text-white mb-6`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{platform.name}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">{platform.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHAT WE CAN DO FOR YOU ── */}
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3 lg:sticky lg:top-32">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">Full Service</span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6 leading-tight">
                  What We Can Do For You
                </h2>
                <p className="text-gray-700 font-light leading-relaxed mb-8">
                  From simple awareness campaigns to complex conversion tracking, we handle every
                  aspect of your paid media ecosystem to ensure maximum return on ad spend.
                </p>
                <a
                  href="https://calendly.com/sparklemediacreatives/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors"
                >
                  Start a Campaign
                </a>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
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

        {/* ── WHY SPARKLE MEDIA ── */}
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                <p className="text-gray-750 font-light mt-6 mb-4">Our focus is on helping businesses:</p>
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
                  <a
                    href="https://calendly.com/sparklemediacreatives/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold hover:bg-bg hover:text-navy transition-colors"
                  >
                    Book a Strategy Call
                  </a>
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
