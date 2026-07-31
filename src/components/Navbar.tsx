"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MotionLink = motion(Link);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = (menuName: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(m => m !== menuName)
        : [...prev, menuName]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3"
            : "py-5"
        }`}
        style={{
          background: "#060f2e",
          borderBottom: isScrolled ? "1px solid rgba(0,212,255,0.2)" : "none",
          boxShadow: isScrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" aria-label="Sparkle Media Home">
            <Image
              src="/SM_White.png"
              alt="Sparkle Media"
              width={260}
              height={84}
              className="h-[72px] w-auto object-contain"
              priority
            />
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white uppercase tracking-[0.12em] transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                boxShadow: "0 0 20px rgba(0,212,255,0.35)",
              }}
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="focus:outline-none transition-colors hover:opacity-70"
              aria-label="Open Menu"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              <div className="flex space-x-1">
                <span className="w-1.5 h-6 bg-current transform rotate-12 transition-colors"></span>
                <span className="w-1.5 h-6 bg-current transform rotate-12 transition-colors"></span>
                <span className="w-1.5 h-6 bg-current transform rotate-12 transition-colors"></span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-[#020617]/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-[340px] sm:w-[400px] sm:max-w-none md:w-[500px] lg:w-[600px] z-[60] shadow-2xl flex flex-col pt-24 pb-10 px-7 sm:px-20 overflow-y-auto overflow-x-hidden rounded-l-[28px] sm:rounded-l-none"
              style={{
                background: "linear-gradient(160deg, #060f2e 0%, #0d1b4b 100%)",
                borderLeft: "1px solid rgba(0,212,255,0.15)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Ambient glow + dot grid, matching site design language */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.4] rounded-l-[28px] sm:rounded-l-none"
                style={{ backgroundImage: "radial-gradient(circle, rgba(0,212,255,0.15) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
              />
              <div
                className="absolute -top-10 -right-10 w-64 h-64 pointer-events-none rounded-l-[28px] sm:rounded-l-none"
                style={{ background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)" }}
              />

              <button
                onClick={() => setIsMenuOpen(false)}
                className="nav-item-dark absolute top-6 right-6 sm:top-8 sm:right-8 focus:outline-none z-10"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative flex flex-col space-y-3.5 sm:space-y-4 mt-8 w-full text-right">
                {[
                  { name: "HOME", href: "/" },
                  { 
                    name: "DIGITAL LAB", 
                    href: "#",
                    subItems: [
                      { name: "Content Marketing", href: "/services/digital-lab/content-marketing" },
                      { name: "Social Media Marketing", href: "/services/digital-lab/social-media" },
                      { name: "Paid Media Management", href: "/services/digital-lab/paid-media" },
                      { name: "Search Engine Optimisation", href: "/services/digital-lab/seo" },
                      { name: "Search Engine Marketing", href: "/services/digital-lab/sem" },
                      { name: "CRM & Marketing Automation", href: "/services/digital-lab/email-marketing" },
                    ]
                  },
                  {
                    name: "TECH LAB",
                    href: "#",
                    subItems: [
                      { name: "Website Design & Development", href: "/services/tech-lab/web-development" },
                      { name: "Software Development & Implementation", href: "/services/tech-lab/software-development" },
                    ]
                  },
                  { name: "ABOUT US", href: "/about" },
                  { name: "LIFE AT SPARKLE", href: "/life" },
                ].map((item, i) => (
                  <div key={item.name} className="flex flex-col items-end">
                    {item.subItems ? (
                      <button
                        onClick={() => toggleMenu(item.name)}
                        className="nav-item-dark text-2xl sm:text-3xl md:text-[2.25rem] tracking-wide uppercase flex items-center justify-end space-x-2"
                      >
                        <span className={`transition-transform duration-300 ${expandedMenus.includes(item.name) ? "rotate-90" : ""}`}>
                          ›
                        </span>
                        <span>{item.name}</span>
                      </button>
                    ) : (
                      <MotionLink
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="nav-item-dark text-2xl sm:text-3xl md:text-[2.25rem] tracking-wide uppercase"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        {item.name}
                      </MotionLink>
                    )}
                    
                    <AnimatePresence>
                      {item.subItems && expandedMenus.includes(item.name) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col space-y-2 mt-4 mb-2 overflow-hidden items-end pr-4 border-r-2 border-[#87d4f8]"
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-lg md:text-xl font-light text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
