"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GYMTIE_SLIDES } from "@/app/data/gymtie-brand";
import "./styles.css";

const FEATURES = [
  "Billing & payments",
  "Member management",
  "WhatsApp automation",
  "Leaderboards",
  "Analytics",
  "Attendance",
];

const SLIDE_INTERVAL = 5000;

const GymTieSpotlight = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % GYMTIE_SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="gts-section"
      id="gymtie"
      aria-labelledby="gts-heading"
    >
      <div className="container">
        <article className="gts-card reveal-scale">
          <div className="gts-body">
            <div className="gts-copy reveal-left">
              <div className="gts-brand">
                <Image
                  src="/assets/logo/gymtie.png"
                  alt=""
                  width={44}
                  height={44}
                  aria-hidden="true"
                />
                <div>
                  <span className="gts-eyebrow">Fitness ecosystem</span>
                  <h2 id="gts-heading" className="gts-title">
                    The GymTie ecosystem
                  </h2>
                </div>
              </div>

              <p className="gts-lead">
                A connected platform for real gyms across India. Owners run
                operations in{" "}
                <strong className="gts-lead-manager">GymTie Manager</strong>;
                members track their journey in{" "}
                <strong className="gts-lead-fit">GymTie Fit</strong>.
              </p>

              <ul className="gts-features">
                {FEATURES.map((feature) => (
                  <li key={feature}>
                    <i className="bi bi-check2" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="gts-actions">
                <a
                  href="https://gymtie.com"
                  className="btn-apple btn-apple-primary hover-lift"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore GymTie
                  <i className="bi bi-arrow-up-right ms-2" aria-hidden="true" />
                </a>
                <Link
                  href="/products#gymtie"
                  className="btn-apple btn-apple-secondary hover-lift"
                >
                  Full product story
                </Link>
              </div>
            </div>

            <div className="gts-media reveal-right">
              <div
                className="gts-slides"
                aria-roledescription="carousel"
                aria-label="GymTie app screenshots"
              >
                {GYMTIE_SLIDES.map((slide, index) => (
                  <Image
                    key={slide.id}
                    src={slide.image}
                    alt={slide.name}
                    width={1100}
                    height={600}
                    className={`gts-slide-image ${
                      active === index ? "is-active" : ""
                    }`}
                    priority={index === 0}
                    sizes="(max-width: 992px) 100vw, 55vw"
                  />
                ))}
              </div>

              <div
                className="gts-media-switch"
                role="tablist"
                aria-label="GymTie apps"
              >
                {GYMTIE_SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={active === index}
                    className={`gts-media-tab gts-media-tab--${slide.id} ${
                      active === index ? "is-active" : ""
                    }`}
                    onClick={() => setActive(index)}
                  >
                    {slide.name.replace("GymTie ", "")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default GymTieSpotlight;
