import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sparkle Media | Strategy-lead websites & marketing",
  description: "Strategy-lead websites & marketing that connect, convert, & grow. Every brand has its own identity. We make them sparkle with data-driven strategies and creative excellence.",
  keywords: "SEO, Performance Marketing, Social Media Marketing, Web Development, Photography",
};

export const viewport: Viewport = {
  themeColor: "#00B4DB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} min-h-screen scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
