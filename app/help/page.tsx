import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Center - Floyet",
  description: "Get help with Floyet products and services. Find documentation, guides, and support options.",
};

const HelpCenterPage = () => {
  const categories = [
    {
      title: "Product Help",
      icon: "bi-laptop",
      description: "Guides and tutorials for GymTie, Onebest, and YoungMenu (coming soon).",
      link: "/faq"
    },
    {
      title: "Account & Billing",
      icon: "bi-credit-card",
      description: "Manage your subscriptions, invoices, and payment methods.",
      link: "/contact"
    },
    {
      title: "API Documentation",
      icon: "bi-code-slash",
      description: "Technical resources for integrating with our platforms.",
      link: "/contact"
    },
    {
      title: "Enterprise Sales",
      icon: "bi-building",
      description: "Custom solutions and partnership opportunities for large organizations.",
      link: "/contact"
    }
  ];

  return (
    <main className="min-h-screen" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="section-eyebrow">Resources</div>
          <h1 className="section-headline">Help Center</h1>
          <p className="section-subhead mx-auto">
            Find the resources you need to succeed with Floyet.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="row g-4 reveal fade-in">
            {categories.map((cat, index) => (
              <div key={index} className="col-md-6">
                <Link href={cat.link} style={{ textDecoration: "none" }}>
                  <div className="h-100 p-5 rounded-3xl hover-lift" style={{ 
                    background: "var(--color-background-elevated)", 
                    border: "1px solid var(--color-separator)",
                    transition: "all 0.3s ease"
                  }}>
                    <i className={`bi ${cat.icon}`} style={{ fontSize: "32px", color: "var(--color-text-primary)", marginBottom: "20px", display: "block" }}></i>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", color: "var(--color-text-primary)" }}>{cat.title}</h3>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-5 p-5 rounded-3xl text-center reveal fade-in" style={{ background: "var(--color-background-elevated)", border: "1px solid var(--color-separator)" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px", color: "var(--color-text-primary)" }}>Still need help?</h3>
            <p className="text-secondary mb-4">Our support team is always here to assist you with any questions or issues.</p>
            <Link href="/contact" className="btn-apple btn-apple-primary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HelpCenterPage;
