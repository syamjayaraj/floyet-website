"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const contactInfo = [
    {
      icon: "bi-geo-alt-fill",
      title: "Office Location",
      details: [
        "Floyet Labs & Technologies LLP",
        "Door No: 2211, 2/1149/I 100",
        "Hilite Business Park",
        "Kozhikode – 673014",
      ],
      color: "#FF6B6B",
    },
    {
      icon: "bi-envelope-fill",
      title: "Email Us",
      details: ["info@floyet.com"],
      link: "mailto:info@floyet.com",
      color: "#4D96FF",
    },
    {
      icon: "bi-telephone-fill",
      title: "Call Us",
      details: ["+91 9746742650"],
      link: "tel:+919746742650",
      color: "#6BCB77",
    },
  ];

  const socialLinks = [
    {
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/company/floyet",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: "bi-twitter-x",
      url: "https://twitter.com/floyet.labs.tech",
      label: "Twitter",
      color: "#000000",
    },
    {
      icon: "bi-instagram",
      url: "https://www.instagram.com/floyet.labs.tech",
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: "bi-github",
      url: "https://github.com/codeariv",
      label: "GitHub",
      color: "#181717",
    },
  ];

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.subject.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
              contactStatus: "new",
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Show success animation
      setShowSuccess(true);

      // Hide success animation after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contact-section py-6" id="contact">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="section-tag mb-3">GET IN TOUCH</div>
            <h2 className="section-title mb-4">
              Let's Build Something
              <span className="gradient-text d-block">Amazing Together</span>
            </h2>
            <p className="section-description">
              Have a project in mind? We'd love to hear about it. Let's discuss
              how we can help bring your ideas to life.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-info-wrapper">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card reveal">
                  <div
                    className="contact-info-icon"
                    style={{
                      backgroundColor: `${info.color}20`,
                      color: info.color,
                    }}
                  >
                    <i className={`bi ${info.icon}`}></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, idx) =>
                      info.link ? (
                        <a key={idx} href={info.link} className="contact-link">
                          {detail}
                        </a>
                      ) : (
                        <p key={idx} className="mb-0">
                          {detail}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}

              <div className="social-links-card reveal">
                <h4>Connect With Us</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={
                        { "--hover-color": social.color } as React.CSSProperties
                      }
                    >
                      <i className={`bi ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form-card reveal">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
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
                      className={`hero-btn w-100 ${
                        isFormValid() ? "hero-btn-primary" : "hero-btn-disabled"
                      }`}
                      disabled={!isFormValid()}
                    >
                      <span>Send Message</span>
                      <i className="bi bi-send"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Success Animation */}
        {showSuccess && (
          <div className="success-animation">
            <div className="success-icon">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <p>Thank you for your message.</p>
            <p>We will be in touch shortly.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
