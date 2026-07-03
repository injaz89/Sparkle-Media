import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HomeStatsBanner } from "@/components/HomeStatsBanner";
import { ClientAchievements } from "@/components/ClientAchievements";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AiSearch } from "@/components/AiSearch";
import { Services } from "@/components/Services";
import { AboutBrief } from "@/components/AboutBrief";
import { OurApproach } from "@/components/OurApproach";
import { ClientLogosSlider } from "@/components/ClientLogosSlider";
import { Testimonials } from "@/components/Testimonials";
import { HomeCtaBanner } from "@/components/HomeCtaBanner";
import { Contact } from "@/components/Contact";
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

        {/* ── Client Achievements — Dark neon bento grid ── */}
        <ClientAchievements />

        {/* ── Why Choose Us — Glassmorphism cards + comparison ── */}
        <WhyChooseUs />

        {/* ── AI Search — Radar visual + flip cards ── */}
        <AiSearch />

        {/* ── Services — Interactive hover card grid ── */}
        <Services />

        {/* ── About Brief ── */}
        <AboutBrief />

        {/* ── Our Approach ── */}
        <OurApproach />

        {/* ── Client Logos Slider ── */}
        <ClientLogosSlider title="Trusted by leading brands" />

        {/* ── Testimonials — Auto-playing carousel ── */}
        <Testimonials />

        {/* ── Final CTA — Full-screen conversion banner ── */}
        <HomeCtaBanner />

        {/* ── Contact ── */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
