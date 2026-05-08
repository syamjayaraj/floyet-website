import "./styles.css";
import AnimatedCounter from "../AnimatedCounter";

const About = () => {
  const achievements = [
    { number: "100+", label: "Enterprise Clients" },
    { number: "50K+", label: "Active Users" },
    { number: "3+",   label: "Product Lines" },
    { number: "7+",   label: "Years Experience" },
  ];

  const focusCards = [
    {
      icon: "bi-bullseye",
      title: "Our focus",
      text: "Floyet is currently focused on building the GymTie ecosystem for gym owners, trainers, and members.",
    },
    {
      icon: "bi-lightning-charge",
      title: "Why we build",
      text: "We choose real operational problems where software can reduce manual work and create a better daily experience.",
    },
    {
      icon: "bi-layers",
      title: "What comes next",
      text: "YoungMenu, DevaPatha, and Onebest are future product lines shaped by the same problem-first thinking.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="about-header reveal-blur">
          <div className="about-eyebrow">About Floyet</div>
          <h2 className="about-headline">
            Building focused products for real-world operations.
          </h2>
          <p className="about-subhead">
            Floyet Labs & Technologies LLP is a product company from Kerala, India.
            Our main focus is GymTie, a complete ecosystem for modern fitness businesses.
          </p>
        </div>

        {/* Achievements - auto-stagger each card */}
        <div className="achievements-grid reveal-stagger">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card reveal-child">
              <div className="achievement-number">
                <AnimatedCounter value={item.number} />
              </div>
              <div className="achievement-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="about-focus-grid reveal-stagger">
          {focusCards.map((card) => (
            <div className="about-focus-card reveal-child" key={card.title}>
              <div className="about-focus-icon">
                <i className={`bi ${card.icon}`}></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
