"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";

const brandingModes = [
  {
    num: "01",
    title: "Logo designing",
    desc: "Create a logo that tells your brand's story and creates a remarkable memory in the viewers mind.",
    accent: "#00d4ff",
  },
  {
    num: "02",
    title: "Brand Guidelines",
    desc: "Plan out your brand's look and feel from A-Z with the professionals.",
    accent: "#7c3aed",
  },
  {
    num: "03",
    title: "Letterheads",
    desc: "Maintain professionalism in all your paperworks.",
    accent: "#4db8ff",
  },
  {
    num: "04",
    title: "Business Cards",
    desc: "If you believe that the first impression is the best impression. Then you know what to do next.",
    accent: "#0099cc",
  },
  {
    num: "05",
    title: "Digital Content Strategy",
    desc: "A fully sketched and analyzed plan for your brand's tone and language for its entire market identity.",
    accent: "#7c3aed",
  },
];

export default function BrandingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-bg min-h-screen">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 mx-auto rounded-[2rem] rotate-3 flex items-center justify-center text-white mb-8"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 20px 60px rgba(0,212,255,0.4)" }}
          >
            <Fingerprint className="w-12 h-12 -rotate-3" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold tracking-widest uppercase mb-4"
          >
            Creative Lab
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-navy mb-8"
          >
            Branding
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Mark your brand in the viewers mind!
          </motion.h3>
        </div>

        {/* Intro / Story Section (Theme BG) */}
        <div className="bg-bg border-t border-primary/20 py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-none blur-[200px] opacity-60 pointer-events-none transform -translate-y-1/2" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-navy mb-12 leading-tight text-center"
            >
              Your brand tells a story.
            </motion.h2>
            
            <div className="space-y-8 text-xl font-light text-gray-600 leading-loose">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                It&apos;s not just a logo; it&apos;s a blend of visual design, spoken language, even actions, all coming together to form a coherent idea in the minds of the audience of your brand&apos;s values and personality.
              </motion.p>
              
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="border-l-4 border-secondary pl-6 text-navy font-semibold text-2xl">
                So how do you make sure your branding is telling the right story?
              </motion.p>
              
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                Whether starting from scratch or rebranding, a well-thought-out brand strategy is a cornerstone for any business wanting to make a lasting impression.
              </motion.p>
              
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                We immerse ourselves in your world to find out everything about you, what drives you and what makes you unique, as well as your market, your consumers and your competitors. It&apos;s then down to the design of your brand to communicate what you&apos;re all about. 
              </motion.p>
              
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                A great brand identity is always consistent with your core values but is flexible enough to adapt to different situations. Get this right, and you&apos;re on your way to telling a great story that people will remember.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Brand Recall Modes Section */}
        <div className="py-32 bg-bg border-t border-primary/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Which mode of brand recall <br className="hidden md:block"/> do you think your brand needs?
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto" />
            </div>

            <div className="space-y-0 divide-y" style={{ borderColor: "rgba(0,212,255,0.12)" }}>
              {brandingModes.map((mode, i) => (
                <motion.div
                  key={mode.num}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 py-8 md:py-10 px-0 overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 opacity-50 group-hover:opacity-100"
                    style={{ background: `linear-gradient(180deg, ${mode.accent}, ${mode.accent}44)` }} />
                  {/* Hover sweep */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `linear-gradient(90deg, ${mode.accent}06 0%, transparent 60%)` }} />
                  {/* Number */}
                  <div className="text-[80px] md:text-[100px] font-black leading-none flex-shrink-0 pl-4 md:pl-8"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${mode.accent}40, ${mode.accent}15)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    {mode.num}
                  </div>
                  {/* Content */}
                  <div className="relative z-10 pl-4 md:pl-0">
                    <h3 className="text-3xl font-bold text-navy mb-3">{mode.title}</h3>
                    <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">{mode.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
