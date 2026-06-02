import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { fetchPolicyContent } from "../lib/policy-content";

export const metadata: Metadata = {
  title: "Cookie Policy - Floyet Labs & Technologies",
  description: "Learn how Floyet uses cookies and similar technologies to improve your experience on our websites.",
};

const FALLBACK_CONTENT = `
Last Updated: March 9, 2026

## Cookie policy content unavailable

We could not load the latest cookie policy content right now.
Please try again later.
`;

const CookiePolicy = async () => {
  const markdown = await fetchPolicyContent("/cookie");

  return (
    <main id="main-content" className="policy-page">
      <div className="container py-6">
        <h1 className="policy-title">Cookie Policy</h1>
        <div className="policy-content reveal fade-in">
          <ReactMarkdown>{markdown || FALLBACK_CONTENT}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicy;
