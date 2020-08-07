import React, { useState, useEffect } from "react";

import { Link, withRouter } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navigation(props) {
  const [showNavigationMobile, setNavigationMobile] = useState(false);
  return (
    <div className="navbar-component">
      {/* {showNavigationMobile? */}

      <nav class="navbar navbar-expand-lg navbar-light py-3" id="mainNav">
        <div class="container">
          <Link class="navbar-brand js-scroll-trigger" to="/">
            <img src="/assets/img/logo.png" />
          </Link>
          <button
            class="navbar-toggler navbar-toggler-right collapsed"
            type="button"
            onClick={() => setNavigationMobile(!showNavigationMobile)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="navbar-collapse collapse"
            id="navbarResponsive"
            style={showNavigationMobile ? { display: "block" } : null}
          >
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
              <li class="nav-item">
                <AnchorLink
                  class="nav-link"
                  onClick={() =>
                    setNavigationMobile(
                      showNavigationMobile ? !showNavigationMobile : null
                    )
                  }
                  href="#about"
                >
                  About us
                </AnchorLink>
              </li>
              <li class="nav-item">
                <AnchorLink
                  class="nav-link"
                  onClick={() =>
                    setNavigationMobile(
                      showNavigationMobile ? !showNavigationMobile : null
                    )
                  }
                  href="#services"
                >
                  Services
                </AnchorLink>
              </li>
              <li class="nav-item">
                <AnchorLink
                  class="nav-link"
                  onClick={() =>
                    setNavigationMobile(
                      showNavigationMobile ? !showNavigationMobile : null
                    )
                  }
                  href="#products"
                >
                  Products
                </AnchorLink>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={() =>
                    setNavigationMobile(
                      showNavigationMobile ? !showNavigationMobile : null
                    )
                  }
                  href="https://blog.floyet.com"
                  target="_blank"
                >
                  Blog
                </a>
              </li>

              <li class="nav-item">
                <AnchorLink
                  class="nav-link"
                  onClick={() =>
                    setNavigationMobile(
                      showNavigationMobile ? !showNavigationMobile : null
                    )
                  }
                  href="#contact"
                >
                  Contact us
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
