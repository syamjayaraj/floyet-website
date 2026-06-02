import "./styles.css";
import AnimatedCounter from "../AnimatedCounter";
import { products } from "@/app/data/products";

const About = () => {
  const achievements = [
    { number: "100+", label: "Businesses Served" },
    { number: "50K+", label: "Users Reached" },
    { number: "5", label: "Products" },
    { number: "2025", label: "Registered LLP" },
  ];

  const companyDetails = [
    { label: "Registered name", value: "Floyet Labs & Technologies LLP" },
    { label: "Headquarters", value: "Kozhikode, Kerala, India" },
    { label: "Registered", value: "February 2025" },
  ];

  const founders = [
    {
      name: "Syamlal CM",
      role: "Chief Executive Officer",
      bio: "Leads product, technology, and execution at Floyet, with 7+ years of experience building digital products for real-world business operations.",
      image: "/syamlal.jpg",
      website: "https://syam.me/",
      linkedin: "https://www.linkedin.com/in/syamjayaraj/",
    },
    {
      name: "Sruthilal CM",
      role: "Co-Founder",
      bio: "Leads sales, marketing, and growth initiatives, helping Floyet products reach the right customers and create practical business value.",
      image: "/sruthilal.png",
      linkedin: "https://www.linkedin.com/in/sruthilal-c-m-bb870014a/",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-ambient" aria-hidden="true">
        <div className="about-orb about-orb--purple" />
        <div className="about-orb about-orb--blue" />
        <div className="about-orb about-orb--white" />
      </div>

      <div className="container about-section-inner">
        <div className="about-header liquid-glass liquid-glass--elevated reveal-blur">
          <div className="about-eyebrow">About Floyet</div>
          <h2 className="about-headline">
            A product company built for real operations.
          </h2>
          <p className="about-subhead">
            Floyet Labs & Technologies LLP is headquartered in Kerala, India.
            We build focused software across fitness, food, temples, finance,
            and retail with strong product discipline and practical execution.
          </p>
        </div>

        <div className="about-profile liquid-glass liquid-glass--elevated reveal-scale">
          <div className="about-profile-copy">
            <span className="about-profile-label">Company Profile</span>
            <h3>Focused, product-led, and built from real market problems.</h3>
            <p>
              Floyet started in 2024 with a focus on practical software for
              real-world business operations. The company was formally
              registered as Floyet Labs & Technologies LLP in February 2025.
              Today we operate GymTie, YoungMenu, DevaPatha, Livonomi, and
              Onebest - each built for a specific market and workflow.
            </p>

            <div className="about-products-pills" aria-label="Floyet products">
              {products.map((product) => (
                <a
                  key={product.id}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-product-pill liquid-glass liquid-glass--strong"
                >
                  <img src={product.logo} alt="" aria-hidden="true" />
                  <span>{product.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="about-detail-list">
            {companyDetails.map((item) => (
              <div
                className="about-detail-item liquid-glass liquid-glass--interactive"
                key={item.label}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-grid reveal-stagger">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="achievement-card liquid-glass liquid-glass--interactive reveal-child"
            >
              <div className="achievement-number">
                <AnimatedCounter value={item.number} />
              </div>
              <div className="achievement-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="about-founders reveal-blur" id="founders">
          <div className="about-founders-header liquid-glass liquid-glass--elevated">
            <div className="about-eyebrow">Leadership</div>
            <h2>Founders</h2>
            <p>
              The team behind Floyet&apos;s product direction, customer growth,
              and long-term execution.
            </p>
          </div>

          <div className="about-founders-grid reveal-stagger">
            {founders.map((founder) => (
              <div
                className="about-founder-card liquid-glass liquid-glass--elevated liquid-glass--interactive reveal-child"
                key={founder.name}
              >
                <div className="about-founder-image-wrap">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="about-founder-image"
                  />
                </div>
                <div className="about-founder-content">
                  <h3>{founder.name}</h3>
                  <span>{founder.role}</span>
                  <p>{founder.bio}</p>
                  <div className="about-founder-links">
                    {founder.linkedin && (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} LinkedIn`}
                        className="about-founder-link liquid-glass"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    )}
                    {founder.website && (
                      <a
                        href={founder.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} website`}
                        className="about-founder-link liquid-glass"
                      >
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
