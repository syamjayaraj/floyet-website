import { Metadata } from "next";
import Hero from "./components/Hero";
import GymTieSpotlight from "./components/GymTieSpotlight";
import ProductTeasers from "./components/ProductTeasers";
import AboutTrust from "./components/AboutTrust";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Floyet - GymTie Flagship & Focused Digital Products",
  description:
    "Floyet Labs builds GymTie, India's flagship gym management ecosystem, plus YoungMenu, DevaPatha, Livonomi, and Onebest - focused software for real-world operations.",
};

export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <Hero />
      <GymTieSpotlight />
      <ProductTeasers />
      <AboutTrust />
      <Contact />
    </main>
  );
}
