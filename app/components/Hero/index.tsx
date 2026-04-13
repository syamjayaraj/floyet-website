import AnimatedBackground from "../AnimatedBackground";
import "./styles.css";

const Hero = () => {
  return (
    <section className="apple-hero" id="home">
      <AnimatedBackground />
      <div className="container apple-hero-container">
        <div className="apple-hero-content reveal fade-in-up">
          <div className="apple-hero-eyebrow">Floyet Labs & Technologies</div>
          <h1 className="apple-hero-headline">
            Engineered in the lab.<br/> Proven in the <span>real world</span>.
          </h1>
          <p className="apple-hero-subhead">
            We build focused, high-quality products that make everyday life and work easier.
          </p>
          <div className="apple-hero-cta">
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
