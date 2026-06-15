"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Camera, Users, Package, Briefcase, PartyPopper, Smartphone } from "lucide-react";

const photographyTypes = [
  {
    title: "Corporate team photography",
    desc: "Ready to share your company's story with the world.",
    icon: Users,
  },
  {
    title: "Product photography",
    desc: "Clean and clear photography highlighting your products best features.",
    icon: Package,
  },
  {
    title: "Commercial photography",
    desc: "Showcase your products in the best light.",
    icon: Briefcase,
  },
  {
    title: "Event photography",
    desc: "Capture the perfect moments of any event or occasion.",
    icon: PartyPopper,
  },
  {
    title: "Social media photography",
    desc: "Capturing the highest quality photos and editing them to perfection.",
    icon: Smartphone,
  },
];

export default function PhotographyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 flex flex-col lg:flex-row gap-16 items-center relative">
          <div className="absolute top-0 -left-20 w-80 h-80 bg-cyan-50 rounded-none blur-[100px] pointer-events-none" />
          
          <div className="lg:w-1/2 relative z-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-cyan-500 font-bold tracking-widest uppercase mb-4 flex items-center gap-2"
            >
              <Camera className="w-5 h-5" /> Creative Lab
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-navy mb-8"
            >
              Photography
            </motion.h1>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-navy font-medium leading-relaxed"
            >
              Capture moments with a story!
            </motion.h3>
          </div>

          <div className="lg:w-1/2 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-10 border-l-4 border-cyan-400 bg-gray-50/50 space-y-6 text-gray-600 font-light text-lg leading-relaxed"
            >
              <p>
                If you are a brand or entrepreneur looking to work with a photographer who understands social media as well as traditional photography, Sparkle Media can help you create engaging content that leads to success.
              </p>
              <p>
                Sparkle Media&apos;s photographers work with clients at all stages of their business. From lifestyle and product photography through to branding and visualization. Our bespoke approach means that your brand will benefit from our experience, creativity and passion to deliver captivating high quality content that followers will want to engage with!
              </p>
              <p>
                Whether you want to create a controlled environment online and build your brand, or just want to share your best moments in life with the rest of the world, Sparkle Media is the place for you. We can help you with the editing process – from HDR photoshoots, to beautiful modern lifestyle shots and everyday shots that capture more than just the moment.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Gallery/Types Section */}
        <div className="bg-navy py-24 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-none blur-[150px] opacity-20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What sort of photographs <br className="hidden md:block"/> are you willing to capture?
              </h2>
              <div className="w-24 h-1 bg-cyan-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photographyTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-1 pb-10 shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative group"
                  >
                    {/* Simulated photo frame/polaroid look */}
                    <div className="w-full aspect-[4/3] bg-gray-100 mb-8 overflow-hidden relative">
                       <div className="absolute inset-0 bg-cyan-900/5 group-hover:bg-transparent transition-colors" />
                       <div className="absolute inset-0 flex items-center justify-center text-gray-300 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500">
                         <Icon className="w-20 h-20 opacity-50" />
                       </div>
                    </div>
                    <div className="px-8 text-center">
                      <h3 className="text-2xl font-bold text-navy mb-4 tracking-wide">{type.title}</h3>
                      <p className="text-gray-500 font-light leading-relaxed">
                        {type.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
