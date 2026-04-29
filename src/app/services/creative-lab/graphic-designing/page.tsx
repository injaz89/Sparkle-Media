"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Smartphone, Mail, Layout, Palette } from "lucide-react";

const graphicTypes = [
  {
    title: "Brochures & Magazine Design",
    desc: "Capture your readers' attention and leave a lasting impression.",
    icon: BookOpen,
    color: "from-pink-500 to-rose-500",
    bg: "bg-rose-50",
  },
  {
    title: "Social Media & Digital Creatives",
    desc: "Take your advertising campaigns to the next level with some eye-catching designs that will get your message noticed.",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Email and Powerpoint Designs",
    desc: "Create email and powerpoint templates that are both visually appealing and effective in communicating your message.",
    icon: Mail,
    color: "from-amber-500 to-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Billboards and Banners",
    desc: "If you're looking for a way to get more attention for your enterprise, business banners and billboards are two of the best.",
    icon: Layout,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-teal-50",
  },
];

export default function GraphicDesigningPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-24 h-24 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-[2rem] rotate-3 flex items-center justify-center text-white mb-8 shadow-2xl shadow-cyan-500/30"
            >
              <Palette className="w-12 h-12 -rotate-3" />
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
              Graphic Designing
            </motion.h1>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Give your brand life with creativity!
            </motion.h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 mb-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-gradient-to-r from-cyan-50 via-purple-50 to-pink-50 rounded-none blur-[100px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 border border-gray-100 shadow-2xl shadow-purple-900/5 relative z-10 space-y-8 text-lg font-light text-gray-600 leading-loose"
          >
            <p>
              Sparkle Media&apos;s graphic design incorporates the latest trends and best practices into a work of art. Our graphic designers are well-trained to deliver creative solutions that not only make your brand stand out but also ensure your brand reaches out to a broad audience through effective branding. 
            </p>
            <p>
              Our team of experienced designers will help you create a fresh, convincing, and memorable brand identity to establish a great impression on prospective clients while remaining at the forefront of technology.
            </p>
            <p className="border-l-4 border-cyan-400 pl-6 text-gray-800 font-medium">
              Whether you&apos;re looking for a new logo or business cards, leaflets and posters, we&apos;ve got you covered with many more stunning visuals for your business. We assure you a range of design excellence and best-in-class communication skills that can help you to implement your business ideas successfully on the digital platform.
            </p>
          </motion.div>
        </div>

        {/* Types/Creativity Section */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">
              Choose the type of creativity <br className="hidden md:block"/> your brand really needs!
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {graphicTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${type.bg} border border-white p-10 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${type.color} rounded-none blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:-rotate-12 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-3xl font-black text-navy mb-4 relative z-10">{type.title}</h3>
                  <p className="text-xl text-gray-600 font-light leading-relaxed relative z-10">
                    {type.desc}
                  </p>
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
