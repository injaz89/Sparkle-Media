"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, TikTokIcon } from "./SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden" style={{ background: "#f0faff" }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39bcfc]/30 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, #87d4f8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 20%, rgba(58,173,219,0.08) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
            style={{ color: "#00d4ff" }}
          >
            Get In Touch
          </span>
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
          >
            Let&apos;s Talk<span style={{ color: "#00d4ff" }}>!</span>
          </h2>
          <p className="text-xl font-light max-w-xl mx-auto" style={{ color: "#64748b" }}>
            Ready to give your brand an exemplary digital journey? Let&apos;s sit for a quick chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Contact Items */}
            <div className="space-y-6 mb-10">
              <a
                href="tel:+94776540689"
                className="contact-card group flex items-center gap-5 p-5 bg-white"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)" }}
                >
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#64748b" }}>Ring us now</p>
                  <p className="text-xl font-bold group-hover:opacity-80 transition-colors" style={{ color: "#060f2e" }}>+94 77 654 0689</p>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: "#00d4ff" }}>WhatsApp &amp; Local Networks</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#87d4f8] group-hover:text-[#39bcfc] group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="mailto:info@sparklemedia.lk"
                className="contact-card group flex items-center gap-5 p-5 bg-white"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #0099cc)" }}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-0.5">Email us</p>
                  <p className="text-xl font-bold text-[#0A1128] group-hover:text-[#129adc] transition-colors">info@sparklemedia.lk</p>
                  <p className="text-xs text-[#39bcfc] mt-0.5 font-medium">We reply within 24 hours</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#87d4f8] group-hover:text-[#39bcfc] group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-5">Follow Us on Social Media</p>
              <div className="flex gap-3">
                {[
                  { icon: InstagramIcon, href: "https://www.instagram.com/sparklemedia_/", label: "Instagram" },
                  { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=100083969542491", label: "Facebook" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/sparkle-media-pvt-ltd/", label: "LinkedIn" },
                  { icon: TikTokIcon, href: "https://www.tiktok.com/@sparklemedia_?lang=en", label: "TikTok" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -4 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border border-[#87d4f8] flex items-center justify-center text-[#129adc] hover:bg-[#39bcfc] hover:text-white hover:border-[#39bcfc] transition-all shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Calendly shortcut */}
            <div className="mt-10 p-5 bg-white border-l-[3px] border-[#39bcfc] border-t border-r border-b border-[#87d4f8]">
              <p className="text-sm font-semibold text-[#0A1128] mb-1">Prefer scheduling a call?</p>
              <p className="text-xs text-gray-500 font-light mb-3">Book a free 30-minute strategy session on Calendly.</p>
              <a
                href="https://calendly.com/sparklemediacreatives/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#129adc] hover:text-[#39bcfc] transition-colors"
              >
                Book on Calendly
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white border border-[#87d4f8] p-8 md:p-10 shadow-xl shadow-sky-100/40 relative">
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, #39bcfc, #129adc)" }}
              />

              <h3 className="text-2xl font-bold text-[#0A1128] mb-2">Send Us a Message</h3>
              <p className="text-sm text-gray-400 font-light mb-8">We&apos;ll get back to you within 24 hours.</p>

              <form className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Your Name *</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-[#F8FCFE] border border-[#87d4f8] px-5 py-3.5 text-[#0A1128] placeholder-gray-300 focus:outline-none focus:border-[#39bcfc] focus:bg-white transition-all text-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Phone *</label>
                    <input
                      type="tel"
                      placeholder="+94 7X XXX XXXX"
                      className="w-full bg-[#F8FCFE] border border-[#87d4f8] px-5 py-3.5 text-[#0A1128] placeholder-gray-300 focus:outline-none focus:border-[#39bcfc] focus:bg-white transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Email *</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full bg-[#F8FCFE] border border-[#87d4f8] px-5 py-3.5 text-[#0A1128] placeholder-gray-300 focus:outline-none focus:border-[#39bcfc] focus:bg-white transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or goals..."
                    className="w-full bg-[#F8FCFE] border border-[#87d4f8] px-5 py-3.5 text-[#0A1128] placeholder-gray-300 focus:outline-none focus:border-[#39bcfc] focus:bg-white transition-all resize-none text-sm"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full text-white font-bold py-4 shadow-md shadow-sky-200/60 transition-all flex items-center justify-center gap-3 text-sm mt-2"
                  style={{ background: "linear-gradient(135deg, #39bcfc, #129adc)" }}
                >
                  <MessageSquare className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
