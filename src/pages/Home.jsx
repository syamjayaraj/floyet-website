import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <section className="home-page animated fadeIn delay-.5s">
        <div class="header wrapper">
          <div className="row">
            <div className="col-lg-7">
              <h1>
                We help to
                <br />
                Design your
                <br />
                Dream brand
              </h1>
            </div>
          </div>
        </div>
        <div className="brief">
          <p>There is always a distinctive way to promote a brand</p>
        </div>

        <div className="container">
          <section id="about" className="about">
            <h2 className="heading">About</h2>
            <div className="content">
              <p>
                You have a brand in your mind, and striving to implement it? or
                you are struggling to heighten your brand, then you are in the
                right place. Floyet will help you design your brand using the
                latest trends.
              </p>
              <p>
                At Floyet, we believe there is always a distinctive way to
                promote a brand. Reaching out to the right consumers by spending
                less is possible with digital branding.
              </p>
              <p>
                We use the brand management technique that uses internet
                branding and digital marketing; online marketing to develop a
                brand over a range of digital venues, including internet-based
                relationships, device-based applications, or media content.
              </p>
            </div>
          </section>
          <section id="services" className="services">
            <h2 className="heading">Services</h2>
            <p className="heading-description">
              We are dedicated to strengthening specific areas of your brand by
              providing numerous services.
            </p>
            <div className="content">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12 item-container">
                  <div className="item">
                    <div className="image-title">
                      <img src="/assets/img/website.png" />
                      <h4 className="title">Website</h4>
                      <p className="description">
                        We design and manage the best website for your business.
                        You don't need to worry about domain name, hosting, etc.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 item-container">
                  <div className="item">
                    <div className="image-title">
                      <img src="/assets/img/mobile-app.png" />
                      <h4 className="title">Mobile Application</h4>
                      <p className="description">
                        Mobile users are spending more than 85% on apps. So
                        creating a mobile app for your brand will increase the
                        engagement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 item-container">
                  <div className="item">
                    <div className="image-title">
                      <img src="/assets/img/graphics.png" />
                      <h4 className="title">Graphic designing</h4>
                      <p class="description">
                        A reputed brand requires beautifully designed visiting
                        cards, packagings, flyers, posters, notices, envelopes,
                        letterhead, etc. We can design those for you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 item-container">
                  <div className="item">
                    <div className="image-title">
                      <img src="/assets/img/social.png" />
                      <h4 className="title">Social Media Management</h4>
                      <p class="description">
                        We monitor the social media presence of your business
                        and make it live with engaging posts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="more">
              <Link to="/services">More</Link>
              <i class="fas fa-arrow-right"></i>
            </div>
          </section>

          <section id="products" className="products">
            <h2 className="heading">Products</h2>
            <div className="content">
              <p>
                We are powering some blogs, eCommerce websites, mobile apps,
                youtube channels, and business management software solutions.
              </p>
              <div className="row">
                <div className="col-lg-2 col-md-2 col-4 item">
                  <a href="https://www.techomoro.com" target="_blank">
                    <img src="/assets/img/techomoro.jpg" />
                  </a>
                </div>
                <div className="col-lg-2 col-md-2 col-4 item">
                  <a href="https://onebest.in" target="_blank">
                    <img src="/assets/img/onebest.jpg" />
                  </a>
                </div>
                <div className="col-lg-2 col-md-2 col-4 item">
                  <a href="https://floying.com" target="_blank">
                    <img src="/assets/img/floying.jpg" />
                  </a>{" "}
                </div>
                <div className="col-lg-2 col-md-2 col-4 item">
                  <a href="https://velichamapp.com" target="_blank">
                    <img src="/assets/img/velicham.png" />
                  </a>{" "}
                </div>
                <div className="col-lg-2 col-md-2 col-4 item">
                  <a href="https://codeariv.com" target="_blank">
                    <img src="/assets/img/codeariv.jpg" />
                  </a>{" "}
                </div>
                <div className="col-lg-2 col-md-2 col-4 item">
                  <a href="https://youngmenu.com" target="_blank">
                    <img src="/assets/img/youngmenu.jpg" />
                  </a>{" "}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact">
            <h2 className="heading">Contact us</h2>
            <div className="content">
              <div className="row">
                <div className="col-lg-6 form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                  />

                  <textarea
                    rows="3"
                    type="text"
                    className="form-control"
                    placeholder="Message"
                  />
                  <button className="btn btn-light">Submit</button>
                </div>
                <div className="col-lg-6 details order-first">
                  <div className="item">
                    <i className="fas fa-mobile-alt"></i>
                    <a href="tel:+917306585662">+91 7306585662</a>
                  </div>
                  <div className="item">
                    <i className="far fa-envelope"></i>
                    <a href="mailto:hello@floyet.com" target="_top">
                      hello@floyet.com
                    </a>
                  </div>
                  <div className="item">
                    <i class="fas fa-map-marker-alt"></i>
                    Kozhikode, Kerala, India
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home;
