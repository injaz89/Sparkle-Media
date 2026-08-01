"use client";

import { motion } from "framer-motion";
import { LinkedinIcon } from "@/components/SocialIcons";

const leaders = [
  {
    name: "Inshath Ifham",
    role: "Founder & Chairman",
    title: "CEO",
    link: "https://www.linkedin.com/in/mohamed-inshath",
    grad: "linear-gradient(135deg, #00d4ff, #7c3aed)",
  },
  {
    name: "Milsath Ahamed",
    role: "Co-Founder",
    title: "Managing Director",
    link: "https://www.linkedin.com/in/milsathahamed/",
    grad: "linear-gradient(135deg, #7c3aed, #00d4ff)",
  },
  {
    name: "Kawsheka Radhakrishnan",
    role: "Co-Founder",
    title: "Chief Creative Officer",
    link: "https://www.linkedin.com/in/kawshekaradhakrishnan/",
    grad: "linear-gradient(135deg, #0099cc, #00d4ff)",
  },
  {
    name: "Abdullah Buhary",
    role: "Leadership",
    title: "Chief Operations Officer",
    link: "https://www.linkedin.com/in/abdullahbuhary/",
    grad: "linear-gradient(135deg, #00d4ff, #7c3aed)",
  },
  {
    name: "Lukman Hakeem",
    role: "Leadership",
    title: "Chief Financial Officer",
    link: "https://www.linkedin.com/in/lukman-hakeem-9024b717a/",
    grad: "linear-gradient(135deg, #7c3aed, #00d4ff)",
  },
  {
    name: "Nashath Naizer",
    role: "Finance",
    title: "Head of Finance",
    link: "https://www.linkedin.com/in/nashath-naizer-1545b6142/",
    grad: "linear-gradient(135deg, #0099cc, #00d4ff)",
  },
  {
    name: "Mohamed Amjed",
    role: "Strategy",
    title: "Head of Content Strategy",
    link: "https://www.linkedin.com/in/mohamed-amjed-a30b40151/",
    grad: "linear-gradient(135deg, #00d4ff, #7c3aed)",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function LeadershipTeam() {
  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden" style={{ background: "#f0faff" }}>
      <div className="absolute top-0 left-0 right-0 h-px section-line" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{ backgroundImage: "radial-gradient(circle, #87d4f8 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(0,212,255,0.06) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <motion.span
            className="inline-block text-xs font-bold tracking-[.2em] uppercase mb-5"
            style={{ color: "#00d4ff" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The People Behind the Magic
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight"
            style={{ color: "#060f2e", fontWeight: 200, letterSpacing: "-0.04em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Leadership{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Team
            </span>
          </motion.h2>
          <motion.p
            className="font-light max-w-2xl mx-auto text-lg"
            style={{ color: "#64748b" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Visionaries and strategists guiding Sparkle Media towards the future.
          </motion.p>
        </div>

        {/* Top row — 3 founders, featured */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {leaders.slice(0, 3).map((leader, i) => (
            <LeaderCard key={i} leader={leader} i={i} featured />
          ))}
        </div>

        {/* Bottom row — the rest */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {leaders.slice(3).map((leader, i) => (
            <LeaderCard key={i + 3} leader={leader} i={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LeaderCard({
  leader,
  i,
  featured = false,
}: {
  leader: (typeof leaders)[0];
  i: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      className={`group relative rounded-2xl ${featured ? "p-7" : "p-5"} text-center overflow-hidden transition-all duration-400`}
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(0,212,255,0.15)",
        boxShadow: "0 4px 20px rgba(0,153,204,0.06)",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 50px rgba(0,153,204,0.15), 0 0 0 1px rgba(0,212,255,0.3)",
        borderColor: "rgba(0,212,255,0.4)",
      }}
    >
      {/* Neon top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: leader.grad }}
      />

      {/* Initials avatar */}
      <div
        className={`relative mx-auto ${featured ? "w-24 h-24" : "w-16 h-16"} rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105`}
        style={{ background: leader.grad, boxShadow: `0 8px 24px -6px ${featured ? "rgba(0,212,255,0.4)" : "rgba(0,212,255,0.3)"}` }}
      >
        <span className={`font-black text-white ${featured ? "text-2xl" : "text-lg"} tracking-tight`}>
          {initials(leader.name)}
        </span>
      </div>

      <h3 className={`${featured ? "text-lg" : "text-sm"} font-bold mb-1`} style={{ color: "#060f2e", letterSpacing: "-0.01em" }}>
        {leader.name}
      </h3>
      <p
        className={`font-bold uppercase tracking-wider mb-1 ${featured ? "text-xs" : "text-[10px]"}`}
        style={{
          backgroundImage: leader.grad,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {leader.title}
      </p>
      <p className="font-light mb-4" style={{ color: "#94a3b8", fontSize: featured ? "12px" : "11px" }}>
        {leader.role}
      </p>

      <a
        href={leader.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${leader.name} on LinkedIn`}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:scale-110"
        style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", color: "#0099cc" }}
      >
        <LinkedinIcon className="w-3.5 h-3.5" />
      </a>
    </motion.div>
  );
}
