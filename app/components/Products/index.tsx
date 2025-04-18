"use client";

const Products = () => {
  const products = [
    {
      name: "GymTie",
      icon: "bi-phone",
      image: "/assets/products/gymtie.png",
      description:
        "Gym management app where gym owners can manage memberships and schedules",
      features: ["Member Management", "Payment Logging", "Membership Expiry"],
      users: "10+",
      status: "Live",
      link: "https://gymtie.com",
    },
    {
      name: "Parambath App",
      icon: "bi-phone",
      image: "/assets/products/parambathapp.png",
      description:
        "Digital gateway connecting village services with modern convenience.",
      features: ["Digital Services", "Community Connect", "Local Business"],
      users: "1000+",
      status: "Live",
      link: "https://parambath.onnich.com",
    },
    {
      name: "YoungMenu",
      icon: "bi-shop",
      image: "/assets/products/youngmenu.jpg",
      description:
        "Virtual menu platform revolutionizing restaurant operations.",
      features: ["Virtual Menu", "Order Management", "Analytics"],
      users: "500+",
      status: "Live",
      link: "https://youngmenu.com",
    },
    {
      name: "Kuty.me",
      icon: "bi-link-45deg",
      image: "/assets/products/kuty.png",
      description: "Smart URL shortener with advanced analytics and tracking.",
      features: ["Link Analytics", "Custom URLs", "Click Tracking"],
      users: "2000+",
      status: "Live",
      link: "https://kuty.me",
    },
    {
      name: "CodeARIV",
      icon: "bi-phone",
      image: "/assets/products/codeariv.jpg",
      description:
        "A technology blog mainly dealing with the latest trends in Full-stack web and mobile app development.",
      features: ["Technology Blog", "Latest Trends", "Web Development"],
      users: "100000+",
      status: "Live",
      link: "https://codeariv.com",
    },
    {
      name: "Onebest",
      icon: "bi-phone",
      image: "/assets/products/onebest.jpg",
      description:
        "A gift shop and online store offering curated gifts, chocolates, and seasonal surprises for every special occasion",
      features: ["Gift Shop", "Online Store", "Curated Gifts"],
      users: "100+",
      status: "Live",
      link: "https://onebest.in",
    },
  ];

  return (
    <section className="products-section py-6" id="products">
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

        <div className="row g-4 justify-content-center">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex">
              <div className="product-card reveal">
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <div className="product-status">{product.status}</div>
                </div>
                <div className="product-content">
                  <div className="product-header">
                    <div className="product-icon">
                      <i className={`bi ${product.icon}`}></i>
                    </div>
                    <h3 className="product-name">{product.name}</h3>
                  </div>
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
                    <a
                      href={product.link}
                      className="product-link"
                      target="_blank"
                    >
                      Learn More <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
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
