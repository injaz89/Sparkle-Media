"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Code2, Laptop, Globe, ShoppingCart, Search, Server, CheckCircle2 } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 bg-white min-h-screen">
        
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 mx-auto rounded-none flex items-center justify-center text-white mb-8 shadow-2xl shadow-cyan-500/30"
          >
            <Code2 className="w-12 h-12" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-500 font-bold tracking-widest uppercase mb-4"
          >
            Tech Lab
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-navy mb-8 leading-tight"
          >
            Website Design <br className="hidden md:block" /> & Development
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-500 font-light leading-relaxed max-w-4xl mx-auto"
          >
            We build robust, custom websites tailored to your business, perfectly optimized to drive consumer action and scale your digital presence.
          </motion.h3>
        </div>

        {/* Website Design and Development */}
        <div className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-none blur-[150px] opacity-20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              <div className="lg:w-3/5 space-y-6 text-gray-600 font-light text-lg leading-relaxed relative z-10">
                <p>
                  We know that it&apos;s hard to find a web design company that&apos;s just as committed to your strategic goals as you are. We&apos;re the sort of people who can&apos;t stop thinking about how you can use the web to improve your business, and we&apos;re not afraid to do some digging around online to find out exactly what you need.
                </p>
                <p>
                  If you&apos;re looking for a web designer or developer who can build you a custom website that&apos;s tailored to your business, look no further than Sparkle Media. We know that you want a website that&apos;s built specifically to meet your needs—and that&apos;s why we are equipped with the best web designers and developers who move with custom web development. All our custom website developments are built from the ground up with your requirements in mind.
                </p>
                <p>
                  We&apos;re committed to helping you design the perfect site for your business. We take the time to learn about your business, competitors, customers, and specific needs so that your website is not only beautiful and attractive but also helpful to grow your business in a meaningful way.
                </p>
                <p className="border-l-4 border-cyan-400 pl-6 text-navy font-medium text-xl">
                  We want to understand how your customers think and act as well, so that when they visit your site, they feel like they&apos;ve been welcomed into an ecosystem where they belong.
                </p>
              </div>

              {/* Development Highlights Box */}
              <div className="lg:w-2/5 w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 border border-gray-100 shadow-2xl shadow-cyan-900/5 relative z-10"
                >
                  <h3 className="text-2xl font-bold text-navy mb-8">What we build for you:</h3>
                  <ul className="space-y-6">
                    {[
                      { icon: Laptop, text: "User & Mobile-friendly responsive websites" },
                      { icon: Globe, text: "One-page & Corporate web designs" },
                      { icon: ShoppingCart, text: "eCommerce with local/global payment gateways (Payhere, PayPal)" },
                      { icon: Search, text: "Classified Web Development" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start group">
                        <div className="w-12 h-12 bg-cyan-50 flex items-center justify-center text-cyan-600 mr-4 shrink-0 group-hover:scale-110 transition-transform">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <span className="text-gray-600 leading-relaxed font-medium mt-2">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

            </div>
          </div>
        </div>

        {/* Detailed Services Lists */}
        <div className="py-24 bg-white max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-100 p-12 hover:shadow-2xl hover:border-cyan-200 transition-all duration-300"
            >
              <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
                <Server className="w-10 h-10 text-cyan-500 mr-6" />
                <h3 className="text-3xl font-black text-navy">Web Development Services</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">PHP/MySQL-based website development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 shrink-0" />
                  <div className="text-gray-700 font-medium text-lg">
                    Website maintenance
                    <ul className="mt-3 ml-2 space-y-2 border-l-2 border-gray-200 pl-4">
                      <li className="text-gray-500 font-light text-base">- Uptime Monitoring</li>
                      <li className="text-gray-500 font-light text-base">- Automated file & database backups</li>
                      <li className="text-gray-500 font-light text-base">- Security audits & Regular speed checks</li>
                      <li className="text-gray-500 font-light text-base">- Website updates</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start pt-2">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">Third-party hosting management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 shrink-0" />
                  <span className="text-gray-700 font-medium text-lg">Integrations</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
