"use client";

const Products = () => {
  const featuredProduct = {
    name: "GymTie",
    icon: "bi-activity",
    image: "/assets/products/gymtie.png",
    description:
      "Complete gym management solution for modern fitness centers. Manage members, track payments, and streamline your gym operations.",
    tagline: "Transform your gym operations",
    link: "https://gymtie.com",
    featured: true,
  };

  const products = [
    {
      name: "YoungMenu",
      icon: "bi-shop",
      image: "/assets/products/youngmenu.jpg",
      description:
        "Virtual menu platform revolutionizing restaurant operations",
      tagline: "The future of dining",
      link: "https://youngmenu.com",
    },
    {
      name: "Onebest",
      icon: "bi-gift",
      image: "/assets/products/onebest.png",
      description:
        "Curated gift shop offering special surprises for every occasion",
      tagline: "Perfect gifts, every time",
      link: "https://onebest.in",
    },
  ];

  return (
    <section className="apple-products section" id="products">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Our Products</div>
          <h2 className="section-headline">
            Innovative solutions for modern challenges
          </h2>
          <p className="section-subhead">
            Designed to solve real-world problems for businesses and communities around the world.
          </p>
        </div>

        {/* Featured Product - GymTie */}
        <div className="featured-product-section">
          <div className="featured-product-card">
            <div className="featured-product-content">
              <div className="featured-badge">Featured</div>
              <h3 className="featured-product-name">{featuredProduct.name}</h3>
              <p className="featured-product-tagline">{featuredProduct.tagline}</p>
              <p className="featured-product-description">
                {featuredProduct.description}
              </p>
              <div className="featured-product-links">
                <a
                  href={featuredProduct.link}
                  className="btn-apple btn-apple-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
                <a
                  href={featuredProduct.link}
                  className="btn-apple btn-apple-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try it now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="featured-product-image-wrapper">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="featured-product-image"
              />
            </div>
          </div>
        </div>

        {/* Other Products Grid */}
        <div className="apple-products-grid">
          {products.map((product, index) => (
            <div key={index} className="apple-product-card">
              <div className="apple-product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="apple-product-image"
                />
              </div>
              <div className="apple-product-content">
                <h3 className="apple-product-name">{product.name}</h3>
                <p className="apple-product-tagline">{product.tagline}</p>
                <p className="apple-product-description">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="apple-product-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
