import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Clients from "@/components/Clients";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="container">
      <div className="card custom-card">
        <div className="card-body">
          <ul className="menu">
            <div className="call">
              <i className="bi bi-telephone call-icon"></i>
              <div>
                <div className="college">
                  <a href="tel:+919746742650" target="_blank" rel="noreferrer">
                    +91-9746742650
                  </a>
                </div>
              </div>
            </div>
          </ul>
          <Header />
          {/* <About />
          <Experience /> */}
          <Works />
          <Clients />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
