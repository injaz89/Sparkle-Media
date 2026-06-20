"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kevin Caraco",
    role: "Head of Marketing",
    company: "Select Group",
    avatar: "K",
    avatarGrad: "linear-gradient(135deg, #39bcfc, #129adc)",
    content:
      "Sparkle Media completely revolutionized our digital presence. Their attention to detail and data-driven approach led to phenomenal growth in our conversions. Within 3 months, we saw a 240% increase in qualified leads. Highly recommend!",
    rating: 5,
  },
  {
    name: "Benali Sari",
    role: "Brand Director",
    company: "Mysk",
    avatar: "B",
    avatarGrad: "linear-gradient(135deg, #39bcfc, #129adc)",
    content:
      "Working with them was an absolute game changer. The aesthetic of our brand has been elevated to luxury standards, and the leads have never been better. The team's creativity combined with their strategic thinking is truly unmatched.",
    rating: 5,
  },
  {
    name: "Rania Al-Hassan",
    role: "CEO",
    company: "Prestige Auto",
    avatar: "R",
    avatarGrad: "linear-gradient(135deg, #129adc, #39bcfc)",
    content:
      "We partnered with Sparkle Media for a full brand overhaul and digital campaign. The results were extraordinary — our social media engagement tripled and our website traffic grew by 180% in just two months. A world-class team!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-bg relative overflow-hidden">
      {/* Top accent strip */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, #39bcfc, #129adc, #39bcfc)" }} />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(circle, #87d4f8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-xs font-bold tracking-widest text-[#129adc] uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Stories
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-6"
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
              className="bg-white border border-[#87d4f8] p-8 relative flex flex-col hover:shadow-xl hover:shadow-sky-100/60 hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: "linear-gradient(90deg, #39bcfc, #129adc)" }}
              />

              {/* Quote icon */}
              <div className="absolute top-6 right-8 text-white/40">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 flex-1 text-[15px]">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-[#87d4f8]">
                <div
                  className="w-12 h-12 flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: testimonial.avatarGrad }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1128] text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400 font-light">{testimonial.role}</p>
                  <p className="text-xs text-[#129adc] font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
