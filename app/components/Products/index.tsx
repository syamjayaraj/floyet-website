"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { isBetaProduct, products } from "@/app/data/products";
import { GYMTIE_SLIDES } from "@/app/data/gymtie-brand";
import "./styles.css";

const Products = () => {
  const gymtie = products.find((p) => p.id === "gymtie")!;
  const otherProducts = products.filter((p) => p.id !== "gymtie");
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % GYMTIE_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="products-modern section" id="products">
      <div className="container">
        <div className="products-grid">
          <article
            className="product-card product-card--feature reveal-scale"
            id="gymtie"
          >
            <div className="product-card-media product-card-media--gymtie">
              <div className="gymtie-media-track" aria-live="polite">
                {GYMTIE_SLIDES.map((item, index) => (
                  <Image
                    key={item.id}
                    src={item.image}
                    alt={item.name}
                    width={1200}
                    height={675}
                    className={`product-card-image gymtie-media-image ${
                      activeSlide === index ? "is-active" : ""
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
              <div
                className="gymtie-media-switch"
                role="tablist"
                aria-label="GymTie apps"
              >
                {GYMTIE_SLIDES.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={activeSlide === index}
                    className={`gymtie-media-tab ${
                      activeSlide === index ? "is-active" : ""
                    }`}
                    onClick={() => setActiveSlide(index)}
                  >
                    {item.name.replace("GymTie ", "")}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-card-body product-card-body--feature">
              <div className="product-card-brand">
                <Image
                  src={gymtie.logo}
                  alt=""
                  width={40}
                  height={40}
                  aria-hidden="true"
                />
                <div>
                  <h3>{gymtie.name}</h3>
                  <span>{gymtie.tagline}</span>
                </div>
              </div>
              <p className="product-card-description">{gymtie.description}</p>
              <ul className="product-card-points product-card-points--standard">
                {gymtie.highlights.map((item) => (
                  <li key={item}>
                    <i className="bi bi-check2" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="product-card-footer">
                <a
                  href={gymtie.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-card-link"
                >
                  Visit GymTie{" "}
                  <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </a>
                <span className="product-card-meta">Live product</span>
              </div>
            </div>
          </article>

          {otherProducts.map((product) => (
            <article
              key={product.id}
              className="product-card product-card--standard reveal-scale"
            >
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
                  <Image
                    src={product.logo}
                    alt=""
                    width={38}
                    height={38}
                    aria-hidden="true"
                  />
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
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card-link"
                  >
                    Visit {product.name}{" "}
                    <i className="bi bi-arrow-up-right" aria-hidden="true" />
                  </a>
                  <span
                    className={`product-card-meta ${
                      isBetaProduct(product.id) ? "product-card-meta--beta" : ""
                    }`}
                  >
                    {isBetaProduct(product.id) ? "Beta" : "Live product"}
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
