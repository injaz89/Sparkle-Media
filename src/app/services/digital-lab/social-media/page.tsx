"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Users,
  Calendar,
  BarChart3,
  TrendingUp,
  MessageSquare,
  Target,
  Share2,
  Briefcase,
  Video,
  MessageCircle,
} from "lucide-react";



// ── Why invest stats ───────────────────────────────────────────────────────────
const whyInvest = [
  {
    stat: "5B+",
    label: "Active Social Media Users",
    desc: "Over 5 billion people actively use social media worldwide.",
  },
  {
    stat: "70%+",
    label: "Research Before Buying",
    desc: "Consumers increasingly research brands on social platforms before making purchasing decisions.",
  },
  {
    stat: "3×",
    label: "Stronger Brand Loyalty",
    desc: "Businesses with consistent social presence build stronger trust than those relying on traditional marketing alone.",
  },
];

// ── Proven results ─────────────────────────────────────────────────────────────
const results = [
  "300% increase in social media growth for GR Events",
  "Significant audience growth across multiple client accounts",
  "Consistent increases in engagement, reach, and brand visibility",
  "Stronger customer relationships through strategic content and community management",
  "Improved lead generation through integrated social media strategies",
];

// ── Our approach steps ─────────────────────────────────────────────────────────
const approach = [
  {
    icon: Target,
    title: "Social Media Strategy",
    desc: "Every successful social media presence begins with a clear strategy. We take the time to understand your business, audience, industry, and objectives before creating a tailored social media plan that aligns with your growth goals. Our strategies focus on creating meaningful engagement while maintaining consistency across all platforms.",
  },
  {
    icon: Calendar,
    title: "Content Planning & Creation",
    desc: "Content is the foundation of effective social media marketing. Our team develops content that educates, entertains, inspires, and converts. From branded graphics and professional photography to short-form videos, reels, stories, and carousels, every piece of content is designed to capture attention and encourage interaction.",
  },
  {
    icon: MessageSquare,
    title: "Community Management",
    desc: "Social media is a conversation, not a broadcast. We help brands build stronger relationships by actively engaging with their audience through comments, messages, and community interactions. Timely responses and meaningful engagement help strengthen customer trust and improve overall brand perception.",
  },
  {
    icon: TrendingUp,
    title: "Platform Growth & Optimization",
    desc: "Growing an audience requires more than posting consistently. We continuously analyze performance data, audience behavior, content trends, and platform updates to identify opportunities for growth. Our team optimizes content strategies, posting schedules, hashtags, and engagement tactics to maximize reach and performance.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    desc: "Data drives better decisions. We provide detailed reporting that tracks audience growth, engagement rates, reach, impressions, website traffic, and other key performance indicators. This transparency allows you to clearly understand how social media contributes to your broader marketing objectives.",
  },
];

// ── Platforms ──────────────────────────────────────────────────────────────────
const platforms = [
  {
    icon: Share2,
    name: "Instagram Marketing",
    desc: "Build a visually compelling presence that increases engagement, audience growth, and brand awareness.",
  },
  {
    icon: Users,
    name: "Facebook Marketing",
    desc: "Reach local and global audiences while building meaningful customer relationships through strategic content and community engagement.",
  },
  {
    icon: Briefcase,
    name: "LinkedIn Marketing",
    desc: "Position your business as an industry leader and connect with decision-makers through professional content and thought leadership.",
  },
  {
    icon: Video,
    name: "TikTok Marketing",
    desc: "Leverage creative, trend-driven content to increase visibility and connect with highly engaged audiences.",
  },
  {
    icon: MessageCircle,
    name: "X (Twitter) Marketing",
    desc: "Build brand awareness and participate in relevant conversations through real-time engagement.",
  },
  {
    icon: Target,
    name: "Multi-Platform Management",
    desc: "Create a unified brand experience across multiple channels with integrated social media strategies.",
  },
];

// ── Full services list ─────────────────────────────────────────────────────────
const services = [
  "Social Media Strategy Development",
  "Social Media Management",
  "Content Planning & Calendars",
  "Graphic Design & Creative Production",
  "Short-Form Video Creation",
  "Reels & TikTok Content",
  "Photography Direction",
  "Copywriting & Captions",
  "Community Management",
  "Audience Growth Strategies",
  "Hashtag Research",
  "Social Media Audits",
  "Competitor Analysis",
  "Influencer Collaboration Support",
  "Brand Awareness Campaigns",
  "Social Media Reporting & Analytics",
  "Profile Optimization",
  "Content Scheduling & Publishing",
  "Social Media Consulting",
  "Multi-Platform Management",
];

