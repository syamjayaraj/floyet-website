"use client";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarath",
      role: "Owner",
      company: "New Wings Gym",
      image: "/assets/user/sarath.png",
      product: "GymTie",
      quote:
        "GymTie has revolutionized how we manage our gym. The membership tracking and payment logging features have saved us countless hours of manual work.",
      rating: 5,
      logo: "/assets/logo/gymtie.png",
    },
    {
      name: "Thejasa",
      role: "Founder",
      company: "Mbakes",
      image: "/assets/user/thejasa.jpg",
      product: "YoungMenu",
      quote:
        "YoungMenu has transformed our bakery operations. The virtual menu and order management system has helped us serve customers more efficiently.",
      rating: 5,
      logo: "/assets/logo/youngmenu.jpg",
    },
    {
      name: "Akshay",
      role: "Community Leader",
      company: "Parambath",
      image: "/assets/user/akshay.jpg",
      product: "Parambath App",
      quote:
        "The Parambath app has brought our village services into the digital age. It's made accessing local services so much more convenient for everyone.",
      rating: 5,
      logo: "/assets/logo/parambathapp.png",
    },
    {
      name: "Sarojini",
      role: "Reader",
      company: "CodeARIV",
      image: "/assets/user/sarojini.webp",
      product: "CodeARIV",
      quote:
        "CodeARIV has been my go-to resource for staying updated with full-stack development. The content is always relevant and well-explained.",
      rating: 5,
      logo: "/assets/logo/codeariv.jpg",
    },
  ];

  return (
    <section className="testimonials-section py-6">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="section-tag mb-3">TESTIMONIALS</div>
            <h2 className="section-title mb-4">
              What Our Clients
              <span className="gradient-text d-block">Say About Us</span>
            </h2>
            <p className="section-description">
              Don't just take our word for it. Here's what our clients have to
              say about their experience working with us.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-6">
              <div className="testimonial-card reveal">
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-product">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.product}
                      className="product-logo"
                    />
                    <span className="product-name">{testimonial.product}</span>
                  </div>
                </div>
                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="author-image"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
