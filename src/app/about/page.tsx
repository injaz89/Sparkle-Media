import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { OurApproach } from "@/components/OurApproach";
import { MissionValues } from "@/components/MissionValues";
import { LeadershipTeam } from "@/components/LeadershipTeam";
import { ClientLogosSlider } from "@/components/ClientLogosSlider";
import { CaseStudies } from "@/components/CaseStudies";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-bg min-h-screen">
        <AboutHero />
        <MissionValues />
        <OurApproach />
        <LeadershipTeam />
        <ClientLogosSlider title="Brands we've partnered with" />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
