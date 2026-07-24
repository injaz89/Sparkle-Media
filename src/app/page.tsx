import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HomeStatsBanner } from "@/components/HomeStatsBanner";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { AboutBrief } from "@/components/AboutBrief";
import { OurApproach } from "@/components/OurApproach";
import { Testimonials } from "@/components/Testimonials";
import { HomeCtaBanner } from "@/components/HomeCtaBanner";
import { Footer } from "@/components/Footer";

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

        {/* ── About Brief ── */}
        <AboutBrief />

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
