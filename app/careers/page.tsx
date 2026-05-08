import { Metadata } from "next";
import CareersList from "../components/CareersList";

export const metadata: Metadata = {
  title: "Careers at Floyet - Build Practical Product Software",
  description: "Explore career opportunities at Floyet Labs & Technologies LLP and help build focused products like GymTie for real-world business operations.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen" style={{ paddingTop: "72px" }}>
      <CareersList />
    </main>
  );
}
