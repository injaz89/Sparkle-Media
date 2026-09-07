import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Life at Sparkle Media: Our Culture",
  description:
    "Meet the people behind Sparkle Media. A 50+ person team built on creativity, collaboration and the relentless pursuit of results for our clients.",
  alternates: {
    canonical: "/about/life-at-sparkle",
  },
};

export default function Page() {
  return <PageClient />;
}
