"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";

const pricingPackages = [
  { name: "Single Campaign", price: "Rs. 2,000.00", desc: "One E-Flyer Circulation" },
  { name: "2 Campaigns", price: "Rs. 3,500.00", desc: "2 E-Flyer Circulation" },
  { name: "5 Campaigns", price: "Rs. 7,500.00", desc: "5 E-Flyer Circulation" },
  { name: "10 Campaigns", price: "Rs. 15,000.00", desc: "10 E-Flyer Circulation", highlighted: true },
  { name: "40 Campaigns", price: "Rs. 50,000.00", desc: "40 E-Flyer Circulation" },
];

export default function EmailMarketingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-cyan-50 mx-auto rounded-none flex items-center justify-center text-cyan-500 mb-8"
          >
            <Mail className="w-10 h-10" />
          </motion.div>
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
            E-Mail Marketing
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-500 font-light leading-relaxed max-w-4xl mx-auto"
          >
            One of the most powerful tools you have for keeping customers engaged and interacting with your brand.
          </motion.h3>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 mb-24 relative">
          <div className="absolute top-1/2 left-0 w-full h-96 bg-cyan-50 rounded-none blur-[100px] opacity-50 pointer-events-none transform -translate-y-1/2" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 border border-gray-100 shadow-2xl shadow-cyan-900/5 relative z-10 space-y-8 text-lg font-light text-gray-600 leading-loose"
          >
            <p>
              Email marketing is one of the most powerful tools you have for keeping customers engaged and interacting with your brand. But it can be difficult to figure out how to get started and make sure you&apos;re getting results.
            </p>
            <p className="border-l-4 border-cyan-400 pl-6 text-gray-800 font-medium">
              The best way to reach your audience is to start by figuring out who they are. Are they looking for information on a particular product or service? Do they want updates on current sales? Do they want help finding their next vacation destination?
            </p>
            <p>
              Once you know their needs, it&apos;s time to develop an email marketing strategy that incorporates those needs. You can send emails at any time of day, but sending them during certain times of year can help boost engagement with specific types of people. For example, if you sell skincare products, sending emails during the winter months might be more beneficial than sending them in summer when people are outside more often.
            </p>
            <p>
              One of the most important things about choosing an email marketing provider is making sure that they are able to deliver content consistently across platforms like Gmail, Outlook or the mobile app version of an email client (like Mailbox). The best way to do this is by using a platform that allows them to sync up multiple accounts so that all of your messages are sent out from one place instead of having different systems looking after each one separately.
            </p>
          </motion.div>
        </div>

        {/* Pricing Section */}
        <div className="bg-navy py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-none blur-[150px] opacity-20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Our Pricing Structure</h2>
              <div className="w-24 h-1 bg-cyan-400 mx-auto" />
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {pricingPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] p-8 border ${
                    pkg.highlighted 
                      ? "bg-gradient-to-br from-cyan-500 to-blue-600 border-transparent shadow-2xl shadow-cyan-500/20 transform md:-translate-y-4" 
                      : "bg-white border-gray-100"
                  } hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center text-center`}
                >
                  <h3 className={`text-xl font-bold mb-4 uppercase tracking-wider ${pkg.highlighted ? "text-cyan-100" : "text-gray-500"}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl font-black mb-8 ${pkg.highlighted ? "text-white" : "text-navy"}`}>
                    {pkg.price}
                  </div>
                  
                  <div className="w-full h-px bg-gray-200 mb-8 opacity-50" />
                  
                  <div className={`flex items-center text-lg ${pkg.highlighted ? "text-cyan-50" : "text-gray-600 font-light"}`}>
                    <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 ${pkg.highlighted ? "text-cyan-200" : "text-cyan-500"}`} />
                    <span>{pkg.desc}</span>
                  </div>

                  <a
                    href="/contact"
                    className={`mt-10 w-full py-4 font-bold tracking-widest uppercase transition-colors ${
                      pkg.highlighted
                        ? "bg-white text-navy hover:bg-gray-50"
                        : "bg-gray-50 text-navy hover:bg-cyan-500 hover:text-white"
                    }`}
                  >
                    Select Plan
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
