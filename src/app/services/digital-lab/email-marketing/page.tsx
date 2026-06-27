"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Mail } from "lucide-react";

const whatsappServices = [
  { text: "Automated lead follow-ups" },
  { text: "Abandoned enquiry recovery" },
  { text: "Broadcast campaigns" },
  { text: "Customer re-engagement flows" },
  { text: "Appointment reminders & confirmations" },
  { text: "Real-time customer communication" },
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
  { text: "Behavioral triggers" },
  { text: "Segmentation logic" },
  { text: "Conversion-focused copywriting" },
  { text: "Performance tracking" },
];

const deliverables = [
  { title: "CRM Setup & Integration" },
  { title: "Lead Management Systems" },
  { title: "WhatsApp API Automation Flows" },
  { title: "Email Marketing Funnels" },
  { title: "Customer Journey Mapping" },
  { title: "Conversion Tracking & Optimization" },
];

export default function EmailMarketingPage() {
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
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-[1.05]"
              >
                CRM &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
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
                className="border-l-4 border-secondary pl-6 mb-10"
              >
                <p className="text-lg text-gray-750 font-light leading-relaxed">
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* ── WHATSAPP MARKETING AUTOMATION ── */}
        <section className="py-24 bg-bg border-t border-primary/20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#0A1128 1px, transparent 1px), linear-gradient(90deg, #0A1128 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-40 pointer-events-none bg-primary -translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary mb-6">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold tracking-widest text-secondary uppercase mb-3 block">
                  Highest-Converting Channel
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                  WhatsApp Marketing Automation
                </h2>
                <p className="text-gray-750 font-light leading-relaxed mb-4">
                  WhatsApp is one of the highest-converting communication channels in South Asia
                  and emerging markets. We help brands leverage it for:
                </p>
                <p className="text-gray-750 font-light leading-relaxed">
                  We design message journeys that feel{" "}
                  <span className="text-navy font-semibold">personal, not spammy</span>, while
                  driving measurable conversions.
                </p>
              </motion.div>

              {/* WhatsApp feature rows — no icon squares */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {whatsappServices.map((item, i) => {
                  const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc", "#7c3aed", "#00d4ff"];
                  const accent = accentMap[i % accentMap.length];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      className="flex items-center gap-3 p-4 bg-white transition-colors group"
                      style={{ border: "1px solid rgba(0,212,255,0.18)" }}
                    >
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: accent }} />
                      <span className="text-gray-650 text-sm font-light">{item.text}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── EMAIL MARKETING AUTOMATION ── */}
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-white border border-primary/20 flex items-center justify-center text-secondary mb-6">
                  <Mail className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold tracking-widest text-secondary uppercase mb-3 block">
                  Highest ROI Channel
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                  Email Marketing Automation
                </h2>
                <p className="text-gray-750 font-light leading-relaxed mb-8">
                  Email is still one of the highest ROI marketing channels when well executed.
                  We build complete lifecycle email systems including:
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {emailServices.map((service, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-secondary" />
                      <span className="text-gray-600 text-sm font-light">{service}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm font-bold text-navy uppercase tracking-widest mb-4">
                  Every email is designed with:
                </p>
                <div className="space-y-2">
                  {emailDesign.map((item, i) => {
                    const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc"];
                    const accent = accentMap[i % accentMap.length];
                    return (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white" style={{ border: `1px solid ${accent}25` }}>
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: accent }} />
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
                className="bg-secondary text-white p-10 border border-secondary shadow-xl shadow-sky-200/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary blur-[80px] opacity-40 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Why Email Automation Changes Everything
                  </h3>
                  <div className="space-y-4 text-white/95 font-light leading-relaxed">
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
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold tracking-widest text-secondary uppercase mb-3 block">
                Full Service
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy">What We Build for You</h2>
            </motion.div>

            {/* Bento-style numbered deliverable cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {deliverables.map((item, i) => {
                const accentMap = ["#00d4ff", "#7c3aed", "#4db8ff", "#0099cc", "#7c3aed", "#4db8ff"];
                const accent = accentMap[i % accentMap.length];
                const nums = ["01", "02", "03", "04", "05", "06"];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="group relative bg-white p-8 overflow-hidden transition-all duration-300"
                    style={{ border: "1px solid rgba(0,212,255,0.18)" }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${accent}60, transparent)` }} />
                    <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(180deg, ${accent}, ${accent}44)` }} />
                    <div className="absolute right-4 top-3 text-[60px] font-black leading-none select-none pointer-events-none"
                      style={{ backgroundImage: `linear-gradient(135deg, ${accent}18, transparent)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {nums[i]}
                    </div>
                    <div className="relative z-10 pl-2">
                      <span className="text-xs font-black mb-3 block" style={{ color: `${accent}80` }}>{nums[i]}</span>
                      <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-16 bg-white border border-primary/20 p-12 text-center relative overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-none blur-[100px] opacity-60 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-navy mb-4">
                  Ready to Automate Your Growth?
                </h3>
                <p className="text-gray-650 font-light max-w-xl mx-auto mb-8 leading-relaxed">
                  Let&apos;s build a system that nurtures leads, recovers lost revenue, and keeps
                  customers coming back — automatically.
                </p>
                <a
                  href="https://calendly.com/sparklemediacreatives/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-white font-bold hover:bg-primary transition-colors"
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
