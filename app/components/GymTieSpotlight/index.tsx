"use client";

import { type CSSProperties, useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GYMTIE_SLIDES } from "@/app/data/gymtie-brand";
import "./styles.css";

const FEATURES = [
  { icon: "bi-credit-card", text: "Billing & payments" },
  { icon: "bi-people", text: "Member management" },
  { icon: "bi-whatsapp", text: "WhatsApp automation" },
  { icon: "bi-trophy", text: "Leaderboards" },
  { icon: "bi-bar-chart-line", text: "Analytics" },
  { icon: "bi-calendar-check", text: "Attendance" },
];

const INTERVAL = 4000;

const GymTieSpotlight = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(Date.now());

  const slide = GYMTIE_SLIDES[active];

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    setProgress(0);
    startRef.current = Date.now();
  }, []);

  const next = useCallback(() => {
    goTo((active + 1) % GYMTIE_SLIDES.length);
  }, [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const tick = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct >= 100) next();
    }, 40);
    return () => clearInterval(tick);
  }, [paused, next]);

  const accentStyle = {
    "--gts-accent": slide.accent,
    "--gts-accent-muted": slide.accentMuted,
    "--gts-accent-glow": slide.accentGlow,
  } as CSSProperties;

  return (
    <section
      className="gts-section glass-section"
      id="gymtie"
      aria-labelledby="gts-heading"
      data-active-app={slide.id}
      style={accentStyle}
    >
      <div className="glass-section__ambient" aria-hidden="true">
        <div className="gts-orb gts-orb--accent" />
      </div>

      <div className="container glass-section__inner">
        <div className="gts-card liquid-glass liquid-glass--elevated reveal-scale">

          <div className="gts-topbar">
            <div className="gts-badge liquid-glass liquid-glass--strong">
              <Image src="/assets/logo/gymtie.png" alt="" width={22} height={22} aria-hidden="true" />
              <span>GymTie product</span>
            </div>
            <div className="gts-slide-pills">
              {GYMTIE_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  className={`gts-slide-pill gts-slide-pill--${s.id}${i === active ? " gts-slide-pill--active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div className="gts-body">
            <div className="gts-copy reveal-left">
              <div className="gts-copy-main">
                <h2 id="gts-heading" className="gts-title">
                  The GymTie<br />ecosystem
                </h2>
                <p className="gts-lead">
                  A connected platform for real gyms across India. Owners run
                  operations in{" "}
                  <strong className="gts-lead-manager">GymTie Manager</strong>;
                  members track their journey in{" "}
                  <strong className="gts-lead-fit">GymTie Fit</strong>.
                </p>

                <div className="gts-features">
                  {FEATURES.map((f) => (
                    <div key={f.text} className="gts-feature liquid-glass">
                      <i className={`bi ${f.icon}`} aria-hidden="true" />
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="gts-actions">
                <a
                  href="https://gymtie.com"
                  className="gts-cta-primary hover-lift"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore GymTie
                  <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </a>
                <Link href="/products#gymtie" className="gts-cta-secondary hover-lift">
                  Full product story
                </Link>
              </div>
            </div>

            <div
              className="gts-media reveal-right"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                className="gts-slides"
                aria-roledescription="carousel"
                aria-label="GymTie app screenshots"
              >
                <img
                  src={GYMTIE_SLIDES[0].image}
                  className="gts-slide-sizer"
                  alt=""
                  aria-hidden="true"
                />

                {GYMTIE_SLIDES.map((s, i) => (
                  <div
                    key={s.id}
                    className={`gts-slide gts-slide--${s.id}${i === active ? " gts-slide--active" : " gts-slide--exit"}`}
                    aria-hidden={i !== active}
                  >
                    <div className="gts-slide-backdrop" aria-hidden="true" />
                    <Image
                      src={s.image}
                      alt={s.name}
                      width={1100}
                      height={600}
                      className="gts-slide-img"
                      priority={i === 0}
                      sizes="(max-width: 992px) 100vw, 55vw"
                    />
                  </div>
                ))}

                <div className="gts-slide-label liquid-glass" aria-live="polite">
                  <span className={`gts-slide-dot gts-slide-dot--${slide.id}`} />
                  <span className="gts-slide-app">{slide.name}</span>
                  <span className="gts-slide-for">{slide.tagline}</span>
                </div>

                <button
                  type="button"
                  className="gts-arrow gts-arrow--prev liquid-glass"
                  onClick={() => goTo((active - 1 + GYMTIE_SLIDES.length) % GYMTIE_SLIDES.length)}
                  aria-label="Previous"
                >
                  <i className="bi bi-chevron-left" />
                </button>
                <button
                  type="button"
                  className="gts-arrow gts-arrow--next liquid-glass"
                  onClick={next}
                  aria-label="Next"
                >
                  <i className="bi bi-chevron-right" />
                </button>
              </div>

              <div className="gts-progress-track">
                {GYMTIE_SLIDES.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`gts-progress-seg gts-progress-seg--${s.id}${i === active ? " gts-progress-seg--active" : ""}`}
                    onClick={() => goTo(i)}
                    aria-label={`Show ${s.name}`}
                  >
                    <span
                      className="gts-progress-fill"
                      style={{
                        width:
                          i === active
                            ? `${progress}%`
                            : i < active
                              ? "100%"
                              : "0%",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymTieSpotlight;
