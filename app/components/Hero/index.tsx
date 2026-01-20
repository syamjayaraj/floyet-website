"use client";

const Hero = () => {
  return (
    <>
      <section className="apple-hero-section" id="home">
        <div className="container">
          <div className="apple-hero-content">
            <div className="apple-hero-eyebrow">Innovation First</div>
            <h1 className="apple-hero-headline-large">
              Building the future. One pixel at a time.
            </h1>
            <p className="apple-hero-subhead-large">
              We are a forward-thinking software company dedicated to crafting perfect products that solve real-world problems.
            </p>
            <div className="apple-hero-cta">
              <a href="#products" className="btn-apple btn-apple-primary">
                Our Products
              </a>
              <a href="#contact" className="btn-apple btn-apple-link">
                Get in touch <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
