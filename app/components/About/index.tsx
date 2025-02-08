"use client";

const About = () => {
  const achievements = [
    {
      number: "30+",
      label: "Enterprise Clients",
      sublabel: "Trusted Partners",
    },
    {
      number: "10K+",
      label: "Active Users",
      sublabel: "Daily Engagement",
    },
    {
      number: "6",
      label: "Digital Products",
      sublabel: "Innovative Solutions",
    },
    {
      number: "4+",
      label: "Years",
      sublabel: "Industry Experience",
    },
  ];

  const products = [
    {
      icon: "bi-phone",
      name: "Parambath",
      description:
        "Digital gateway connecting village services with modern convenience",
    },
    {
      icon: "bi-shop",
      name: "YoungMenu",
      description:
        "Virtual menu platform revolutionizing restaurant operations",
    },
    {
      icon: "bi-link-45deg",
      name: "Kuty.me",
      description: "Smart URL shortener with advanced analytics and tracking",
    },
  ];

  return (
    <section className="about-section py-6" id="about">
      <div className="container">
        {/* Main Content */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div className="about-content pe-lg-5">
              <div className="section-tag mb-3">ABOUT FLOYET</div>
              <h2 className="section-title mb-4">
                Crafting Digital Solutions for
                <span className="gradient-text d-block">
                  Tomorrow's Challenges
                </span>
              </h2>
              <p className="section-description mb-4">
                At Floyet, we specialize in developing future-ready applications
                that address real-world problems. Our solutions combine
                cutting-edge technology with intuitive design to deliver
                exceptional user experiences.
              </p>

              <div className="tech-stack-wrapper">
                <div className="tech-tag">Expo</div>
                <div className="tech-tag">React Native</div>
                <div className="tech-tag">Next.js</div>
                <div className="tech-tag">Strapi</div>
                <div className="tech-tag">Vultr</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-image-container">
              <img
                src="/assets/about-image.jpg"
                alt="Floyet Innovation"
                className="about-main-image"
                style={{
                  width: "20rem",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              {/* <div className="experience-badge">
                <span className="years">4+</span>
                <span className="text">
                  Years of
                  <br />
                  Innovation
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {/* <div className="row mb-5">
          <div className="col-12">
            <h3 className="text-center mb-4">Our Digital Products</h3>
          </div>
          {products.map((product, index) => (
            <div key={index} className="col-lg-4">
              <div className="product-card">
                <div className="product-icon">
                  <i className={`bi ${product.icon}`}></i>
                </div>
                <h4 className="product-name">{product.name}</h4>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-content">
                <div className="achievement-number">{item.number}</div>
                <div className="achievement-info">
                  <div className="achievement-label">{item.label}</div>
                  <div className="achievement-sublabel">{item.sublabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
