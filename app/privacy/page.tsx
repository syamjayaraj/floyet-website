import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Floyet Labs & Technologies",
  description: "Read the Privacy Policy for Floyet Labs & Technologies to understand how we collect, use, and protect your personal information.",
};

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="container py-6">
        <h1 className="policy-title">Privacy Policy</h1>
        <div className="policy-content reveal fade-in">
          <section className="policy-section">
             <p className="text-secondary mb-4">Last Updated: March 9, 2026</p>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provides directly to us when you interact with our websites, products, and services. This includes:
            </p>
            <ul>
              <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and mailing address.</li>
              <li><strong>Professional Information:</strong> Job title and company name.</li>
              <li><strong>Digital Activity:</strong> IP address, browser type, and interaction data with our platform.</li>
              <li><strong>Account Details:</strong> Login credentials and subscription preferences.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>Floyet uses the collected data for various purposes, including:</p>
            <ul>
              <li>To provide, maintain, and improve our digital products (GymTie, YoungMenu, Onebest).</li>
              <li>To manage your account and provide customer support.</li>
              <li>To communicate updates, security alerts, and administrative messages.</li>
              <li>To analyze usage patterns to enhance user experience and performance.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We may share information only in specific circumstances:
            </p>
             <ul>
              <li>With third-party service providers (like hosting and analytics) who assist in our operations.</li>
              <li>To comply with a legal summons, court order, or similar legal process.</li>
              <li>In connection with a merger, sale of assets, or acquisition.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict the processing of your data.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:
            </p>
            <div className="mt-4">
              <p><strong>Email:</strong> privacy@floyet.com</p>
              <p><strong>Address:</strong> Hilite Business Park, Kozhikode, Kerala, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
