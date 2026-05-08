import "./styles.css";
import AnimatedCounter from "../AnimatedCounter";

const About = () => {
  const achievements = [
    { number: "100+", label: "Businesses Served" },
    { number: "50K+", label: "Users Reached" },
    { number: "3+",   label: "Product Lines" },
    { number: "7+",   label: "Years Experience" },
  ];

  const companyDetails = [
    { label: "Registered name", value: "Floyet Labs & Technologies LLP" },
    { label: "Headquarters", value: "Kozhikode, Kerala, India" },
    { label: "Founded", value: "2024" },
  ];

  const founders = [
    {
      name: "Syamlal CM",
      role: "Chief Executive Officer",
      bio: "Leads product, technology, and execution at Floyet, with 7+ years of experience building digital products for real-world business operations.",
      image: "/syamlal.jpg",
      website: "https://syam.me/",
      linkedin: "https://www.linkedin.com/in/syamlal-cm/",
    },
    {
      name: "Sruthilal CM",
      role: "Co-Founder",
      bio: "Leads sales, marketing, and growth initiatives, helping Floyet products reach the right customers and create practical business value.",
      image: "/sruthilal.png",
      linkedin: "https://www.linkedin.com/in/sruthilal-cm/",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="about-header reveal-blur">
          <div className="about-eyebrow">About Floyet</div>
          <h2 className="about-headline">
            A product company building practical software for real-world operations.
          </h2>
          <p className="about-subhead">
            Floyet Labs & Technologies LLP is a product company from Kerala, India.
            Our main focus is GymTie, a complete fitness ecosystem for modern gyms.
          </p>
        </div>

        <div className="about-profile reveal-scale">
          <div className="about-profile-copy">
            <span className="about-profile-label">Company Profile</span>
            <h3>Focused, product-led, and built from real market problems.</h3>
            <p>
              Floyet creates software products for businesses that still depend on manual records,
              scattered communication, and disconnected tools. Today, our primary focus is GymTie,
              while YoungMenu, DevaPatha, and Onebest continue as additional product lines.
            </p>
          </div>

          <div className="about-detail-list">
            {companyDetails.map((item) => (
              <div className="about-detail-item" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
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

        <div className="about-founders reveal-blur" id="founders">
          <div className="about-founders-header">
            <div className="about-eyebrow">Leadership</div>
            <h2>Founders</h2>
            <p>
              The team behind Floyet&apos;s product direction, customer growth, and long-term execution.
            </p>
          </div>

          <div className="about-founders-grid reveal-stagger">
            {founders.map((founder) => (
              <div className="about-founder-card reveal-child" key={founder.name}>
                <img src={founder.image} alt={founder.name} className="about-founder-image" />
                <div className="about-founder-content">
                  <h3>{founder.name}</h3>
                  <span>{founder.role}</span>
                  <p>{founder.bio}</p>
                  <div className="about-founder-links">
                    {founder.linkedin && (
                      <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${founder.name} LinkedIn`}>
                        <i className="bi bi-linkedin"></i>
                      </a>
                    )}
                    {founder.website && (
                      <a href={founder.website} target="_blank" rel="noopener noreferrer" aria-label={`${founder.name} website`}>
                        <i className="bi bi-globe"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
