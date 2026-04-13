import AnimatedBackground from "../AnimatedBackground";
import "./styles.css";

const Hero = () => {
  return (
    <section className="apple-hero" id="home">
      <AnimatedBackground />
      <div className="container apple-hero-container">
        <div className="apple-hero-content">
          <div className="apple-hero-eyebrow hero-child-1">Floyet Labs &amp; Technologies</div>
          <h1 className="apple-hero-headline hero-child-2">
            Engineered in the lab.<br/> Proven in the <span>real world</span>.
          </h1>
          <p className="apple-hero-subhead hero-child-3">
            We build focused, high-quality products that make everyday life and work easier.
          </p>
          <div className="apple-hero-cta hero-child-4">
            <a href="/#contact" className="btn-apple btn-apple-primary hover-lift">
              Get in Touch
            </a>
            <a href="#products" className="btn-apple btn-apple-secondary hover-lift">
              Explore Products <i className="bi bi-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
