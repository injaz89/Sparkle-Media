"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kevin Caraco",
    role: "Head of Marketing",
    company: "Select Group",
    avatar: "K",
    avatarColor: "from-cyan-400 to-blue-500",
    content:
      "Sparkle Media completely revolutionized our digital presence. Their attention to detail and data-driven approach led to phenomenal growth in our conversions. Within 3 months, we saw a 240% increase in qualified leads. Highly recommend!",
    rating: 5,
  },
  {
    name: "Benali Sari",
    role: "Brand Director",
    company: "Mysk",
    avatar: "B",
    avatarColor: "from-violet-400 to-purple-500",
    content:
      "Working with them was an absolute game changer. The aesthetic of our brand has been elevated to luxury standards, and the leads have never been better. The team's creativity combined with their strategic thinking is truly unmatched.",
    rating: 5,
  },
  {
    name: "Rania Al-Hassan",
    role: "CEO",
    company: "Prestige Auto",
    avatar: "R",
    avatarColor: "from-rose-400 to-pink-500",
    content:
      "We partnered with Sparkle Media for a full brand overhaul and digital campaign. The results were extraordinary — our social media engagement tripled and our website traffic grew by 180% in just two months. A world-class team!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-100/50 rounded-none blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-100/50 rounded-none blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-xs font-bold tracking-widest text-cyan-600 uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Stories
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-gray-500 max-w-2xl mx-auto text-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real success stories and glowing endorsements from the brands we&apos;ve helped sparkle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-none shadow-xl shadow-gray-200/60 relative flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-8 text-gray-100">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 flex-1 text-[15px]">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatarColor} rounded-none flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 font-light">{testimonial.role}</p>
                  <p className="text-xs text-cyan-600 font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
