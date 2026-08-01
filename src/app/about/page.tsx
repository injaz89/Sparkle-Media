import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { OurApproach } from "@/components/OurApproach";
import { AboutBrief } from "@/components/AboutBrief";
import { CaseStudies } from "@/components/CaseStudies";
import { HomeCtaBanner } from "@/components/HomeCtaBanner";

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

