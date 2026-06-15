"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Code2,
  ShoppingCart,
  Layout,
  FileCode,
  CheckCircle2,
  Target,
  Search,
  Zap,
  BarChart3,
  ArrowRight,
  Shield,
  Smartphone,
  TrendingUp,
  Eye,
} from "lucide-react";

const whyMatters = [
  {
    icon: TrendingUp,
    stat: "88%",
    title: "Won't Return After a Poor Experience",
    desc: "A website that is difficult to navigate, slow to load, or not mobile-friendly can drive potential customers directly to competitors.",
  },
  {
    icon: Smartphone,
    stat: "60%+",
    title: "of Website Visits Come from Mobile",
    desc: "Every website we build is fully responsive, ensuring a seamless experience across mobile, tablet, and desktop devices.",
  },
  {
    icon: Zap,
    stat: "1 sec",
    title: "Delay Reduces Conversions",
    desc: "Studies show that even a one-second delay in page loading can reduce conversion rates. Performance optimization is built into every project.",
  },
  {
    icon: Shield,
    stat: "0.05s",
    title: "First Impressions Drive Trust",
    desc: "Users form an opinion about a website within 0.05 seconds. Modern customers expect websites that are fast, secure, professional, and easy to use.",
  },
];

const services = [
  {
    icon: Code2,
    title: "Corporate Website Development",
    desc: "Professional websites designed to strengthen your brand presence, showcase your services, and generate enquiries from potential customers.",
    ideal: ["Service-based businesses", "Corporate organizations", "Professional firms", "Startups and SMEs"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website Development",
    desc: "Transform visitors into customers with online stores designed for seamless shopping experiences.",
    ideal: ["Shopify Development", "WooCommerce Development", "Product Catalog Management", "Payment Gateway Integration", "Shipping Integration", "Conversion Optimization"],
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: FileCode,
    title: "Custom Web Development",
    desc: "Every business has unique requirements. Our development team builds tailored solutions that align with your operational workflows, customer journeys, and growth objectives.",
    ideal: ["Custom portals", "Booking systems", "Advanced business applications", "Scalable solutions"],
    color: "from-indigo-400 to-blue-500",
  },
  {
    icon: Layout,
    title: "Landing Page Development",
    desc: "High-converting landing pages designed specifically for marketing campaigns, lead generation, and product promotions.",
    ideal: ["User experience focused", "Conversion optimization", "Fast loading speeds", "Mobile responsiveness", "Analytics integration"],
    color: "from-cyan-500 to-teal-400",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Strategy Before Design",
    desc: "We don't start with colors and layouts. We begin by understanding your business goals, target audience, competitors, and customer journey.",
    points: [],
  },
  {
    icon: Search,
    title: "SEO-Ready Foundation",
    desc: "Every website is developed with search engine visibility in mind.",
    points: ["SEO-friendly architecture", "Optimized page structure", "Meta data implementation", "Image optimization", "Technical SEO best practices"],
  },
  {
    icon: Zap,
    title: "Performance & Speed Optimization",
    desc: "Website performance directly affects user experience and conversion rates.",
    points: ["Image optimization", "Core Web Vitals improvements", "Caching implementation", "Code optimization", "Mobile performance enhancements"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Tracking",
    desc: "Every website can be equipped with complete visibility into how users interact and where revenue comes from.",
    points: ["Google Analytics 4", "Google Tag Manager", "Meta Pixel", "TikTok Pixel", "Conversion Tracking", "E-commerce Tracking"],
  },
];

const processSteps = [
  { icon: Eye, title: "Discovery & Strategy", desc: "Understanding your business objectives, audience, and requirements." },
  { icon: Layout, title: "Design & UX", desc: "Creating intuitive user journeys and engaging interfaces." },
  { icon: Code2, title: "Development & Integration", desc: "Building responsive, scalable, and secure websites." },
  { icon: Zap, title: "Testing & Optimization", desc: "Ensuring performance, compatibility, and functionality across all devices." },
  { icon: Shield, title: "Launch & Support", desc: "Providing ongoing assistance, maintenance, and improvements after launch." },
];

const afterLaunch = [
  "Website maintenance",
  "Uptime Monitoring",
  "Automated file & database backups",
  "Security audits",
  "Regular speed checks",
  "Website updates",
  "Third-party hosting management",
  "Integrations",
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">

        {/* ── HERO ── */}
        <section className="pt-32 pb-20 relative overflow-hidden bg-white">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-50 blur-[120px] pointer-events-none opacity-60" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-cyan-500 font-bold tracking-widest uppercase mb-4 text-sm"
              >
                Tech Lab
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-4 leading-[1.05]"
              >
                Website Design{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  & Development
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl font-bold text-navy mb-6"
              >
                Websites Built for Growth, Not Just Appearance
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-cyan-400 pl-6 mb-8 space-y-3"
              >
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Your website is often the first impression customers have of your business. In today&apos;s
                  digital landscape, a slow, outdated, or poorly designed website can cost you valuable
                  leads, sales, and credibility.
                </p>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Research shows that users form an opinion about a website within{" "}
                  <span className="font-semibold text-navy">0.05 seconds</span>, and over{" "}
                  <span className="font-semibold text-navy">75% of consumers</span> judge a company&apos;s
                  credibility based on its website design.
                </p>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  At Sparkle Media, we design and develop websites that combine aesthetics,
                  functionality, speed, and conversion-focused strategy to help businesses attract,
                  engage, and convert customers.
                </p>
              </motion.div>
              <motion.a
                href="https://calendly.com/sparklemediacreatives/30min"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold hover:bg-cyan-600 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* ── WHY YOUR WEBSITE MATTERS ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Why It Matters</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Why Your Website Matters</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyMatters.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-100 hover:border-cyan-200 p-8 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                      {item.stat}
                    </p>
                    <h3 className="text-base font-bold text-navy mb-3 leading-snug">{item.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── OUR SERVICES ── */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
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
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">What We Build</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Our Website Development Services</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 hover:border-cyan-400/30 p-8 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed mb-5">{service.desc}</p>
                    <div className="space-y-2">
                      {service.ideal.map((pt, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm font-light">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHAT MAKES US DIFFERENT ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Our Edge</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">What Makes Sparkle Media Different?</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-white border border-gray-100 hover:border-cyan-200 p-8 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed mb-4">{item.desc}</p>
                    {item.points.length > 0 && (
                      <div className="grid grid-cols-2 gap-2">
                        {item.points.map((pt, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-600 text-xs font-light">{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Our Development Process</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative bg-white border border-gray-100 hover:border-cyan-200 p-6 transition-all duration-300 group"
                  >
                    <div className="absolute top-4 right-4 text-5xl font-bold text-gray-50 select-none leading-none">
                      0{i + 1}
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-gray-500 font-light text-xs leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── AFTER LAUNCH + CTA ── */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 blur-[150px] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 block">
                  We Don&apos;t Just Forget You
                </span>
                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                  After Your Website Goes Live
                </h2>
                <p className="text-gray-300 font-light leading-relaxed mb-8">
                  After the website is live and thriving, we also provide ongoing assistance to
                  our clients with:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {afterLaunch.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 border border-white/10 p-10"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Build a Website That Works as Hard as You Do
                </h3>
                <p className="text-gray-300 font-light leading-relaxed mb-4">
                  A successful website is more than an online brochure. It should attract
                  visitors, build trust, generate leads, and drive revenue.
                </p>
                <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm">
                  Whether you&apos;re starting from scratch or looking to upgrade your existing
                  website, our team is ready to build a solution that delivers measurable results.
                </p>
                <a
                  href="https://calendly.com/sparklemediacreatives/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white font-bold hover:bg-cyan-400 transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
