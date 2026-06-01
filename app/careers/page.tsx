import { Metadata } from "next";
import CareersList from "../components/CareersList";
import { fetchCareers } from "../lib/careers";

export const metadata: Metadata = {
  title: "Careers at Floyet - Build GymTie & Product Software",
  description:
    "Join Floyet Labs and help build GymTie, our flagship gym ecosystem, and other focused products for real-world operations.",
};

export const revalidate = 60;

export default async function CareersPage() {
  let careers: Awaited<ReturnType<typeof fetchCareers>> = [];
  let fetchError = false;

  try {
    careers = await fetchCareers();
  } catch {
    fetchError = true;
  }

  return (
    <main id="main-content" className="min-h-screen">
      <CareersList initialCareers={careers} fetchError={fetchError} />
    </main>
  );
}
