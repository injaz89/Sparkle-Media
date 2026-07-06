"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Mail, Calendar, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("_subject", "New Contact Inquiry - Sparkle Media Website");

    try {
      const response = await fetch("https://formsubmit.co/ajax/sparklemediacreatives@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen pt-36 pb-24 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[130px] pointer-events-none opacity-60" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-secondary/5 blur-[120px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          {/* Left Column: Heading & Info Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.p 
              className="text-secondary font-bold tracking-widest uppercase mb-4 text-xs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Let&apos;s Talk
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              Kick-start an <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                exemplary
              </span>{" "}
              digital journey.
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 font-light leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Leave your details below and our team will get back to you within 24 hours to schedule a discovery call.
            </motion.p>
            
            {/* Interactive Cards */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              {/* Phone Card */}
              <a
                href="tel:+94776540689"
                className="group flex items-center gap-5 p-5 bg-white/50 backdrop-blur-md border border-primary/10 hover:border-primary hover:bg-white hover:shadow-lg transition-all duration-300 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-primary to-secondary shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Ring us now</p>
                  <p className="text-lg font-bold text-navy group-hover:text-primary transition-colors leading-tight">
                    +94 77 654 0689
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary/45 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email Card */}
              <a
                href="mailto:sparklemediacreatives@gmail.com"
                className="group flex items-center gap-5 p-5 bg-white/50 backdrop-blur-md border border-primary/10 hover:border-primary hover:bg-white hover:shadow-lg transition-all duration-300 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-primary to-secondary shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Email us</p>
                  <p className="text-base font-bold text-navy group-hover:text-primary transition-colors leading-tight truncate">
                    sparklemediacreatives@gmail.com
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary/45 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>

              {/* Calendly Card */}
              <a
                href="https://calendly.com/sparklemediacreatives/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 bg-white/50 backdrop-blur-md border border-primary/10 hover:border-primary hover:bg-white hover:shadow-lg transition-all duration-300 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-primary to-secondary shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Schedule directly</p>
                  <p className="text-lg font-bold text-navy group-hover:text-primary transition-colors leading-tight">
                    Book on Calendly
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-primary/45 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>
          </div>
 
          {/* Right Column: Premium Form Card (lg:col-span-7) */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <div className="bg-white/75 backdrop-blur-xl border border-primary/15 p-10 md:p-14 shadow-2xl relative rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-none blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-green-150">
                      <CheckCircle2 className="w-12 h-12 text-green-500 animate-pulse" />
                    </div>
                    <h4 className="text-2xl font-bold text-navy mb-3">Thank You!</h4>
                    <p className="text-gray-600 font-light max-w-sm leading-relaxed text-sm">
                      Your message has been sent successfully. We will review your request and get back to you at the email provided within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <h3 className="text-2xl font-bold text-navy mb-1">Send Us a Message</h3>
                    <p className="text-xs text-gray-400 font-medium mb-6">Fields marked with * are required.</p>

                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2.5">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required
                        disabled={status === "sending"}
                        className="w-full bg-[#f8fcfe] border border-primary/15 rounded-xl px-5 py-4 text-navy placeholder-gray-355 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium"
                        placeholder="John Doe"
                      />
                    </div>
 
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2.5">
                          Number *
                        </label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          required
                          disabled={status === "sending"}
                          className="w-full bg-[#f8fcfe] border border-primary/15 rounded-xl px-5 py-4 text-navy placeholder-gray-355 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium"
                          placeholder="+94 77 XXX XXXX"
                        />
                      </div>
 
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2.5">
                          Email *
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          required
                          disabled={status === "sending"}
                          className="w-full bg-[#f8fcfe] border border-primary/15 rounded-xl px-5 py-4 text-navy placeholder-gray-355 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2.5">
                        Tell us about your project or goals
                      </label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={4}
                        disabled={status === "sending"}
                        className="w-full bg-[#f8fcfe] border border-primary/15 rounded-xl px-5 py-4 text-navy placeholder-gray-355 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all text-sm font-medium resize-none"
                        placeholder="What are your objectives, expectations, or budget details?"
                      />
                    </div>
 
                    {status === "error" && (
                      <p className="text-xs font-semibold text-red-500 mt-2">
                        Failed to send message. Please check your network and try again.
                      </p>
                    )}

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={status === "sending"}
                        className="w-full group bg-secondary text-white px-8 py-4.5 rounded-xl text-sm font-bold flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-xl shadow-sky-900/10 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
 
        </div>
      </main>
      <Footer />
    </>
  );
}
