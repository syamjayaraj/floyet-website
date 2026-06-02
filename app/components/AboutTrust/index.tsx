import Link from "next/link";
import Image from "next/image";
import { FLOYET_ECOSYSTEM_MEDIA } from "@/app/data/products";
import AnimatedCounter from "../AnimatedCounter";
import ProductShowcase from "../ProductShowcase";
import "./styles.css";

const AboutTrust = () => {
  const stats = [
    { value: "100+", label: "Gyms & businesses on GymTie" },
    { value: "50K+", label: "End users reached" },
    { value: "5", label: "Product lines total" },
    { value: "2025", label: "Registered LLP" },
  ];

  return (
    <section
      className="about-trust section glass-section"
      aria-labelledby="about-trust-heading"
    >
      <div className="glass-section__ambient" aria-hidden="true">
        <div
          className="glass-orb glass-orb--purple"
          style={{ width: 500, height: 500, top: "-20%", right: "-10%" }}
        />
        <div
          className="glass-orb glass-orb--blue"
          style={{ width: 380, height: 380, bottom: "-15%", left: "-8%" }}
        />
      </div>
      <div className="container glass-section__inner">
        <div className="about-trust-inner liquid-glass liquid-glass--elevated reveal-scale">
          <div className="about-trust-copy reveal-left">
            <div className="about-trust-eyebrow">About Floyet</div>
            <h2 id="about-trust-heading" className="about-trust-headline">
              Product-led. GymTie-first. Built in Kerala.
            </h2>
            <p className="about-trust-text">
              Floyet Labs &amp; Technologies LLP invests primarily in the GymTie
              ecosystem - gym operations for owners and member engagement
              through GymTie Fit. Our other products apply the same product
              discipline to food, temples, finance, and retail.
            </p>
            <div className="about-trust-gymtie-pill liquid-glass liquid-glass--strong liquid-glass--purple">
              <Image
                src="/assets/logo/gymtie.png"
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
              />
              <span>Primary focus: GymTie</span>
            </div>
            <Link
              href="/about"
              className="btn-apple btn-apple-secondary hover-lift"
            >
              Meet the team{" "}
              <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
            </Link>
          </div>

          <div className="about-trust-visual reveal-right">
            <ProductShowcase
              src={FLOYET_ECOSYSTEM_MEDIA}
              alt="Floyet product ecosystem placeholder"
              label="Photo placeholder"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="about-trust-stats reveal-stagger" role="list">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="about-trust-stat liquid-glass liquid-glass--interactive reveal-child"
                  role="listitem"
                >
                  <div className="about-trust-stat-value">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="about-trust-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrust;
