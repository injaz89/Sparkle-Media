import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import PageClient from "./PageClient";

const PATH = "/services/digital-lab/seo";

export const metadata: Metadata = {
  title: "SEO & AEO Services in Sri Lanka",
  description:
    "On-page, technical and local SEO plus Answer Engine Optimisation to get your brand found on Google and cited by AI search tools like ChatGPT.",
  alternates: {
    canonical: PATH,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Search Engine Optimisation",
  name: "SEO & AEO",
  description:
    "On-page optimisation, technical SEO, link building, e-commerce SEO and Local SEO to improve organic search visibility.",
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
    { "@type": "ListItem", position: 3, name: "SEO & AEO", item: `https://sparklemedia.lk${PATH}` },
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
