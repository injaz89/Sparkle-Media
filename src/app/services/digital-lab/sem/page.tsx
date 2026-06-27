"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "68% of Online Experiences Begin with a Search Engine",
    desc: "Most customer journeys start with a search. If your business isn't visible when prospects are searching, your competitors are capturing those opportunities.",
  },
  {
    title: "Search Ads Generate High-Intent Traffic",
    desc: "Unlike traditional advertising, search advertising targets users who are actively looking for solutions, making it one of the highest-converting digital marketing channels available.",
  },
  {
    title: "Measurable Return on Investment",
    desc: "Every click, enquiry, lead, purchase, and revenue event can be tracked and optimized, allowing businesses to make data-driven decisions.",
  },
  {
    title: "Faster Results Than Organic SEO",
    desc: "While SEO delivers long-term value, SEM provides immediate visibility and traffic, helping businesses generate results from day one.",
  },
  {
    title: "Remarketing Can Increase Conversion Rates",
    desc: "Most website visitors don't convert during their first visit. Strategic remarketing campaigns help bring interested users back and increase conversion opportunities.",
  },
];

const adTypes = [
  {
    title: "Google Search Ads",
    color: "from-primary to-secondary",
    desc: "Appear at the top of Google when customers search for products or services relevant to your business. Our search advertising strategies focus on:",
    points: [
      "High-intent keyword targeting",
      "Competitor analysis",
      "Conversion-focused ad copy",
      "Landing page optimization recommendations",
      "Bid management and budget allocation",
      "Lead generation and sales growth",
    ],
    note: "By targeting customers with strong purchase intent, search campaigns often become one of the most profitable customer acquisition channels.",
  },
  {
    title: "Google Shopping Ads",
    color: "from-secondary to-primary",
    desc: "Google Shopping campaigns allow customers to see your product image, price, and key information before clicking. Our Shopping Ads services include:",
    points: [
      "Merchant Center setup",
      "Product feed optimization",
      "Category segmentation",
      "Performance monitoring",
      "ROAS-focused campaign management",
    ],
    note: "Perfect for e-commerce brands looking to scale online sales efficiently.",
  },
  {
    title: "Google Display Network",
    color: "from-primary to-secondary",
    desc: "Reach potential customers across millions of websites, mobile applications, and digital platforms. Display advertising helps businesses:",
    points: [
      "Build brand awareness",
      "Expand audience reach",
      "Increase website traffic",
      "Support customer acquisition campaigns",
      "Strengthen remarketing strategies",
    ],
    note: "Combined with search campaigns, display advertising creates multiple touchpoints throughout the customer journey.",
  },
  {
    title: "Google Video Ads",
    color: "from-secondary to-primary",
    desc: "Video content continues to dominate digital engagement. Our video advertising strategies help brands:",
    points: [
      "Increase awareness",
      "Drive consideration",
      "Consider consideration consideration",
      "Promote products and services",
      "Improve conversion performance",
    ],
    note: "We create campaigns that capture attention and move customers closer to purchase.",
  },
  {
    title: "Programmatic Advertising",
    color: "from-primary to-secondary",
    desc: "Reach audiences beyond traditional search platforms through automated, data-driven advertising. Programmatic advertising allows brands to:",
    points: [
      "Access premium digital inventory",
      "Reach highly targeted audiences",
      "Optimize campaigns in real time",
      "Scale advertising efficiently",
      "Improve media buying performance",
    ],
    note: "By leveraging audience signals and automation, businesses can maximize reach while maintaining advertising efficiency.",
  },
];

const processSteps = [
  { title: "Strategy & Research", desc: "Understanding your market, audience behavior, and competitive landscape." },
  { title: "Tracking & Analytics", desc: "Implementing advanced conversion tracking to measure actual business outcomes." },
  { title: "Campaign Launch", desc: "Building campaigns aligned with clear business objectives and growth targets." },
  { title: "Continuous Optimization", desc: "Analyzing performance data daily to improve results and reduce acquisition costs." },
  { title: "Transparent Reporting", desc: "Providing meaningful insights focused on revenue, leads, sales, and return on investment." },
];

const results = [
  "Hundreds of thousands of website visits",
  "Thousands of purchase and lead conversion events",
  "Consistent improvements in conversion rates and ROAS",
  "Lower customer acquisition costs through strategic optimization",
];

