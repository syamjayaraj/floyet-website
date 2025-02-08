"use client";

import { useEffect } from "react";
import { initScrollReveal } from "./utils/scrollReveal";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return () => cleanup?.();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
