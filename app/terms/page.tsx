"use client";

const TermsOfService = () => {
  return (
    <div className="policy-page">
      <div className="container py-6">
        <h1 className="policy-title">Terms of Service</h1>
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Terms</h2>
            <p>
              By accessing our website and services, you agree to be bound by
              these terms of service and comply with all applicable laws and
              regulations.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily access our services for
              personal, non-commercial use only.
            </p>
            <p>
              This license shall automatically terminate if you violate any of
              these restrictions.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Disclaimer</h2>
            <p>
              Our services are provided "as is". We make no warranties,
              expressed or implied, and hereby disclaim all warranties of
              merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Limitations</h2>
            <p>
              In no event shall Floyet or its suppliers be liable for any
              damages arising out of the use or inability to use our services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
