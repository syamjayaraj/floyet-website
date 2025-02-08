"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed-top ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="container-fluid px-4">
          <div className="d-flex align-items-center py-1">
            <div className="d-flex align-items-center">
              <button
                className={`hamburger-btn ${isMenuOpen ? "active" : ""} ${
                  isScrolled ? "scrolled" : ""
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <Link
                href="/"
                className={`navbar-brand fw-bold ms-0 ${
                  isScrolled ? "text-dark" : "text-white"
                }`}
                style={{ fontSize: "1.4rem", marginTop: ".1rem" }}
              >
                FLOYET
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Side Menu */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="side-menu-content">
          <nav className="side-nav">
            <ul className="list-unstyled">
              <li>
                <Link
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="side-nav-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="side-nav-link"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="side-nav-link"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  onClick={() => setIsMenuOpen(false)}
                  className="side-nav-link"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="side-nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="side-menu-footer mt-auto">
            <div className="social-links mb-4">
              <a href="#" className="social-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <p className="text-muted small">
              © 2024 Floyet Labs & Technologies
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </>
  );
};

export default Header;
