"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InfoLayout } from "@/components/InfoLayout";
import { SeoCounters } from "@/components/SeoCounters";
import { Globe, Wrench, Link, MapPin, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "ON-PAGE OPTIMISATION",
    desc: "The content on your website pages must match the intent and expectations of users so Google ranks your page high. We'll create unique content and make expert optimisations to drive new traffic and clicks.",
  },
  {
    icon: Wrench,
    title: "TECHNICAL SEO",
    desc: "There are hundreds of elements that fall under a technical SEO remit from site speed to re-directs. We'll identify and fix the technical elements to give you a solid SEO foundation.",
  },
  {
    icon: Link,
    title: "MEDIA PLACEMENTS & LINKS",
    desc: "High-quality links from reputable sources will increase the trust of your brand in the eyes of Google. We'll secure authority-boosting placements to generate impressions and clicks.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce SEO",
    desc: "E-commerce SEO brings in the right leads who have a direct interest in your brand. Save time and money by targeting a specific niche effectively!",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "People often look for services around them. Even if you provide service globally you can still attract visitors by being available to them on local search results.",
  },
];

export default function SeoPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <InfoLayout
          category="Digital Lab"
          title="Search Engine Optimisation"
          subtitle="Be Found and Visible on Search Engines!"
          description="We do full-on-full SEO for your website or pick the one you like! Ranking your website right in front of your potential audience at the exact moment they look for you."
          features={features}
        />
        <SeoCounters />
      </div>
      <Footer />
    </>
  );
}
