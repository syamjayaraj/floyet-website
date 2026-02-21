"use client";

const Hero = () => {
  return (
    <section className="apple-hero" style={{ background: "var(--color-background)", padding: "160px 0 100px", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative" }} id="home">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="apple-hero-content" style={{ textAlign: "center" }}>
          <div className="apple-hero-eyebrow" style={{ color: "var(--color-text-secondary)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "14px", marginBottom: "16px" }}>Floyet Labs & Technologies</div>
          <h1 className="apple-hero-headline" style={{ fontWeight: 800, fontSize: "clamp(48px, 8vw, 84px)", letterSpacing: "-0.02em", marginBottom: "24px", color: "var(--color-text-primary)" }}>
            Solving simple problems<br/>with <span style={{ color: "var(--color-text-secondary)" }}>simple solutions.</span>
          </h1>
          <p className="apple-hero-subhead" style={{ color: "var(--color-text-secondary)", fontSize: "20px", maxWidth: "600px", margin: "0 auto 40px" }}>
            We build focused, high-quality products that make everyday business operations easier.
          </p>
          <div className="apple-hero-cta" style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <a href="#products" className="btn-apple btn-apple-secondary" style={{ padding: "12px 28px", fontSize: "15px", borderRadius: "100px", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px" }}>
              Explore Products <i className="bi bi-arrow-down" style={{ fontSize: "16px" }}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
