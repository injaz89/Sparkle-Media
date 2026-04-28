"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-xl font-bold tracking-widest text-navy uppercase">
            Sparkle Media
          </div>
          
          <div className="flex items-center space-x-8">
            <a
              href="/contact"
              className="hidden md:block text-sm font-semibold text-gray-800 hover:text-cyan-500 transition-colors uppercase tracking-widest"
            >
              Get in touch
            </a>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-800 hover:text-cyan-500 focus:outline-none"
              aria-label="Open Menu"
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
              className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] z-[60] bg-white shadow-2xl flex flex-col pt-24 pb-12 px-12 sm:px-20 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 text-gray-500 hover:text-cyan-500 transition-colors focus:outline-none"
              >
                <svg className="w-8 h-8 font-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col space-y-6 mt-12 w-full text-right">
                {[
                  { name: "HOME", href: "/" },
                  { name: "SOCIAL", href: "/services/social-media" },
                  { name: "DIGITAL", href: "/services/content-marketing" },
                  { name: "PRODUCTION", href: "/services/creative-lab" },
                  { name: "CREATIVE", href: "/services/creative-lab" },
                  { name: "BRANDING", href: "/services/creative-lab" },
                  { name: "INDUSTRIES", href: "#" },
                  { name: "SERVICES", href: "/services/tech-lab" },
                  { name: "ABOUT US", href: "/about" },
                ].map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl md:text-[2.75rem] font-light text-gray-400 hover:text-cyan-500 transition-colors tracking-wide uppercase"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
