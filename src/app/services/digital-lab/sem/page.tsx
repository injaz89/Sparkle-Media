"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Search,
  ShoppingBag,
  Image as ImageIcon,
  Video,
  Layers,
  CheckCircle2,
  TrendingUp,
  Target,
  BarChart3,
  Eye,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "68% of Online Experiences Begin with a Search Engine",
    desc: "Most customer journeys start with a search. If your business isn't visible when prospects are searching, your competitors are capturing those opportunities.",
  },
  {
    icon: Target,
    title: "Search Ads Generate High-Intent Traffic",
    desc: "Unlike traditional advertising, search advertising targets users who are actively looking for solutions, making it one of the highest-converting digital marketing channels available.",
  },
  {
    icon: BarChart3,
    title: "Measurable Return on Investment",
    desc: "Every click, enquiry, lead, purchase, and revenue event can be tracked and optimized, allowing businesses to make data-driven decisions.",
  },
  {
    icon: TrendingUp,
    title: "Faster Results Than Organic SEO",
    desc: "While SEO delivers long-term value, SEM provides immediate visibility and traffic, helping businesses generate results from day one.",
  },
  {
    icon: RefreshCw,
    title: "Remarketing Can Increase Conversion Rates",
    desc: "Most website visitors don't convert during their first visit. Strategic remarketing campaigns help bring interested users back and increase conversion opportunities.",
  },
];

const adTypes = [
  {
    icon: Search,
    title: "Google Search Ads",
    color: "from-cyan-400 to-blue-500",
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
    icon: ShoppingBag,
    title: "Google Shopping Ads",
    color: "from-blue-400 to-indigo-500",
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
    icon: ImageIcon,
    title: "Google Display Network",
    color: "from-indigo-400 to-blue-500",
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
    icon: Video,
    title: "Google Video Ads",
    color: "from-rose-400 to-pink-500",
    desc: "Video content continues to dominate digital engagement. Our video advertising strategies help brands:",
    points: [
      "Increase awareness",
      "Drive consideration",
      "Generate leads",
      "Promote products and services",
      "Improve conversion performance",
    ],
    note: "We create campaigns that capture attention and move customers closer to purchase.",
  },
  {
    icon: Layers,
    title: "Programmatic Advertising",
    color: "from-cyan-500 to-teal-400",
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
  { icon: Search, title: "Strategy & Research", desc: "Understanding your market, audience behavior, and competitive landscape." },
  { icon: Eye, title: "Tracking & Analytics", desc: "Implementing advanced conversion tracking to measure actual business outcomes." },
  { icon: Target, title: "Campaign Launch", desc: "Building campaigns aligned with clear business objectives and growth targets." },
  { icon: TrendingUp, title: "Continuous Optimization", desc: "Analyzing performance data daily to improve results and reduce acquisition costs." },
  { icon: BarChart3, title: "Transparent Reporting", desc: "Providing meaningful insights focused on revenue, leads, sales, and return on investment." },
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
      <main className="bg-white min-h-screen">

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 relative overflow-hidden bg-white">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-50 blur-[120px] pointer-events-none opacity-60" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-cyan-500 font-bold tracking-widest uppercase mb-4 text-sm"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
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
                className="border-l-4 border-cyan-400 pl-6 mb-8 space-y-3"
              >
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Over 8.5 billion searches are made on Google every day, and a significant
                  percentage of those searches come from users actively looking for products,
                  services, and solutions.
                </p>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold hover:bg-cyan-600 transition-colors"
                >
                  Chat with our CEO
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all"
                >
                  Start a Campaign
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHY INVEST IN SEM ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Why SEM</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">
                Why Invest in Search Engine Marketing?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`bg-white border border-gray-100 hover:border-cyan-200 p-8 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 group relative overflow-hidden ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3 leading-snug">{reason.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">{reason.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── AD TYPES ── */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">What We Run</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                Our Search Engine Marketing Services
              </h2>
            </motion.div>

            <div className="space-y-8">
              {adTypes.map((ad, i) => {
                const Icon = ad.icon;
                return (
                  <motion.div
                    key={ad.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white/5 border border-white/10 hover:border-cyan-400/30 p-8 md:p-10 transition-all duration-300 flex flex-col md:flex-row gap-10"
                  >
                    {/* Left: Icon + Title */}
                    <div className="md:w-1/3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${ad.color} flex items-center justify-center text-white mb-5`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{ad.title}</h3>
                      <p className="text-gray-400 font-light text-sm leading-relaxed">{ad.desc}</p>
                    </div>

                    {/* Right: Checkpoints + Note */}
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                        {ad.points.map((pt, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm font-light">{pt}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-cyan-300 font-light text-sm italic border-l-2 border-cyan-400 pl-4">
                        {ad.note}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── OUR APPROACH ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">
                Our Performance-Driven Approach
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative p-6 border border-gray-100 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="absolute top-6 right-4 text-5xl font-bold text-gray-50 select-none leading-none">
                      0{i + 1}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
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
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-3 block">
                  Proven Performance
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                  Results That Matter
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-8">
                  At Sparkle Media, we measure success through business growth, not vanity metrics.
                  Across our managed campaigns, we&apos;ve helped brands generate:
                </p>
                <div className="space-y-4">
                  {results.map((result, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 font-light">{result}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-navy p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500 blur-[80px] opacity-15 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Turn Searches Into Sales?
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-8">
                    Partner with Sparkle Media, and let us build a performance-focused Search
                    Engine Marketing strategy designed to attract high-intent customers, increase
                    conversions, and maximize your return on investment.
                  </p>
                  <p className="text-gray-400 font-light text-sm mb-6">
                    By combining data, creativity, and performance marketing expertise, we help
                    businesses transform search demand into measurable revenue growth.
                  </p>
                  <a
                    href="https://calendly.com/sparklemediacreatives/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white font-bold hover:bg-cyan-400 transition-colors"
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
