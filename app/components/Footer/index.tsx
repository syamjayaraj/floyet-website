"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-background)", borderTop: "1px solid var(--color-separator)", paddingTop: "64px", paddingBottom: "64px" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
        
        {/* Social Links */}
        <div style={{ display: "flex", gap: "24px" }}>
          {[
             { icon: "bi-linkedin", url: "https://www.linkedin.com/company/floyet", label: "LinkedIn" },
             { icon: "bi-twitter-x", url: "https://x.com/floyet.tech", label: "X" },
             { icon: "bi-instagram", url: "https://www.instagram.com/floyet.tech", label: "Instagram" },
             { icon: "bi-github", url: "https://github.com/codeariv", label: "GitHub" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                color: "var(--color-text-secondary)", 
                fontSize: "20px",
                transition: "color 0.2s ease"
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "var(--color-text-primary)"}
              onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"}
            >
              <i className={`bi ${social.icon}`}></i>
            </a>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/privacy" style={{ fontSize: "14px", color: "var(--color-text-secondary)", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-text-primary)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"}>Privacy Policy</Link>
          <Link href="/terms" style={{ fontSize: "14px", color: "var(--color-text-secondary)", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-text-primary)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"}>Terms of Service</Link>
          <Link href="/cookies" style={{ fontSize: "14px", color: "var(--color-text-secondary)", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-text-primary)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"}>Cookie Policy</Link>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "14px", color: "var(--color-text-tertiary)", margin: 0, textAlign: "center" }}>
          © {currentYear} <a href="https://floyet.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-text-tertiary)", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-tertiary)"}>Floyet Labs & Technologies LLP</a>. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
