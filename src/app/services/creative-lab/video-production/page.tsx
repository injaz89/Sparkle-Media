"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videoTypes = [
  {
    num: "01",
    title: "Full Scale Video Productions",
    desc: "Produce a memorable, professional, and share-worthy video that drives emotional engagement.",
    grad: "linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)",
    accent: "#00d4ff",
  },
  {
    num: "02",
    title: "Mobile First Video Content for Social Media",
    desc: "To get the best yield from your content, optimize videos for mobile devices with quick pacing and hooks.",
    grad: "linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%)",
    accent: "#7c3aed",
  },
  {
    num: "03",
    title: "Influencer Video Content",
    desc: "Custom-made influencer video content to encourage purchasing decisions through an immediate, authentic impact.",
    grad: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
    accent: "#00b4db",
  },
];

export default function VideoProductionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen relative overflow-hidden" style={{ background: "#f0faff" }}>

        {/* Background glows */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 100% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 0% 100%, rgba(124,58,237,0.06) 0%, transparent 60%)" }}
        />

        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 mx-auto rounded-[2rem] rotate-3 flex items-center justify-center text-white mb-8"
            style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", boxShadow: "0 20px 60px rgba(0,212,255,0.4)" }}
          >
            <Play className="w-12 h-12 -rotate-3 pl-1" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold tracking-[0.18em] uppercase mb-5"
            style={{ color: "#00d4ff" }}
          >
            Creative Lab
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl mb-8"
            style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
          >
            Video Production
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-light leading-relaxed max-w-3xl mx-auto"
            style={{ color: "#64748b" }}
          >
            Let&apos;s visualize your story into an irresistible video!
          </motion.h3>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 transition-all duration-300 relative overflow-hidden"
              style={{ border: "1px solid rgba(0,212,255,0.18)", boxShadow: "0 20px 60px rgba(0,212,255,0.08)" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "#00d4ff" }} />
              <p className="font-light text-lg leading-relaxed pl-2" style={{ color: "#64748b" }}>
                Sparkle Media provides video production services for businesses and individuals looking for a creative and effective way to communicate their brands and stories. Our team of experts can work with you to develop a strategy for your video production needs. Whether it&apos;s a live event or a studio setting, we&apos;ll make sure your message is communicated as effectively as possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden p-10 text-white"
              style={{ background: "linear-gradient(135deg, #060f2e 0%, #0d1b4b 100%)" }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                style={{ background: "radial-gradient(circle at 100% 0%, rgba(0,212,255,0.25) 0%, transparent 70%)" }}
              />
              <p className="font-light text-lg leading-relaxed relative z-10" style={{ color: "rgba(255,255,255,0.82)" }}>
                We help brands and organizations take their stories from &quot;words&quot; to &quot;action.&quot; From inception to completion, we bring your story to life! Sparkle Media provides a full range of modern video solutions for businesses and consumers. We will help you share your product or service with the world through a rich, visually stunning video.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Visualization Types Section */}
        <div
          className="max-w-7xl mx-auto px-6 py-24 relative z-10"
          style={{ borderTop: "1px solid rgba(0,212,255,0.15)" }}
        >
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-bold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#00d4ff" }}
            >
              Our Services
            </span>
            <h2
              className="text-5xl md:text-6xl mb-6"
              style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
            >
              How do you plan on visualizing your story?
            </h2>
          </div>

          {/* Numbered accent rows instead of thumbnail icons */}
          <div className="flex flex-col space-y-6 max-w-5xl mx-auto">
            {videoTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white transition-all duration-300 overflow-hidden"
                style={{ border: "1px solid rgba(0,212,255,0.18)" }}
                whileHover={{ borderColor: `${type.accent}50`, y: -3 }}
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: `linear-gradient(180deg, ${type.accent}60, transparent)` }} />
                <div className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(180deg, ${type.accent}, ${type.accent}44)` }} />

                <div className="flex flex-col md:flex-row items-center gap-0">
                  {/* Step indicator block */}
                  <div
                    className="w-full md:w-1/4 aspect-[16/9] md:aspect-auto md:self-stretch relative overflow-hidden flex-shrink-0 flex items-center justify-center p-8 text-center"
                    style={{ background: type.grad }}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                    />
                    <span className="text-4xl md:text-5xl font-black text-white relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {type.num}
                    </span>
                  </div>

                  <div className="w-full md:w-3/4 p-8 md:px-12 text-center md:text-left relative">
                    {/* Hover bg sweep */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: `linear-gradient(90deg, ${type.accent}05 0%, transparent 60%)` }} />
                    <h3
                      className="text-3xl mb-4 relative z-10"
                      style={{ color: "#060f2e", fontWeight: 350, letterSpacing: "-0.02em" }}
                    >
                      {type.title}
                    </h3>
                    <p className="text-lg font-light leading-relaxed relative z-10" style={{ color: "#64748b" }}>
                      {type.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
