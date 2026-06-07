import { Metadata } from "next";
import Hero from "./components/Hero";
import GymTieSpotlight from "./components/GymTieSpotlight";
import ProductTeasers from "./components/ProductTeasers";
import AboutTrust from "./components/AboutTrust";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Floyet - Focused Digital Products",
  description:
    "Floyet Labs builds focused software across fitness, food, temples, finance, and retail — GymTie, Livonomi, YoungMenu, DevaPatha, and Onebest.",
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
