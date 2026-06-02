import { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Products from "../components/Products";

export const metadata: Metadata = {
  title: "Products - GymTie, YoungMenu, DevaPatha, Livonomi & Onebest",
  description:
    "Explore Floyet products: GymTie, YoungMenu, DevaPatha, Livonomi, and Onebest - focused software for real-world workflows.",
  alternates: {
    canonical: "https://floyet.com/products",
  },
  openGraph: {
    title: "Floyet Products - Modern Vertical Platforms",
    description:
      "GymTie, YoungMenu, DevaPatha, Livonomi, and Onebest - focused software for real-world workflows.",
    url: "https://floyet.com/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main id="main-content" className="products-page">
      <div className="container products-page-intro">
        <PageHeader
          eyebrow="Products"
          title="Products built for specific workflows."
          subtitle="Explore the Floyet portfolio across fitness, food, temple, finance, and retail markets."
        />
      </div>
      <Products />
    </main>
  );
}
