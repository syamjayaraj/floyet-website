"use client";

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
    <section className="apple-section" id="contact" style={{ padding: "120px 0" }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: "64px", textAlign: "center" }}>
          <div className="section-eyebrow" style={{ color: "var(--color-text-secondary)", letterSpacing: "2px", textTransform: "uppercase", fontSize: "14px", fontWeight: 700 }}>Get in Touch</div>
          <h2 className="section-headline" style={{ fontWeight: 800, fontSize: "clamp(32px, 5vw, 48px)", letterSpacing: "-0.02em", color: "var(--color-text-primary)" }}>
            Let's build something amazing.
          </h2>
          <p className="section-subhead" style={{ fontSize: "20px", color: "var(--color-text-secondary)", maxWidth: "600px", margin: "24px auto 0" }}>
            Reach out to discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
          {contactInfo.map((info, index) => (
            <div key={index} style={{ 
              flex: "1 1 300px", 
              maxWidth: "400px",
              padding: "40px", 
              borderRadius: "24px", 
              background: "var(--color-background-elevated)", 
              border: "1px solid var(--color-separator)", 
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)"
            }}>
              <i className={`bi ${info.icon}`} style={{ fontSize: "40px", color: "var(--color-text-primary)", marginBottom: "24px" }}></i>
              <h4 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px", color: "var(--color-text-primary)" }}>{info.title}</h4>
              <div style={{ color: "var(--color-text-secondary)", fontSize: "16px", lineHeight: "1.6" }}>
                {info.details.map((detail, idx) =>
                  info.link ? (
                    <a key={idx} href={info.link} style={{ color: "var(--color-text-primary)", textDecoration: "none" }} onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"} onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}>
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} style={{ margin: 0 }}>{detail}</p>
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
