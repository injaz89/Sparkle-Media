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
      <div className="bg-bg">
        <ClientLogosSlider title="Our Clients" dark={false} />
      </div>

      {/* Main footer — light blue gradient */}
      <div
        style={{
          background: "linear-gradient(160deg, #39bcfc 0%, #129adc 60%, #129adc 100%)",
        }}
      >
        {/* Wave separator top */}
        <div className="overflow-hidden leading-none" style={{ marginTop: "-1px" }}>
          <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 56L60 49C120 42 240 28 360 21C480 14 600 14 720 21C840 28 960 42 1080 45.5C1200 49 1320 42 1380 38.5L1440 35V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V56Z" fill="#bae7fe"/>
          </svg>
        </div>

        <div className="py-14 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
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
                <p className="text-white/80 text-sm font-light leading-relaxed mb-6">
                  Exemplary digital journeys for brands that dare to sparkle. A 360° digital marketing agency.
                </p>
                {/* Socials */}
                <div className="flex gap-3">
                  {socials.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all duration-200 flex items-center justify-center hover:scale-110"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-white/75 text-sm font-light hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-xs font-light">
                © {new Date().getFullYear()} Sparkle Media (Pvt) Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <p className="text-white/60 text-xs font-light">Engineered with precision. Built to sparkle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
