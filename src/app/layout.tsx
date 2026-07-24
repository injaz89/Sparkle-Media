import type { Metadata, Viewport } from "next";
import { Outfit, Lora } from "next/font/google";
import "./globals.css";

// Outfit — a geometric, humanist sans-serif with beautifully thin weights.
// Perfect for headers (weight 200–300) and strong CTAs (weight 700–800).
const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
  title: "Sparkle Media | Strategy-lead websites & marketing",
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
      <body className="min-h-screen text-gray-900 flex flex-col font-sans" style={{ background: "#f0faff" }}>
        {children}
      </body>
    </html>
  );
}
