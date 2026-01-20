"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Header = ({ isCareersPage }: { isCareersPage?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    {
      name: "Products",
      href: "/#products",
      dropdown: [
        { name: "GymTie", href: "https://gymtie.com", desc: "Gym Management Software" },
        { name: "YoungMenu", href: "https://youngmenu.com", desc: "Digital Menu System" },
      ],
    },
    {
      name: "Services",
      href: "/#services",
      dropdown: [
        { name: "Web Development", href: "/#services", desc: "Custom Web Solutions" },

        { name: "Mobile Apps", href: "/#services", desc: "iOS & Android Development" },
        { name: "Shopify", href: "/#services", desc: "E-Commerce Solutions" },
      ],
    },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`apple-nav ${
          isScrolled || isCareersPage ? "scrolled" : ""
        } ${isMenuOpen ? "menu-open" : ""}`}
      >
        <div className="apple-nav-container">
          {/* Logo */}
          <Link href="/" className="apple-nav-logo">
            FLOYET
          </Link>

          {/* Desktop Navigation */}
          <div className="apple-nav-items d-none d-lg-flex">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="apple-nav-item"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                <Link href={link.href} className="apple-nav-link">
                  {link.name}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="apple-nav-dropdown">
                    <div className="apple-nav-dropdown-content">
                      {link.dropdown.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="apple-dropdown-item"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          <span className="apple-dropdown-title">{item.name}</span>
                          <span className="apple-dropdown-desc">{item.desc}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`hamburger-btn d-lg-none ${isMenuOpen ? "active" : ""} ${
              isScrolled || isCareersPage ? "scrolled" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Side Menu */}
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="side-menu-content">
          <nav className="side-nav">
            <ul className="list-unstyled">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.dropdown ? (
                    <div className="mobile-dropdown-group">
                      <span className="side-nav-link mobile-group-title">{link.name}</span>
                      <ul className="list-unstyled mobile-sub-menu">
                        {link.dropdown.map((item, idx) => (
                          <li key={idx}>
                             <a
                              href={item.href}
                              className="side-nav-link sub-link"
                              onClick={() => setIsMenuOpen(false)}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="side-nav-link"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="side-menu-footer mt-auto">
            <div className="social-links mb-4">
              <a href="https://www.linkedin.com/company/floyet" target="_blank" className="social-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://x.com/floyet.tech" target="_blank" className="social-link">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://www.instagram.com/floyet.tech" target="_blank" className="social-link">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <p className="text-muted small">
              © {new Date().getFullYear()} Floyet Labs & Technologies
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <style jsx global>{`
        /* Dropdown Styles */
        .apple-nav-item {
          padding: 10px 0;
        }
        
        .apple-nav-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          padding: 8px;
          min-width: 260px;
          opacity: 0;
          animation: dropdownFadeIn 0.2s ease forwards;
          border: 1px solid rgba(0,0,0,0.05);
        }

        @keyframes dropdownFadeIn {
          to { opacity: 1; transform: translateX(-50%) translateY(10px); }
        }

        .apple-nav-dropdown-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .apple-dropdown-item {
          display: block;
          padding: 10px 16px;
          border-radius: 8px;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }

        .apple-dropdown-item:hover {
          background-color: var(--color-fill);
        }

        .apple-dropdown-title {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 2px;
        }

        .apple-dropdown-desc {
          display: block;
          font-size: 12px;
          color: var(--color-text-secondary);
        }

        /* Mobile Submenu */
        .mobile-dropdown-group {
          margin-bottom: 12px;
        }

        .mobile-group-title {
          opacity: 0.6;
          font-size: 14px;
          text-transform: uppercase;
          margin-bottom: 8px !important;
          pointer-events: none;
        }

        .mobile-sub-menu {
          padding-left: 20px;
          border-left: 1px solid var(--color-separator);
          margin-bottom: 16px;
        }

        .sub-link {
          font-size: 16px !important;
          padding: 8px 0 !important;
        }

        /* Side Menu Styles */
        .side-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          z-index: 10000;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }

        .side-menu.open {
          right: 0;
        }

        .side-menu-content {
          padding: 80px 32px 40px;
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }

        .side-nav-link {
          display: block;
          padding: 12px 0;
          font-size: 24px;
          font-weight: 600;
          color: var(--color-text-primary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
          z-index: 9999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .menu-overlay.active {
          opacity: 1;
          pointer-events: auto;
        }

        @media (min-width: 992px) {
          .side-menu {
            display: none;
          }
          .menu-overlay {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