// ── Business benefits ──────────────────────────────────────────────────────────
const businessBenefits = [
  "Increase brand visibility",
  "Build stronger customer relationships",
  "Grow engaged audiences",
  "Improve customer retention",
  "Strengthen brand credibility",
  "Generate leads and inquiries",
  "Support long-term business growth",
];

export default function SocialMediaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-bg min-h-screen">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm"
              >
                Digital Lab
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-[1.05]"
              >
                Social Media{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Marketing
                </span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-light text-navy/80 mb-6 leading-snug"
              >
                Build a Brand People Follow, Trust & Buy From
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="text-lg text-gray-600 font-light leading-relaxed mb-10"
              >
                Create meaningful connections. Grow your audience. Turn social media into a powerful business growth channel.
              </motion.p>
              <motion.a
                href="https://calendly.com/sparklemediacreatives/30min"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors"
              >
                Book a Free Strategy Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>

            {/* Right: intro copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="space-y-6"
            >
              <div className="border-l-4 border-secondary pl-6 space-y-4">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Social media is no longer just a place to post content. It&apos;s where brands build communities, establish credibility, and influence purchasing decisions every day.
                </p>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  At Sparkle Media, we create strategic social media marketing campaigns that help businesses connect with their audience, increase engagement, strengthen brand visibility, and generate measurable business results.
                </p>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  From content creation and community management to platform growth and audience engagement, our team develops social media strategies designed to support your business goals and create long-term brand value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Why Invest ───────────────────────────────────────────────────── */}
        <div className="bg-navy py-20 mb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">The Opportunity</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Why Invest in Social Media Marketing?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyInvest.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <p className="text-5xl font-bold mb-3"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item.stat}
                  </p>
                  <p className="text-white font-semibold mb-3 text-lg">{item.label}</p>
                  <p className="text-white/60 font-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Proven Results ───────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-secondary uppercase">Proven Results</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                Our Success Is Measured By Your Growth
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                These results are achieved through a combination of strategic planning, creative storytelling, audience insights, and ongoing optimization.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-white transition-all"
              >
                Start Growing Today
              </a>
            </div>
            <div className="space-y-4">
              {results.map((result, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 bg-white border border-primary/20 p-5 shadow-sm hover:shadow-md hover:border-primary transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-light leading-relaxed">{result}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Our Approach ─────────────────────────────────────────────────── */}
        <div className="bg-white border-t border-b border-primary/15 py-24 mb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">Our Approach</h2>
            </div>
            <div className="space-y-8">
              {approach.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex flex-col md:flex-row gap-8 p-8 border border-primary/20 hover:border-primary hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-300 bg-bg group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    <div className="flex-shrink-0 w-16 h-16 border border-primary/20 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300 bg-white">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Platforms ───────────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase">Platforms We Manage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3">
              Wherever Your Audience Is, We&apos;re There
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white p-8 border border-primary/20 hover:border-primary hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-12 h-12 border border-primary/20 flex items-center justify-center text-secondary mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{p.name}</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>



        {/* ── What We Can Do ───────────────────────────────────────────────── */}
        <div className="bg-navy py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">Full Service Scope</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">What We Can Do For You</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3 p-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-white/80 text-sm font-light leading-snug">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Why Choose Sparkle ───────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-secondary uppercase">Why Sparkle Media</span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-6">
                We Don&apos;t Focus on Vanity Metrics
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                We focus on building brands that people remember, trust, and engage with. Every post, campaign, and interaction is guided by strategy, creativity, and measurable objectives.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-10">
                Because successful social media marketing isn&apos;t about posting more. It&apos;s about creating meaningful connections that turn audiences into customers and customers into advocates.
              </p>
              <a
                href="https://calendly.com/sparklemediacreatives/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold hover:bg-primary transition-colors"
              >
                Book a Free Strategy Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-bold text-navy uppercase tracking-widest mb-6">Our Social Media Strategies Help Businesses:</p>
              {businessBenefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-5 bg-white border border-primary/20 hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <p className="text-gray-700 font-light">{benefit}</p>
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
