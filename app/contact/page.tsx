import { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact Floyet - Let's Transform Your Business",
  description: "Ready to scale and streamline your operations? Reach out to Floyet today to discover how our digital products can help you succeed.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen reveal fade-in" style={{ paddingTop: "72px" }}>
      <Contact />
    </main>
  );
}
