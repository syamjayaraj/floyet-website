"use client";

const Products = () => {
  const products = [
    {
      name: "Parambath",
      icon: "bi-phone",
      description:
        "Digital gateway connecting village services with modern convenience.",
      features: ["Digital Services", "Community Connect", "Local Business"],
      users: "5000+",
      status: "Live",
    },
    {
      name: "YoungMenu",
      icon: "bi-shop",
      description:
        "Virtual menu platform revolutionizing restaurant operations.",
      features: ["QR Menus", "Order Management", "Analytics"],
      users: "3000+",
      status: "Live",
    },
    {
      name: "Kuty.me",
      icon: "bi-link-45deg",
      description: "Smart URL shortener with advanced analytics and tracking.",
      features: ["Link Analytics", "Custom URLs", "Click Tracking"],
      users: "2000+",
      status: "Live",
    },
  ];

  return (
    <section className="products-section py-6">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="section-tag mb-3">OUR PRODUCTS</div>
            <h2 className="section-title mb-4">
              Innovative Solutions for
              <span className="gradient-text d-block">Modern Challenges</span>
            </h2>
            <p className="section-description">
              Our suite of digital products is designed to solve real-world
              problems with cutting-edge technology and user-centric design.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4">
              <div className="product-card">
                <div className="product-header">
                  <div className="product-icon">
                    <i className={`bi ${product.icon}`}></i>
                  </div>
                  <div className="product-status">{product.status}</div>
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-features">
                  {product.features.map((feature, fIndex) => (
                    <span key={fIndex} className="tech-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="product-footer">
                  <div className="product-users">
                    <i className="bi bi-people me-2"></i>
                    {product.users} Users
                  </div>
                  <a href="#contact" className="product-link">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
