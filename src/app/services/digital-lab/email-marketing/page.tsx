import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import PageClient from "./PageClient";

const PATH = "/services/digital-lab/email-marketing";

export const metadata: Metadata = {
  title: "CRM & Marketing Automation Services",
  description:
    "Turn leads into customers and customers into repeat buyers with WhatsApp marketing automation and email marketing automation built for South Asia.",
  alternates: {
    canonical: PATH,
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CRM & Marketing Automation",
  name: "CRM & Marketing Automation",
  description:
    "WhatsApp marketing automation and email marketing automation for lead nurturing and repeat purchases.",
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
    { "@type": "ListItem", position: 3, name: "CRM & Marketing Automation", item: `https://sparklemedia.lk${PATH}` },
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
