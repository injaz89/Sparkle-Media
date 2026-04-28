import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialPricing } from "@/components/SocialPricing";

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <p className="text-cyan-500 font-bold tracking-widest uppercase mb-4">Digital Lab</p>
          <h1 className="text-5xl md:text-7xl font-bold text-navy mb-8">Social Media Marketing</h1>
          <h3 className="text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            We help you choose the right platforms and target the right audience on Social Media!
            Unleash your brand with Social Media Marketing.
          </h3>
        </div>
        <SocialPricing />
      </main>
      <Footer />
    </>
  );
}
