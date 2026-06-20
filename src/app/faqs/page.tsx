"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";

const categories = [
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    color: "from-primary to-secondary",
    faqs: [
      {
        q: "What is the best digital marketing strategy for a growing business?",
        a: "The best digital marketing strategy depends on your business goals, audience, and industry. Most successful businesses combine search engine optimization (SEO), paid advertising, social media marketing, content marketing, and conversion optimization to create a sustainable growth system rather than relying on a single channel.",
      },
      {
        q: "How long does digital marketing take to show results?",
        a: "Paid advertising campaigns can start generating leads within days, while SEO and organic growth strategies typically take 3 to 6 months to show significant results. The fastest-growing brands usually combine both short-term and long-term marketing strategies.",
      },
      {
        q: "Is digital marketing worth it for small businesses?",
        a: "Yes. Digital marketing allows small businesses to compete with larger brands by reaching highly targeted audiences, tracking performance accurately, and optimizing campaigns based on real data rather than assumptions.",
      },
      {
        q: "How do I measure the success of a digital marketing campaign?",
        a: "Success should be measured using business-focused metrics such as leads generated, sales revenue, customer acquisition cost, return on ad spend (ROAS), conversion rate, and customer retention — rather than likes, impressions, or followers alone.",
      },
    ],
  },
  {
    id: "seo",
    label: "SEO & Search Visibility",
    color: "from-secondary to-primary",
    faqs: [
      {
        q: "What is SEO and why is it important?",
        a: "SEO (Search Engine Optimization) is the process of improving a website's visibility in search engines like Google. Effective SEO helps businesses attract qualified traffic, generate leads, and build long-term authority without relying solely on paid advertising.",
      },
      {
        q: "How can SEO help my business generate more customers?",
        a: "SEO helps businesses appear when potential customers actively search for products or services. By ranking for relevant search terms, businesses can attract highly qualified visitors who are already interested in making a purchase or inquiry.",
      },
      {
        q: "What is Local SEO?",
        a: "Local SEO focuses on improving visibility in location-based searches such as \"digital marketing agency near me\" or \"best restaurant in Colombo.\" It helps businesses appear in local search results, Google Maps, and nearby recommendations.",
      },
      {
        q: "What are the most important SEO ranking factors?",
        a: "Key ranking factors include high-quality content, website speed, mobile responsiveness, user experience, technical optimization, relevant backlinks, and content that satisfies user search intent.",
      },
    ],
  },
  {
    id: "ai-search",
    label: "AI Search & GEO",
    badge: "Most agencies aren't targeting these yet",
    color: "from-primary to-secondary",
    faqs: [
      {
        q: "What is Answer Engine Optimization (AEO)?",
        a: "Answer Engine Optimization (AEO) is the practice of optimizing content so that AI assistants, voice search systems, and search engines can easily identify and present direct answers to user questions.",
      },
      {
        q: "What is Generative Engine Optimization (GEO)?",
        a: "Generative Engine Optimization (GEO) focuses on improving a brand's visibility within AI-generated responses from platforms such as ChatGPT, Google AI Overviews, Gemini, Claude, and Perplexity.",
      },
      {
        q: "How can my business appear in ChatGPT recommendations?",
        a: "Businesses can increase their visibility in AI-generated answers by publishing authoritative content, building a strong online presence, earning credible mentions, implementing structured data, and maintaining consistent brand information across the web.",
      },
      {
        q: "Can AI search replace traditional SEO?",
        a: "No. AI search and traditional SEO work together. SEO helps search engines understand and rank content, while GEO and AEO help AI systems reference and recommend that content within generated answers.",
      },
      {
        q: "Why should businesses optimize for AI search?",
        a: "Consumer search behavior is rapidly evolving. More people are asking AI assistants for recommendations, solutions, and business information. Optimizing for AI search helps businesses remain visible where future customer decisions are increasingly being made.",
      },
      {
        q: "How does GEO differ from SEO?",
        a: "SEO focuses on improving rankings in search engine results pages, while GEO focuses on improving a brand's visibility within AI-generated responses and conversational search experiences.",
      },
    ],
  },
  {
    id: "website",
    label: "Website & Conversion",
    color: "from-secondary to-primary",
    faqs: [
      {
        q: "Why does my business need a professional website?",
        a: "A professional website acts as your digital storefront, helping potential customers learn about your business, build trust, and take action. It also serves as the foundation for SEO, advertising, and lead generation efforts.",
      },
      {
        q: "How important is website speed for conversions?",
        a: "Website speed directly impacts user experience, search rankings, and conversion rates. Slow-loading websites often result in higher bounce rates and lost revenue opportunities.",
      },
      {
        q: "What makes a high-converting website?",
        a: "A high-converting website combines clear messaging, strong calls-to-action, fast performance, mobile responsiveness, trust signals, and user-focused design to guide visitors toward taking action.",
      },
    ],
  },
  {
    id: "social-media",
    label: "Social Media",
    color: "from-primary to-secondary",
    faqs: [
      {
        q: "Does social media marketing still work in 2026?",
        a: "Yes. Social media remains one of the most effective channels for building brand awareness, engaging audiences, generating leads, and supporting customer retention when supported by a clear strategy.",
      },
      {
        q: "Which social media platform is best for my business?",
        a: "The ideal platform depends on your audience and goals. LinkedIn works well for B2B brands, Instagram and TikTok excel for visual engagement, while Facebook remains effective for community building and advertising.",
      },
      {
        q: "How often should businesses post on social media?",
        a: "Consistency is more important than volume. Businesses should focus on maintaining a regular posting schedule that delivers value, engages audiences, and supports broader marketing objectives.",
      },
    ],
  },
  {
    id: "agency",
    label: "Agency Selection",
    badge: "Powerful for lead generation",
    color: "from-secondary to-primary",
    faqs: [
      {
        q: "How do I choose the right digital marketing agency?",
        a: "Look for an agency with proven results, transparent reporting, industry expertise, clear communication, and a strategy focused on business outcomes rather than vanity metrics.",
      },
      {
        q: "What should I expect from a digital marketing agency?",
        a: "A professional agency should provide strategic planning, campaign execution, reporting, optimization, and measurable performance improvements aligned with your business goals.",
      },
      {
        q: "Why should I hire a digital marketing agency instead of building an in-house team?",
        a: "Agencies provide access to specialists across multiple disciplines, advanced tools, industry insights, and proven processes without the overhead costs of building and managing a full internal team.",
      },
    ],
  },
];

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`border-b border-gray-100 last:border-b-0 group`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className={`text-base md:text-lg font-semibold leading-snug transition-colors duration-200 ${open ? "text-secondary" : "text-navy group-hover:text-primary"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-all duration-300 mt-0.5 ${open ? "border-primary bg-primary text-white" : "border-gray-200 text-gray-400 group-hover:border-primary/50"}`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 font-light leading-relaxed text-[15px] pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState("digital-marketing");
  const active = categories.find((c) => c.id === activeCategory)!;

  return (
    <>
      <Navbar />
      <main className="bg-bg min-h-screen">

        {/* ── HERO ── */}
        <section className="pt-32 pb-16 bg-bg relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(#0A1128 1px, transparent 1px), linear-gradient(90deg, #0A1128 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary blur-[200px] opacity-10 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-secondary font-bold tracking-widest uppercase text-sm mb-4"
            >
              Knowledge Base
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-[1.05]"
            >
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Questions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
            >
              Everything you need to know about digital marketing, SEO, AI search visibility,
              and how Sparkle Media can help your business grow.
            </motion.p>
          </div>
        </section>

        {/* ── CATEGORY TABS + ACCORDION ── */}
        <section className="py-20 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12">

              {/* Sidebar — category nav */}
              <div className="lg:w-72 flex-shrink-0">
                <div className="lg:sticky lg:top-32">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">
                    Browse by Topic
                  </p>
                  <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex-shrink-0 text-left px-4 py-3 text-sm font-semibold transition-all duration-200 border-l-2 ${
                          activeCategory === cat.id
                            ? "border-primary bg-white text-secondary"
                            : "border-transparent text-gray-500 hover:text-navy hover:border-gray-200 hover:bg-white/40"
                        }`}
                      >
                        <span className="block">{cat.label}</span>
                        {cat.badge && (
                          <span className="text-xs font-normal text-amber-500 mt-0.5 block">
                            ★ {cat.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* CTA card */}
                  <div className="hidden lg:block mt-10 bg-white border border-primary/20 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary blur-[50px] opacity-20 pointer-events-none" />
                    <div className="relative z-10">
                      <p className="text-navy font-bold mb-2">Still have questions?</p>
                      <p className="text-gray-500 text-xs font-light leading-relaxed mb-4">
                        Book a free strategy call and let&apos;s talk about your business.
                      </p>
                      <a
                        href="https://calendly.com/sparklemediacreatives/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest"
                      >
                        Book a Call <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main — FAQ accordion */}
              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Category header */}
                    <div className="mb-8 pb-6 border-b-2 border-primary/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-1 h-6 bg-gradient-to-b ${active.color}`} />
                        <h2 className="text-2xl md:text-3xl font-bold text-navy">{active.label}</h2>
                      </div>
                      {active.badge && (
                        <span className="inline-block text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 mt-1">
                          ★ {active.badge}
                        </span>
                      )}
                    </div>

                    {/* Accordion items */}
                    <div>
                      {active.faqs.map((faq, i) => (
                        <AccordionItem key={i} q={faq.q} a={faq.a} index={i} />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ── ALL FAQs QUICK VIEW — full accordion by category ── */}
        <section className="py-24 bg-bg border-t border-primary/20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">Complete Reference</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mt-3">All Questions, One Place</h2>
              <p className="text-gray-500 font-light mt-4">Browse every FAQ across all topics in a single view.</p>
            </div>
            <div className="space-y-12">
              {categories.map((cat, ci) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.07 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-0.5 bg-gradient-to-r ${cat.color}`} />
                    <h3 className="text-sm font-bold text-navy uppercase tracking-widest">{cat.label}</h3>
                  </div>
                  <div className="bg-white border border-primary/20 divide-y divide-gray-50 px-6">
                    {cat.faqs.map((faq, i) => (
                      <AccordionItem key={i} q={faq.q} a={faq.a} index={i} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-24 bg-bg border-t border-primary/20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary blur-[150px] opacity-10 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight"
            >
              Didn&apos;t find your answer?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 font-light leading-relaxed mb-10 text-lg"
            >
              Our team is happy to answer any question specific to your business.
              Book a free 30-minute strategy call or ping us on WhatsApp.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="https://calendly.com/sparklemediacreatives/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold hover:bg-primary transition-colors"
              >
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/message/RBCP6CKB5PX6C1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold hover:bg-secondary transition-colors"
              >
                Chat on WhatsApp <MessageCircle className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
