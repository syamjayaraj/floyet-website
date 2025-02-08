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
    <section className="hero-section position-relative vh-100 d-flex align-items-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="position-absolute w-100 h-100 object-fit-cover"
        style={{ zIndex: -1 }}
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
      <div
        className="overlay position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: -1 }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 text-white animate-fade-in">
            <h1 className="display-3 fw-bold mb-4">
              Building Innovative Solutions
              <br />
              Through Technology
            </h1>
            <p className="lead mb-5">
              We create digital solutions that transform businesses and enhance
              user experiences. Our commitment to innovation drives every
              project we undertake.
            </p>
            <button className="btn btn-primary btn-lg px-5 py-3">
              Explore Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
