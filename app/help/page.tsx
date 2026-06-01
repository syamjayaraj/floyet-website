import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Help Center - Floyet & GymTie",
  description:
    "Get help with GymTie, Floyet's flagship gym platform, and our other products. Documentation, billing, and support resources.",
};

const HelpCenterPage = () => {
  const categories = [
    {
      title: "GymTie Help",
      icon: "bi-activity",
      description:
        "Guides for GymTie Manager (owners) and GymTie Fit (members) - billing, attendance, and member workflows.",
      link: "https://gymtie.com",
      external: true,
      featured: true,
    },
    {
      title: "All Products FAQ",
      icon: "bi-question-circle",
      description:
        "Answers about GymTie, YoungMenu, DevaPatha, Livonomi, and Onebest.",
      link: "/faq",
      external: false,
    },
    {
      title: "Account & Billing",
      icon: "bi-credit-card",
      description:
        "Subscriptions, invoices, and payment questions across Floyet products.",
      link: "/contact",
      external: false,
    },
    {
      title: "System Status",
      icon: "bi-heart-pulse",
      description:
        "Check operational status for GymTie, website, and other Floyet services.",
      link: "/status",
      external: false,
    },
    {
      title: "Partnerships",
      icon: "bi-building",
      description:
        "Enterprise, integrations, and custom software discussions with Floyet.",
      link: "/contact",
      external: false,
    },
    {
      title: "Contact Support",
      icon: "bi-headset",
      description:
        "Reach our team by form or email - we respond within 24 hours.",
      link: "/contact",
      external: false,
    },
  ];

  return (
    <main id="main-content" className="secondary-page">
      <div className="container">
        <PageHeader
          eyebrow="Resources"
          title="Help Center"
          subtitle="GymTie is our primary product. Find support paths for GymTie and the rest of the Floyet portfolio below."
        />

        <div className="help-grid reveal-stagger">
          {categories.map((cat) => {
            const card = (
              <div
                className={`help-card reveal-child ${cat.featured ? "help-card--featured" : ""}`}
              >
                <i
                  className={`bi ${cat.icon} help-card-icon`}
                  aria-hidden="true"
                />
                <h2 className="help-card-title">{cat.title}</h2>
                <p className="help-card-desc">{cat.description}</p>
                <span className="help-card-link">
                  {cat.external ? "Open GymTie" : "Learn more"}
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </span>
              </div>
            );

            return cat.external ? (
              <a
                key={cat.title}
                href={cat.link}
                className="help-card-anchor"
                target="_blank"
                rel="noopener noreferrer"
              >
                {card}
              </a>
            ) : (
              <Link
                key={cat.title}
                href={cat.link}
                className="help-card-anchor"
              >
                {card}
              </Link>
            );
          })}
        </div>

        <div className="help-cta reveal">
          <h3>Still need help?</h3>
          <p>Our support team assists with GymTie and all Floyet products.</p>
          <Link
            href="/contact"
            className="btn-apple btn-apple-primary hover-lift"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HelpCenterPage;
