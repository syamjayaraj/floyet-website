import "./styles.css";

const Products = () => {
  const devaPathaProducts = [
    {
      icon: "bi-building-fill-gear",
      logo: "/assets/logo/devapatha-manager.png",
      title: "DevaPatha Manager",
      tagline: "Temple operations, simplified.",
      desc: "For temple teams — manage poojas, offerings, devotees, events, donations, and daily administration from one calm workspace.",
    },
    {
      icon: "bi-stars",
      logo: "/assets/logo/devapatha.png",
      title: "DevaPatha App",
      tagline: "Coming soon for devotees.",
      desc: "For devotees — connect with temples, book spiritual services, follow rituals, and discover Hindu spiritual content in one app.",
    },
  ];

  return (
    <section className="apple-products section" id="products">
      <div className="container">
        <div className="products-header reveal-blur">
          <div className="products-eyebrow">Product Focus</div>
          <h2 className="products-headline">
            GymTie is our flagship product.
          </h2>
          <p className="products-subhead">
            Floyet&apos;s main product focus is the GymTie ecosystem. Other products are additional lines built with the same problem-first approach.
          </p>
        </div>

        {/* GymTie Problem/Solution Block */}
        <div className="reveal-scale impact-card gymtie-focus-card">
           <div className="flagship-ribbon">
             <img src="/assets/logo/gymtie.png" alt="GymTie logo" />
             <div>
               <span>Flagship product</span>
               <strong>GymTie ecosystem</strong>
             </div>
           </div>

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

           {/* GymTie Manager + Fit tiles - stagger on reveal */}
           <div className="gymtie-products-grid reveal-stagger">
             <div className="gymtie-product-tile reveal-child">
               <img src="/assets/logo/manager.png" alt="GymTie Manager" className="product-tile-logo" />
               <h4 className="product-tile-title">GymTie Manager</h4>
               <p className="product-tile-tagline">Run your gym, your way.</p>
               <p className="product-tile-desc">For gym owners - billing, attendance, WhatsApp automation, and member tracking in one elegant tool.</p>
             </div>
             <div className="gymtie-product-tile reveal-child">
               <img src="/assets/logo/fit.png" alt="GymTie Fit" className="product-tile-logo" />
               <h4 className="product-tile-title">GymTie Fit</h4>
               <p className="product-tile-tagline">Your fitness, elevated.</p>
               <p className="product-tile-desc">For members - workout logs, nutrition tracking, leaderboards, and membership visibility in one app.</p>
             </div>
           </div>

           <a href="https://gymtie.com" className="btn-apple btn-apple-primary hover-lift" target="_blank" rel="noopener noreferrer">
              Explore GymTie <i className="bi bi-arrow-up-right ms-2"></i>
           </a>
        </div>

        {/* YoungMenu */}
        <div className="reveal-scale impact-card ym-card">
          <div className="impact-info">
            <span className="impact-badge badge-problem">The Problem</span>
            <h3 className="impact-title">Food businesses need easier billing, menus, and online reach.</h3>
            <p className="impact-text">Restaurants, cafes, and stores often manage POS billing, menu updates, and customer discovery through disconnected tools.</p>
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
                <h4 className="solution-title" style={{ marginBottom: 4 }}>YoungMenu</h4>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, margin: 0 }}>YoungMenu Manager for owners, and the YoungMenu app for users coming soon.</p>
              </div>
            </div>
          </div>

          <div className="ym-products-grid reveal-stagger">
            <div className="ym-product-tile reveal-child">
              <img src="/assets/logo/youngmenu-manager.png" alt="YoungMenu Manager logo" className="product-tile-logo" />
              <h4 className="product-tile-title">YoungMenu Manager</h4>
              <p className="product-tile-tagline">For restaurants, cafes, and stores.</p>
              <p className="product-tile-desc">POS billing and table QR code standees for digital menus, helping owners run their food business smoothly.</p>
            </div>
            <div className="ym-product-tile reveal-child">
              <img src="/assets/logo/youngmenu.png" alt="YoungMenu App logo" className="product-tile-logo" />
              <h4 className="product-tile-title">YoungMenu App</h4>
              <p className="product-tile-tagline">Coming soon for users.</p>
              <p className="product-tile-desc">Online stores, delivery, food discovery, and other food-related experiences for customers.</p>
            </div>
          </div>

          <a href="https://youngmenu.com" className="btn-apple btn-apple-primary ym-cta hover-lift" target="_blank" rel="noopener noreferrer">
            Explore YoungMenu <i className="bi bi-arrow-up-right ms-2"></i>
          </a>
        </div>

        {/* DevaPatha */}
        <div className="reveal-scale impact-card devapatha-card">
          <div className="impact-info">
            <span className="impact-badge badge-problem devapatha-problem">The Problem</span>
            <h3 className="impact-title">Temples need modern systems without losing their sacred rhythm.</h3>
            <p className="impact-text">Many temples still manage poojas, devotees, donations, events, and communication through manual records and scattered tools.</p>
          </div>

          <div className="impact-divider devapatha-divider"></div>

          <div className="impact-info">
            <span className="impact-badge badge-solution devapatha-solution">Our Solution</span>
            <div className="devapatha-brand">
              <img src="/assets/logo/devapatha.png" alt="DevaPatha logo" className="devapatha-logo" />
              <div>
                <h4 className="solution-title" style={{ marginBottom: 4 }}>DevaPatha</h4>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 14, margin: 0 }}>A complete temple management platform for temples and devotees.</p>
              </div>
            </div>
          </div>

          <div className="devapatha-products-grid reveal-stagger">
            {devaPathaProducts.map((product) => (
              <div key={product.title} className="devapatha-product-tile reveal-child">
                <img src={product.logo} alt={`${product.title} logo`} className="product-tile-logo" />
                <h4 className="product-tile-title">{product.title}</h4>
                <p className="product-tile-tagline">{product.tagline}</p>
                <p className="product-tile-desc">{product.desc}</p>
              </div>
            ))}
          </div>

          <a href="https://devapatha.com" className="btn-apple btn-apple-primary devapatha-cta hover-lift" target="_blank" rel="noopener noreferrer">
            Explore DevaPatha <i className="bi bi-arrow-up-right ms-2"></i>
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
