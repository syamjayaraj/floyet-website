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
        "Olavanna, Guruvayurappan College",
        "Kozhikode, Kerala, India - 673014",
      ],
    },
    {
      icon: "bi-envelope-fill",
      title: "Email Us",
      details: ["info@floyet.com"],
      link: "mailto:info@floyet.com",
    },
    {
      icon: "bi-telephone-fill",
      title: "Call Us",
      details: ["+91 9746742650"],
      link: "tel:+919746742650",
    },
  ];

  const socialLinks = [
    {
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/company/floyet",
      label: "LinkedIn",
    },
    {
      icon: "bi-twitter-x",
      url: "https://twitter.com/floyet.tech",
      label: "Twitter",
    },
    {
      icon: "bi-instagram",
      url: "https://www.instagram.com/floyet.tech",
      label: "Instagram",
    },
    {
      icon: "bi-github",
      url: "https://github.com/codeariv",
      label: "GitHub",
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

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

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
    <section className="apple-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Get in Touch</div>
          <h2 className="section-headline">
            Let's build something amazing together
          </h2>
          <p className="section-subhead">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-section">
            <div className="contact-card-wrapper">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card-apple">
                  <div className="contact-icon-apple">
                    <i className={`bi ${info.icon}`}></i>
                  </div>
                  <h4 className="contact-info-title">{info.title}</h4>
                  <div className="contact-info-details">
                    {info.details.map((detail, idx) =>
                      info.link ? (
                        <a key={idx} href={info.link} className="contact-link-apple">
                          {detail}
                        </a>
                      ) : (
                        <p key={idx}>{detail}</p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section-apple">
              <h4 className="social-title-apple">Connect with us</h4>
              <div className="social-links-apple">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link-apple"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h3 className="form-title-apple">Send us a message</h3>
            <form onSubmit={handleSubmit} className="contact-form-apple">
              <div className="form-row">
                <div className="form-group-apple">
                  <label htmlFor="name" className="form-label-apple">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input-apple"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group-apple">
                  <label htmlFor="email" className="form-label-apple">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input-apple"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group-apple">
                <label htmlFor="subject" className="form-label-apple">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="form-input-apple"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="form-group-apple">
                <label htmlFor="message" className="form-label-apple">Message</label>
                <textarea
                  id="message"
                  className="form-textarea-apple"
                  placeholder="Tell us about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-apple btn-apple-primary"
                disabled={!isFormValid()}
                style={{ width: '100%', opacity: isFormValid() ? 1 : 0.5 }}
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* Success Animation */}
        {showSuccess && (
          <div className="success-overlay-apple">
            <div className="success-card-apple">
              <div className="success-icon-apple">
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <h3>Thank you!</h3>
              <p>We'll be in touch shortly.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
