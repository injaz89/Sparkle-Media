import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { OurApproach } from "@/components/OurApproach";
import { MissionValues } from "@/components/MissionValues";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white min-h-screen">
        <AboutHero />
        <MissionValues />
        <OurApproach />
      </main>
      <Footer />
    </>
  );
}
