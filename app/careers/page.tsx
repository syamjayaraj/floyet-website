import { Metadata } from "next";
import CareersList from "../components/CareersList";

export const metadata: Metadata = {
  title: "Careers at Floyet - Join Our Team of Innovators",
  description: "Want to help build the future of digital products? Explore career opportunities at Floyet and join a team of passionate creators and problem-solvers.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen" style={{ paddingTop: "72px" }}>
      <CareersList />
    </main>
  );
}
