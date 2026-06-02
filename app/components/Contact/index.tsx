import ContactForm from "../ContactForm";
import "./styles.css";

const Contact = () => {
  const contactInfo = [
    {
      icon: "bi-envelope",
      title: "Email Us",
      details: ["info@floyet.com"],
      link: "mailto:info@floyet.com",
    },
    {
      icon: "bi-telephone",
      title: "Call Us",
      details: ["+91 9746742650"],
      link: "tel:+919746742650",
    },
    {
      icon: "bi-geo-alt",
      title: "Office Location",
      details: [
        "Door No: 2211, 2/1149/I 100",
        "Hilite Business Park",
        "Olavanna, Guruvayurappan College",
        "Kozhikode, Kerala, India - 673014",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/company/floyet",
      label: "LinkedIn",
    },
    { icon: "bi-twitter-x", url: "https://x.com/floyet.tech", label: "X" },
    {
      icon: "bi-instagram",
      url: "https://www.instagram.com/floyet.tech",
      label: "Instagram",
    },
  ];

  return (
    <section
      className="contact-section glass-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="glass-section__ambient" aria-hidden="true">
        <div
          className="glass-orb glass-orb--purple"
          style={{ width: 440, height: 440, bottom: "-10%", right: "5%" }}
        />
        <div
          className="glass-orb glass-orb--white"
          style={{ width: 360, height: 360, top: "5%", left: "-10%" }}
        />
      </div>
      <div className="container glass-section__inner">
        <div className="contact-header liquid-glass liquid-glass--elevated reveal-blur">
          <div className="contact-eyebrow">Get in Touch</div>
          <h2 id="contact-heading" className="contact-headline">
            Talk to the team behind GymTie.
          </h2>
          <p className="contact-subhead">
            GymTie inquiries, onboarding requests, partnerships, and support
            for all Floyet products. Send a message and our team will get back
            with a clear next step.
          </p>
        </div>

        <div className="contact-layout reveal-scale">
          <aside className="contact-sidebar">
            <div className="contact-card-wrapper">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="contact-info-card-apple liquid-glass liquid-glass--interactive"
                >
                  <div className="contact-icon-apple" aria-hidden="true">
                    <i className={`bi ${info.icon}`} />
                  </div>
                  <h4 className="contact-info-title">{info.title}</h4>
                  <div className="contact-info-details">
                    {info.details.map((detail, idx) =>
                      info.link ? (
                        <a
                          key={idx}
                          href={info.link}
                          className="contact-link-apple"
                        >
                          {detail}
                        </a>
                      ) : (
                        <p key={idx}>{detail}</p>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section-apple liquid-glass liquid-glass--elevated">
              <h4 className="social-title-apple">Follow Floyet</h4>
              <div className="social-links-apple">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className="social-link-apple liquid-glass"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <i className={`bi ${social.icon}`} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="contact-form-section liquid-glass liquid-glass--elevated">
            <div className="contact-form-head">
              <h3 className="contact-form-title">Send us a message</h3>
              <p className="contact-form-note">
                Share your requirement and we&apos;ll respond with the best path
                forward.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
