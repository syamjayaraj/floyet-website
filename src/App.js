import React, { useState, useEffect } from "react";

import "./assets/scss/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { css } from "@emotion/core";
import { ScaleLoader } from "react-spinners";
// import "./assets/css/animate.css";
import { Navigation, Footer } from "./components";
import { LanguageModal } from "./modals";
import { Home } from "./pages";

import Analytics from "react-router-ga";

const override = css`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

function App() {
  let storedLanguage = localStorage.getItem("language");
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [language, setLanguage] = useState(
    storedLanguage ? storedLanguage : "English"
  );
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLanguageModal(true);
    }, 3000);
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {showLoader ? (
        <div className="sweet-loading">
          <ScaleLoader
            css={override}
            size={150}
            //size={"150px"} this also works
            color={"#d4994f"}
            loading={showLoader}
          />
        </div>
      ) : (
        <Router>
          <Analytics id="UA-168764526-1" debug>
            {/* <Title /> */}
            <Navigation
              language={language}
              handleSetLanguage={(l) => {
                setLanguage(l);
                storeLanguageInLocalStorage(l);
              }}
            />

            {!storedLanguage && showLanguageModal ? (
              <LanguageModal
                handleHideLanguageModal={() => setShowLanguageModal(false)}
                handleLanguage={(l) => {
                  setLanguage(l);
                  storeLanguageInLocalStorage(l);
                }}
              />
            ) : null}

            <Switch>
              <Route
                path="/"
                exact
                component={() => <Home language={language} />}
              />
            </Switch>
            <Footer />
          </Analytics>
        </Router>
      )}
    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
