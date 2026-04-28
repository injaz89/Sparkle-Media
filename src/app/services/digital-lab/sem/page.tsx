"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MousePointerClick, Search, Image as ImageIcon, Video, ShoppingBag, Layers } from "lucide-react";

const benefits = [
  {
    title: "Programmatic Ads",
    icon: Layers,
    desc: "We help you reach leads beyond what search engines can detect and help you display your brand in places that help broaden your audience and website traffic.",
  },
  {
    title: "Google Search Ads",
    icon: Search,
    desc: "We help your brand appear to the customers that intend to search for similar products or services that your business provides.",
  },
  {
    title: "Google Display Network",
    icon: ImageIcon,
    desc: "With the right strategy, you can make your brand visible in places where your audience with interests wanders on the internet.",
  },
  {
    title: "Google Video Ads",
    icon: Video,
    desc: "A good video ad shouldn't feel like an ad. It should be an experience that viewers enjoy. An experience that develops subconscious attraction toward your brand and possibly even triggers immediate action.",
  },
  {
    title: "Shopping Ads",
    icon: ShoppingBag,
    desc: "Google Shopping has become a profitable marketing channel for many eCommerce businesses. Formerly known as 'Product Listing Ads'. Whether you're a small business just starting out or an established brand, we can successfully set up and manage a successful Google Shopping campaign that generates profitable returns.",
  },
];

export default function SemPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 relative">
          <div className="absolute top-0 right-10 w-64 h-64 bg-blue-50 rounded-none blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative z-10">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-cyan-500 font-bold tracking-widest uppercase mb-4"
              >
                Digital Lab
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-navy mb-8"
              >
                Search Engine Marketing
              </motion.h1>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-navy font-medium leading-relaxed mb-6"
              >
                Appear on your interested and intended audiences search!
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-500 font-light leading-relaxed border-l-4 border-cyan-400 pl-6"
              >
                Here's to the expertise that comes beyond limitations for your investment in search engine marketing. Let's reach beyond the limits.
              </motion.p>
            </div>

            <div className="lg:w-1/2 relative z-10 space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                Agencies such as Sparkle Media have the ability to help your business increase its digital presence and engage with the potential leads that would actually bring an ROI to your business.
              </motion.p>
              <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                Based on our experience, PPC is more of a digital race you have with your competitors using the keywords to reach your targets. You pay the highest bid price for the search term when a user clicks through, which places your ad at the top of the search results.
              </motion.p>
              <motion.p initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                On the other hand, through display networks you can raise awareness and reach a large number of audience for a smaller investment compared to search ads. When the clicks of your consumers result in conversions and purchases, you get a greater impact on your money.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Benefits/Ways to benefit */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">
                What are the ways you can benefit <br className="hidden md:block" /> with Search Engine Marketing?
              </h2>
              <div className="w-24 h-1 bg-cyan-400 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item, i) => {
                const Icon = item.icon;
                // Make the last item span 2 columns on tablet, or 3 columns on desktop if it's the 5th item
                // 5 items total: rows of 3, so last row has 2 items. Let's make them span nicely.
                const isLastTwo = i >= 3;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-white p-10 border border-gray-100 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-300 group ${isLastTwo ? "lg:col-span-1" : ""}`}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-50 flex items-center justify-center text-cyan-600 mb-8 group-hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4">{item.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
