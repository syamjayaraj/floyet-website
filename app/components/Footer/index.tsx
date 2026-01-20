"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" style={{ backgroundColor: "var(--color-background-elevated)", paddingTop: "80px", paddingBottom: "40px" }}>
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="row g-4 g-lg-5 justify-content-between">
            {/* Company Info */}
            <div className="col-lg-4">
              <div className="footer-widget">
                <h4 className="footer-logo mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "24px" }}>FLOYET</h4>
                <p className="footer-description mb-4" style={{ color: "var(--color-text-secondary)", fontSize: "15px", lineHeight: 1.6 }}>
                  Building innovative digital solutions that transform
                  businesses and enhance user experiences.
                </p>
                <div className="social-links" style={{ display: "flex", gap: "16px" }}>
                  {[
                     { icon: "bi-linkedin", url: "https://www.linkedin.com/company/floyet", label: "LinkedIn" },
                     { icon: "bi-twitter-x", url: "https://x.com/floyet.tech", label: "X" },
                     { icon: "bi-instagram", url: "https://www.instagram.com/floyet.tech", label: "Instagram" },
                     { icon: "bi-github", url: "https://github.com/codeariv", label: "GitHub" }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      className="social-link"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: "var(--color-text-primary)", 
                        fontSize: "20px",
                        transition: "color 0.2s ease"
                      }}
                    >
                      <i className={`bi ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Links Block */}
            <div className="col-lg-2 col-6">
              <div className="footer-widget">
                <h5 className="footer-widget-title" style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "20px", color: "var(--color-text-tertiary)" }}>Company</h5>
                <ul className="footer-links list-unstyled" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li><a href="/#about" style={{ color: "var(--color-text-primary)", fontSize: "14px", textDecoration: "none" }}>About Us</a></li>
                  <li><a href="/#services" style={{ color: "var(--color-text-primary)", fontSize: "14px", textDecoration: "none" }}>Services</a></li>
                  <li><a href="/careers" style={{ color: "var(--color-text-primary)", fontSize: "14px", textDecoration: "none" }}>Careers</a></li>
                  <li><a href="/blog" style={{ color: "var(--color-text-primary)", fontSize: "14px", textDecoration: "none" }}>Blog</a></li>
                  <li><a href="/#contact" style={{ color: "var(--color-text-primary)", fontSize: "14px", textDecoration: "none" }}>Contact</a></li>
                </ul>
              </div>
            </div>

            {/* Products Block */}
            <div className="col-lg-2 col-6">
              <div className="footer-widget">
                <h5 className="footer-widget-title" style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "20px", color: "var(--color-text-tertiary)" }}>Products</h5>
                <ul className="footer-links list-unstyled" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <li><a href="https://gymtie.com" style={{ color: "var(--color-text-primary)", fontSize: "14px", textDecoration: "none" }}>GymTie</a></li>
                  <li><a href="https://youngmenu.com" style={{ color: "var(--color-text-primary)", fontSize: "14px", textDecoration: "none" }}>YoungMenu</a></li>
                </ul>
              </div>
            </div>

             {/* Contact Block - Simplified */}
             <div className="col-lg-3 col-12">
              <div className="footer-widget">
                 <h5 className="footer-widget-title" style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "20px", color: "var(--color-text-tertiary)" }}>Visit Us</h5>
                 <p style={{ color: "var(--color-text-secondary)", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>
                    Hilite Business Park<br />
                    Kozhikode, Kerala 673014
                 </p>
                 <a href="mailto:info@floyet.com" style={{ color: "var(--color-blue)", fontSize: "14px", textDecoration: "none" }}>info@floyet.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom" style={{ marginTop: "60px", paddingTop: "24px", borderTop: "1px solid var(--color-separator)" }}>
        <div className="container">
          <div className="row align-items-center justify-content-between g-3">
            <div className="col-md-auto">
              <p className="copyright-text" style={{ fontSize: "12px", color: "var(--color-text-tertiary)", margin: 0 }}>
                © {currentYear} Floyet Labs & Technologies LLP. All rights reserved.
              </p>
            </div>
            <div className="col-md-auto">
              <div className="footer-bottom-links" style={{ display: "flex", gap: "24px" }}>
                <Link href="/privacy" style={{ fontSize: "12px", color: "var(--color-text-secondary)", textDecoration: "none" }}>Privacy Policy</Link>
                <Link href="/terms" style={{ fontSize: "12px", color: "var(--color-text-secondary)", textDecoration: "none" }}>Terms of Service</Link>
                <Link href="/cookies" style={{ fontSize: "12px", color: "var(--color-text-secondary)", textDecoration: "none" }}>Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
