import { Metadata } from "next";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";

export const metadata: Metadata = {
  title: "Floyet - Focused Digital Products for Real-World Impact",
  description: "Floyet builds modern, high-quality digital products like GymTie and YoungMenu designed to solve real-world business challenges and streamline everyday life.",
};

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Products />
        <Contact />
      </main>
    </>
  );
}
