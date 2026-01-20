"use client";

const About = () => {
  const achievements = [
    {
      number: "30+",
      label: "Enterprise Clients",
    },
    {
      number: "10K+",
      label: "Active Users",
    },
    {
      number: "6",
      label: "Digital Products",
    },
    {
      number: "4+",
      label: "Years Experience",
    },
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
            <div key={index} className="achievement-card-apple">
              <div className="achievement-number-apple">{item.number}</div>
              <div className="achievement-label-apple">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="tech-stack-section">
          <h3 className="tech-stack-title">Technologies we use</h3>
          <div className="tech-stack-grid">
            <div className="tech-badge">Expo</div>
            <div className="tech-badge">React Native</div>
            <div className="tech-badge">Next.js</div>
            <div className="tech-badge">Strapi</div>
            <div className="tech-badge">Vultr</div>
            <div className="tech-badge">TypeScript</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
