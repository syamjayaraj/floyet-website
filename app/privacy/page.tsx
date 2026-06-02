import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { fetchPolicyContent } from "../lib/policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy - Floyet Labs & Technologies",
  description: "Read the Privacy Policy for Floyet Labs & Technologies to understand how we collect, use, and protect your personal information.",
};

const FALLBACK_CONTENT = `
Last Updated: March 9, 2026

## Privacy Policy content unavailable

We could not load the latest privacy policy content right now.
Please try again later or contact us at **privacy@floyet.com**.
`;

const PrivacyPolicy = async () => {
  const markdown = await fetchPolicyContent("/privacy-policy");

  return (
    <main id="main-content" className="policy-page">
      <div className="container py-6">
        <h1 className="policy-title">Privacy Policy</h1>
        <div className="policy-content reveal fade-in">
          <ReactMarkdown>{markdown || FALLBACK_CONTENT}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
