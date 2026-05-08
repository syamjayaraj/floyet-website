import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Floyet Labs & Technologies",
  description: "Review the Terms of Service for using Floyet's digital products and services.",
};

const TermsOfService = () => {
  return (
    <div className="policy-page">
      <div className="container py-6">
        <h1 className="policy-title">Terms of Service</h1>
        <div className="policy-content reveal fade-in">
          <section className="policy-section">
            <p className="text-secondary mb-4">Last Updated: March 9, 2026</p>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Floyet’s websites, applications (including GymTie, YoungMenu, and Onebest), and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Intellectual Property</h2>
            <p>
              All content, features, and functionality on our platforms-including text, graphics, logos, and code-are the exclusive property of Floyet Labs & Technologies LLP and are protected by international intellectual property laws.
            </p>
          </section>

          <section className="policy-section">
            <h2>4. Limitation of Liability</h2>
            <p>
              Floyet shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business interests.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
