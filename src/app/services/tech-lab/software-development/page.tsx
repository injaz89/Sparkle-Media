"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Cpu,
  Globe,
  Smartphone,
  Users,
  GitBranch,
  CheckSquare,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  Shield,
  Zap,
  Eye,
  BarChart3,
} from "lucide-react";

const whyInvest = [
  {
    icon: TrendingUp,
    title: "Businesses Are Accelerating Digital Transformation",
    desc: "Organizations investing in digital transformation initiatives significantly improve operational efficiency, customer satisfaction, and long-term competitiveness.",
  },
  {
    icon: Zap,
    title: "Manual Processes Reduce Productivity",
    desc: "Many businesses still rely on spreadsheets and disconnected systems. Custom software automates these processes, allowing teams to focus on growth-driving activities.",
  },
  {
    icon: Users,
    title: "Customer Expectations Continue to Rise",
    desc: "Modern customers expect seamless digital experiences, real-time communication, and efficient service delivery. Businesses that fail to adapt risk losing market share.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Technology Supports Business Growth",
    desc: "As your business grows, your systems should grow with you. Custom-built solutions provide flexibility and scalability that off-the-shelf software often cannot deliver.",
  },
];

const devServices = [
  {
    icon: Cpu,
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
    icon: Globe,
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
    icon: Smartphone,
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
    icon: Users,
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
    icon: GitBranch,
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
    icon: CheckSquare,
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
  { icon: Eye, title: "Discovery & Business Analysis", desc: "Understanding your business objectives, workflows, challenges, and opportunities." },
  { icon: Target, title: "Solution Architecture", desc: "Developing a strategic roadmap and technical framework tailored to your project requirements." },
  { icon: Cpu, title: "Agile Development", desc: "Delivering software in iterative stages, ensuring flexibility, transparency, and continuous improvement." },
  { icon: CheckSquare, title: "Testing & Optimization", desc: "Every feature undergoes comprehensive testing to ensure performance, security, and reliability." },
  { icon: Zap, title: "Deployment & Support", desc: "Implementation support, monitoring, maintenance, and continuous improvements for long-term success." },
];

const whySparkle = [
  { icon: Target, title: "Business-First Approach", desc: "We focus on solving business challenges, not just writing code." },
  { icon: TrendingUp, title: "Scalable Technology", desc: "Solutions designed to grow alongside your organization." },
  { icon: Users, title: "Experienced Development Team", desc: "Access to skilled developers, designers, QA specialists, and project managers." },
  { icon: BarChart3, title: "Transparent Project Delivery", desc: "Clear communication, milestone tracking, and measurable outcomes throughout every project." },
  { icon: Shield, title: "Long-Term Partnership", desc: "From strategy and development to maintenance and optimization, we support your digital transformation journey." },
];

export default function SoftwareDevelopmentPage() {
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
                Tech Lab
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-navy mb-4 leading-[1.05]"
              >
                Software Development{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
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
                className="border-l-4 border-cyan-400 pl-6 mb-8 space-y-3"
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold hover:bg-cyan-600 transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white transition-all"
                >
                  Get a Quote
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHY INVEST ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">The Case for Custom Software</span>
              <h2 className="text-4xl md:text-5xl font-black text-navy mt-3">
                Why Invest in Custom Software Development?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyInvest.map((item, i) => {
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
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
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
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Full-Spectrum Solutions</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Our Software Development Services</h2>
            </motion.div>
            <div className="space-y-6">
              {devServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-white/5 border border-white/10 hover:border-cyan-400/30 p-8 md:p-10 transition-all duration-300 flex flex-col md:flex-row gap-10"
                  >
                    <div className="md:w-1/3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 font-light text-sm leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        {service.points.map((pt, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm font-light">{pt}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-cyan-300 font-light text-sm italic border-l-2 border-cyan-400 pl-4">
                        {service.note}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-black text-navy mt-3">Our Development Process</h2>
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
                    <div className="absolute top-4 right-4 text-5xl font-black text-gray-50 select-none leading-none">
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

        {/* ── WHY SPARKLE MEDIA ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-3 block">Why Sparkle Media</span>
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
                  Why Businesses Choose Sparkle Media
                </h2>
                <div className="space-y-5">
                  {whySparkle.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-navy text-sm mb-1">{item.title}</p>
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
                className="bg-navy p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500 blur-[80px] opacity-15 pointer-events-none" />
                <div className="relative z-10">
                  <Cpu className="w-12 h-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-black text-white mb-4">
                    Build Technology That Drives Growth
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-4">
                    Technology should empower your business, not complicate it.
                  </p>
                  <p className="text-gray-300 font-light leading-relaxed mb-8">
                    Whether you&apos;re launching a new product, modernizing legacy systems, or scaling
                    operations through automation, our team is ready to help bring your vision to life.
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
