import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { OurApproach } from "@/components/OurApproach";
import { CaseStudies } from "@/components/CaseStudies";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <AboutHero />
        <OurApproach />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}

