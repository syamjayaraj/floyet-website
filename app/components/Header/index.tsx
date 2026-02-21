"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = ({ isCareersPage }: { isCareersPage?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: isScrolled ? "rgba(11, 11, 15, 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "64px" }}>
        {/* Logo Centered */}
        <Link href="/" style={{ color: "var(--color-text-primary)", fontWeight: 700, fontSize: "20px", textDecoration: "none", letterSpacing: "2px" }}>
          FLOYET
        </Link>
      </div>
    </header>
  );
};

export default Header;
