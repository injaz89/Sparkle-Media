import { InstagramIcon, FacebookIcon, LinkedinIcon, TikTokIcon } from "@/components/SocialIcons";
import { ClientLogosSlider } from "@/components/ClientLogosSlider";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Digital Lab", href: "/services/digital-lab/content-marketing" },
    { label: "Tech Lab", href: "/services/tech-lab/web-development" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Life at Sparkle", href: "/life" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
};

const socials = [
  { Icon: InstagramIcon, href: "https://www.instagram.com/sparklemedia.lk/", label: "Instagram" },
  { Icon: FacebookIcon, href: "https://www.facebook.com/people/Sparkle-Media/100083969542491/", label: "Facebook" },
  { Icon: LinkedinIcon, href: "https://www.linkedin.com/company/sparkle-media-pvt-ltd/", label: "LinkedIn" },
  { Icon: TikTokIcon, href: "https://www.tiktok.com/@sparklemedia_?lang=en", label: "TikTok" },
];

export function Footer() {
  return (
    <footer>
      {/* Client logos slider */}
      <div style={{ background: "#f0faff" }}>
        <ClientLogosSlider title="Our Clients" dark={false} />
      </div>

      <div
        style={{
          background: "linear-gradient(160deg, #060f2e 0%, #0d1b4b 60%, #060f2e 100%)",
          borderTop: "1px solid rgba(0, 212, 255, 0.18)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow spots */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-40 select-none hidden md:block"
          style={{
            background: "radial-gradient(circle at 90% 10%, rgba(0,212,255,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none opacity-30 select-none hidden md:block"
          style={{
            background: "radial-gradient(circle at 10% 90%, rgba(124,58,237,0.06) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <div className="py-16 px-6 relative z-10">
          <div className="max-w-7xl mx-auto">

            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Brand column */}
              <div className="md:col-span-1">
                <Link href="/" aria-label="Sparkle Media Home" className="inline-block mb-5">
                  <Image
                    src="/SM_White.png"
                    alt="Sparkle Media"
                    width={175}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </Link>
                <p className="text-sm font-light leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Exemplary digital journeys for brands that dare to sparkle. A 360° digital marketing agency.
                </p>
                <a
                  href="mailto:sparklemediacreatives@gmail.com"
                  className="block text-xs font-light hover:text-[#00d4ff] transition-colors mb-6"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  sparklemediacreatives@gmail.com
                </a>

                {/* Socials — CSS hover via .footer-social class */}
                <div className="flex gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="footer-social w-9 h-9 flex items-center justify-center"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns — CSS hover via .footer-link class */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4
                    className="text-xs font-bold uppercase tracking-[0.18em] mb-6"
                    style={{ color: "rgba(0,212,255,0.65)" }}
                  >
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ── Bottom bar — STRAIGHT & properly aligned ── */}
            <div
              className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
              style={{ borderTop: "1px solid rgba(0,212,255,0.15)" }}
            >
              <p
                className="text-xs font-light text-center md:text-left"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                © {new Date().getFullYear()} Sparkle Media (Pvt) Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: "#00d4ff",
                    boxShadow: "0 0 6px #00d4ff",
                    animation: "pulseGlow 2s ease-in-out infinite",
                  }}
                />
                <p
                  className="text-xs font-light text-center md:text-right"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Engineered with precision. Built to sparkle.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
