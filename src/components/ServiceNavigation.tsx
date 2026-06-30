"use client";

import { usePathname } from "next/navigation";
import { Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const digitalLabServices = [
  { name: "Content Marketing", href: "/services/digital-lab/content-marketing" },
  { name: "Social Media Marketing", href: "/services/digital-lab/social-media" },
  { name: "Paid Media Management", href: "/services/digital-lab/paid-media" },
  { name: "Search Engine Optimisation", href: "/services/digital-lab/seo" },
  { name: "Search Engine Marketing", href: "/services/digital-lab/sem" },
  { name: "CRM & Marketing Automation", href: "/services/digital-lab/email-marketing" },
];

const techLabServices = [
  { name: "Website Design & Development", href: "/services/tech-lab/web-development" },
  { name: "Software Development & Implementation", href: "/services/tech-lab/software-development" },
  { name: "Website Optimisation", href: "/services/tech-lab/optimisation" },
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring" as const, stiffness: 260, damping: 20 } 
  }
};

export function ServiceSidebar() {
  const pathname = usePathname();
  
  const isDigitalLab = pathname.includes("/services/digital-lab");
  const isTechLab = pathname.includes("/services/tech-lab");
  
  const services = isDigitalLab ? digitalLabServices : isTechLab ? techLabServices : [];
  const categoryTitle = isDigitalLab ? "DIGITAL LAB" : isTechLab ? "TECH LAB" : "SERVICES";
  
  if (services.length === 0) return null;

  return (
    <aside className="w-full hidden lg:block sticky top-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 shadow-2xl shadow-[#060f2e]/30 border border-primary/20"
        style={{
          background: "linear-gradient(160deg, #060f2e 0%, #0d1b4b 100%)",
        }}
      >
        {/* Services list */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.18em] mb-4 text-[#00d4ff]">
            {categoryTitle} SERVICES
          </h4>
          <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mb-6" />
          
          <motion.nav 
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-2"
          >
            {services.map((service) => {
              const isActive = pathname === service.href;
              return (
                <motion.a
                  key={service.href}
                  href={service.href}
                  variants={itemVariants}
                  whileHover={{ x: 4, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  className={`group relative flex items-center justify-between p-4 transition-all duration-300 border-l-[3px] font-sans text-sm tracking-wide ${
                    isActive
                      ? "border-primary bg-primary/10 text-primary font-semibold"
                      : "border-transparent text-white/70 hover:text-primary"
                  }`}
                >
                  <span className="relative z-10">{service.name}</span>
                  <ChevronRight
                    className={`w-4 h-4 relative z-10 transition-transform duration-300 ${
                      isActive ? "text-primary translate-x-0.5" : "text-white/40 group-hover:text-primary group-hover:translate-x-1"
                    }`}
                  />
                </motion.a>
              );
            })}
          </motion.nav>
        </div>

      </motion.div>
    </aside>
  );
}

export function ServiceMobileNav() {
  const pathname = usePathname();
  
  const isDigitalLab = pathname.includes("/services/digital-lab");
  const isTechLab = pathname.includes("/services/tech-lab");
  
  const services = isDigitalLab ? digitalLabServices : isTechLab ? techLabServices : [];
  
  if (services.length === 0) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full lg:hidden my-6 z-40"
    >
      <div 
        className="relative p-4 border border-primary/20 shadow-md"
        style={{
          background: "linear-gradient(160deg, #060f2e 0%, #0d1b4b 100%)"
        }}
      >
        {/* Soft fading edges to indicate scrollability */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#060f2e] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#0d1b4b] to-transparent pointer-events-none z-10" />
        
        <div 
          className="flex gap-2 overflow-x-auto pb-2 px-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Hiding scrollbar in custom inline styles for compatibility */}
          <style dangerouslySetInnerHTML={{__html: `
            .flex.overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}} />
          
          {services.map((service) => {
            const isActive = pathname === service.href;
            return (
              <motion.a
                key={service.href}
                href={service.href}
                whileTap={{ scale: 0.95 }}
                className={`py-2.5 px-4 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-300 shrink-0 ${
                  isActive
                    ? "text-white glow-cyan"
                    : "text-white/60 bg-white/5 border border-white/10 hover:border-primary/50 hover:text-white"
                }`}
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, #00d4ff, #0099cc)"
                    : undefined
                }}
              >
                {service.name}
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
