import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/know-us", destination: "/about", permanent: true },
      { source: "/know-us/", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      {
        source: "/services/tech-lab",
        destination: "/services/tech-lab/web-development",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sparklemedia.lk" }],
        destination: "https://sparklemedia.lk/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
