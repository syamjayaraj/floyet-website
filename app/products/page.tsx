import { Metadata } from "next";
import Products from "../components/Products";

export const metadata: Metadata = {
  title: "Products - GymTie, YoungMenu, DevaPatha & Onebest",
  description:
    "Explore Floyet products including GymTie for gym management, YoungMenu for food businesses, DevaPatha for temple management, and Onebest Gifts.",
  alternates: {
    canonical: "https://floyet.com/products",
  },
  openGraph: {
    title: "Floyet Products - Vertical Software Platforms",
    description:
      "GymTie, YoungMenu, DevaPatha, and Onebest: focused products built by Floyet for real-world business and community workflows.",
    url: "https://floyet.com/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main className="pt-24 min-h-screen">
      <Products />
    </main>
  );
}
