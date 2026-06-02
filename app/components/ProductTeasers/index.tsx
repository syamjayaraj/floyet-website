import Image from "next/image";
import Link from "next/link";
import { companionProducts, isBetaProduct } from "@/app/data/products";
import "./styles.css";

const ProductTeasers = () => {
  return (
    <section
      className="product-teasers section glass-section"
      id="products"
      aria-labelledby="products-heading"
    >
      <div className="glass-section__ambient" aria-hidden="true">
        <div
          className="glass-orb glass-orb--blue"
          style={{ width: 420, height: 420, top: "10%", right: "-12%" }}
        />
        <div
          className="glass-orb glass-orb--white"
          style={{ width: 320, height: 320, bottom: "5%", left: "20%" }}
        />
      </div>
      <div className="container glass-section__inner">
        <div className="product-teasers-header liquid-glass liquid-glass--elevated reveal-blur">
          <div className="products-eyebrow">More from Floyet</div>
          <h2 id="products-heading" className="products-headline">
            Additional product lines, same engineering discipline.
          </h2>
          <p className="products-subhead">
            Beyond GymTie, we build focused software for food businesses,
            temples, personal finance, and retail - each designed for a specific
            real-world workflow.
          </p>
        </div>

        <div className="product-teasers-grid product-teasers-grid--companions reveal-stagger">
          {companionProducts.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className={`product-teaser-card product-teaser-${product.accent} liquid-glass liquid-glass--interactive reveal-child`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="product-teaser-preview">
                <Image
                  src={product.media.showcase}
                  alt={`${product.name} preview`}
                  width={400}
                  height={225}
                  className="product-teaser-shot"
                />
                <div className="product-teaser-preview-logo">
                  <Image
                    src={product.logo}
                    alt=""
                    width={40}
                    height={40}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="product-teaser-body">
                <span className="product-teaser-tagline">
                  {product.tagline}
                </span>
                <h3 className="product-teaser-name">{product.name}</h3>
                {isBetaProduct(product.id) ? (
                  <span className="product-teaser-beta">Beta</span>
                ) : null}
                <p className="product-teaser-desc">{product.description}</p>
                <ul className="product-teaser-highlights">
                  {product.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="product-teaser-link">
                  Visit {product.name}{" "}
                  <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="product-teasers-cta reveal">
          <Link
            href="/products"
            className="btn-apple btn-apple-secondary hover-lift product-teasers-cta-btn liquid-glass liquid-glass--elevated"
          >
            View all products{" "}
            <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductTeasers;
