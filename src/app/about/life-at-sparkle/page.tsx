"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CultureGallery } from "@/components/CultureGallery";
import { LeadershipTeam } from "@/components/LeadershipTeam";

export default function LifeAtSparklePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="pt-32 pb-12 max-w-7xl mx-auto px-6 text-center">
          <p className="text-cyan-500 font-bold tracking-widest uppercase mb-4">About Us</p>
          <h1 className="text-5xl md:text-7xl font-bold text-navy mb-8">Life at Sparkle Media</h1>
          <h3 className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            Meet the minds behind the magic. A culture built on creativity, collaboration, and the relentless pursuit of excellence.
          </h3>
        </div>
        
        <LeadershipTeam />
        <CultureGallery />
      </main>
      <Footer />
    </>
  );
}
