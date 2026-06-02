import { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About Floyet - Products & Founders",
  description:
    "Floyet Labs builds product software across fitness, food, temples, finance, and retail from Kerala. Meet founders Syamlal CM and Sruthilal CM and explore our portfolio.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen about-page">
      <About />
    </main>
  );
}
