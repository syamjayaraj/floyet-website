"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./styles.css";

import Image from "next/image";

const AppleNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const products = [
    {
      name: "GymTie",
      href: "https://gymtie.com",
      description: "Complete gym management solution",
      icon: "bi-activity",
      logo: "/assets/logo/gymtie.png",
      external: true,
    },
    {
      name: "YoungMenu",
      href: "https://youngmenu.com",
      description: "Restaurant branding & digital solutions",
      icon: "bi-shop",
      logo: "/assets/logo/youngmenu.png",
      external: true,
    },
    {
      name: "DevaPatha",
      href: "https://devapatha.com",
      description: "Temple management platform",
      icon: "bi-flower1",
      logo: "/assets/logo/devapatha.png",
      external: true,
    },
    {
      name: "Onebest",
      href: "https://onebest.in",
      description: "Curated gift shop",
      icon: "bi-gift",
      logo: "/assets/logo/onebest.png",
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
          <Link href="/" className="apple-nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image src="/logo.png" alt="Floyet Logo" width={32} height={32} style={{ objectFit: 'contain' }} />
            FLOYET
          </Link>

          {/* Desktop Navigation */}
          <div className="apple-nav-items">
            <div className="apple-nav-link-wrapper" onMouseEnter={() => setActiveDropdown("Products")} onMouseLeave={() => setActiveDropdown(null)}>
              <Link href="/#products" className="apple-nav-link">
                Products
              </Link>
              {/* Dropdown for Products */}
              <div
                className={`apple-nav-dropdown ${
                  activeDropdown === "Products" ? "active" : ""
                }`}
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
                      {product.logo ? (
                        <Image
                          src={product.logo}
                          alt={`${product.name} logo`}
                          width={32}
                          height={32}
                          className="dropdown-product-logo"
                        />
                      ) : (
                        <i className={`bi ${product.icon}`}></i>
                      )}
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
            
            <Link href="/about" className="apple-nav-link">
              About
            </Link>
            <Link href="/founders" className="apple-nav-link">
              Founders
            </Link>
            <Link href="/careers" className="apple-nav-link">
              Careers
            </Link>
            <Link href="/blog" className="apple-nav-link">
              Blog
            </Link>
            <Link href="/contact" className="apple-nav-link">
              Contact
            </Link>

            <Link href="/#contact" className="btn-apple-nav">
              Get Started
            </Link>
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
                {product.logo ? (
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    width={32}
                    height={32}
                    className="mobile-product-logo"
                  />
                ) : (
                  <i className={`bi ${product.icon}`}></i>
                )}
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
              href="/founders"
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Founders
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
            <Link
              href="/contact"
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div style={{ marginTop: "24px" }}>
              <Link 
                href="/#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-apple-nav mobile-cta" 
              >
                Get Started
              </Link>
            </div>
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
