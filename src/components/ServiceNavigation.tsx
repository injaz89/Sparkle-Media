"use client";

import { usePathname } from "next/navigation";
import { ChevronRight, Layers, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const serviceGroups = [
  {
    label: "Digital Lab",
    services: [
      { name: "Content Marketing", href: "/services/digital-lab/content-marketing" },
      { name: "Social Media Marketing", href: "/services/digital-lab/social-media" },
      { name: "Paid Media Management", href: "/services/digital-lab/paid-media" },
      { name: "Search Engine Optimisation", href: "/services/digital-lab/seo" },
      { name: "Search Engine Marketing", href: "/services/digital-lab/sem" },
      { name: "CRM & Marketing Automation", href: "/services/digital-lab/email-marketing" },
    ],
  },
  {
    label: "Tech Lab",
    services: [
      { name: "Website Design & Development", href: "/services/tech-lab/web-development" },
      { name: "Software Development & Implementation", href: "/services/tech-lab/software-development" },
    ],
  },
];

export function FloatingServiceNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full flex flex-col items-center justify-center cursor-pointer shadow-xl text-white border border-primary/20 hover:scale-105 transition-all duration-300"
        style={{
          background: "linear-gradient(165deg, #060f2e 0%, #0d1b4b 100%)",
          boxShadow: "0 10px 30px rgba(0, 212, 255, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center"
            >
              <Layers className="w-5 h-5 text-primary" />
              <span className="text-[7px] font-mono font-bold tracking-widest mt-0.5 text-primary">SERVICES</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Popup Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="fixed bottom-24 right-6 z-[9999] w-full max-w-[340px] p-6 shadow-2xl border border-primary/20 rounded-2xl max-h-[75vh] flex flex-col"
              style={{
                background: "linear-gradient(160deg, #060f2e 0%, #0d1b4b 100%)",
              }}
            >
              <div className="flex justify-between items-center mb-4 flex-shrink-0">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#00d4ff]">
                    All Services
                  </h4>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mt-1.5" />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/5 text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-5 overflow-y-auto pr-1">
                {serviceGroups.map((group) => (
                  <div key={group.label}>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/35 mb-1.5 px-1">
                      {group.label}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {group.services.map((service) => {
                        const isActive = pathname === service.href;
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className={
                              "group relative flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 border-l-[3px] font-sans text-sm tracking-wide " +
                              (isActive
                                ? "border-primary bg-primary/10 text-primary font-semibold"
                                : "border-transparent text-white/70 hover:text-primary hover:bg-white/5")
                            }
                          >
                            <span className="relative z-10">{service.name}</span>
                            <ChevronRight
                              className={
                                "w-4 h-4 relative z-10 flex-shrink-0 transition-transform duration-300 " +
                                (isActive
                                  ? "text-primary translate-x-0.5"
                                  : "text-white/40 group-hover:text-primary group-hover:translate-x-1")
                              }
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>,
    document.body
  );
}

export function ServiceSidebar() {
  return null;
}

export function ServiceMobileNav() {
  return <FloatingServiceNav />;
}
