import "./styles.css";
import AnimatedCounter from "../AnimatedCounter";

const About = () => {
  const achievements = [
    { number: "100+", label: "Enterprise Clients" },
    { number: "50K+", label: "Active Users" },
    { number: "5+",   label: "Digital Products" },
    { number: "7+",   label: "Years Experience" },
  ];

  const technologies = [
    { name: "Expo",         url: "https://expo.dev" },
    { name: "React Native", url: "https://reactnative.dev" },
    { name: "Next.js",      url: "https://nextjs.org" },
    { name: "Strapi",       url: "https://strapi.io" },
    { name: "Digital Ocean",url: "https://www.digitalocean.com" },
    { name: "TypeScript",   url: "https://www.typescriptlang.org" },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="about-header reveal-blur">
          <div className="about-eyebrow">About Floyet</div>
          <h2 className="about-headline">
            Crafting digital solutions for tomorrow&apos;s challenges
          </h2>
          <p className="about-subhead">
            We specialize in developing future-ready applications that address
            real-world problems. Our solutions combine cutting-edge technology
            with intuitive design.
          </p>
        </div>

        {/* Achievements — auto-stagger each card */}
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

        {/* Tech Stack — auto-stagger each badge */}
        <div className="tech-stack-section reveal-stagger">
          <h3 className="tech-stack-title">Technologies we use</h3>
          <div className="tech-stack-grid">
            {technologies.map((tech, idx) => (
              <a
                key={idx}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-badge hover-lift reveal-child"
              >
                {tech.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
