"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Mail,
  Zap,
  Users,
  RefreshCw,
  Bell,
  CheckCircle2,
  ArrowRight,
  Database,
  GitBranch,
  BarChart3,
} from "lucide-react";

const whatsappServices = [
  { icon: Zap, text: "Automated lead follow-ups" },
  { icon: RefreshCw, text: "Abandoned enquiry recovery" },
  { icon: Users, text: "Broadcast campaigns" },
  { icon: RefreshCw, text: "Customer re-engagement flows" },
  { icon: Bell, text: "Appointment reminders & confirmations" },
  { icon: MessageSquare, text: "Real-time customer communication" },
];

const emailServices = [
  "Welcome sequences",
  "Lead nurturing funnels",
  "Promotional campaigns",
  "Cart abandonment recovery",
  "Re-engagement campaigns",
  "Customer retention workflows",
];

const emailDesign = [
  { icon: Zap, text: "Behavioral triggers" },
  { icon: GitBranch, text: "Segmentation logic" },
  { icon: CheckCircle2, text: "Conversion-focused copywriting" },
  { icon: BarChart3, text: "Performance tracking" },
];

const deliverables = [
  { icon: Database, title: "CRM Setup & Integration" },
  { icon: Users, title: "Lead Management Systems" },
  { icon: MessageSquare, title: "WhatsApp API Automation Flows" },
  { icon: Mail, title: "Email Marketing Funnels" },
  { icon: GitBranch, title: "Customer Journey Mapping" },
  { icon: BarChart3, title: "Conversion Tracking & Optimization" },
];

export default function EmailMarketingPage() {
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
                Digital Lab
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-navy mb-6 leading-[1.05]"
              >
                CRM &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Marketing Automation
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl font-bold text-navy mb-6"
              >
                Turn Leads Into Customers. And Customers Into Repeat Buyers.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-cyan-400 pl-6 mb-10"
              >
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Most businesses lose revenue not because they lack leads, but because they fail
                  to follow up effectively.
                </p>
                <p className="text-lg text-navy font-semibold mt-3">
                  We build automated systems that convert interest into revenue through personalized,
                  scalable communication.
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
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* ── WHATSAPP MARKETING AUTOMATION ── */}
        <section className="py-24 bg-navy relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-15 pointer-events-none bg-emerald-400 -translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-6">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3 block">
                  Highest-Converting Channel
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  WhatsApp Marketing Automation
                </h2>
                <p className="text-gray-300 font-light leading-relaxed mb-4">
                  WhatsApp is one of the highest-converting communication channels in South Asia
                  and emerging markets. We help brands leverage it for:
                </p>
                <p className="text-gray-300 font-light leading-relaxed">
                  We design message journeys that feel{" "}
                  <span className="text-white font-semibold">personal, not spammy</span>, while
                  driving measurable conversions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {whatsappServices.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:border-emerald-400/30 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-200 text-sm font-light">{item.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── EMAIL MARKETING AUTOMATION ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-6">
                  <Mail className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase mb-3 block">
                  Highest ROI Channel
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
                  Email Marketing Automation
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-8">
                  Email is still one of the highest ROI marketing channels when well executed.
                  We build complete lifecycle email systems including:
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {emailServices.map((service, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-600 text-sm font-light">{service}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm font-bold text-navy uppercase tracking-widest mb-4">
                  Every email is designed with:
                </p>
                <div className="space-y-3">
                  {emailDesign.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100">
                        <Icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-navy font-semibold text-sm">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right: visual accent */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-navy p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500 blur-[80px] opacity-15 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-6">
                    Why Email Automation Changes Everything
                  </h3>
                  <div className="space-y-4 text-gray-300 font-light leading-relaxed">
                    <p>
                      Manual follow-ups don&apos;t scale. Your sales team shouldn&apos;t be spending
                      hours chasing cold leads when a well-timed automated email can do it better —
                      at any hour, for any volume.
                    </p>
                    <p>
                      With behavioral triggers and segmentation, your audience receives the{" "}
                      <span className="text-white font-semibold">right message at the right moment</span> — 
                      dramatically improving open rates, click rates, and conversions.
                    </p>
                    <p>
                      From the moment someone shows interest to the point they become a loyal
                      customer, we build email systems that guide them through every stage of
                      the journey automatically.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD FOR YOU ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold tracking-widest text-cyan-500 uppercase mb-3 block">
                Full Service
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-navy">What We Build for You</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group bg-white border border-gray-100 hover:border-cyan-200 p-8 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 flex items-center justify-center text-cyan-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-16 bg-navy p-12 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 blur-[100px] opacity-15 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-4">
                  Ready to Automate Your Growth?
                </h3>
                <p className="text-gray-300 font-light max-w-xl mx-auto mb-8 leading-relaxed">
                  Let&apos;s build a system that nurtures leads, recovers lost revenue, and keeps
                  customers coming back — automatically.
                </p>
                <a
                  href="https://calendly.com/sparklemediacreatives/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-cyan-500 text-white font-bold hover:bg-cyan-400 transition-colors"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
