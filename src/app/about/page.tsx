import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { OurApproach } from "@/components/OurApproach";
import { AboutBrief } from "@/components/AboutBrief";
import { CaseStudies } from "@/components/CaseStudies";
import { HomeCtaBanner } from "@/components/HomeCtaBanner";

export const metadata: Metadata = {
  title: "About Us: Sri Lanka's Digital Growth Agency",
  description:
    "Meet Sparkle Media, a performance-first digital growth agency combining strategy, creative storytelling and technology to help brands compete and win online.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AboutHero />
        <OurApproach />
        <AboutBrief />
        <CaseStudies />
        <HomeCtaBanner />
      </main>
      <Footer />
    </>
  );
}

