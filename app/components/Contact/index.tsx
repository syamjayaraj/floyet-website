"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="contact-section position-relative">
      <div className="contact-overlay"></div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <h6 className="text-primary fw-bold mb-3">GET IN TOUCH</h6>
            <h2 className="display-5 fw-bold mb-4">Let's Work Together</h2>
            <p className="lead text-muted">
              Have a project in mind? We'd love to hear about it. Let's discuss
              how we can help bring your ideas to life.
            </p>
          </div>
        </div>

        <div className="row g-5">
          {/* Contact Info Cards */}
          <div className="col-lg-4">
            <div className="contact-info-wrapper">
              <div className="contact-card mb-4">
                <div className="contact-card-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h5 className="mb-2">Visit Us</h5>
                <p className="mb-0">
                  Floyet Labs and Technologies
                  <br />
                  Door No: 2211, 2/1149/100
                  <br />
                  Hilite Business Park, Olavanna
                  <br />
                  Kozhikode – 673014
                </p>
              </div>

              <div className="contact-card mb-4">
                <div className="contact-card-icon">
                  <i className="bi bi-envelope"></i>
                </div>
                <h5 className="mb-2">Email Us</h5>
                <a
                  href="mailto:info@floyet.com"
                  className="text-decoration-none"
                >
                  info@floyet.com
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <i className="bi bi-telephone"></i>
                </div>
                <h5 className="mb-2">Call Us</h5>
                <a href="tel:+919746742650" className="text-decoration-none">
                  +91 974 674 2650
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        style={{ height: "150px" }}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.019841223032!2d75.8054227!3d11.2487833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x4d3625d5b05d1c67!2sHiLITE%20Business%20Park!5e0!3m2!1sen!2sin!4v1645446021844!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
