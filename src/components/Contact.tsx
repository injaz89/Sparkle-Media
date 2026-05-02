"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Facebook, Linkedin, MessageSquare } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, TikTokIcon } from "./SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0A1128] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Let’s Talk<span className="text-cyan-400">!</span>
            </h2>
            
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-lg">
              Hope you enjoyed our Website tour! Excited to give your brand in good hands and kick-start an exemplary digital journey? 
              <br /><br />
              We are equally excited as you are! Let’s sit for a quick chat!
            </p>

            <div className="space-y-8 mb-12">
              <a 
                href="tel:+94776540689" 
                className="group flex items-center gap-6 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mb-1">Ring us now</p>
                  <p className="text-xl font-semibold">+94 77 654 0689</p>
                  <p className="text-xs text-cyan-500/60 mt-1 font-medium">(Whatsapp and Local Networks)</p>
                </div>
              </a>

              <a 
                href="mailto:info@sparklemedia.lk" 
                className="group flex items-center gap-6 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mb-1">Make an appointment</p>
                  <p className="text-xl font-semibold">info@sparklemedia.lk</p>
                </div>
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mb-6">Stalk Us on Social Media</p>
              <div className="flex gap-4">
                {[
                  { icon: InstagramIcon, href: "https://www.instagram.com/sparklemedia_/", label: "Instagram" },
                  { icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=100083969542491", label: "Facebook" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/sparkle-media-pvt-ltd/", label: "LinkedIn" },
                  { icon: TikTokIcon, href: "https://www.tiktok.com/@sparklemedia_?lang=en", label: "TikTok" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -5 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
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
            <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-3xl" />
            <div className="relative bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl shadow-2xl">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Name *</label>
                  <input 
                    type="text" 
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Contact Number *</label>
                  <input 
                    type="tel" 
                    placeholder="+94 7X XXX XXXX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">E-Mail Address *</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#050A18] font-bold py-5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-3 mt-4"
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
