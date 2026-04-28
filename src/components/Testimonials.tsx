"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Kevin Caraco",
    company: "Select Group",
    content: "Sparkle Media completely revolutionized our digital presence. Their attention to detail and data-driven approach lead to phenomenal growth in our conversions.",
  },
  {
    name: "Benali Sari",
    company: "mysk",
    content: "Working with them was an absolute game changer. The aesthetic of our brand has been elevated to luxury standards, and the leads have never been better.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Dive into the success stories and glowing endorsements from our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white p-10 rounded-none shadow-xl shadow-gray-200/50 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-none flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{testimonial.name}</h4>
                  <p className="text-sm text-cyan-600 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              {/* Quote Mark Icon */}
              <div className="absolute top-8 right-10 text-gray-100 text-8xl font-serif pointer-events-none select-none leading-none">
                &quot;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
