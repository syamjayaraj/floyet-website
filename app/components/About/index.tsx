"use client";

const About = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="/about-image.jpg"
              alt="About Floyet"
              className="img-fluid rounded-3 shadow"
            />
          </div>
          <div className="col-lg-6">
            <h6 className="text-primary fw-bold">ABOUT US</h6>
            <h2 className="display-5 fw-bold mb-4">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="lead mb-4">
              At Floyet Labs & Technologies, we believe in the power of
              innovation to solve complex business challenges. Our team of
              experts works tirelessly to deliver cutting-edge solutions that
              drive growth and efficiency.
            </p>
            <div className="row g-4 mt-4">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="stats-number fw-bold display-6 me-3">50+</div>
                  <div className="stats-label">
                    Projects
                    <br />
                    Completed
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="stats-number fw-bold display-6 me-3">30+</div>
                  <div className="stats-label">
                    Happy
                    <br />
                    Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
