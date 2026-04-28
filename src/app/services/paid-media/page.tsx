"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InfoLayout } from "@/components/InfoLayout";
import { Search, Image as ImageIcon, Video, ShoppingBag, Layers } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Google Search Ads",
    desc: "We help your brand appear to the customers that intend to search for similar products or services that your business provides.",
  },
  {
    icon: ImageIcon,
    title: "Google Display Network",
    desc: "Make your brand visible across the internet precisely in places where your audience with similar interests wanders.",
  },
  {
    icon: Video,
    title: "Google Video Ads",
    desc: "A good video ad shouldn't feel like an ad. It should be an experience that viewers enjoy and triggers immediate action.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Ads",
    desc: "Whether you're a small business or an established brand, we can successfully manage a Google Shopping campaign that generates profitable returns.",
  },
  {
    icon: Layers,
    title: "Programmatic Ads",
    desc: "We help you reach leads beyond what search engines can detect, helping display your brand in places that broaden your audience footprint.",
  },
];

export default function PaidMediaPage() {
  return (
    <>
      <Navbar />
      <InfoLayout
        category="Digital Lab"
        title="Paid Media Management"
        subtitle="Lack of patience? Wanna rush results on social media? Let's boost the post and speed of growth!"
        description="Social media advertising is a smart way to grow your business and generate leads. By using a data-led approach we determine the right audiences and platforms which align with your business objectives, utilizing carousels to video ads with carefully crafted copy."
        features={features}
      />
      <Footer />
    </>
  );
}
