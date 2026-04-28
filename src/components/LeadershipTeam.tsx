"use client";

import { motion } from "framer-motion";
import { LinkedinIcon } from "@/components/SocialIcons";
import Image from "next/image";

const leaders = [
  {
    name: "Inshath Ifham",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
    link: "#"
  },
  {
    name: "Milsath Ahamed",
    role: "Co-Founder & COO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
    link: "#"
  },
  {
    name: "Ayesha Rahman",
    role: "Head of Creative",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
    link: "#"
  },
  {
    name: "Tariq Zaman",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    link: "#"
  }
];

export function LeadershipTeam() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Leadership Team</h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Visionaries and strategists guiding Sparkle Media towards the future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <motion.div 
              key={i}
              className="bg-white rounded-none p-6 border border-gray-100 shadow-xl shadow-cyan-900/5 group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative w-40 h-40 mx-auto rounded-none overflow-hidden mb-6 border-4 border-gray-50 group-hover:border-cyan-100 transition-colors">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">{leader.name}</h3>
              <p className="text-cyan-600 font-medium text-sm mb-6 uppercase tracking-widest">{leader.role}</p>
              <a 
                href={leader.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-none bg-gray-50 text-gray-400 hover:bg-cyan-500 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
