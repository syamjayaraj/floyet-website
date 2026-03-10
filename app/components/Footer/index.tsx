"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "GymTie", href: "https://gymtie.com", external: true },
        { label: "YoungMenu", href: "https://youngmenu.com", external: true },
        { label: "Onebest", href: "https://onebest.in", external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Founders", href: "/founders" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Status", href: "/status" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    { icon: "bi-linkedin", url: "https://www.linkedin.com/company/floyet", label: "LinkedIn" },
    { icon: "bi-twitter-x", url: "https://x.com/floyet.tech", label: "X" },
    { icon: "bi-instagram", url: "https://www.instagram.com/floyet.tech", label: "Instagram" },
    { icon: "bi-github", url: "https://github.com/codeariv", label: "GitHub" },
  ];

  return (
    <footer style={{ 
      backgroundColor: "var(--color-background)", 
      borderTop: "1px solid var(--color-separator)", 
      paddingTop: "80px", 
      paddingBottom: "40px" 
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "48px",
          marginBottom: "64px"
        }}>
          {/* Brand Column */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ 
              color: "var(--color-text-primary)", 
              fontWeight: 700, 
              fontSize: "24px", 
              textDecoration: "none", 
              letterSpacing: "2px",
              display: "block",
              marginBottom: "24px"
            }}>
              FLOYET
            </Link>
            <p style={{ 
              color: "var(--color-text-secondary)", 
              fontSize: "15px", 
              lineHeight: "1.6",
              maxWidth: "240px" 
            }}>
              Building high-quality digital products that transform business operations.
            </p>
          </div>

          {/* Sitemaps */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 style={{ 
                fontSize: "14px", 
                fontWeight: 600, 
                color: "var(--color-text-primary)", 
                textTransform: "uppercase", 
                letterSpacing: "0.1em",
                marginBottom: "24px" 
              }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} style={{ marginBottom: "12px" }}>
                    {'external' in link && link.external ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ 
                          fontSize: "15px", 
                          color: "var(--color-text-secondary)", 
                          textDecoration: "none",
                          transition: "color 0.2s ease" 
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = "var(--color-text-primary)"}
                        onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"}
                      >
                        {link.label === "YoungMenu" ? (
                          <>
                            {link.label}
                            <span style={{ fontSize: "10px", marginLeft: "8px", opacity: 0.6, fontWeight: 500 }}>(Coming Soon)</span>
                          </>
                        ) : (
                          link.label
                        )}
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        style={{ 
                          fontSize: "15px", 
                          color: "var(--color-text-secondary)", 
                          textDecoration: "none",
                          transition: "color 0.2s ease" 
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = "var(--color-text-primary)"}
                        onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          justifyContent: "space-between", 
          alignItems: "center", 
          gap: "24px",
          paddingTop: "32px",
          borderTop: "1px solid var(--color-separator)"
        }}>
          {/* Copyright */}
          <p style={{ fontSize: "14px", color: "var(--color-text-tertiary)", margin: 0 }}>
            © {currentYear} Floyet Labs & Technologies LLP. All rights reserved.
          </p>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "20px" }}>
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: "var(--color-text-tertiary)", 
                  fontSize: "18px",
                  transition: "color 0.2s ease"
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "var(--color-text-primary)"}
                onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-tertiary)"}
              >
                <i className={`bi ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
