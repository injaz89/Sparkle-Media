import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Contact Us: Book a Free Strategy Call",
  description:
    "Get in touch with Sparkle Media. Book a free 30-minute strategy session or send us a message — we reply within 24 hours to kick off your growth plan.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <PageClient />;
}
