"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./styles.css";

const AppleNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const products = [
    {
      name: "GymTie",
      href: "/gymtie",
      description: "Complete gym management solution",
      icon: "bi-activity",
    },
    {
      name: "YoungMenu",
      href: "https://youngmenu.com",
      description: "Virtual menu platform",
      icon: "bi-shop",
      external: true,
    },
    {
      name: "Onebest",
      href: "https://onebest.in",
      description: "Curated gift shop",
      icon: "bi-gift",
      external: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`apple-nav ${isScrolled ? "scrolled" : ""}`}>
        <div className="apple-nav-container">
          {/* Logo */}
          <Link href="/" className="apple-nav-logo">
            FLOYET
          </Link>

          {/* Desktop Navigation */}
          <div className="apple-nav-items">
            <Link href="/products" className="apple-nav-link" onMouseEnter={() => setActiveDropdown("Products")} onMouseLeave={() => setActiveDropdown(null)}>
              Products
            </Link>
            
            <Link href="/about" className="apple-nav-link">
              About
            </Link>
            <Link href="/services" className="apple-nav-link">
              Services
            </Link>
            <Link href="/contact" className="apple-nav-link">
              Contact
            </Link>

            {/* Dropdown for Products */}
             <div
                className={`apple-nav-dropdown ${
                  activeDropdown === "Products" ? "active" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("Products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="apple-nav-dropdown-content">
                  {products.map((product) => (
                    <Link 
                      key={product.name}
                      href={product.href} 
                      className="dropdown-item"
                      target={product.external ? "_blank" : undefined}
                      rel={product.external ? "noopener noreferrer" : undefined}
                    >
                      <i className={`bi ${product.icon}`}></i>
                      <div>
                        <div className="dropdown-title">{product.name}</div>
                        <div className="dropdown-description">
                          {product.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`apple-nav-mobile-btn ${
              isMobileMenuOpen ? "active" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`apple-mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="apple-mobile-menu-content">
          <div className="mobile-menu-section">
            <div className="mobile-menu-label">Products</div>
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="mobile-menu-item"
                onClick={() => setIsMobileMenuOpen(false)}
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noopener noreferrer" : undefined}
              >
                <i className={`bi ${product.icon}`}></i>
                <div>
                  <div className="mobile-item-name">{product.name}</div>
                  <div className="mobile-item-description">
                    {product.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mobile-menu-section">
            <Link
              href="/about"
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/training"
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Training
            </Link>
            <Link
              href="/careers"
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/blog"
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="apple-mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default AppleNav;
