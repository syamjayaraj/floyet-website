import Header from "@/components/Header";
import Clients from "@/components/Clients";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="container">
      <div className="card custom-card">
        <div className="card-body">
          <img src="/assets/images/floyet-logo.png" className="logo" />
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
          <Products />
          {/* <Services /> */}
          <Clients />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
