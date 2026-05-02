"use client";

import { motion } from "framer-motion";
import { LinkedinIcon } from "@/components/SocialIcons";

const leaders = [
  {
    name: "Inshath Ifham",
    role: "Founder & Chairman",
    title: "CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
    link: "https://www.linkedin.com/in/mohamed-inshath",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "Milsath Ahamed",
    role: "Co-Founder",
    title: "Managing Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
    link: "https://www.linkedin.com/in/milsathahamed/",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    name: "Kawsheka Radhakrishnan",
    role: "Co-Founder",
    title: "Chief Creative Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    link: "https://www.linkedin.com/in/kawshekaradhakrishnan/",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    name: "Abdullah Buhary",
    role: "Leadership",
    title: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    link: "https://www.linkedin.com/in/abdullahbuhary/",
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    name: "Lukman Hakeem",
    role: "Leadership",
    title: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    link: "https://www.linkedin.com/in/lukman-hakeem-9024b717a/",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "Nashath Naizer",
    role: "Finance",
    title: "Head of Finance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
    link: "https://www.linkedin.com/in/nashath-naizer-1545b6142/",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    name: "Mohamed Amjed",
    role: "Strategy",
    title: "Head of Content Strategy",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    link: "https://www.linkedin.com/in/mohamed-amjed-a30b40151/",
    gradient: "from-emerald-400 to-green-500",
  },
];

export function LeadershipTeam() {
  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0A1128 1px, transparent 1px), linear-gradient(90deg, #0A1128 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-xs font-bold tracking-widest text-cyan-600 uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The People Behind the Magic
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Leadership Team
          </motion.h2>
          <motion.p
            className="text-xl text-gray-500 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Visionaries and strategists guiding Sparkle Media towards the future.
          </motion.p>
        </div>

        {/* Top row — 3 founders */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {leaders.slice(0, 3).map((leader, i) => (
            <LeaderCard key={i} leader={leader} i={i} featured />
          ))}
        </div>

        {/* Bottom row — 4 heads */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      className={`bg-white rounded-none ${featured ? "p-8" : "p-6"} border border-gray-100 shadow-xl shadow-cyan-900/5 group text-center relative overflow-hidden`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
    >
      {/* Top gradient bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${leader.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className={`relative ${featured ? "w-36 h-36" : "w-28 h-28"} mx-auto rounded-none overflow-hidden mb-6 ring-2 ring-gray-100 group-hover:ring-cyan-100 transition-all duration-300`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={leader.image}
          alt={leader.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t ${leader.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
      </div>

      <h3 className={`${featured ? "text-xl" : "text-lg"} font-bold text-navy mb-1`}>
        {leader.name}
      </h3>
      <p className={`text-transparent bg-clip-text bg-gradient-to-r ${leader.gradient} font-semibold text-xs uppercase tracking-widest mb-1`}>
        {leader.title}
      </p>
      <p className="text-gray-400 text-xs font-light mb-5">{leader.role}</p>

      <a
        href={leader.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-9 h-9 rounded-none bg-gray-50 text-gray-400 hover:bg-cyan-500 hover:text-white transition-colors"
      >
        <LinkedinIcon className="w-4 h-4" />
      </a>
    </motion.div>
  );
}
