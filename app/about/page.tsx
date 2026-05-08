import { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About Floyet - Company & Founders",
  description: "Learn about Floyet Labs & Technologies LLP, the Kerala-based product company behind GymTie, and meet founders Syamlal CM and Sruthilal CM.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen reveal fade-in" style={{ paddingTop: "72px" }}>
      <About />
    </main>
  );
}
