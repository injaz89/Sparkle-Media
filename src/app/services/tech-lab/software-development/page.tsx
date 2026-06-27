"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";

const whyInvest = [
  {
    title: "Businesses Are Accelerating Digital Transformation",
    desc: "Organizations investing in digital transformation initiatives significantly improve operational efficiency, customer satisfaction, and long-term competitiveness.",
  },
  {
    title: "Manual Processes Reduce Productivity",
    desc: "Many businesses still rely on spreadsheets and disconnected systems. Custom software automates these processes, allowing teams to focus on growth-driving activities.",
  },
  {
    title: "Customer Expectations Continue to Rise",
    desc: "Modern customers expect seamless digital experiences, real-time communication, and efficient service delivery. Businesses that fail to adapt risk losing market share.",
  },
  {
    title: "Scalable Technology Supports Business Growth",
    desc: "As your business grows, your systems should grow with you. Custom-built solutions provide flexibility and scalability that off-the-shelf software often cannot deliver.",
  },
];

const devServices = [
  {
    title: "Custom Software Development",
    color: "from-cyan-400 to-blue-500",
    desc: "Every business operates differently. We develop tailor-made software solutions designed specifically around your workflows, business objectives, and operational requirements.",
    points: [
      "Automate manual processes",
      "Improve operational efficiency",
      "Centralize business data",
      "Enhance customer experiences",
      "Reduce long-term operational costs",
    ],
    note: "Whether you require a customer portal, business management system, booking platform, ERP solution, or custom application — we build software that supports your growth.",
  },
  {
    title: "Web Application Development",
    color: "from-blue-400 to-indigo-500",
    desc: "Modern businesses need digital platforms that are accessible, secure, and scalable. Our web application development services include:",
    points: [
      "Business Management Systems",
      "CRM Platforms",
      "Customer Portals",
      "Booking & Reservation Systems",
      "E-Commerce Platforms",
      "SaaS Applications",
      "Enterprise Solutions",
    ],
    note: "Built with performance, security, and scalability in mind.",
  },
  {
    title: "Mobile Application Development",
    color: "from-indigo-400 to-blue-500",
    desc: "Mobile users now account for a significant portion of digital interactions worldwide. We develop mobile applications that help businesses:",
    points: [
      "Improve customer engagement",
      "Streamline operations",
      "Increase accessibility",
      "Deliver better user experiences",
    ],
    note: "Available for both Android and iOS platforms.",
  },
  {
    title: "Dedicated Development Teams",
    color: "from-cyan-500 to-teal-400",
    desc: "Expand your technical capabilities without the challenges of recruiting and managing in-house teams. Our dedicated development teams provide:",
    points: [
      "Software Engineers",
      "Front-End Developers",
      "Back-End Developers",
      "QA Engineers",
      "UI/UX Designers",
      "Project Managers",
    ],
    note: "Allowing businesses to scale resources according to project requirements.",
  },
  {
    title: "Staff Augmentation Services",
    color: "from-blue-500 to-cyan-400",
    desc: "Need specialized technical expertise? Our staff augmentation model enables organizations to quickly integrate experienced professionals into existing teams. Ideal for:",
    points: [
      "Short-term projects",
      "Specialized development needs",
      "Product development teams",
      "Enterprise transformation initiatives",
    ],
    note: "Helping accelerate delivery while reducing recruitment costs and delays.",
  },
  {
    title: "Software Testing & Quality Assurance",
    color: "from-indigo-500 to-blue-500",
    desc: "Quality is critical to software success. Research shows that fixing software defects after launch can cost significantly more than identifying them during development. Our QA services include:",
    points: [
      "Functional Testing",
      "Performance Testing",
      "User Acceptance Testing (UAT)",
      "Security Testing",
      "Regression Testing",
      "Automation Testing",
    ],
    note: "Ensuring your software performs reliably across all environments.",
  },
];

const processSteps = [
  { title: "Discovery & Business Analysis", desc: "Understanding your business objectives, workflows, challenges, and opportunities." },
  { title: "Solution Architecture", desc: "Developing a strategic roadmap and technical framework tailored to your project requirements." },
  { title: "Agile Development", desc: "Delivering software in iterative stages, ensuring flexibility, transparency, and continuous improvement." },
  { title: "Testing & Optimization", desc: "Every feature undergoes comprehensive testing to ensure performance, security, and reliability." },
  { title: "Deployment & Support", desc: "Implementation support, monitoring, maintenance, and continuous improvements for long-term success." },
];

