import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { AboutHero } from "@/components/AboutHero";
import { MissionValues } from "@/components/MissionValues";
import { OurApproach } from "@/components/OurApproach";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <AboutHero />
        <MissionValues />
        <OurApproach />
      </main>
      <Footer />
    </>
  );
}
