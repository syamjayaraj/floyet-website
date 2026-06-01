import "./styles.css";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  glass?: boolean;
}

const PageHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  glass = false,
}: PageHeaderProps) => {
  return (
    <header
      className={`page-header page-header--${align} reveal-blur ${
        glass ? "liquid-glass liquid-glass--elevated" : ""
      }`}
    >
      <div className="page-header-eyebrow">{eyebrow}</div>
      <h1 className="page-header-title">{title}</h1>
      {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
    </header>
  );
};

export default PageHeader;
