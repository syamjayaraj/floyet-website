"use client";

import { useEffect } from "react";
import { initScrollReveal } from "./utils/scrollReveal";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";

export default function Home() {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return () => cleanup?.();
  }, []);

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
