import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Floyet Labs & Technologies",
  description: "Learn how Floyet uses cookies and similar technologies to improve your experience on our websites.",
};

const CookiePolicy = () => {
  return (
    <div className="policy-page">
      <div className="container py-6">
        <h1 className="policy-title">Cookie Policy</h1>
        <div className="policy-content reveal fade-in">
          <section className="policy-section">
            <p className="text-secondary mb-4">Last Updated: March 9, 2026</p>
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device by websites that you visit. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. How We Use Cookies</h2>
            <p>Floyet uses cookies for several reasons:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site by collecting and reporting information anonymously.</li>
              <li><strong>Preference Cookies:</strong> Allow the website to remember information that changes the way the site behaves or looks.</li>
              <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Controlling Cookies</h2>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a>.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Third-Party Cookies</h2>
            <p>
              In some special cases, we also use cookies provided by trusted third parties. The following section details which third-party cookies you might encounter through this site:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> One of the most widespread and trusted analytics solutions for helping us understand how you use the site and ways we can improve your experience.</li>
            </ul>
          </section>

          <section className="policy-section">
             <h2>5. Changes to This Policy</h2>
             <p>
               We may update our Cookie Policy from time to time. We encourage you to periodically review this page for the latest information on our cookie practices.
             </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
