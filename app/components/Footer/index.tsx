"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* Company Info */}
            <div className="col-lg-5">
              <div className="footer-widget">
                <h4 className="footer-logo mb-4">FLOYET</h4>
                <p className="footer-description mb-4">
                  Building innovative digital solutions that transform
                  businesses and enhance user experiences. Our commitment to
                  excellence drives every project we undertake.
                </p>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="GitHub">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-4">
              <div className="footer-widget">
                <h5 className="footer-widget-title">Company</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#products">Products</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>

                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Products */}
            <div className="col-lg-2 col-md-4">
              <div className="footer-widget">
                <h5 className="footer-widget-title">Products</h5>
                <ul className="footer-links">
                  <li>
                    <a href="https://gymtie.com">GymTie</a>
                  </li>
                  <li>
                    <a href="https://parambath.onnich.com">Parambath</a>
                  </li>
                  <li>
                    <a href="https://youngmenu.com">YoungMenu</a>
                  </li>
                  <li>
                    <a href="https://kutyme.me">Kuty.me</a>
                  </li>
                  <li>
                    <a href="https://codeariv.com">CodeARIV</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-4">
              <div className="footer-widget">
                <h5 className="footer-widget-title">Contact</h5>
                <div className="footer-contact-info">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <p>
                      Floyet Labs & Technologies
                      <br />
                      Door No: 2211, 2/1149/I 100
                      <br />
                      Hilite Business Park
                      <br />
                      Kozhikode – 673014
                    </p>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <a href="mailto:info@floyet.com">info@floyet.com</a>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <a href="tel:+919746742650">+91 9746742650</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                © {currentYear}{" "}
                <a href="https://floyet.com">Floyet Labs & Technologies</a>. All
                rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-links">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/cookies">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="back-to-top"
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
