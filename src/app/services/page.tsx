import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Marketing & Web Development Services",
  description:
    "Explore Sparkle Media's Digital Lab and Tech Lab: SEO/AEO, performance marketing, social media, CRM, content marketing, SEM, web and software development.",
  alternates: {
    canonical: "/services",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sparklemedia.lk/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://sparklemedia.lk/services",
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <PageClient />
    </>
  );
}
