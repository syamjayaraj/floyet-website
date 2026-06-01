import "./styles.css";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

const PageHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: PageHeaderProps) => {
  return (
    <header
      className={`page-header page-header--${align} reveal-blur`}
    >
      <div className="page-header-eyebrow">{eyebrow}</div>
      <h1 className="page-header-title">{title}</h1>
      {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
    </header>
  );
};

export default PageHeader;
