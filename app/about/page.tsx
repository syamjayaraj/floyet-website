"use client";

import About from "../components/About";
import AppleNav from "../components/AppleNav";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <AppleNav />
      <main className="pt-24 min-h-screen bg-white">
        <About />
      </main>
      <Footer />
    </>
  );
}
