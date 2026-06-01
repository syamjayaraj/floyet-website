"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./styles.css";

import Image from "next/image";
import { products as productCatalog } from "@/app/data/products";

const AppleNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const products = productCatalog.map((p) => ({
    name: p.flagship ? `${p.name} · Flagship` : p.name,
    href: p.href,
    description: p.description,
    logo: p.logo,
    external: true,
  }));

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
          <Link
            href="/"
            className="apple-nav-logo"
            style={{ display: "flex", alignItems: "center", gap: "0px" }}
          >
            <Image
              src="/logo.png"
              alt="Floyet Logo"
              width={32}
              height={32}
              style={{ objectFit: "contain" }}
            />
            FLOYET
          </Link>

          {/* Desktop Navigation */}
          <div className="apple-nav-items">
            <div
              className="apple-nav-link-wrapper"
              onMouseEnter={() => setActiveDropdown("Products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="/products" className="apple-nav-link">
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
                      <Image
                        src={product.logo}
                        alt={`${product.name} logo`}
                        width={32}
                        height={32}
                        className="dropdown-product-logo"
                      />
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
            <Link href="/careers" className="apple-nav-link">
              Careers
            </Link>
            <Link href="/blog" className="apple-nav-link">
              Blog
            </Link>
            <Link href="/contact" className="apple-nav-link">
              Contact
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
            <Link
              href="/products"
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All products
            </Link>
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="mobile-menu-item"
                onClick={() => setIsMobileMenuOpen(false)}
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noopener noreferrer" : undefined}
              >
                <Image
                  src={product.logo}
                  alt={`${product.name} logo`}
                  width={32}
                  height={32}
                  className="mobile-product-logo"
                />
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
