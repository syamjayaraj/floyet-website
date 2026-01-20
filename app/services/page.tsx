"use client";

import Services from "../components/Services";
import AppleNav from "../components/AppleNav";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <>
      <AppleNav />
      <main className="pt-24 min-h-screen bg-white">
        <Services />
      </main>
      <Footer />
    </>
  );
}
