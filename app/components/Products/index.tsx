import "./styles.css";

const Products = () => {
  const youngMenuServices = [
    {
      icon: "bi-graph-up-arrow",
      title: "Manager Dashboard",
      desc: "Complete control for store owners over sales, inventory, and daily operations.",
    },
    {
      icon: "bi-person-badge",
      title: "Waiter Order App",
      desc: "Waiters take table orders on a handheld device — sent instantly to the kitchen.",
    },
    {
      icon: "bi-display",
      title: "Billing & POS",
      desc: "Fast, modern billing at the counter — seamless point-of-sale operations.",
    },
    {
      icon: "bi-egg-fried",
      title: "Kitchen Display System",
      desc: "Real-time order management system for the heart of your kitchen.",
    },
    {
      icon: "bi-card-list",
      title: "Menu Listing Platform",
      desc: "A dedicated digital platform to beautifully list and showcase all your store menus online.",
    },
    {
      icon: "bi-globe",
      title: "Store Website",
      desc: "Get a clean website on a YoungMenu subdomain (e.g., yourstore.youngmenu.com) or connect your own domain.",
    },
    {
      icon: "bi-qr-code",
      title: "Table QR Menu",
      desc: "Digital menus customers scan at the table — update instantly, zero printing.",
    },
  ];

  return (
    <section className="apple-products section" id="products">
      <div className="container">
        <div className="products-header reveal-blur">
          <div className="products-eyebrow">Our Impact</div>
          <h2 className="products-headline">
            Problems we&apos;ve fixed.
          </h2>
        </div>

        {/* GymTie Problem/Solution Block */}
        <div className="reveal-scale impact-card">
           <div className="impact-info">
              <span className="impact-badge badge-problem">The Problem</span>
              <h3 className="impact-title">Gym management is chaotic and disconnected.</h3>
              <p className="impact-text">Owners struggle with trailing payments, scattered member data, and manual operations that drain their time. Meanwhile, members have no visibility into their own fitness journey.</p>
           </div>

           <div className="impact-divider"></div>

           <div className="impact-info">
              <span className="impact-badge badge-solution">Our Solution</span>
              <div className="gymtie-brand">
                <h4 className="solution-title">GymTie</h4>
              </div>
              <p className="impact-text">A complete ecosystem connecting gym owners and members in one unified platform.</p>
           </div>

           {/* GymTie Manager + Fit tiles — stagger on reveal */}
           <div className="gymtie-products-grid reveal-stagger">
             <div className="gymtie-product-tile reveal-child">
               <img src="/assets/logo/manager.png" alt="GymTie Manager" className="product-tile-logo" />
               <h4 className="product-tile-title">GymTie Manager</h4>
               <p className="product-tile-tagline">Run your gym, your way.</p>
               <p className="product-tile-desc">For gym owners — billing, attendance, WhatsApp automation, and member tracking in one elegant tool.</p>
             </div>
             <div className="gymtie-product-tile reveal-child">
               <img src="/assets/logo/fit.png" alt="GymTie Fit" className="product-tile-logo" />
               <h4 className="product-tile-title">GymTie Fit</h4>
               <p className="product-tile-tagline">Your fitness, elevated.</p>
               <p className="product-tile-desc">For members — workout logs, nutrition tracking, leaderboards, and membership visibility in one app.</p>
             </div>
           </div>

           <a href="https://gymtie.com" className="btn-apple btn-apple-primary hover-lift" target="_blank" rel="noopener noreferrer">
              Explore GymTie <i className="bi bi-arrow-up-right ms-2"></i>
           </a>
        </div>

        {/* YoungMenu — Full Impact Card */}
        <div className="reveal-scale impact-card ym-card">
          <div className="impact-info">
            <span className="impact-badge badge-problem">The Problem</span>
            <h3 className="impact-title">Food stores are invisible online and inefficient offline.</h3>
            <p className="impact-text">Restaurants, cafes, and home bakers often struggle with scattered operations — disconnected orders, messy billing, and poor online menu visibility.</p>
          </div>

          <div className="impact-divider"></div>

          <div className="impact-info">
            <span className="impact-badge badge-solution">Our Solution</span>
            <div className="ym-brand">
              <img 
                src="/assets/logo/youngmenu.png" 
                alt="YoungMenu Logo" 
                style={{ width: 56, height: 56, borderRadius: 14, flexShrink: 0, objectFit: "cover" }} 
              />
              <div>
                <h4 className="solution-title" style={{ textAlign: "left", marginBottom: 4 }}>YoungMenu</h4>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, margin: 0 }}>The all-in-one digital stack for restaurants, cafes, & home bakers.</p>
              </div>
            </div>
          </div>

          {/* Service feature grid — stagger on reveal */}
          <div className="ym-features-grid reveal-stagger">
            {youngMenuServices.map((s, i) => (
              <div key={i} className="ym-feature-card reveal-child">
                <div className="ym-feature-icon">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h5 className="ym-feature-title">{s.title}</h5>
                <p className="ym-feature-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <a href="https://youngmenu.com" className="btn-apple btn-apple-primary ym-cta hover-lift" target="_blank" rel="noopener noreferrer">
            Explore YoungMenu <i className="bi bi-arrow-up-right ms-2"></i>
          </a>
        </div>

        {/* Onebest Section (Minimal) */}
        <div className="reveal minimal-card" style={{ marginBottom: 0 }}>
           <div className="minimal-card-content">
             <img 
               src="/assets/logo/onebest.png" 
               alt="Onebest Logo" 
               style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0, objectFit: "contain" }} 
             />
             <div className="minimal-info">
               <h3>Onebest Gifts</h3>
               <p>A curated gift shop offering special surprises for every occasion.</p>
             </div>
           </div>
           <a href="https://onebest.in" className="btn-apple btn-apple-secondary hover-lift" target="_blank" rel="noopener noreferrer">
              Visit Onebest <i className="bi bi-arrow-up-right ms-2"></i>
           </a>
        </div>

      </div>
    </section>
  );
};

export default Products;
