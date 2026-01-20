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
      icon: "bi-phone",
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications that provide seamless user experiences across all devices.",
      tags: ["Expo", "React Native"],
    },
    {
      icon: "bi-shop",
      title: "Shopify E-Commerce",
      description:
        "Comprehensive Shopify services from store setup to full-scale online business development.",
      tags: ["Shopify", "E-Commerce", "SEO"],
    },
  ];

  return (
    <section className="apple-section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Our Services</div>
          <h2 className="section-headline">
            Transforming ideas into digital reality
          </h2>
          <p className="section-subhead">
            Comprehensive digital solutions that help businesses innovate and stay ahead in the rapidly evolving technology landscape.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card-apple">
              <div className="service-icon-apple">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <h3 className="service-title-apple">{service.title}</h3>
              <p className="service-description-apple">{service.description}</p>
              <div className="service-tags-apple">
                {service.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="cta-section-apple">
          <h3 className="cta-title-apple">Ready to transform your business?</h3>
          <a href="#contact" className="btn-apple btn-apple-primary">
            Start your project
          </a>
        </div>


      </div>
    </section>
  );
};

export default Services;
