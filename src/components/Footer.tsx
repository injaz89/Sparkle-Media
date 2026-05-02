import { InstagramIcon, FacebookIcon, LinkedinIcon, TikTokIcon } from "@/components/SocialIcons";
import { ClientLogosSlider } from "@/components/ClientLogosSlider";

const footerLinks = {
  Services: [
    { label: "Digital Lab", href: "/services/digital-lab/content-marketing" },
    { label: "Creative Lab", href: "/services/creative-lab/photography" },
    { label: "Tech Lab", href: "/services/tech-lab/web-development" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Life at Sparkle", href: "/life" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socials = [
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { Icon: TikTokIcon, href: "#", label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1128]">
      {/* Client logos slider in footer */}
      <ClientLogosSlider title="Our Clients" dark={true} />

      <div className="border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand column */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-black text-white tracking-tighter mb-4">
                SPARKLE<span className="text-cyan-400">MEDIA</span>
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                Exemplary digital journeys for brands that dare to sparkle. A 360° digital marketing agency.
              </p>
              {/* Socials */}
              <div className="flex gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 border border-white/10 text-gray-500 hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center justify-center"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-500 text-sm font-light hover:text-cyan-400 transition-colors"
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
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs font-light">
              © {new Date().getFullYear()} Sparkle Media (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <p className="text-gray-600 text-xs font-light">Engineered with precision. Built to sparkle.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
