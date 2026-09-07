import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import PageClient from "./PageClient";

const PATH = "/services/digital-lab/sem";

export const metadata: Metadata = {
  title: "Search Engine Marketing (SEM) Services",
  description:
    "Reach customers when they're ready to buy with Google Search, Shopping, Display, Video and programmatic advertising managed by Sparkle Media.",
  alternates: {
    canonical: PATH,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Search Engine Marketing",
  name: "Search Engine Marketing (SEM)",
  description:
    "Google Search, Shopping, Display, Video and programmatic advertising campaigns focused on high-intent buyers.",
  provider: { "@type": "Organization", name: "Sparkle Media", url: "https://sparklemedia.lk" },
  areaServed: "LK",
  url: `https://sparklemedia.lk${PATH}`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sparklemedia.lk/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://sparklemedia.lk/services" },
    { "@type": "ListItem", position: 3, name: "Search Engine Marketing", item: `https://sparklemedia.lk${PATH}` },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <PageClient />
    </>
  );
}
