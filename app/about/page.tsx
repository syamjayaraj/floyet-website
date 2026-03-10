import { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About Floyet - Crafting Future-Ready Digital Solutions",
  description: "Learn about Floyet's mission to develop high-quality applications like GymTie and YoungMenu that address real-world challenges with innovative technology.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen reveal fade-in" style={{ paddingTop: "72px" }}>
      <About />
    </main>
  );
}
