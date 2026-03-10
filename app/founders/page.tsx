import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Founders - Floyet",
  description: "Meet the visionary leadership team behind Floyet. Syamlal CM and Sruthilal CM are crafting digital solutions for tomorrow's challenges.",
};

const FoundersPage = () => {
  const founders = [
    {
      name: "Syamlal CM",
      role: "Chief Executive Officer",
      bio: "Syamlal is a visionary technologist with over 7 years of experience in building elite digital products. Under his leadership, Floyet has scaled to serve over 100 enterprise clients and 50,000+ active users.",
      image: "/syamlal.jpg",
      website: "https://syam.me/",
      linkedin: "https://www.linkedin.com/in/syamlal-cm/"
    },
    {
      name: "Sruthilal CM",
      role: "Co-Founder",
      bio: "Sruthilal leads the sales, marketing, and strategic growth initiatives at Floyet. With a deep understanding of market dynamics, he ensures our products reach the right audience and deliver maximum business value.",
      image: "/sruthilal.png",
      linkedin: "https://www.linkedin.com/in/sruthilal-cm/"
    }
  ];

  return (
    <main className="min-h-screen" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="section-eyebrow">Leadership</div>
          <h1 className="section-headline">Our Founders</h1>
          <p className="section-subhead mx-auto">
            The visionary team driving innovation and excellence at Floyet.
          </p>
        </div>

        <div className="row g-5 mt-4 justify-content-center">
          {founders.map((founder, index) => (
            <div key={index} className="col-lg-5 col-md-6 reveal fade-in-up" style={{ transitionDelay: `${index * 0.2}s` }}>
              <div className="founder-card p-4 rounded-3xl h-100" style={{ 
                background: "var(--color-background-elevated)", 
                border: "1px solid var(--color-separator)",
                overflow: "hidden"
              }}>
                <div className="image-container mb-4 rounded-2xl overflow-hidden" style={{ aspectRatio: "1/1", position: "relative" }}>
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="founder-image"
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  />
                </div>
                <h3 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px", color: "var(--color-text-primary)" }}>
                  {founder.name}
                </h3>
                <div style={{ 
                  color: "var(--color-text-tertiary)", 
                  fontSize: "14px", 
                  fontWeight: 600, 
                  textTransform: "uppercase", 
                  letterSpacing: "0.1em",
                  marginBottom: "20px"
                }}>
                  {founder.role}
                </div>
                <p style={{ 
                  color: "var(--color-text-secondary)", 
                  fontSize: "17px", 
                  lineHeight: "1.7",
                  marginBottom: "24px"
                }}>
                  {founder.bio}
                </p>

                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  {founder.linkedin && (
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover-lift social-link-linkedin"
                      style={{ color: "var(--color-text-tertiary)", fontSize: "20px", transition: "color 0.2s ease" }}
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  )}
                  {founder.website && (
                    <a 
                      href={founder.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover-lift social-link-website"
                      style={{ color: "var(--color-text-tertiary)", fontSize: "20px", transition: "color 0.2s ease" }}
                    >
                      <i className="bi bi-globe"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-5 text-center reveal fade-in">
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "24px", color: "var(--color-text-primary)" }}>Our Vision</h2>
            <p style={{ fontSize: "20px", color: "var(--color-text-secondary)", lineHeight: "1.6" }}>
              "We focus on creating products that don't just solve problems, but elevate the way people work and live. Every line of code and every pixel we craft is a step towards a more efficient future."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoundersPage;
