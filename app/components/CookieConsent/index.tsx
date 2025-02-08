"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-wrapper">
      <div className="cookie-consent">
        <div className="cookie-content">
          <div className="cookie-icon">
            <i className="bi bi-shield-lock"></i>
          </div>
          <div className="cookie-text">
            <h5>We value your privacy</h5>
            <p>
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking "Accept
              All", you consent to our use of cookies.{" "}
              <Link href="/cookies">Learn more</Link>
            </p>
          </div>
        </div>
        <div className="cookie-actions">
          <button
            onClick={handleDecline}
            className="cookie-btn cookie-btn-outline"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="cookie-btn cookie-btn-primary"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