const whySparkle = [
  { title: "Business-First Approach", desc: "We focus on solving business challenges, not just writing code." },
  { title: "Scalable Technology", desc: "Solutions designed to grow alongside your organization." },
  { title: "Experienced Development Team", desc: "Access to skilled developers, designers, QA specialists, and project managers." },
  { title: "Transparent Project Delivery", desc: "Clear communication, milestone tracking, and measurable outcomes throughout every project." },
  { title: "Long-Term Partnership", desc: "From strategy and development to maintenance and optimization, we support your digital transformation journey." },
];

export default function SoftwareDevelopmentPage() {
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
                Tech Lab
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-4 leading-[1.05]"
              >
                Software Development{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  & Implementation
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl font-bold text-navy mb-6"
              >
                Transform Ideas into Scalable Digital Solutions
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-primary pl-6 mb-8 space-y-3"
              >
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  In today&apos;s digital economy, businesses that leverage technology effectively grow
                  faster, operate more efficiently, and create better customer experiences.
                </p>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  At Sparkle Media, we design, develop, and implement custom software solutions
                  that solve real business challenges. Our team combines technical expertise,
                  strategic thinking, and agile development methodologies to deliver software
                  solutions that align with your business goals, budget, and timeline.
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
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all bg-white"
                >
                  Get a Quote
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHY INVEST ── */}
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">The Case for Custom Software</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Why Invest in Custom Software Development?</h2>
            </motion.div>
            {/* Accent stat rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 max-w-4xl mx-auto" style={{ borderColor: "rgba(0,212,255,0.12)" }}>
              {whyInvest.map((item, i) => {
                const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc"];
                const accent = accentMap[i % accentMap.length];
                const nums = ["01", "02", "03", "04"];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09 }}
                    className="group relative flex items-start gap-6 p-8 overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `linear-gradient(135deg, ${accent}06 0%, transparent 60%)` }} />
                    <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(180deg, ${accent}, ${accent}44)` }} />
                    <div className="flex-shrink-0">
                      <p className="text-4xl font-black leading-none" style={{ backgroundImage: `linear-gradient(135deg, ${accent}, ${accent}88)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {nums[i]}
                      </p>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-navy mb-2 leading-snug">{item.title}</h3>
                      <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-24 bg-bg border-t border-primary/20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#0A1128 1px, transparent 1px), linear-gradient(90deg, #0A1128 1px, transparent 1px)",
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
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Full-Spectrum Solutions</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Our Software Development Services</h2>
            </motion.div>
            <div className="space-y-5">
              {devServices.map((service, i) => {
                const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc", "#7c3aed", "#00d4ff"];
                const accent = accentMap[i % accentMap.length];
                const nums = ["01", "02", "03", "04", "05", "06"];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="group relative bg-white p-8 md:p-10 overflow-hidden transition-all duration-300 flex flex-col md:flex-row gap-10"
                    style={{ border: "1px solid rgba(0,212,255,0.18)" }}
                    whileHover={{ borderColor: `${accent}50` }}
                  >
                    {/* Left accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${accent}60, transparent)` }} />
                    <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(180deg, ${accent}, ${accent}44)` }} />
                    <div className="md:w-1/3 pl-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-black" style={{ color: `${accent}80` }}>{nums[i]}</span>
                        <div className="h-px w-8" style={{ background: `${accent}40` }} />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                      <p className="text-gray-500 font-light text-sm leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                        {service.points.map((pt, j) => (
                          <span key={j} className="flex items-center gap-1.5 text-sm font-light text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />{pt}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm italic border-l-2 pl-4 font-light" style={{ color: accent, borderColor: `${accent}60` }}>{service.note}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">Our Development Process</h2>
            </motion.div>
            {/* Circle timeline */}
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

        {/* ── WHY SPARKLE MEDIA ── */}
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-3 block">Why Sparkle Media</span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                  Why Businesses Choose Sparkle Media
                </h2>
                <div className="space-y-4">
                  {whySparkle.map((item, i) => {
                    const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc", "#7c3aed"];
                    const accent = accentMap[i % accentMap.length];
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-4 group"
                      >
                        <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: accent }} />
                        <div>
                          <p className="font-bold text-navy text-sm mb-0.5">{item.title}</p>
                          <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border border-primary/20 p-10 relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 blur-[80px] opacity-15 pointer-events-none" />
                <div className="relative z-10">
                  <Cpu className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-2xl font-bold text-navy mb-4">
                    Build Technology That Drives Growth
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-4">
                    Technology should empower your business, not complicate it.
                  </p>
                  <p className="text-gray-600 font-light leading-relaxed mb-8">
                    Whether you&apos;re launching a new product, modernizing legacy systems, or scaling
                    operations through automation, our team is ready to help bring your vision to life.
                  </p>
                  <a
                    href="https://calendly.com/sparklemediacreatives/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold hover:bg-primary transition-colors"
                  >
                    Start Your Project
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
