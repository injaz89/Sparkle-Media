import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Careers: Join Our Team",
  description:
    "Explore careers at Sparkle Media. Join a 50+ person, people-first team with creative freedom, real growth opportunities and a culture built to sparkle.",
  alternates: {
    canonical: "/life",
  },
};

export default function Page() {
  return <PageClient />;
}
