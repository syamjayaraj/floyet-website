"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Products", href: "/#products" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: isScrolled || isMobileMenuOpen ? "rgba(11, 11, 15, 0.85)" : "transparent",
        backdropFilter: isScrolled || isMobileMenuOpen ? "blur(20px)" : "none",
        borderBottom: isScrolled || isMobileMenuOpen ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="container" style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        height: "72px" 
      }}>
        {/* Logo */}
        <Link href="/" style={{ 
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "var(--color-text-primary)", 
          fontWeight: 700, 
          fontSize: "20px", 
          textDecoration: "none", 
          letterSpacing: "2px",
          zIndex: 10001
        }}>
          <Image src="/logo.png" alt="Floyet Logo" width={32} height={32} style={{ objectFit: 'contain' }} />
          FLOYET
        </Link>

        {/* Desktop Navigation */}
        <nav className="d-none d-md-flex" style={{ gap: "32px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: pathname === link.href ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                letterSpacing: "0.02em"
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "var(--color-text-primary)"}
              onMouseOut={(e) => e.currentTarget.style.color = pathname === link.href ? "var(--color-text-primary)" : "var(--color-text-secondary)"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="d-none d-md-block">
          <Link href="/#contact" className="btn-apple btn-apple-primary" style={{ padding: "8px 20px", fontSize: "13px" }}>
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="d-md-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "var(--color-text-primary)",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 10001,
            padding: "8px"
          }}
        >
          <i className={`bi ${isMobileMenuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(11, 11, 15, 0.98)",
          zIndex: 10000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
          animation: "fadeIn 0.3s ease"
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "24px", textAlign: "center", width: "100%" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: "32px",
                  fontWeight: 600,
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ marginTop: "24px" }}>
              <Link 
                href="/#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-apple btn-apple-primary" 
                style={{ padding: "16px 40px", fontSize: "18px", width: "100%" }}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
