"use client";

import Clients from "../Clients";

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
      </div>
    </section>
  );
};

export default Services;
