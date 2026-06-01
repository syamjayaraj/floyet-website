import { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Products from "../components/Products";

export const metadata: Metadata = {
  title: "Products - GymTie Flagship, YoungMenu, DevaPatha, Livonomi & Onebest",
  description:
    "GymTie is Floyet's flagship gym ecosystem. Explore GymTie Manager and GymTie Fit, plus YoungMenu, DevaPatha, Livonomi, and Onebest.",
  alternates: {
    canonical: "https://floyet.com/products",
  },
  openGraph: {
    title: "Floyet Products - GymTie Flagship & Vertical Platforms",
    description:
      "GymTie leads Floyet's portfolio. Also: YoungMenu, DevaPatha, Livonomi, and Onebest for focused real-world workflows.",
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
          title="GymTie is our flagship. Everything else extends the same craft."
          subtitle="Floyet's primary investment is the GymTie fitness ecosystem for gym owners and members. Our other products serve food, temple, finance, and retail markets with the same problem-first approach."
        />
      </div>
      <Products />
    </main>
  );
}
