import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientAchievements } from "@/components/ClientAchievements";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AiSearch } from "@/components/AiSearch";
import { Services } from "@/components/Services";
import { AboutBrief } from "@/components/AboutBrief";
import { OurApproach } from "@/components/OurApproach";
import { ClientLogosSlider } from "@/components/ClientLogosSlider";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientAchievements />
        <WhyChooseUs />
        <AiSearch />
        <Services />
        <AboutBrief />
        <OurApproach />
        <ClientLogosSlider title="Trusted by leading brands" />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
