import { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About Floyet - GymTie Flagship & Founders",
  description:
    "Floyet Labs builds GymTie, India's flagship gym ecosystem, from Kerala. Meet founders Syamlal CM and Sruthilal CM and learn about our product portfolio.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen reveal fade-in about-page">
      <About />
    </main>
  );
}
