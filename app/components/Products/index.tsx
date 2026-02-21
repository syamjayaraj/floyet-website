"use client";

const Products = () => {
  return (
    <section className="apple-products section" id="products" style={{ background: "var(--color-background)", padding: "120px 0" }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: "80px" }}>
          <div className="section-eyebrow" style={{ color: "var(--color-text-secondary)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "14px", fontWeight: 700 }}>Our Impact</div>
          <h2 className="section-headline" style={{ fontWeight: 800, fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}>
            Problems we've fixed.
          </h2>
        </div>

        {/* GymTie Problem/Solution Block */}
        <div style={{ marginBottom: "64px", padding: "64px 48px", borderRadius: "24px", background: "linear-gradient(145deg, var(--color-background-elevated), transparent)", border: "1px solid var(--color-separator)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
           
           <div style={{ marginBottom: "40px" }}>
              <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(255, 69, 58, 0.1)", color: "#ff453a", fontSize: "14px", fontWeight: 600, marginBottom: "24px", border: "1px solid rgba(255, 69, 58, 0.2)" }}>The Problem</span>
              <h3 style={{ fontSize: "32px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "16px" }}>Gym management is chaotic and disconnected.</h3>
              <p style={{ fontSize: "20px", color: "var(--color-text-secondary)", maxWidth: "600px", margin: "0 auto" }}>Owners struggle with trailing payments, scattered member data, and manual operations that drain their time.</p>
           </div>
           
           <div style={{ width: "1px", height: "64px", background: "var(--color-separator)", margin: "0 auto 40px" }}></div>

           <div style={{ marginBottom: "40px" }}>
              <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(52, 199, 89, 0.1)", color: "#34c759", fontSize: "14px", fontWeight: 600, marginBottom: "24px", border: "1px solid rgba(52, 199, 89, 0.2)" }}>Our Solution</span>
              <div style={{ width: "80px", height: "80px", borderRadius: "20px", background: "var(--color-fill)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <i className="bi bi-activity" style={{ fontSize: "40px", color: "var(--color-text-primary)" }}></i>
              </div>
              <h4 style={{ fontSize: "28px", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "16px" }}>GymTie Manager</h4>
              <p style={{ fontSize: "18px", color: "var(--color-text-secondary)", maxWidth: "600px", margin: "0 auto" }}>A complete platform that streamlines billing, simplifies operations, and automates member tracking into one elegant tool.</p>
           </div>

           <a href="https://gymtie.com" className="btn-apple btn-apple-primary" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 32px", fontSize: "16px" }}>
              See how we fixed it <i className="bi bi-arrow-up-right ms-2"></i>
           </a>
        </div>

        {/* Onebest Section (Minimal) */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "32px 48px", borderRadius: "16px", background: "var(--color-background-elevated)", border: "1px solid var(--color-separator)", flexWrap: "wrap", gap: "24px" }}>
           <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
             <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255, 0, 77, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
               <i className="bi bi-gift" style={{ fontSize: "24px", color: "#ff004d" }}></i>
             </div>
             <div>
               <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "4px" }}>Onebest Gifts</h3>
               <p style={{ fontSize: "16px", color: "var(--color-text-secondary)", margin: 0, maxWidth: "500px" }}>A curated gift shop offering special surprises for every occasion.</p>
             </div>
           </div>
           <a href="https://onebest.in" className="btn-apple btn-apple-secondary" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 24px", fontSize: "14px", whiteSpace: "nowrap" }}>
              Visit Onebest <i className="bi bi-arrow-up-right ms-2"></i>
           </a>
        </div>

      </div>
    </section>
  );
};

export default Products;
