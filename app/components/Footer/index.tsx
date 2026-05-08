import Link from "next/link";
import "./styles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "GymTie", href: "https://gymtie.com", external: true },
        { label: "YoungMenu", href: "https://youngmenu.com", external: true },
        { label: "DevaPatha", href: "https://devapatha.com", external: true },
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
    <footer className="apple-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo">
              FLOYET
            </Link>
            <p className="footer-tagline">
              Building high-quality digital products that transform business operations.
            </p>
          </div>

          {/* Sitemaps */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="footer-section-title">
                {section.title}
              </h4>
              <ul className="footer-links-list">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="footer-link-item">
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        className="footer-link"
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
        <div className="footer-bottom">
          {/* Copyright */}
          <p className="footer-copyright">
            © {currentYear} Floyet Labs & Technologies LLP. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="footer-social-links">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
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
