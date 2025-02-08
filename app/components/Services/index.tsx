"use client";

const services = [
  {
    icon: "🚀",
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
  },
  {
    icon: "🤖",
    title: "AI Solutions",
    description: "Intelligent systems and machine learning integration",
  },
  {
    icon: "🛠️",
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and deployment",
  },
];

const Services = () => {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h6 className="text-primary fw-bold">OUR SERVICES</h6>
          <h2 className="display-5 fw-bold">What We Do Best</h2>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-body text-center p-4">
                  <div className="display-5 mb-3">{service.icon}</div>
                  <h5 className="card-title mb-3">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
