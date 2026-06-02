import { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Floyet for product inquiries, partnerships, and support across our portfolio.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page min-h-screen">
      <Contact />
    </main>
  );
}
