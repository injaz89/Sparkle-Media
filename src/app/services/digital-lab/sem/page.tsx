"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceSidebar, ServiceMobileNav } from "@/components/ServiceNavigation";

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
      <main className="bg-bg min-h-screen relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] pointer-events-none opacity-60" />

        <div className="w-full max-w-none px-6 lg:px-12 pt-32 pb-24 relative z-10">
          
          {/* Mobile Service Navigation */}
          <ServiceMobileNav />

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-8 items-start">
            
            {/* Left Content Area (Hero + Content Sections) */}
            <div className="lg:col-span-3 space-y-12 max-w-[1100px] w-full">

              {/* ── HERO ── */}
              <div className="space-y-6">
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
                  <p className="text-lg text-gray-750 font-light leading-relaxed">
                    Over 8.5 billion searches are made on Google every day, and a significant
                    percentage of those searches come from users actively looking for products,
                    services, and solutions.
                  </p>
                  <p className="text-lg text-gray-750 font-light leading-relaxed">
                    At Sparkle Media, we help brands capture this demand through strategic search,
                    shopping, display, video, and programmatic advertising campaigns that focus on
                    measurable business growth.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors"
                  >
                    Chat with our CEO
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all"
                  >
                    Start a Campaign
                  </Link>
                </motion.div>
              </div>

              {/* ── WHY INVEST IN SEM ── */}
              <section className="py-8 bg-bg border-t border-primary/20">
                <div>
                  <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Why SEM</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Why Invest in Search Engine Marketing?</h2>
                  </motion.div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {reasons.map((item, i) => {
                      const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc", "#7c3aed"];
                      const accent = accentMap[i % accentMap.length];
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="group relative bg-white p-8 border border-primary/20 hover:border-primary hover:shadow-lg transition-all"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${accent}60, transparent)` }} />
                          <h3 className="text-lg font-bold text-navy mb-4 leading-tight">{item.title}</h3>
                          <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* ── SEARCH CAMPAIGN TYPES ── */}
              <section className="py-8 bg-bg border-t border-primary/20">
                <div>
                  <div className="text-center mb-16">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Campaign Types</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Search Advertising Solutions</h2>
                  </div>

                  <div className="space-y-12">
                    {adTypes.map((item, i) => {
                      const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc", "#7c3aed"];
                      const accent = accentMap[i % accentMap.length];
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="bg-white border border-primary/20 p-8 sm:p-12 relative overflow-hidden shadow-sm"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: `linear-gradient(180deg, ${accent}, transparent)` }} />
                          
                          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                            <div className="xl:col-span-1">
                              <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                              <p className="text-gray-650 font-light text-sm leading-relaxed mb-6">{item.desc}</p>
                              {item.note && (
                                <p className="text-xs text-secondary font-semibold italic border-l-2 border-secondary pl-4">{item.note}</p>
                              )}
                            </div>

                            <div className="xl:col-span-2">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Core Focus &amp; Optimisation:</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {item.points.map((pt, pIdx) => (
                                  <div key={pIdx} className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                    <span className="text-gray-700 text-sm font-light">{pt}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* ── OUR APPROACH ── */}
              <section className="py-8 bg-bg border-t border-primary/20">
                <div>
                  <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Our Method</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Our Performance-Driven Approach</h2>
                  </motion.div>
                  {/* Horizontal timeline circle nodes */}
                  <div className="hidden md:block relative mb-8">
                    <div className="absolute top-[52px] left-[10%] right-[10%] h-px" style={{ background: "linear-gradient(90deg, #00d4ff40, #7c3aed40, #0099cc40)" }} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-6">
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
              <section className="py-8 bg-bg border-t border-primary/20">
                <div>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
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
                      <p className="text-gray-750 font-light leading-relaxed mb-8">
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
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold hover:bg-bg hover:text-navy transition-colors"
                        >
                          Chat with our CEO
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

            </div>

            {/* Right Sticky Sidebar Area */}
            <div className="lg:col-span-1 lg:sticky lg:top-32">
              <ServiceSidebar />
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
