"use client";

const About = () => {
  const achievements = [
    {
      number: "100+",
      label: "Enterprise Clients",
    },
    {
      number: "50K+",
      label: "Active Users",
    },
    {
      number: "3",
      label: "Digital Products",
    },
    {
      number: "7+",
      label: "Years Experience",
    },
  ];

  const technologies = [
    { name: "Expo", url: "https://expo.dev" },
    { name: "React Native", url: "https://reactnative.dev" },
    { name: "Next.js", url: "https://nextjs.org" },
    { name: "Strapi", url: "https://strapi.io" },
    { name: "Vultr", url: "https://www.vultr.com" },
    { name: "TypeScript", url: "https://www.typescriptlang.org" },
  ];

  return (
    <section className="apple-section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">About Floyet</div>
          <h2 className="section-headline">
            Crafting digital solutions for tomorrow's challenges
          </h2>
          <p className="section-subhead">
            We specialize in developing future-ready applications that address real-world problems. Our solutions combine cutting-edge technology with intuitive design.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card-apple reveal fade-in-up" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="achievement-number-apple">{item.number}</div>
              <div className="achievement-label-apple">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="tech-stack-section reveal fade-in">
          <h3 className="tech-stack-title">Technologies we use</h3>
          <div className="tech-stack-grid">
            {technologies.map((tech, idx) => (
              <a 
                key={idx} 
                href={tech.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="tech-badge hover-lift"
                style={{ textDecoration: "none" }}
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
