import { InstagramIcon, FacebookIcon, LinkedinIcon, TikTokIcon } from "@/components/SocialIcons";
import { ClientLogosSlider } from "@/components/ClientLogosSlider";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Digital Lab", href: "/services/digital-lab/content-marketing" },
    { label: "Creative Lab", href: "/services/creative-lab/photography" },
    { label: "Tech Lab", href: "/services/tech-lab/web-development" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Life at Sparkle", href: "/life" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { Icon: InstagramIcon, href: "https://www.instagram.com/sparklemedia_/", label: "Instagram" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
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

      {/* Main footer — deep navy */}
      <div
        style={{
          background: "linear-gradient(160deg, #060f2e 0%, #0d1b4b 60%, #060f2e 100%)",
        }}
      >

        <div className="py-16 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              {/* Brand column */}
              <div className="md:col-span-1">
                <a href="/" aria-label="Sparkle Media Home" className="inline-block mb-5">
                  <Image
                    src="/SM_Black.png"
                    alt="Sparkle Media"
                    width={140}
                    height={48}
                    className="h-10 w-auto object-contain brightness-0 invert"
                  />
                </a>
                <p className="text-sm font-light leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Exemplary digital journeys for brands that dare to sparkle. A 360° digital marketing agency.
                </p>

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
                        <a href={link.href} className="footer-link">
                          {link.label}
                        </a>
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
