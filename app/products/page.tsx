"use client";

import Products from "../components/Products";
import AppleNav from "../components/AppleNav";
import Footer from "../components/Footer";

export default function ProductsPage() {
  return (
    <>
      <AppleNav />
      <main className="pt-24 min-h-screen bg-white">
        <Products />
      </main>
      <Footer />
    </>
  );
}
