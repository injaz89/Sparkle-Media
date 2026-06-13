"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InfoLayout } from "@/components/InfoLayout";
import { MonitorSmartphone, Layout, BookOpen, Video } from "lucide-react";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Social Media Content",
    desc: "Creating quality social media content is like ordering a complete meal. The right text, perfect design, authentic captions, converting CTAs, and a smart hashtag strategy all need to come together in the right way. And our team of experts help you build all of that together in a way that grows your social media presence.",
    link: "/services/digital-lab/social-media",
    linkText: "Click here to talk more about social media."
  },
  {
    icon: Layout,
    title: "Website and Landing Page Content",
    desc: "Website and Landing pages play the same role in your game of digital marketing. It's where people first understand your brand, and decide whether to trust you or leave. We create website content that helps the right audience find you through strong SEO, clearly understand what you offer, and feel confident enough to take action.",
    link: "/services/tech-lab/web-development",
    linkText: "Excited to know more about website development? Click here!"
  },
  {
    icon: BookOpen,
    title: "Blogs and Articles",
    desc: "Give something for the audience if you expect them to come back to you! Provide those resourceful blogs and articles that attract them towards your website or social media pages, make them retain in the site consuming the content they have been looking for. If you want your brand to keep your audience educated and engaged — then you know what to do next. Get the perfect and well-toned blogs and articles written by the experts at Sparkle Media.",
  },
  {
    icon: Video,
    title: "Vlogs",
    desc: "Visualized content that consumes less effort of the audience has the highest interaction levels. And we create videos built around the \"3-second rule\" — your first 3 seconds of the video will be irresistible and trigger the audience to watch the entire video. From scripting and ideation to full production, our team manages the entire process to ensure your videos are not just seen, but remembered.",
    link: "/services/creative-lab/video-production",
    linkText: "Click here to know more about our Photography and Videography services."
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
        description="Content marketing is one of the trickiest areas. This is where your brand's entire marketing relies on. From social media content, website content, blogs, and search engine headlines to everything that represents your brand from voice to visuals. Everything is content, and that content needs to be top-notch if you expect people to stop, engage, and convert! Content strategists of Sparkle Media have expertise in creating content that converts and retains the audience in any platform!"
        features={features}
      />
      <Footer />
    </>
  );
}
