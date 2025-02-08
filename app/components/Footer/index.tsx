"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      {/* Main Footer */}
      <div className="footer-main py-5">
        <div className="container">
          <div className="row g-4">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <h4 className="text-white mb-4">FLOYET</h4>
                <p className="text-light-gray mb-4">
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
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h5 className="text-white mb-4">Quick Links</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#products">Products</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="#careers">Careers</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h5 className="text-white mb-4">Our Services</h5>
                <ul className="footer-links">
                  <li>
                    <a href="#web-development">Web Development</a>
                  </li>
                  <li>
                    <a href="#mobile-apps">Mobile Applications</a>
                  </li>
                  <li>
                    <a href="#cloud-services">Cloud Services</a>
                  </li>
                  <li>
                    <a href="#ai-solutions">AI Solutions</a>
                  </li>
                  <li>
                    <a href="#consulting">IT Consulting</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h5 className="text-white mb-4">Contact Info</h5>
                <div className="contact-info">
                  <div className="d-flex mb-3">
                    <i className="bi bi-geo-alt me-3"></i>
                    <p className="text-light-gray mb-0">
                      Hilite Business Park, Olavanna
                      <br />
                      Kozhikode – 673014
                    </p>
                  </div>
                  <div className="d-flex mb-3">
                    <i className="bi bi-envelope me-3"></i>
                    <a
                      href="mailto:info@floyet.com"
                      className="text-light-gray"
                    >
                      info@floyet.com
                    </a>
                  </div>
                  <div className="d-flex">
                    <i className="bi bi-telephone me-3"></i>
                    <a href="tel:+919746742650" className="text-light-gray">
                      +91 974 674 2650
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-light-gray">
                © {currentYear} Floyet Labs & Technologies. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <div className="footer-bottom-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
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
