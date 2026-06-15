"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Fingerprint, PenTool, BookMarked, FileText, IdCard, Globe } from "lucide-react";

const brandingModes = [
  {
    num: "01",
    title: "Logo designing",
    desc: "Create a logo that tells your brand's story and creates a remarkable memory in the viewers mind.",
    icon: PenTool,
  },
  {
    num: "02",
    title: "Brand Guidelines",
    desc: "Plan out your brand's look and feel from A-Z with the professionals.",
    icon: BookMarked,
  },
  {
    num: "03",
    title: "Letterheads",
    desc: "Maintain professionalism in all your paperworks.",
    icon: FileText,
  },
  {
    num: "04",
    title: "Business Cards",
    desc: "If you believe that the first impression is the best impression. Then you know what to do next.",
    icon: IdCard,
  },
  {
    num: "05",
    title: "Digital Content Strategy",
    desc: "A fully sketched and analyzed plan for your brand's tone and language for its entire market identity.",
    icon: Globe,
  },
];

export default function BrandingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-white min-h-screen">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-navy mx-auto rounded-none flex items-center justify-center text-white mb-8"
          >
            <Fingerprint className="w-12 h-12" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-500 font-bold tracking-widest uppercase mb-4"
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
            className="text-2xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Mark your brand in the viewers mind!
          </motion.h3>
        </div>

        {/* Intro / Story Section (Dark Mode) */}
        <div className="bg-navy py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-cyan-500 rounded-none blur-[200px] opacity-10 pointer-events-none transform -translate-y-1/2" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight text-center"
            >
              Your brand tells a story.
            </motion.h2>
            
            <div className="space-y-8 text-xl font-light text-cyan-50 leading-loose">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                It&apos;s not just a logo; it&apos;s a blend of visual design, spoken language, even actions, all coming together to form a coherent idea in the minds of the audience of your brand&apos;s values and personality.
              </motion.p>
              
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="border-l-4 border-cyan-400 pl-6 text-white font-medium text-2xl">
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
        <div className="py-32 max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Which mode of brand recall <br className="hidden md:block"/> do you think your brand needs?
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto" />
          </div>

          <div className="space-y-6">
            {brandingModes.map((mode, i) => {
              const Icon = mode.icon;
              return (
                <motion.div
                  key={mode.num}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 border border-gray-100 p-8 md:p-12 hover:bg-white hover:shadow-2xl hover:shadow-cyan-900/10 hover:border-cyan-200 transition-all duration-300 group flex flex-col md:flex-row items-center gap-8 md:gap-16"
                >
                  <div className="text-6xl md:text-8xl font-bold text-gray-200 group-hover:text-cyan-100 transition-colors duration-500 shrink-0">
                    {mode.num}
                  </div>
                  
                  <div className="flex items-center justify-center w-20 h-20 bg-white shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-cyan-500" />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-navy mb-4">{mode.title}</h3>
                    <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl">
                      {mode.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
