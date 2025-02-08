import Header from "./components/Header";
import Hero from "./components/Hero/index";
import About from "./components/About/index";
import Services from "./components/Services/index";
import Products from "./components/Products/Products";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
