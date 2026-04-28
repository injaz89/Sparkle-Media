"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InfoLayout } from "@/components/InfoLayout";
import { MonitorSmartphone, Edit3, Video, PenTool } from "lucide-react";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Social Media Content",
    desc: "Creating quality social media content is like ordering a complete meal. The right text, perfect design, top notch captions with converting CTAs and well planned hashtag strategy.",
  },
  {
    icon: Edit3,
    title: "Website & Landing Pages",
    desc: "Create web content that helps your audience easily find you with high quality SEO, then understand and engage with your brand in depth.",
  },
  {
    icon: PenTool,
    title: "Blogs and Articles",
    desc: "Provide resourceful blogs and articles that attract your audience, educate them, and make them retain on your site consuming the content they seek.",
  },
  {
    icon: Video,
    title: "Vlogs",
    desc: "We create videos with the 3 second challenge, mapping the visual storytelling perfectly to keep your audience watching and interacting.",
  },
];

export default function ContentMarketingPage() {
  return (
    <>
      <Navbar />
      <InfoLayout
        category="Digital Lab"
        title="Content Marketing"
        subtitle="Create content that advertises your brand with a story!"
        description="Content marketing is one of the trickiest areas. This is where your brand's entire marketing relies on. From social media contents, website contents, blogs, search engine headlines to everything that represents your brand from voice to visual. Everything is content and that content needs to be top notch if you expect people to stop, engage and convert!"
        features={features}
      />
      <Footer />
    </>
  );
}
