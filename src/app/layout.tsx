import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

// Source Sans 3 is the open-source spiritual successor to Myriad Pro —
// both were designed by Paul Hunt / Adobe, with the same humanist feel.
// Available as a variable font for maximum typographic flexibility.
const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparkle Media | Strategy-lead websites & marketing",
  description:
    "Strategy-lead websites & marketing that connect, convert, & grow. Every brand has its own identity. We make them sparkle with data-driven strategies and creative excellence.",
  keywords:
    "SEO, Performance Marketing, Social Media Marketing, Web Development, Photography",
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
      className={`${sourceSans.variable} min-h-screen scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#bae7fe] text-gray-900 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
