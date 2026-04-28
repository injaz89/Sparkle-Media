"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InfoLayout } from "@/components/InfoLayout";
import { MonitorSmartphone, Layout, BookOpen, Video } from "lucide-react";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Social Media Content",
    desc: "Creating quality social media content is like ordering a complete meal. The right text, perfect design, top notch captions with converting CTAs and well planned hashtag strategy has to be blended all in one. And our team of experts will help you build and develop your social media presence.",
    link: "/services/digital-lab/social-media",
    linkText: "Click here to talk more about social media."
  },
  {
    icon: Layout,
    title: "Website and Landing Page Content",
    desc: "Website and Landing pages play the same role in your game of digital marketing. Create web content that helps your audience to easily find you with high quality SEO, then understand and engage with your brand. Website or Landing Page is a place where you can monitor your consumer/audience behavior in-depth.",
    link: "/services/tech-lab",
    linkText: "Excited to know more about website development? Click here!"
  },
  {
    icon: BookOpen,
    title: "Blogs and Articles",
    desc: "Give something for the audience if you expect them to come back to you! Provide those resourceful blogs and articles that attract them towards your website or social media pages, make them retain in the site consuming the content they have been looking for. If you want your brand to keep your audience educated and engaged. Then you know what to do next. Get the perfect and well-toned blogs and articles written by the experts at Sparkle Media.",
  },
  {
    icon: Video,
    title: "Vlogs",
    desc: "Visualized content that consumes less effort of the audience has the highest interaction levels. And we create videos with the 3 second challenge, that your first 3 seconds of the video will be irresistible and trigger the audience to watch the entire video. Our team has expertise in video script creation, ideating it and doing the video production till the very end ensuring your needs are met beyond your expectations.",
    link: "/services/creative-lab",
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
        subtitle="Create content that advertise your brand with a story!"
        description="Content marketing is one of the trickiest areas. This is where your brand's entire marketing relies on. From social media contents, website contents, blog, search engine headlines to everything that represents your brand from voice to visual. Everything is content and that content needs to be top notch if you expect people to stop, engage and convert! Content Strategists of Sparkle Media have expertise in creating contents that converts and retains the audience in any platform! Let's look at the type of content we can create for you!"
        features={features}
      />
      <Footer />
    </>
  );
}
