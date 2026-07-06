"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);
import { ServiceSidebar, ServiceMobileNav } from "@/components/ServiceNavigation";

const whyMatters = [
  {
    stat: "88%",
    title: "Won't Return After a Poor Experience",
    desc: "A website that is difficult to navigate, slow to load, or not mobile-friendly can drive potential customers directly to competitors.",
  },
  {
    stat: "60%+",
    title: "of Website Visits Come from Mobile",
    desc: "Every website we build is fully responsive, ensuring a seamless experience across mobile, tablet, and desktop devices.",
  },
  {
    stat: "1 sec",
    title: "Delay Reduces Conversions",
    desc: "Studies show that even a one-second delay in page loading can reduce conversion rates. Performance optimization is built into every project.",
  },
  {
    stat: "0.05s",
    title: "First Impressions Drive Trust",
    desc: "Users form an opinion about a website within 0.05 seconds. Modern customers expect websites that are fast, secure, professional, and easy to use.",
  },
];

const services = [
  {
    title: "Corporate Website Development",
    desc: "Professional websites designed to strengthen your brand presence, showcase your services, and generate enquiries from potential customers.",
    ideal: ["Service-based businesses", "Corporate organizations", "Professional firms", "Startups and SMEs"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "E-Commerce Website Development",
    desc: "Transform visitors into customers with online stores designed for seamless shopping experiences.",
    ideal: ["Shopify Development", "WooCommerce Development", "Product Catalog Management", "Payment Gateway Integration", "Shipping Integration", "Conversion Optimization"],
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "Custom Web Development",
    desc: "Every business has unique requirements. Our development team builds tailored solutions that align with your operational workflows, customer journeys, and growth objectives.",
    ideal: ["Custom portals", "Booking systems", "Advanced business applications", "Scalable solutions"],
    color: "from-indigo-400 to-blue-500",
  },
  {
    title: "Landing Page Development",
    desc: "High-converting landing pages designed specifically for marketing campaigns, lead generation, and product promotions.",
    ideal: ["User experience focused", "Conversion optimization", "Fast loading speeds", "Mobile responsiveness", "Analytics integration"],
    color: "from-cyan-500 to-teal-400",
  },
];

const differentiators = [
  {
    title: "Strategy Before Design",
    desc: "We don't start with colors and layouts. We begin by understanding your business goals, target audience, competitors, and customer journey.",
    points: [],
  },
  {
    title: "SEO-Ready Foundation",
    desc: "Every website is developed with search engine visibility in mind.",
    points: ["SEO-friendly architecture", "Optimized page structure", "Meta data implementation", "Image optimization", "Technical SEO best practices"],
  },
  {
    title: "Performance & Speed Optimization",
    desc: "Website performance directly affects user experience and conversion rates.",
    points: ["Image optimization", "Core Web Vitals improvements", "Caching implementation", "Code optimization", "Mobile performance enhancements"],
  },
  {
    title: "Analytics & Conversion Tracking",
    desc: "Every website can be equipped with complete visibility into how users interact and where revenue comes from.",
    points: ["Google Analytics 4", "Google Tag Manager", "Meta Pixel", "TikTok Pixel", "Conversion Tracking", "E-commerce Tracking"],
  },
];

const processSteps = [
  { title: "Discovery & Strategy", desc: "Understanding your business objectives, audience, and requirements." },
  { title: "Design & UX", desc: "Creating intuitive user journeys and engaging interfaces." },
  { title: "Development & Integration", desc: "Building responsive, scalable, and secure websites." },
  { title: "Testing & Optimization", desc: "Ensuring performance, compatibility, and functionality across all devices." },
  { title: "Launch & Support", desc: "Providing ongoing assistance, maintenance, and improvements after launch." },
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
                  Tech Lab
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-4 leading-[1.05]"
                >
                  Website Design{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
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
                  className="border-l-4 border-primary pl-6 mb-8 space-y-3"
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
                <MotionLink
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors mb-8 animate-pulse"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </MotionLink>
              </div>

              {/* ── WHY YOUR WEBSITE MATTERS ── */}
              <section className="py-8 border-t border-primary/20">
                <div>
                  <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Why It Matters</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Why Your Website Matters</h2>
                  </motion.div>
                  {/* Stat accent rows — no icon boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {whyMatters.map((item, i) => {
                      const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc"];
                      const accent = accentMap[i % accentMap.length];
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.09 }}
                          className="group relative flex items-start gap-6 p-8 overflow-hidden bg-white border border-primary/10 shadow-sm"
                        >
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            style={{ background: `linear-gradient(135deg, ${accent}07 0%, transparent 60%)` }} />
                          <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: accent }} />
                          <span className="text-4xl font-black text-[#e8f7ff] group-hover:text-primary-light transition-colors duration-300" style={{ color: `${accent}40` }}>
                            {item.stat}
                          </span>
                          <div>
                            <h3 className="text-base font-bold text-navy mb-2 group-hover:text-[#0099cc] transition-colors duration-300">{item.title}</h3>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* ── SERVICES ── */}
              <section className="py-8 border-t border-primary/20">
                <div>
                  <div className="text-center mb-16">
                    <span className="text-xs font-bold text-secondary uppercase tracking-widest">Our Services</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Website Development Solutions</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {services.map((service, i) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="bg-white border border-primary/20 p-8 flex flex-col justify-between group hover:border-primary hover:shadow-lg transition-all"
                      >
                        <div>
                          <div className={`w-12 h-1 bg-gradient-to-r ${service.color} mb-6`} />
                          <h3 className="text-2xl font-bold text-navy mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all origin-left">
                            {service.title}
                          </h3>
                          <p className="text-gray-650 font-light text-sm leading-relaxed mb-6">{service.desc}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Ideal For:</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {service.ideal.map((tag, j) => (
                              <span key={j} className="text-xs font-medium px-2.5 py-1 bg-bg border border-primary/10 text-navy/70 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
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

        {/* ── DIFFERENTIATORS (Moved Outside Grid) ── */}
        <section className="py-12 border-t border-primary/20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">The Sparkle Difference</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">What Makes Us Different</h2>
            </div>
            
            <div className="space-y-6">
              {differentiators.map((item, i) => {
                const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc"];
                const accent = accentMap[i % accentMap.length];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group relative flex gap-8 py-8 sm:pl-14 border-b border-primary/10 bg-white p-6 shadow-sm"
                  >
                    <div className="hidden sm:flex absolute left-6 top-8 w-10 h-10 rounded-full items-center justify-center flex-shrink-0 border-2 transition-all duration-300 group-hover:scale-110 bg-bg"
                      style={{ borderColor: `${accent}50`, background: `radial-gradient(circle, ${accent}14, transparent)` }}>
                      <span className="text-xs font-black"
                        style={{ backgroundImage: `linear-gradient(135deg, ${accent}, ${accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1 relative overflow-hidden pl-2">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ background: `linear-gradient(90deg, ${accent}06 0%, transparent 60%)` }} />
                      <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-gray-500 font-light text-sm leading-relaxed mb-3">{item.desc}</p>
                      {item.points.length > 0 && (
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {item.points.map((pt, j) => (
                            <span key={j} className="flex items-center gap-1.5 text-xs font-light text-gray-500">
                              <span className="w-1 h-1 rounded-full" style={{ background: accent }} />{pt}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS (Moved Outside Grid) ── */}
        <section className="py-12 border-t border-primary/20 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Our Development Process</h2>
            </motion.div>
            {/* Horizontal timeline ─ no icon boxes */}
            <div className="hidden md:block relative mb-8">
              <div className="absolute top-[52px] left-[10%] right-[10%] h-px" style={{ background: "linear-gradient(90deg, #00d4ff40, #7c3aed40, #0099cc40)" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => {
                const accentMap = ["#00d4ff", "#4db8ff", "#7c3aed", "#0099cc", "#00d4ff"];
                const accent = accentMap[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col items-center text-center"
                  >
                    {/* Circle node */}
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
                    <h3 className="text-sm font-bold text-navy mb-2">{step.title}</h3>
                    <p className="text-gray-500 font-light text-xs leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── AFTER LAUNCH + CTA (Moved Outside Grid) ── */}
        <section className="py-12 border-t border-primary/20 relative overflow-hidden bg-bg">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[150px] opacity-10 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-3 block">
                  We Don&apos;t Just Forget You
                </span>
                <h2 className="text-4xl font-bold text-navy mb-6 leading-tight">
                  After Your Website Goes Live
                </h2>
                <p className="text-gray-650 font-light leading-relaxed mb-8">
                  After the website is live and thriving, we also provide ongoing assistance to
                  our clients with:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {afterLaunch.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }} />
                      <span className="text-gray-650 text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-primary/20 p-10 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Build a Website That Works as Hard as You Do
                </h3>
                <p className="text-gray-650 font-light leading-relaxed mb-4">
                  A successful website is more than an online brochure. It should attract
                  visitors, build trust, generate leads, and drive revenue.
                </p>
                <p className="text-gray-500 font-light leading-relaxed mb-8 text-sm">
                  Whether you&apos;re starting from scratch or looking to upgrade your existing
                  website, our team is ready to build a solution that delivers measurable results.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold hover:bg-primary transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
