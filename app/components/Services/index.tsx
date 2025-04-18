"use client";

import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: "bi-browser-safari",
      title: "Web Development",
      description:
        "Tailored software solutions built with cutting-edge technologies to meet your specific business needs.",
      tags: ["Web Apps", "Static Websites", "Blogs", "E-Commerce"],
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment strategies for optimal performance and reliability.",
      tags: ["Vultr", "Digital Ocean", "AWS"],
    },
    {
      icon: "bi-phone",
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications that provide seamless user experiences across all devices.",
      tags: ["Expo", "React Native"],
    },
  ];

  return (
    <section className="services-section py-6" id="services">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="section-tag mb-3">OUR SERVICES</div>
            <h2 className="section-title mb-4">
              Transforming Ideas into
              <span className="gradient-text d-block">Digital Reality</span>
            </h2>
            <p className="section-description">
              We offer comprehensive digital solutions that help businesses
              innovate and stay ahead in the rapidly evolving technology
              landscape.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <Clients /> */}

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="cta-wrapper">
              <h4 className="mb-4">Ready to Transform Your Business?</h4>
              <a href="#contact" className="hero-btn hero-btn-primary">
                <span>Start Your Project</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="training-program-section">
          <div className="free-badge">FREE</div>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="training-title">
                Master Modern Development
                <span className="gradient-text d-block">
                  Through Our Internship Program
                </span>
              </h2>
              <p className="training-description">
                Join our comprehensive internship program to learn web and
                mobile development using Next.js, Strapi CMS, React Native, and
                cutting-edge AI tools.
              </p>
              <div className="training-features">
                <div className="feature">
                  <i className="bi bi-mortarboard"></i>
                  <span>Industry-Recognized Certificate</span>
                </div>
                <div className="feature">
                  <i className="bi bi-laptop"></i>
                  <span>Hands-on Project Experience</span>
                </div>
                <div className="feature">
                  <i className="bi bi-people"></i>
                  <span>Expert Mentorship</span>
                </div>
              </div>
              <Link href="/training" className="training-cta">
                <span>Join Free Training Program</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="col-lg-5">
              <div className="training-tech-stack">
                <div className="tech-item">
                  <i className="bi bi-globe2"></i>
                  <span>Next.js</span>
                </div>
                <div className="tech-item">
                  <i className="bi bi-database"></i>
                  <span>Strapi CMS</span>
                </div>
                <div className="tech-item">
                  <i className="bi bi-phone"></i>
                  <span>React Native</span>
                </div>
                <div className="tech-item">
                  <i className="bi bi-robot"></i>
                  <span>AI Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
