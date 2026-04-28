"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InfoLayout } from "@/components/InfoLayout";
import { EmailPricing } from "@/components/EmailPricing";
import { Users, Calendar, CloudLightning, Activity } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Audience Segmentation",
    desc: "The best way to reach your audience is to figure out who they are. Are they looking for products, updates, or helpful information?",
  },
  {
    icon: Calendar,
    title: "Strategic Timing",
    desc: "Send emails exactly when your audience is active. We identify the best times of day or specific seasons to maximize open rates.",
  },
  {
    icon: CloudLightning,
    title: "Cross-Platform Sync",
    desc: "Deliver content consistently across platforms like Gmail, Outlook, or mobile apps synchronously without different scattered systems.",
  },
  {
    icon: Activity,
    title: "Engagement Tracking",
    desc: "Monitor what works. We provide detailed tracking and optimizations to ensure you're consistently getting the most interaction.",
  },
];

export default function EmailMarketingPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
        <InfoLayout
          category="Digital Lab"
          title="Email Marketing"
          subtitle="Keep customers engaged and interacting with your brand."
          description="Email marketing is one of the most powerful tools you have. We help you figure out how to get started smoothly, targeting specific buyer personas with beautiful content that gets massive results."
          features={features}
        />
        <EmailPricing />
      </div>
      <Footer />
    </>
  );
}
