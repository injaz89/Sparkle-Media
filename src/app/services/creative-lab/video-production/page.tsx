"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Film, Smartphone, Star, PlayCircle } from "lucide-react";

const videoTypes = [
  {
    title: "Full Scale Video Productions",
    desc: "Produce a memorable, professional, and share-worthy video.",
    icon: Film,
  },
  {
    title: "Mobile First Video Content for Social Media",
    desc: "To get the best yield from your content, optimize videos for mobile devices.",
    icon: Smartphone,
  },
  {
    title: "Influencer Video Content",
    desc: "Custom-made influencer video content to encourage purchasing decisions through an immediate impact.",
    icon: Star,
  },
];

export default function VideoProductionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-cyan-50 mx-auto rounded-none flex items-center justify-center text-cyan-500 mb-8"
          >
            <PlayCircle className="w-12 h-12" />
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
            Video Production
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Let&apos;s visualize your story into an irresistible video!
          </motion.h3>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/50 rounded-none blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 border border-gray-100 shadow-xl shadow-cyan-900/5 hover:border-cyan-200 transition-colors"
            >
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                Sparkle Media provides video production services for businesses and individuals looking for a creative and effective way to communicate their brands and stories. Our team of experts can work with you to develop a strategy for your video production needs. Whether it&apos;s a live event or a studio setting, we&apos;ll make sure your message is communicated as effectively as possible, with the commitment to deliver world-class creative solutions for your marketing and advertising needs.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-navy p-10 text-white shadow-xl shadow-navy/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500 rounded-none blur-[60px] opacity-30" />
              <p className="text-cyan-50 font-light text-lg leading-relaxed relative z-10">
                We help brands and organizations take their stories from &quot;words&quot; to &quot;action.&quot; From inception to completion, we bring your story to life! Sparkle Media provides a full range of modern video solutions for businesses and consumers. We will help you share your product or service with the world through a rich, visually stunning video.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Visualization Types Section */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              How do you plan on visualizing your story?
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto" />
          </div>

          <div className="flex flex-col space-y-8">
            {videoTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-100 hover:border-cyan-300 shadow-lg shadow-cyan-900/5 hover:shadow-2xl hover:shadow-cyan-900/10 p-2 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Simulated 16:9 Video Thumbnail */}
                    <div className="w-full md:w-1/3 aspect-[16/9] bg-gray-50 relative overflow-hidden flex-shrink-0">
                      <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/0 transition-colors duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-16 h-16 text-cyan-200 group-hover:text-cyan-400 group-hover:scale-125 transition-all duration-500" />
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/3 p-6 md:p-0 md:pr-10 text-center md:text-left">
                      <h3 className="text-3xl font-bold text-navy mb-4">{type.title}</h3>
                      <p className="text-xl text-gray-500 font-light leading-relaxed">
                        {type.desc}
                      </p>
                    </div>
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
