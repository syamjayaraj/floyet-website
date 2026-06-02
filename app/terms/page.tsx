import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { fetchPolicyContent } from "../lib/policy-content";

export const metadata: Metadata = {
  title: "Terms of Service - Floyet Labs & Technologies",
  description:
    "Review the Terms of Service for using Floyet's digital products and services.",
};

const FALLBACK_CONTENT = `
Last Updated: March 9, 2026

## Terms content unavailable

We could not load the latest terms content right now.
Please try again later.
`;

const TermsOfService = async () => {
  const markdown = await fetchPolicyContent("/term");

  return (
    <main id="main-content" className="policy-page">
      <div className="container py-6">
        <h1 className="policy-title">Terms of Service</h1>
        <div className="policy-content reveal fade-in">
          <ReactMarkdown>{markdown || FALLBACK_CONTENT}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
