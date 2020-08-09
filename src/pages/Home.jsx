import React, { useState, useEffect } from "react";

import ScrollAnimation from "react-animate-on-scroll";
import { css } from "@emotion/core";

import { ScaleLoader } from "react-spinners";

const override = css`
  display: block;
`;

function Home(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [sendDataButtonClicked, setSendDataButtonClicked] = useState(false);
  const [dataSent, setDataSent] = useState(false);

  function sendData() {
    console.log("indie");
    setSendDataButtonClicked(true);

    let url = `https://api.floyet.com/contact`;
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        mobile: mobile,
        message: message,
      }),
    };
    fetch(url, requestOptions)
      .then((data) => data.json())
      .then((res) => {
        if (res.data) {
          setDataSent(true);
        }
      });
  }

  return (
    <div>
      <section className="home-page animated fadeIn delay-.5s">
        <section id="landing">
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
            <a className="call-button" href="tel:+917306585662">
              <i className="fas fa-phone-volume" />
              +91 7306585662
            </a>
          </div>
        </section>

        <div className="brief">
          <ScrollAnimation animateIn="fadeIn">
            <blockquote>
              <p>There is always a distinctive way to promote a brand</p>
            </blockquote>
          </ScrollAnimation>
        </div>

        <div className="container">
          <section id="about" className="about">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="heading">About</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <div className="content">
                <p>
                  You have a brand in your mind, and striving to implement it?
                  or you are struggling to heighten your brand, then you are in
                  the right place. Floyet will help you design your brand using
                  the latest trends.
                </p>
                <p>
                  At Floyet, we believe there is always a distinctive way to
                  promote a brand. Reaching out to the right consumers by
                  spending less is possible with digital branding.
                </p>
                <p>
                  We use the brand management technique that uses internet
                  branding and digital marketing; online marketing to develop a
                  brand over a range of digital venues, including internet-based
                  relationships, device-based applications, or media content.
                </p>
                <p>
                  We use the brand management technique that uses internet
                  branding and digital marketing; online marketing to develop a
                  brand over a range of digital venues, including internet-based
                  relationships, device-based applications, or media content.
                </p>
                <li>We are dedicated in,</li>
                <li>
                  <i class="far fa-hand-point-right"></i>Beautifying your
                  brand's digital appearance.
                </li>
                <li>
                  <i class="far fa-hand-point-right"></i>
                  Supporting you to build a mighty relationship with customers.
                </li>
                <li>
                  <i class="far fa-hand-point-right"></i>
                  Managing your business with the help of our most precisely
                  crafted apps.
                </li>
              </div>
            </ScrollAnimation>
          </section>
          <section id="services" className="services">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="heading">Services</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
              <p className="heading-description">
                We are dedicated to strengthening specific areas of your brand
                by providing numerous services.
              </p>
            </ScrollAnimation>
            <div className="content">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <ScrollAnimation animateIn="fadeIn">
                    <div className="item">
                      <div className="image-title">
                        <img src="/assets/img/website.png" />
                        <h4 className="title">Website</h4>
                        <p className="description">
                          We design and manage the best website for your
                          business. You don't need to worry about domain name,
                          hosting, etc.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <ScrollAnimation animateIn="fadeIn">
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
                  </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <ScrollAnimation animateIn="fadeIn">
                    <div className="item">
                      <div className="image-title">
                        <img src="/assets/img/digital-marketing.png" />
                        <h4 className="title">Digital Marketing</h4>
                        <p className="description">
                          We help you in advertising through digital channels
                          such as social media, email, search engines, etc.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <ScrollAnimation animateIn="fadeIn">
                    <div className="item">
                      <div className="image-title">
                        <img src="/assets/img/graphics.png" />
                        <h4 className="title">Graphic designing</h4>
                        <p class="description">
                          A reputed brand requires beautifully designed visiting
                          cards, packagings, flyers, posters, notices,
                          envelopes, letterhead, etc. We can design those for
                          you.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <ScrollAnimation animateIn="fadeIn">
                    <div className="item">
                      <div className="image-title">
                        <img src="/assets/img/seo.png" />
                        <h4 className="title">SEO</h4>
                        <p class="description">
                          Are you struggling to find your business on Google?
                          Don't worry. We will help you to do some SEO.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-md-4 col-12 item-container">
                  <ScrollAnimation animateIn="fadeIn">
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
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </section>

          <section id="products" className="products">
            <ScrollAnimation animateIn="fadeIn">
              <h2 className="heading">Products</h2>
            </ScrollAnimation>

            <div className="content">
              <ScrollAnimation animateIn="fadeIn">
                <p>
                  We are powering some blogs, eCommerce websites, mobile apps,
                  youtube channels, and business management software solutions.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
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
              </ScrollAnimation>
            </div>
          </section>

          <section id="contact" className="contact">
            <h2 className="heading">Contact us</h2>
            <div className="content">
              <div className="row">
                <div className="col-lg-6 form">
                  {dataSent ? (
                    <div className="form-sent-success-message">
                      <h1>Thank you!</h1>
                      <p>
                        We will reach out to you shortly to provide more
                        information about our services.
                      </p>
                    </div>
                  ) : (
                    <ScrollAnimation animateIn="fadeIn">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />

                      <textarea
                        rows="3"
                        type="text"
                        className="form-control"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />

                      {sendDataButtonClicked ? (
                        <div className="sweet-loading">
                          <ScaleLoader
                            css={override}
                            size={50}
                            color={"#141414"}
                            loading={sendDataButtonClicked}
                          />
                        </div>
                      ) : (
                        <button
                          className="btn btn-light"
                          onClick={() => sendData()}
                          disabled={!name || !(email || mobile) || !message}
                        >
                          Submit
                        </button>
                      )}
                    </ScrollAnimation>
                  )}
                </div>
                <div className="col-lg-6 details order-first">
                  <ScrollAnimation animateIn="fadeIn">
                    <div className="item">
                      <i className="fas fa-mobile-alt"></i>
                      <a href="tel:+917306585662">+91 7306585662</a>
                    </div>

                    <div className="item mobile">
                      <i className="fab fa-whatsapp"></i>
                      <a
                        href="https://wa.me/917306585662?text=Hi, I'm interested to know more about digital branding and how it will my business.%0A%0A"
                        target="_blank"
                      >
                        +91 7306585662
                      </a>
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
                  </ScrollAnimation>
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
