import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Floyet",
  description: "Find answers to common questions about Floyet's digital products, services, and how we can help your business grow.",
};

const FAQPage = () => {
  const faqs = [
    {
      question: "What does Floyet do?",
      answer: "Floyet Labs & Technologies LLP builds focused vertical software products for real-world businesses and community-led markets in India, including GymTie, YoungMenu, DevaPatha, and Onebest."
    },
    {
      question: "What is GymTie?",
      answer: "GymTie is our flagship gym management software designed to streamline operations, manage memberships, and automate billing for fitness centers and health clubs."
    },
    {
      question: "How can I get started with YoungMenu?",
      answer: "You can explore YoungMenu at youngmenu.com or contact Floyet for product details, early access, and business onboarding."
    },
    {
      question: "What is DevaPatha?",
      answer: "DevaPatha is Floyet's complete temple management platform. DevaPatha Manager helps temples manage operations, while the DevaPatha app helps devotees connect with temples and Hindu spiritual services."
    },
    {
      question: "Does Floyet offer custom software development?",
      answer: "Floyet primarily focuses on its own product platforms, while also partnering selectively with businesses for high-quality web and mobile software solutions."
    },
    {
      question: "Where is Floyet located?",
      answer: "Our headquarters are located in Kozhikode, Kerala, India, at the Hilite Business Park."
    },
    {
      question: "How can I contact support?",
      answer: "You can reach our support team by emailing info@floyet.com or by using the contact form on our website. We typically respond within 24 hours."
    }
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
    <main className="min-h-screen" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="section-eyebrow">Support</div>
          <h1 className="section-headline">Frequently Asked Questions</h1>
          <p className="section-subhead mx-auto">
            Everything you need to know about our products and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal fade-in">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-4 p-4 rounded-3xl" style={{ 
              background: "var(--color-background-elevated)", 
              border: "1px solid var(--color-separator)" 
            }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px", color: "var(--color-text-primary)" }}>
                {faq.question}
              </h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQPage;
