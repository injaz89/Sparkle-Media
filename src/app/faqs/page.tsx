import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & AI Search FAQs",
  description:
    "Answers to common questions on digital marketing, SEO, local SEO, AI search (AEO/GEO), websites, social media and choosing the right marketing agency.",
  alternates: {
    canonical: "/faqs",
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is the best digital marketing strategy for a growing business?",
    answer:
      "The best digital marketing strategy depends on your business goals, audience, and industry. Most successful businesses combine search engine optimization (SEO), paid advertising, social media marketing, content marketing, and conversion optimization to create a sustainable growth system rather than relying on a single channel.",
  },
  {
    question: "How long does digital marketing take to show results?",
    answer:
      "Paid advertising campaigns can start generating leads within days, while SEO and organic growth strategies typically take 3 to 6 months to show significant results. The fastest-growing brands usually combine both short-term and long-term marketing strategies.",
  },
  {
    question: "Is digital marketing worth it for small businesses?",
    answer:
      "Yes. Digital marketing allows small businesses to compete with larger brands by reaching highly targeted audiences, tracking performance accurately, and optimizing campaigns based on real data rather than assumptions.",
  },
  {
    question: "How do I measure the success of a digital marketing campaign?",
    answer:
      "Success should be measured using business-focused metrics such as leads generated, sales revenue, customer acquisition cost, return on ad spend (ROAS), conversion rate, and customer retention — rather than likes, impressions, or followers alone.",
  },
  {
    question: "What is SEO and why is it important?",
    answer:
      "SEO (Search Engine Optimization) is the process of improving a website's visibility in search engines like Google. Effective SEO helps businesses attract qualified traffic, generate leads, and build long-term authority without relying solely on paid advertising.",
  },
  {
    question: "How can SEO help my business generate more customers?",
    answer:
      "SEO helps businesses appear when potential customers actively search for products or services. By ranking for relevant search terms, businesses can attract highly qualified visitors who are already interested in making a purchase or inquiry.",
  },
  {
    question: "What is Local SEO?",
    answer:
      "Local SEO focuses on improving visibility in location-based searches such as \"digital marketing agency near me\" or \"best restaurant in Colombo.\" It helps businesses appear in local search results, Google Maps, and nearby recommendations.",
  },
  {
    question: "What are the most important SEO ranking factors?",
    answer:
      "Key ranking factors include high-quality content, website speed, mobile responsiveness, user experience, technical optimization, relevant backlinks, and content that satisfies user search intent.",
  },
  {
    question: "What is Answer Engine Optimization (AEO)?",
    answer:
      "Answer Engine Optimization (AEO) is the practice of optimizing content so that AI assistants, voice search systems, and search engines can easily identify and present direct answers to user questions.",
  },
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization (GEO) focuses on improving a brand's visibility within AI-generated responses from platforms such as ChatGPT, Google AI Overviews, Gemini, Claude, and Perplexity.",
  },
  {
    question: "How can my business appear in ChatGPT recommendations?",
    answer:
      "Businesses can increase their visibility in AI-generated answers by publishing authoritative content, building a strong online presence, earning credible mentions, implementing structured data, and maintaining consistent brand information across the web.",
  },
  {
    question: "Can AI search replace traditional SEO?",
    answer:
      "No. AI search and traditional SEO work together. SEO helps search engines understand and rank content, while GEO and AEO help AI systems reference and recommend that content within generated answers.",
  },
  {
    question: "Why should businesses optimize for AI search?",
    answer:
      "Consumer search behavior is rapidly evolving. More people are asking AI assistants for recommendations, solutions, and business information. Optimizing for AI search helps businesses remain visible where future customer decisions are increasingly being made.",
  },
  {
    question: "How does GEO differ from SEO?",
    answer:
      "SEO focuses on improving rankings in search engine results pages, while GEO focuses on improving a brand's visibility within AI-generated responses and conversational search experiences.",
  },
  {
    question: "Why does my business need a professional website?",
    answer:
      "A professional website acts as your digital storefront, helping potential customers learn about your business, build trust, and take action. It also serves as the foundation for SEO, advertising, and lead generation efforts.",
  },
  {
    question: "How important is website speed for conversions?",
    answer:
      "Website speed directly impacts user experience, search rankings, and conversion rates. Slow-loading websites often result in higher bounce rates and lost revenue opportunities.",
  },
  {
    question: "What makes a high-converting website?",
    answer:
      "A high-converting website combines clear messaging, strong calls-to-action, fast performance, mobile responsiveness, trust signals, and user-focused design to guide visitors toward taking action.",
  },
  {
    question: "Does social media marketing still work in 2026?",
    answer:
      "Yes. Social media remains one of the most effective channels for building brand awareness, engaging audiences, generating leads, and supporting customer retention when supported by a clear strategy.",
  },
  {
    question: "Which social media platform is best for my business?",
    answer:
      "The ideal platform depends on your audience and goals. LinkedIn works well for B2B brands, Instagram and TikTok excel for visual engagement, while Facebook remains effective for community building and advertising.",
  },
  {
    question: "How often should businesses post on social media?",
    answer:
      "Consistency is more important than volume. Businesses should focus on maintaining a regular posting schedule that delivers value, engages audiences, and supports broader marketing objectives.",
  },
  {
    question: "How do I choose the right digital marketing agency?",
    answer:
      "Look for an agency with proven results, transparent reporting, industry expertise, clear communication, and a strategy focused on business outcomes rather than vanity metrics.",
  },
  {
    question: "What should I expect from a digital marketing agency?",
    answer:
      "A professional agency should provide strategic planning, campaign execution, reporting, optimization, and measurable performance improvements aligned with your business goals.",
  },
  {
    question: "Why should I hire a digital marketing agency instead of building an in-house team?",
    answer:
      "Agencies provide access to specialists across multiple disciplines, advanced tools, industry insights, and proven processes without the overhead costs of building and managing a full internal team.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageClient />
    </>
  );
}
