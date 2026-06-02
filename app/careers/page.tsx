import { Metadata } from "next";
import CareersList from "../components/CareersList";
import { fetchCareers } from "../lib/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Floyet Labs and help build focused products for fitness, food, temples, finance, and retail.",
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
