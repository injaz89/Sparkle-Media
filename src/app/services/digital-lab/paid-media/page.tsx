import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import PageClient from "./PageClient";

const PATH = "/services/digital-lab/paid-media";

export const metadata: Metadata = {
  title: "Paid Media & Performance Marketing",
  description:
    "Scale faster with ROAS-focused paid media across Meta, LinkedIn and TikTok — full-funnel campaigns built and optimised by Sparkle Media's growth team.",
  alternates: {
    canonical: PATH,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Paid Media Marketing",
  name: "Paid Media Marketing",
  description:
    "Performance-driven paid advertising across Meta, LinkedIn and TikTok, optimised for return on ad spend.",
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
    { "@type": "ListItem", position: 3, name: "Paid Media Marketing", item: `https://sparklemedia.lk${PATH}` },
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
