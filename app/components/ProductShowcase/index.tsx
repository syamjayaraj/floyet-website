import Image from "next/image";
import "./styles.css";

interface ProductShowcaseProps {
  src: string;
  alt: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
}

const ProductShowcase = ({
  src,
  alt,
  label = "Screenshot placeholder",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 720px",
}: ProductShowcaseProps) => {
  return (
    <figure className="product-showcase">
      <span className="product-showcase-badge">{label}</span>
      <div className="product-showcase-frame">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="product-showcase-image"
          priority={priority}
          sizes={sizes}
        />
      </div>
    </figure>
  );
};

export default ProductShowcase;
