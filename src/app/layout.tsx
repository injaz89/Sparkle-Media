import type { Metadata, Viewport } from "next";
import { Outfit, Lora } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sparkle Media",
  legalName: "Sparkle Media (Pvt) Ltd",
  url: "https://sparklemedia.lk",
  logo: "https://sparklemedia.lk/SM_Black.png",
  sameAs: [
    "https://www.instagram.com/sparklemedia.lk/",
    "https://www.facebook.com/people/Sparkle-Media/100083969542491/",
    "https://www.linkedin.com/company/sparkle-media-pvt-ltd/",
    "https://www.tiktok.com/@sparklemedia_?lang=en",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+94-77-654-0689",
      contactType: "customer service",
      email: "info@sparklemedia.lk",
      areaServed: "LK",
      availableLanguage: ["English"],
    },
  ],
};

// Outfit — a geometric, humanist sans-serif with beautifully thin weights.
// Perfect for headers (weight 200–300) and strong CTAs (weight 700–800).
const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Lora — elegant serif for italic accent in hero headline
const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sparklemedia.lk"),
  title: {
    default: "Sparkle Media | Strategy-led Websites & Marketing",
    template: "%s | Sparkle Media",
  },
  description:
    "Strategy-lead websites & marketing that connect, convert, & grow. Every brand has its own identity. We make them sparkle with data-driven strategies and creative excellence.",
  keywords:
    "SEO, Performance Marketing, Social Media Marketing, Web Development, Photography",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#39bcfc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${lora.variable} min-h-screen scroll-smooth antialiased`}
    >
      <head>
        <JsonLd data={organizationJsonLd} />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WFNCT786');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-screen text-gray-900 flex flex-col font-sans" style={{ background: "#f0faff" }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFNCT786"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
