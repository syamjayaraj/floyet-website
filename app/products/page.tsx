import { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Products from "../components/Products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the Floyet product portfolio — focused software for fitness, food, temples, finance, and retail.",
  alternates: {
    canonical: "https://floyet.com/products",
  },
  openGraph: {
    title: "Floyet Products",
    description:
      "GymTie, Livonomi, YoungMenu, DevaPatha, and Onebest — focused software for real-world workflows.",
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
