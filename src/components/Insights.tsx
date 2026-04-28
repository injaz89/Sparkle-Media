"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Best Font Pairings for Website Design in 2026",
    category: "Design",
    date: "Mar 15, 2026",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600",
    excerpt: "We pair fonts across 3,000+ interview moderators, development brand journalism...",
  },
  {
    title: "Web Design of a High-Converting Landing Page for Your Website",
    category: "Development",
    date: "Mar 10, 2026",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600",
    excerpt: "Learn how strong website design tactics and strategies enable high-converting landing pages...",
  },
  {
    title: "How to Build a Simple Digital Marketing Funnel for Your Website",
    category: "Marketing",
    date: "Mar 5, 2026",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
    excerpt: "Learn how to build a simple marketing funnel that guides visitors towards conversion...",
  },
];

export function Insights() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sparkle&apos;s Insights
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-cyan-500 mx-auto mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          />
          <motion.p 
            className="text-gray-500 font-light text-lg md:text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Latest trends and strategies in digital marketing
          </motion.p>
          <motion.a 
            href="#" 
            className="inline-block px-8 py-3 border border-navy text-navy font-medium hover:bg-navy hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            View all posts
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              className="bg-white border border-gray-100 group cursor-pointer hover:border-cyan-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-cyan-900/5 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  <span className="text-cyan-500">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-cyan-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 font-light mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-navy font-medium group-hover:text-cyan-600 transition-colors mt-auto">
                  <span className="text-sm">Read article</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
