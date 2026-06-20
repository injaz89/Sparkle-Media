"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="py-32 relative bg-bg overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/20 rounded-none blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[600px] h-[600px] bg-secondary/20 rounded-none blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.p 
          className="text-secondary font-bold tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Us
        </motion.p>
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-navy mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          We are a digital marketing startup dedicated to helping businesses of all sizes succeed in the online world.
        </motion.h1>

        <motion.div 
          className="space-y-8 text-xl md:text-2xl text-gray-600 font-light leading-loose"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            Our team of experienced professionals has a passion for all things digital, and we are constantly staying up-to-date on the latest trends and techniques to ensure that our clients are always ahead of the curve.
          </p>
          <p>
            We offer a full range of digital, creative & tech services, from photography and branding to digital marketing and upto website & software development. Our goal is to help businesses like yours get noticed online, attract more customers, and drive growth.
          </p>
          <p>
            We believe that every business is unique, and we take the time to get to know your business and your goals before crafting a customized marketing strategy that delivers results.
          </p>
          <p>
            We look forward to the opportunity to work with you and help your business thrive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
