import { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about Floyet and our products — GymTie, Livonomi, YoungMenu, DevaPatha, and Onebest.",
};

const FAQPage = () => {
  const faqs = [
    {
      question: "What does Floyet do?",
      answer:
        "Floyet Labs & Technologies LLP is a product company from Kerala. Our primary product is GymTie - a complete gym management ecosystem. We also build Livonomi, YoungMenu, DevaPatha, and Onebest for other vertical markets.",
    },
    {
      question: "What is GymTie?",
      answer:
        "GymTie is Floyet's flagship product and main company focus. GymTie Manager helps gym owners run billing, attendance, WhatsApp automation, and operations. GymTie Fit connects members to workouts, nutrition, and their fitness journey. Visit gymtie.com to learn more.",
    },
    {
      question: "Is GymTie Floyet's only product?",
      answer:
        "GymTie is our primary investment and flagship ecosystem, but Floyet also operates Livonomi (personal finance), YoungMenu (food businesses), DevaPatha (temples), and Onebest (gifts).",
    },
    {
      question: "How can I get started with YoungMenu?",
      answer:
        "You can explore YoungMenu at youngmenu.com or contact Floyet for product details, early access, and business onboarding.",
    },
    {
      question: "What is DevaPatha?",
      answer:
        "DevaPatha is Floyet's complete temple management platform. DevaPatha Manager helps temples manage operations, while the DevaPatha app helps devotees connect with temples and Hindu spiritual services.",
    },
    {
      question: "What is Livonomi?",
      answer:
        "Livonomi is Floyet's finance-first life management app. It brings income, spending, wealth, subscriptions, and goals into one workspace - with separate personal and business contexts and AI-powered financial insights. Learn more at livonomi.com.",
    },
    {
      question: "Does Floyet offer custom software development?",
      answer:
        "Floyet primarily focuses on its own product platforms - especially GymTie - while also partnering selectively with businesses for high-quality web and mobile software solutions.",
    },
    {
      question: "Where is Floyet located?",
      answer:
        "Our headquarters are located in Kozhikode, Kerala, India, at the Hilite Business Park.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team by emailing info@floyet.com or by using the contact form on our website. We typically respond within 24 hours.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main id="main-content" className="secondary-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container">
        <PageHeader
          eyebrow="Support"
          title="Frequently Asked Questions"
          subtitle="GymTie is Floyet's flagship. Below are answers about GymTie and our other product lines."
        />
        <FaqAccordion items={faqs} />
      </div>
    </main>
  );
};

export default FAQPage;
