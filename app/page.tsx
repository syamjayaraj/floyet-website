// get our fontawesome imports
export default function Home() {
  return (
    <main>
      <section id="one">
        <h1 id="logo">FLOYET</h1>
        <h2 id="hello">
          {" "}
          <span className="hello_word">Hello.</span> You’ve&nbsp;reached the
          FLOYET.
        </h2>
      </section>
      <section id="two">
        <h3 id="future">Our Innovation Hub.</h3>
        <div className="container brand-container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-4 item">
              <a href="https://www.techomoro.com" target="_blank">
                <img
                  className="brand-logo"
                  src="/assets/images/techomoro.jpg"
                />
              </a>
            </div>
            <div className="col-lg-2 col-md-2 col-4 item">
              <a href="https://codeariv.com" target="_blank">
                <img className="brand-logo" src="/assets/images/codeariv.jpg" />
              </a>
            </div>
            <div className="col-lg-2 col-md-2 col-4 item">
              <a href="https://kuty.me" target="_blank">
                <img
                  className="brand-logo"
                  src="/assets/images/kuty_logo.png"
                />
              </a>
            </div>
            <div className="col-lg-2 col-md-2 col-4 item">
              <a href="https://onebest.in" target="_blank">
                <img className="brand-logo" src="/assets/images/onebest.jpg" />
              </a>
            </div>
            <div className="col-lg-2 col-md-2 col-4 item">
              <a href="https://floying.com" target="_blank">
                <img className="brand-logo" src="/assets/images/floying.jpg" />
              </a>
            </div>

            <div className="col-lg-2 col-md-2 col-4 item">
              <a href="https://youngmenu.com" target="_blank">
                <img
                  className="brand-logo"
                  src="/assets/images/youngmenu.jpg"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="three">
        <a href="mailto:hello@floyet.com" id="sayhi">
          hello@floyet.com
        </a>
      </section>
      <footer className="footer text-faded text-center py-5">
        <div className="container">
          {/* <div className="social-icons">
              <a href="https://facebook.com/floyettechnologies">
                <FontAwesomeIcon icon={faFacebook} width={25} height={25} />
              </a>
              <a href="https://instagram.com/floyettechnologies">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  width={25}
                  height={25}
                />
              </a>
              <a href="https://twitter.com/floyettechnologies">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://pinterest.com/floyettechnologies">
                <i className="fab fa-pinterest" />
              </a>
            </div> */}
          <p className="m-0 small">Made with Love in God&apos;s own country</p>
          <p className="m-0 small copyright">
            Copyright &copy; <a href="https://floyet.com">FLOYET</a> 2024
          </p>
        </div>
      </footer>
    </main>
  );
}
