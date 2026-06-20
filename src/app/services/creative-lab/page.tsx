"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CreativePhotography } from "@/components/CreativePhotography";
import { CreativeVideo } from "@/components/CreativeVideo";
import { CreativeGraphics } from "@/components/CreativeGraphics";
import { CreativeBranding } from "@/components/CreativeBranding";

export default function CreativeLabPage() {
  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">
        <div className="pt-32 pb-12 max-w-7xl mx-auto px-6 text-center">
          <p className="text-secondary font-bold tracking-widest uppercase mb-4">Creative Lab</p>
          <h1 className="text-5xl md:text-7xl font-bold text-navy mb-8">Where Ideas Take Shape</h1>
          <h3 className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl mx-auto">
            From high-end commercial photography to compelling brand design, our creative lab is built to elevate your aesthetic.
          </h3>
        </div>
        
        <CreativePhotography />
        <CreativeVideo />
        <CreativeGraphics />
        <CreativeBranding />
      </main>
      <Footer />
    </>
  );
}
