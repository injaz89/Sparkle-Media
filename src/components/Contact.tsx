"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, TikTokIcon } from "./SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#EDF6FB] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3AADDB]/30 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, #D1EBF5 1px, transparent 1px)",
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
          <span className="inline-block text-xs font-bold tracking-widest text-[#0083B0] uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-[#0A1128] mb-4">
            Let&apos;s Talk<span style={{ color: "#3AADDB" }}>!</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-xl mx-auto">
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
                className="group flex items-center gap-5 p-5 bg-white border border-[#D1EBF5] hover:border-[#3AADDB]/50 hover:shadow-lg hover:shadow-sky-100/60 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #3AADDB, #0083B0)" }}
                >
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-0.5">Ring us now</p>
                  <p className="text-xl font-bold text-[#0A1128] group-hover:text-[#0083B0] transition-colors">+94 77 654 0689</p>
                  <p className="text-xs text-[#3AADDB] mt-0.5 font-medium">WhatsApp & Local Networks</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#D1EBF5] group-hover:text-[#3AADDB] group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="mailto:info@sparklemedia.lk"
                className="group flex items-center gap-5 p-5 bg-white border border-[#D1EBF5] hover:border-[#3AADDB]/50 hover:shadow-lg hover:shadow-sky-100/60 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #3AADDB, #0083B0)" }}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-0.5">Email us</p>
                  <p className="text-xl font-bold text-[#0A1128] group-hover:text-[#0083B0] transition-colors">info@sparklemedia.lk</p>
                  <p className="text-xs text-[#3AADDB] mt-0.5 font-medium">We reply within 24 hours</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#D1EBF5] group-hover:text-[#3AADDB] group-hover:translate-x-1 transition-all" />
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
                    className="w-12 h-12 bg-white border border-[#D1EBF5] flex items-center justify-center text-[#0083B0] hover:bg-[#3AADDB] hover:text-white hover:border-[#3AADDB] transition-all shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Calendly shortcut */}
            <div className="mt-10 p-5 bg-white border-l-[3px] border-[#3AADDB] border-t border-r border-b border-[#D1EBF5]">
              <p className="text-sm font-semibold text-[#0A1128] mb-1">Prefer scheduling a call?</p>
              <p className="text-xs text-gray-500 font-light mb-3">Book a free 30-minute strategy session on Calendly.</p>
              <a
                href="https://calendly.com/sparklemediacreatives/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0083B0] hover:text-[#3AADDB] transition-colors"
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
            <div className="bg-white border border-[#D1EBF5] p-8 md:p-10 shadow-xl shadow-sky-100/40 relative">
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, #3AADDB, #0083B0)" }}
              />

              <h3 className="text-2xl font-black text-[#0A1128] mb-2">Send Us a Message</h3>
              <p className="text-sm text-gray-400 font-light mb-8">We&apos;ll get back to you within 24 hours.</p>

              <form className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Your Name *</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full bg-[#F8FCFE] border border-[#D1EBF5] px-5 py-3.5 text-[#0A1128] placeholder-gray-300 focus:outline-none focus:border-[#3AADDB] focus:bg-white transition-all text-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Phone *</label>
                    <input
                      type="tel"
                      placeholder="+94 7X XXX XXXX"
                      className="w-full bg-[#F8FCFE] border border-[#D1EBF5] px-5 py-3.5 text-[#0A1128] placeholder-gray-300 focus:outline-none focus:border-[#3AADDB] focus:bg-white transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Email *</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="w-full bg-[#F8FCFE] border border-[#D1EBF5] px-5 py-3.5 text-[#0A1128] placeholder-gray-300 focus:outline-none focus:border-[#3AADDB] focus:bg-white transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project or goals..."
                    className="w-full bg-[#F8FCFE] border border-[#D1EBF5] px-5 py-3.5 text-[#0A1128] placeholder-gray-300 focus:outline-none focus:border-[#3AADDB] focus:bg-white transition-all resize-none text-sm"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full text-white font-bold py-4 shadow-md shadow-sky-200/60 transition-all flex items-center justify-center gap-3 text-sm mt-2"
                  style={{ background: "linear-gradient(135deg, #3AADDB, #0083B0)" }}
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
