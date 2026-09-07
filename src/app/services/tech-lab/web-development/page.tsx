import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import PageClient from "./PageClient";

const PATH = "/services/tech-lab/web-development";

export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "Fast, SEO-ready websites and e-commerce stores built for growth, not just appearance — corporate sites, Shopify/WooCommerce stores and custom web apps.",
  alternates: {
    canonical: PATH,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design & Development",
  name: "Website Design & Development",
  description:
    "Corporate websites, e-commerce stores and custom web development built on an SEO-ready, high-performance foundation.",
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
    { "@type": "ListItem", position: 3, name: "Website Design & Development", item: `https://sparklemedia.lk${PATH}` },
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
