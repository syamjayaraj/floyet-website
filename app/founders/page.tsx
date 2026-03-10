import { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Our Founders - Floyet",
  description: "Meet the visionary leadership team behind Floyet. Syamlal CM and Sruthilal CM are crafting digital solutions for tomorrow's challenges.",
};

const FoundersPage = () => {
  const founders = [
    {
      name: "Syamlal CM",
      role: "Chief Executive Officer",
      bio: "Syamlal is a visionary technologist with over 7 years of experience in building elite digital products. Under his leadership, Floyet has scaled to serve over 100 enterprise clients and 50,000+ active users.",
      image: "/syamlal.jpg",
      website: "https://syam.me/",
      linkedin: "https://www.linkedin.com/in/syamlal-cm/"
    },
    {
      name: "Sruthilal CM",
      role: "Co-Founder",
      bio: "Sruthilal leads the sales, marketing, and strategic growth initiatives at Floyet. With a deep understanding of market dynamics, he ensures our products reach the right audience and deliver maximum business value.",
      image: "/sruthilal.png",
      linkedin: "https://www.linkedin.com/in/sruthilal-cm/"
    }
  ];

  return (
    <main className="founders-main">
      <div className="container">
        <div className="founders-header">
          <div className="section-eyebrow">Leadership</div>
          <h1 className="section-headline">Our Founders</h1>
          <p className="section-subhead mx-auto">
            The visionary team driving innovation and excellence at Floyet.
          </p>
        </div>

        <div className="row g-5 mt-4 justify-content-center">
          {founders.map((founder, index) => (
            <div key={index} className="col-lg-5 col-md-6 reveal fade-in-up" style={{ transitionDelay: `${index * 0.2}s` }}>
              <div className="founder-card">
                <div className="founder-image-container">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="founder-image"
                  />
                </div>
                <h3 className="founder-name">
                  {founder.name}
                </h3>
                <div className="founder-role">
                  {founder.role}
                </div>
                <p className="founder-bio">
                  {founder.bio}
                </p>

                <div className="founder-socials">
                  {founder.linkedin && (
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover-lift founder-social-link"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  )}
                  {founder.website && (
                    <a 
                      href={founder.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover-lift founder-social-link"
                    >
                      <i className="bi bi-globe"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="vision-section reveal fade-in">
          <div className="vision-container">
            <h2 className="vision-title">Our Vision</h2>
            <p className="vision-text">
              "We focus on creating products that don't just solve problems, but elevate the way people work and live. Every line of code and every pixel we craft is a step towards a more efficient future."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoundersPage;
