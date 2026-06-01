import Image from "next/image";
import Link from "next/link";
import { companionProducts } from "@/app/data/products";
import "./styles.css";

const ProductTeasers = () => {
  return (
    <section className="product-teasers section" id="products" aria-labelledby="products-heading">
      <div className="container">
        <div className="product-teasers-header reveal-blur">
          <div className="products-eyebrow">More from Floyet</div>
          <h2 id="products-heading" className="products-headline">
            Additional product lines, same engineering discipline.
          </h2>
          <p className="products-subhead">
            Beyond GymTie, we build focused software for food businesses, temples, personal finance, and retail — each designed for a specific real-world workflow.
          </p>
        </div>

        <div className="product-teasers-grid product-teasers-grid--companions reveal-stagger">
          {companionProducts.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className={`product-teaser-card product-teaser-${product.accent} reveal-child`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="product-teaser-preview" aria-hidden="true">
                <div className="product-teaser-mock-bar" />
                <div className="product-teaser-mock-lines">
                  <span />
                  <span />
                  <span />
                </div>
                <Image
                  src={product.logo}
                  alt=""
                  width={48}
                  height={48}
                  className="product-teaser-logo"
                />
              </div>
              <div className="product-teaser-body">
                <span className="product-teaser-tagline">{product.tagline}</span>
                <h3 className="product-teaser-name">{product.name}</h3>
                <p className="product-teaser-desc">{product.description}</p>
                <ul className="product-teaser-highlights">
                  {product.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="product-teaser-link">
                  Visit {product.name} <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="product-teasers-cta reveal">
          <Link href="/products" className="btn-apple btn-apple-secondary hover-lift">
            View all products including GymTie <i className="bi bi-arrow-right ms-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductTeasers;
