import { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact Floyet - GymTie & Product Inquiries",
  description:
    "Contact Floyet for GymTie gym management, partnerships, and support across our product portfolio.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page min-h-screen reveal fade-in">
      <Contact />
    </main>
  );
}
