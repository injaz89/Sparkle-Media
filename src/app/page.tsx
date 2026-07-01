import { Navbar } from "@/components/Navbar";
import { CarouselSlides } from "@/components/CarouselSlides";
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
        <CarouselSlides />
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
