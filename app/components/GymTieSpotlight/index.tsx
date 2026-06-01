import Image from "next/image";
import Link from "next/link";
import { flagshipProduct } from "@/app/data/products";
import ProductShowcase from "../ProductShowcase";
import "./styles.css";

const GymTieSpotlight = () => {
  const { media } = flagshipProduct;

  return (
    <section
      className="gymtie-spotlight section glass-section"
      aria-labelledby="gymtie-spotlight-heading"
    >
      <div className="glass-section__ambient" aria-hidden="true">
        <div
          className="glass-orb glass-orb--purple"
          style={{ width: 480, height: 480, top: "-15%", left: "-8%" }}
        />
        <div
          className="glass-orb glass-orb--blue"
          style={{ width: 400, height: 400, bottom: "-20%", right: "-5%" }}
        />
      </div>
      <div className="glass-section__grid" aria-hidden="true" />

      <div className="container glass-section__inner">
        <div className="gymtie-spotlight-card liquid-glass liquid-glass--elevated liquid-glass--purple reveal-scale">
          <div className="gymtie-spotlight-layout">
            <div className="gymtie-spotlight-copy reveal-left">
              <div className="gymtie-spotlight-ribbon liquid-glass liquid-glass--strong">
                <Image
                  src="/assets/logo/gymtie.png"
                  alt=""
                  width={40}
                  height={40}
                  aria-hidden="true"
                />
                <span>Flagship product</span>
              </div>
              <h2
                id="gymtie-spotlight-heading"
                className="gymtie-spotlight-title"
              >
                The GymTie ecosystem
              </h2>
              <p className="gymtie-spotlight-lead">
                GymTie is Floyet&apos;s primary product — a connected platform
                for real gyms across India. Owners run billing, attendance, and
                member operations in <strong>GymTie Manager</strong>. Members
                track workouts, nutrition, and progress in{" "}
                <strong>GymTie Fit</strong>. One ecosystem, two experiences,
                built for how gyms actually operate.
              </p>
              <ul className="gymtie-spotlight-points">
                <li>Unified billing, attendance, and WhatsApp automation</li>
                <li>Member engagement through workouts and leaderboards</li>
                <li>Designed for Indian gyms — from solo studios to chains</li>
              </ul>
              <div className="gymtie-spotlight-actions">
                <a
                  href="https://gymtie.com"
                  className="btn-apple btn-apple-primary hover-lift gymtie-spotlight-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore GymTie{" "}
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

            <div className="gymtie-spotlight-media reveal-right">
              <ProductShowcase
                src={media.showcase}
                alt="GymTie ecosystem preview"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymTieSpotlight;
