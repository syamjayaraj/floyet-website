"use client";

const CookiePolicy = () => {
  return (
    <div className="policy-page">
      <div className="container py-6">
        <h1 className="policy-title">Cookie Policy</h1>
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer by
              websites that you visit. They are widely used to make websites
              work more efficiently and provide information to the owners of the
              site.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul>
              <li>Understand how you use our website</li>
              <li>Remember your preferences</li>
              <li>Improve your experience</li>
              <li>Analyze our website performance</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Types of Cookies We Use</h2>
            <ul>
              <li>Essential cookies</li>
              <li>Performance cookies</li>
              <li>Functionality cookies</li>
              <li>Analytics cookies</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Managing Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete
              all cookies that are already on your computer and you can set most
              browsers to prevent them from being placed.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
