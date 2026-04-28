"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TechWebDev } from "@/components/TechWebDev";
import { TechMaintenance } from "@/components/TechMaintenance";
import { TechSoftwareDev } from "@/components/TechSoftwareDev";

export default function TechLabPage() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        <div className="pt-32 pb-12 max-w-7xl mx-auto px-6 text-center">
          <p className="text-cyan-500 font-bold tracking-widest uppercase mb-4">Tech Lab</p>
          <h1 className="text-5xl md:text-7xl font-bold text-navy mb-8">Digital Products That Scale</h1>
          <h3 className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            From performant websites to full-stack software development and staff augmentation. We build robust systems for your business.
          </h3>
        </div>
        
        <TechWebDev />
        <TechMaintenance />
        <TechSoftwareDev />
      </main>
      <Footer />
    </>
  );
}
