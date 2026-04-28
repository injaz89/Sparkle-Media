"use client";

import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

const plans = [
  { campaigns: "SINGLE CAMPAIGN", circulations: "One E-Flyer Circulation", price: "Rs. 2,000" },
  { campaigns: "2 CAMPAIGNS", circulations: "2 E-Flyer Circulation", price: "Rs. 3,500" },
  { campaigns: "5 CAMPAIGNS", circulations: "5 E-Flyer Circulation", price: "Rs. 7,500" },
  { campaigns: "10 CAMPAIGNS", circulations: "10 E-Flyer Circulation", price: "Rs. 15,000" },
  { campaigns: "40 CAMPAIGNS", circulations: "40 E-Flyer Circulation", price: "Rs. 50,000" }
];

export function EmailPricing() {
  return (
    <section className="bg-white py-24 border-t border-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Transparent Email Pricing</h2>
          <p className="text-gray-500 font-light text-xl max-w-2xl mx-auto">
            Choose the volume that fits your business needs, and we'll ensure high deliverability and engaging content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-none border transition-all duration-300 relative ${
                i === 2 ? "bg-gradient-to-br from-navy to-cyan-900 border-transparent shadow-2xl shadow-cyan-900/20 text-white transform md:-translate-y-4" : "bg-white border-gray-100 hover:border-cyan-200 hover:shadow-xl text-navy"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {i === 2 && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-navy text-xs font-black px-4 py-1 rounded-none uppercase tracking-widest">
                  Popular
                </div>
              )}
              
              <div className="flex items-center justify-center w-14 h-14 rounded-none bg-cyan-100/20 text-cyan-400 mb-8 mt-2 mx-auto">
                <Mail className="w-6 h-6" />
              </div>
              
              <div className="text-center mb-10">
                <h3 className={`text-sm font-bold tracking-widest uppercase mb-4 ${i === 2 ? 'text-gray-300' : 'text-gray-400'}`}>
                  {plan.campaigns}
                </h3>
                <div className={`text-4xl font-black ${i === 2 ? 'text-white' : 'text-navy'}`}>
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center justify-center">
                  <CheckCircle2 className={`w-5 h-5 mr-3 ${i === 2 ? 'text-cyan-400' : 'text-cyan-500'}`} />
                  <span className={`font-light ${i === 2 ? 'text-white/80' : 'text-gray-600'}`}>{plan.circulations}</span>
                </li>
                <li className="flex items-center justify-center">
                  <CheckCircle2 className={`w-5 h-5 mr-3 ${i === 2 ? 'text-cyan-400' : 'text-cyan-500'}`} />
                  <span className={`font-light ${i === 2 ? 'text-white/80' : 'text-gray-600'}`}>Top-tier deliverability</span>
                </li>
              </ul>
              
              <div className="mt-12 text-center">
                <a
                  href="#contact"
                  className={`inline-block w-full py-4 rounded-none font-bold transition-all ${
                    i === 2 
                      ? "bg-cyan-400 text-navy hover:bg-cyan-300" 
                      : "bg-gray-50 text-navy hover:bg-cyan-50 hover:text-cyan-600"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
