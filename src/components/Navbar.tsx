"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

              <div className="flex flex-col space-y-4 mt-8 w-full text-right">
                {[
                  { name: "HOME", href: "/" },
                  { 
                    name: "OUR SERVICES", 
                    href: "#",
                    subItems: [
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
                        name: "CREATIVE LAB",
                        href: "#",
                        subItems: [
                          { name: "Photography", href: "/services/creative-lab/photography" },
                          { name: "Video Production", href: "/services/creative-lab/video-production" },
                          { name: "Graphic Designing", href: "/services/creative-lab/graphic-designing" },
                          { name: "Branding", href: "/services/creative-lab/branding" },
                        ]
                      },
                      {
                        name: "TECH LAB",
                        href: "#",
                        subItems: [
                          { name: "Website Design & Dev", href: "/services/tech-lab/web-development" },
                          { name: "Website Optimisation", href: "/services/tech-lab/optimisation" },
                          { name: "Software Development", href: "/services/tech-lab/software-development" },
                        ]
                      },
                    ]
                  },
                  { name: "ABOUT US", href: "/about" },
                  { name: "LIFE AT SPARKLE", href: "/life" },
                ].map((item, i) => (
                  <div key={item.name} className="flex flex-col items-end">
                    {item.subItems ? (
                      <button
                        onClick={() => toggleMenu(item.name)}
                        className="text-3xl md:text-[2.25rem] font-light text-gray-400 hover:text-cyan-500 transition-colors tracking-wide uppercase flex items-center justify-end space-x-2"
                      >
                        <span className={`transition-transform duration-300 ${expandedMenus.includes(item.name) ? "rotate-90" : ""}`}>
                          ›
                        </span>
                        <span>{item.name}</span>
                      </button>
                    ) : (
                      <motion.a
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl md:text-[2.25rem] font-light text-gray-400 hover:text-cyan-500 transition-colors tracking-wide uppercase"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        {item.name}
                      </motion.a>
                    )}
                    
                    <AnimatePresence>
                      {item.subItems && expandedMenus.includes(item.name) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col space-y-3 mt-4 mb-2 overflow-hidden items-end pr-4 border-r-2 border-cyan-100"
                        >
                          {item.subItems.map((subItem) => (
                            <div key={subItem.name} className="flex flex-col items-end w-full">
                              {subItem.subItems ? (
                                <button
                                  onClick={() => toggleMenu(subItem.name)}
                                  className="text-xl md:text-2xl font-light text-gray-500 hover:text-cyan-500 transition-colors tracking-wide uppercase flex items-center justify-end space-x-2"
                                >
                                  <span className={`transition-transform duration-300 ${expandedMenus.includes(subItem.name) ? "rotate-90" : ""}`}>
                                    ›
                                  </span>
                                  <span>{subItem.name}</span>
                                </button>
                              ) : (
                                <a
                                  href={subItem.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="text-xl md:text-2xl font-light text-gray-500 hover:text-cyan-500 transition-colors uppercase tracking-wide"
                                >
                                  {subItem.name}
                                </a>
                              )}
                              
                              <AnimatePresence>
                                {subItem.subItems && expandedMenus.includes(subItem.name) && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="flex flex-col space-y-2 mt-3 mb-1 overflow-hidden items-end pr-4 border-r-2 border-cyan-50"
                                  >
                                    {subItem.subItems.map((nestedItem) => (
                                      <a
                                        key={nestedItem.name}
                                        href={nestedItem.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-lg md:text-xl font-light text-gray-400 hover:text-cyan-500 transition-colors capitalize"
                                      >
                                        {nestedItem.name}
                                      </a>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
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
