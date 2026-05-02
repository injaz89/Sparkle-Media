import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { ClientLogosSlider } from "@/components/ClientLogosSlider";
import { Testimonials } from "@/components/Testimonials";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Services />
        <ClientLogosSlider title="Trusted by leading brands" />
        <Testimonials />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
