"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { products } from "@/app/data/products";
import "./styles.css";

const Products = () => {
  const gymtie = products.find((p) => p.id === "gymtie")!;
  const otherProducts = products.filter((p) => p.id !== "gymtie");
  const betaProductIds = new Set(["youngmenu", "devapatha", "livonomi"]);
  const gymtieSlides = useMemo(
    () => [
      {
        key: "manager",
        label: "Manager",
        image: gymtie.media.manager ?? gymtie.media.showcase,
      },
      {
        key: "fit",
        label: "Fit",
        image: gymtie.media.fit ?? gymtie.media.showcase,
      },
    ],
    [gymtie.media.fit, gymtie.media.manager, gymtie.media.showcase],
  );
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gymtieSlides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [gymtieSlides.length]);

  return (
    <section className="products-modern section" id="products">
      <div className="container">
        <div className="products-grid">
          <article className="product-card product-card--feature reveal-scale" id="gymtie">
            <div className="product-card-media product-card-media--slider">
              <div className="gymtie-slider-track" aria-live="polite">
                {gymtieSlides.map((slide, index) => (
                  <Image
                    key={slide.key}
                    src={slide.image}
                    alt={`GymTie ${slide.label} preview`}
                    width={1200}
                    height={675}
                    className={`product-card-image gymtie-slide-image ${activeSlide === index ? "is-active" : ""}`}
                  />
                ))}
              </div>
              <div className="gymtie-slider-controls" aria-label="GymTie slide controls">
                <button
                  type="button"
                  className="gymtie-slider-arrow"
                  onClick={() =>
                    setActiveSlide((prev) => (prev - 1 + gymtieSlides.length) % gymtieSlides.length)
                  }
                  aria-label="Previous slide"
                >
                  <i className="bi bi-chevron-left" aria-hidden="true" />
                </button>
                <div className="gymtie-slider-dots" role="tablist" aria-label="GymTie slides">
                  {gymtieSlides.map((slide, index) => (
                    <button
                      key={slide.key}
                      type="button"
                      role="tab"
                      aria-selected={activeSlide === index}
                      aria-label={`Show GymTie ${slide.label}`}
                      className={`gymtie-slider-dot ${activeSlide === index ? "is-active" : ""}`}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="gymtie-slider-arrow"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % gymtieSlides.length)}
                  aria-label="Next slide"
                >
                  <i className="bi bi-chevron-right" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="product-card-body product-card-body--feature">
              <span className="product-card-kicker">Fitness ecosystem</span>
              <div className="product-card-brand product-card-brand--feature">
                <Image src={gymtie.logo} alt="" width={46} height={46} aria-hidden="true" />
                <div>
                  <h3>{gymtie.name}</h3>
                  <span>Professional platform for modern gyms</span>
                </div>
              </div>
              <p className="product-card-description product-card-description--feature">
                {gymtie.description}
              </p>
              <ul className="product-card-points product-card-points--feature">
                {gymtie.highlights.map((item) => (
                  <li key={item}>
                    <i className="bi bi-check2" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="product-card-actions product-card-actions--feature">
                <a href={gymtie.href} target="_blank" rel="noopener noreferrer" className="btn-apple btn-apple-primary hover-lift">
                  Visit GymTie <i className="bi bi-arrow-up-right ms-2" aria-hidden="true" />
                </a>
                <span className="product-card-subapps product-card-subapps--feature">
                  <i className="bi bi-layers" aria-hidden="true" />
                  Showing <strong>GymTie {gymtieSlides[activeSlide].label}</strong>
                </span>
              </div>
            </div>
          </article>

          {otherProducts.map((product) => (
            <article key={product.id} className="product-card product-card--standard reveal-scale">
              <div className="product-card-media">
                <Image
                  src={product.media.showcase}
                  alt={`${product.name} preview`}
                  width={1200}
                  height={675}
                  className="product-card-image"
                />
              </div>
              <div className="product-card-body">
                <div className="product-card-brand">
                  <Image src={product.logo} alt="" width={38} height={38} aria-hidden="true" />
                  <div>
                    <h3>{product.name}</h3>
                    <span>{product.tagline}</span>
                  </div>
                </div>
                <p className="product-card-description product-card-description--standard">
                  {product.description}
                </p>
                <ul className="product-card-points product-card-points--standard">
                  {product.highlights.map((item) => (
                    <li key={item}>
                      <i className="bi bi-check2" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="product-card-footer">
                  <a href={product.href} target="_blank" rel="noopener noreferrer" className="product-card-link">
                    Visit {product.name} <i className="bi bi-arrow-up-right" aria-hidden="true" />
                  </a>
                  <span
                    className={`product-card-meta ${betaProductIds.has(product.id) ? "product-card-meta--beta" : ""}`}
                  >
                    {betaProductIds.has(product.id) ? "Beta" : "Live product"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
