"use client";

import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section
      className="hero-section position-relative d-flex align-items-center"
      id="home"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute w-100 h-100 object-fit-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>
      <div
        className="overlay position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: -1 }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <div className="hero-content animate-fade-in">
              <h1 className="hero-title">
                Building Tomorrow&apos;s
                <span className="d-block hero-title-span">
                  Digital Solutions
                </span>
              </h1>
              <p className="hero-subtitle">
                We create innovative software solutions that transform
                businesses
                <span className="d-block mt-2">
                  and enhance user experiences.
                </span>
              </p>
              <div className="hero-buttons">
                <a href="#work" className="hero-btn hero-btn-primary">
                  <span>Explore Our Work</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
                <a href="#contact" className="hero-btn hero-btn-outline">
                  <span>Get in Touch</span>
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