export default function SemPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 relative overflow-hidden bg-bg">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] pointer-events-none opacity-60" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
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
                Search Engine{" "}
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
                Reach Customers When They&apos;re Ready to Buy
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-secondary pl-6 mb-8 space-y-3"
              >
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Over 8.5 billion searches are made on Google every day, and a significant
                  percentage of those searches come from users actively looking for products,
                  services, and solutions.
                </p>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  At Sparkle Media, we help brands capture this demand through strategic search,
                  shopping, display, video, and programmatic advertising campaigns that focus on
                  measurable business growth.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="https://calendly.com/sparklemediacreatives/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors"
                >
                  Chat with our CEO
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all"
                >
                  Start a Campaign
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHY INVEST IN SEM ── */}
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Why SEM</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Why Invest in Search Engine Marketing?</h2>
            </motion.div>
            {/* Numbered stepper rows — no icon boxes */}
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-[19px] top-6 bottom-6 w-px hidden sm:block"
                style={{ backgroundImage: "repeating-linear-gradient(180deg, rgba(0,212,255,0.3) 0px, rgba(0,212,255,0.3) 6px, transparent 6px, transparent 12px)" }} />
              <div className="space-y-0 divide-y" style={{ borderColor: "rgba(0,212,255,0.1)" }}>
                {reasons.map((reason, i) => {
                  const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc", "#7c3aed"];
                  const accent = accentMap[i % accentMap.length];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="group relative flex gap-8 py-7 sm:pl-14"
                    >
                      <div className="hidden sm:flex absolute left-0 top-7 w-10 h-10 rounded-full items-center justify-center flex-shrink-0 border-2 transition-all duration-300 group-hover:scale-110"
                        style={{ borderColor: `${accent}50`, background: `radial-gradient(circle, ${accent}14, transparent)` }}>
                        <span className="text-xs font-black"
                          style={{ backgroundImage: `linear-gradient(135deg, ${accent}, ${accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="flex-1 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ background: `linear-gradient(90deg, ${accent}06 0%, transparent 60%)` }} />
                        <h3 className="text-lg font-bold text-navy mb-2 leading-snug">{reason.title}</h3>
                        <p className="text-gray-500 font-light text-sm leading-relaxed">{reason.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── AD TYPES ── */}
        <section className="py-24 bg-bg border-t border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#0A1128 1px, transparent 1px), linear-gradient(90deg, #0A1128 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">What We Run</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Our Search Engine Marketing Services</h2>
            </motion.div>
            <div className="space-y-6">
              {adTypes.map((ad, i) => {
                const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc", "#7c3aed"];
                const accent = accentMap[i % accentMap.length];
                const nums = ["01", "02", "03", "04", "05"];
                return (
                  <motion.div
                    key={ad.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="group relative bg-white p-8 md:p-10 overflow-hidden transition-all duration-300 flex flex-col md:flex-row gap-10"
                    style={{ border: "1px solid rgba(0,212,255,0.18)" }}
                    whileHover={{ borderColor: `${accent}50` }}
                  >
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${accent}60, transparent)` }} />
                    <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(180deg, ${accent}, ${accent}44)` }} />
                    {/* Left: Number + Title */}
                    <div className="md:w-1/3 pl-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-black" style={{ color: `${accent}80` }}>{nums[i]}</span>
                        <div className="flex-1 h-px max-w-[30px]" style={{ background: `${accent}40` }} />
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-3">{ad.title}</h3>
                      <p className="text-gray-500 font-light text-sm leading-relaxed">{ad.desc}</p>
                    </div>
                    {/* Right: Checkpoints + Note */}
                    <div className="md:w-2/3">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
                        {ad.points.map((pt, j) => (
                          <span key={j} className="flex items-center gap-1.5 text-sm font-light text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />{pt}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm italic border-l-2 pl-4 font-light" style={{ color: accent, borderColor: `${accent}60` }}>{ad.note}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── OUR APPROACH ── */}
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Our Performance-Driven Approach</h2>
            </motion.div>
            {/* Horizontal timeline circle nodes */}
            <div className="hidden md:block relative mb-8">
              <div className="absolute top-[52px] left-[10%] right-[10%] h-px" style={{ background: "linear-gradient(90deg, #00d4ff40, #7c3aed40, #0099cc40)" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => {
                const accentMap = ["#00d4ff", "#4db8ff", "#7c3aed", "#0099cc", "#00d4ff"];
                const accent = accentMap[i];
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="relative mb-6">
                      <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `${accent}18` }} />
                      <div className="relative w-[88px] h-[88px] rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-105"
                        style={{ background: `radial-gradient(circle at 30% 30%, ${accent}20, ${accent}08)`, borderColor: `${accent}40` }}>
                        <span className="text-2xl font-black"
                          style={{ backgroundImage: `linear-gradient(135deg, ${accent}, ${accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-gray-500 font-light text-xs leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── RESULTS + CTA ── */}
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-3 block">
                  Proven Performance
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                  Results That Matter
                </h2>
                <p className="text-gray-700 font-light leading-relaxed mb-8">
                  At Sparkle Media, we measure success through business growth, not vanity metrics.
                  Across our managed campaigns, we&apos;ve helped brands generate:
                </p>
                <div className="space-y-4">
                  {results.map((result, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }} />
                      <p className="text-gray-650 font-light">{result}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-secondary border border-secondary text-white p-10 relative overflow-hidden shadow-xl shadow-sky-200/50"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary blur-[80px] opacity-40 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Turn Searches Into Sales?
                  </h3>
                  <p className="text-white/90 font-light leading-relaxed mb-8">
                    Partner with Sparkle Media, and let us build a performance-focused Search
                    Engine Marketing strategy designed to attract high-intent customers, increase
                    conversions, and maximize your return on investment.
                  </p>
                  <p className="text-white/80 font-light text-sm mb-6">
                    By combining data, creativity, and performance marketing expertise, we help
                    businesses transform search demand into measurable revenue growth.
                  </p>
                  <a
                    href="https://calendly.com/sparklemediacreatives/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold hover:bg-bg hover:text-navy transition-colors"
                  >
                    Chat with our CEO
                    <ArrowRight className="w-4 h-4" />
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
