import "./styles.css";

const Products = () => {
  return (
    <section className="apple-products section" id="products">
      <div className="container">
        <div className="products-header">
          <div className="products-eyebrow">Our Impact</div>
          <h2 className="products-headline">
            Problems we've fixed.
          </h2>
        </div>

        {/* GymTie Problem/Solution Block */}
        <div className="reveal fade-in-up impact-card">
           <div className="impact-info">
              <span className="impact-badge badge-problem">The Problem</span>
              <h3 className="impact-title">Gym management is chaotic and disconnected.</h3>
              <p className="impact-text">Owners struggle with trailing payments, scattered member data, and manual operations that drain their time.</p>
           </div>
           
           <div className="impact-divider"></div>

           <div className="impact-info">
              <span className="impact-badge badge-solution">Our Solution</span>
              <div className="solution-icon-wrapper">
                <i className="bi bi-activity solution-icon"></i>
              </div>
              <h4 className="solution-title">GymTie Manager</h4>
              <p className="impact-text">A complete platform that streamlines billing, simplifies operations, and automates member tracking into one elegant tool.</p>
           </div>

           <a href="https://gymtie.com" className="btn-apple btn-apple-primary hover-lift" target="_blank" rel="noopener noreferrer">
              See how we fixed it <i className="bi bi-arrow-up-right ms-2"></i>
           </a>
        </div>

        {/* Onebest Section (Minimal) */}
        <div className="reveal fade-in-up stagger-1 minimal-card">
           <div className="minimal-card-content">
             <div className="minimal-icon-wrapper icon-onebest">
               <i className="bi bi-gift" style={{ fontSize: "24px" }}></i>
             </div>
             <div className="minimal-info">
               <h3>Onebest Gifts</h3>
               <p>A curated gift shop offering special surprises for every occasion.</p>
             </div>
           </div>
           <a href="https://onebest.in" className="btn-apple btn-apple-secondary hover-lift" target="_blank" rel="noopener noreferrer">
              Visit Onebest <i className="bi bi-arrow-up-right ms-2"></i>
           </a>
        </div>

        {/* YoungMenu Section (Minimal) */}
        <div className="reveal fade-in-up stagger-2 minimal-card" style={{ marginBottom: 0 }}>
           <div className="minimal-card-content">
             <div className="minimal-icon-wrapper icon-youngmenu">
               <i className="bi bi-restaurant" style={{ fontSize: "24px" }}></i>
             </div>
             <div className="minimal-info">
               <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                 <h3 style={{ margin: 0 }}>YoungMenu</h3>
                 <span className="coming-soon-badge">Coming Soon</span>
               </div>
               <p>Digital menu solution for modern restaurants and cafes.</p>
             </div>
           </div>
           <a href="https://youngmenu.com" className="btn-apple btn-apple-secondary hover-lift" target="_blank" rel="noopener noreferrer">
              Explore YoungMenu <i className="bi bi-arrow-up-right ms-2"></i>
           </a>
        </div>

      </div>
    </section>
  );
};

export default Products;
