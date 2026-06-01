import { Metadata } from "next";
import CareersList from "../components/CareersList";

export const metadata: Metadata = {
  title: "Careers at Floyet - Build GymTie & Product Software",
  description:
    "Join Floyet Labs and help build GymTie, our flagship gym ecosystem, and other focused products for real-world operations.",
};

export default function CareersPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <CareersList />
    </main>
  );
}
