import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HomeStatsBanner } from "@/components/HomeStatsBanner";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { OurApproach } from "@/components/OurApproach";
import { Testimonials } from "@/components/Testimonials";
import { HomeCtaBanner } from "@/components/HomeCtaBanner";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sparkle Media | AI-Powered Performance Marketing Agency",
  description:
    "Sparkle Media turns ad spend into predictable ROAS with AI-driven performance marketing, SEO/AEO, social media and web development for growing Sri Lankan brands.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero — Cinematic dark, typewriter, 3D card ── */}
        <Hero />

        {/* ── Stats — Animated count-up dark strip ── */}
        <HomeStatsBanner />

        {/* ── Why Choose Us — Glassmorphism cards + comparison ── */}
        <WhyChooseUs />

        {/* ── Services — Interactive hover card grid ── */}
        <Services />

        {/* ── Our Approach ── */}
        <OurApproach />

        {/* ── Testimonials — Auto-playing carousel ── */}
        <Testimonials />

        {/* ── Final CTA — Full-screen conversion banner ── */}
        <HomeCtaBanner />
      </main>
      <Footer />
    </>
  );
}
