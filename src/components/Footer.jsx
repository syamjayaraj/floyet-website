import React from "react";

function Footer() {
  return (
    <footer className="footer text-faded text-center py-5">
      <div className="container">
        <div className="social-icons">
          <a href="https://facebook.com/floyettechnologies">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://instagram.com/floyettechnologies">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://twitter.com/floyettechnologies">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://pinterest.com/floyettechnologies">
            <i className="fab fa-pinterest" />
          </a>
        </div>
        <p className="m-0 small">Made with Love in God's own country</p>
        <p className="m-0 small copyright">
          Copyright &copy; <a href="https://floyet.com">Floyet</a> 2020
        </p>
      </div>
    </footer>
  );
}

export default Footer;
