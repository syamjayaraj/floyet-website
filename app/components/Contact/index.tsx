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

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <div className="contact-eyebrow">Get in Touch</div>
          <h2 className="contact-headline">
            Ready to transform your business?
          </h2>
          <p className="contact-subhead">
            Reach out to discover how our solutions can help you scale and streamline your operations.
          </p>
        </div>

        <div className="contact-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <i className={`bi ${info.icon} contact-icon`}></i>
              <h4 className="contact-card-title">{info.title}</h4>
              <div className="contact-details">
                {info.details.map((detail, idx) =>
                  info.link ? (
                    <a key={idx} href={info.link} className="contact-link">
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="contact-detail-text">{detail}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
