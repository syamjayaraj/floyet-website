"use client";

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="container py-6">
        <h1 className="policy-title">Privacy Policy</h1>
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Email address and phone numbers</li>
              <li>Company information</li>
              <li>Usage data and preferences</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Notify you about changes to our services</li>
              <li>Provide customer support</li>
              <li>Monitor the usage of our services</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>Email: info@floyet.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
