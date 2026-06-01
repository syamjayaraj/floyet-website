import Image from "next/image";
import Link from "next/link";
import "./styles.css";

const GymTieSpotlight = () => {
  const apps = [
    {
      logo: "/assets/logo/manager.png",
      name: "GymTie Manager",
      tagline: "For gym owners",
      desc: "Billing, attendance, WhatsApp automation, and member operations in one workspace.",
    },
    {
      logo: "/assets/logo/fit.png",
      name: "GymTie Fit",
      tagline: "For members",
      desc: "Workouts, nutrition, leaderboards, and membership visibility in one app.",
    },
  ];

  return (
    <section className="gymtie-spotlight section" aria-labelledby="gymtie-spotlight-heading">
      <div className="container">
        <div className="gymtie-spotlight-card reveal-scale">
          <div className="gymtie-spotlight-intro reveal-blur">
            <div className="gymtie-spotlight-ribbon">
              <Image src="/assets/logo/gymtie.png" alt="" width={40} height={40} aria-hidden="true" />
              <span>Flagship product</span>
            </div>
            <h2 id="gymtie-spotlight-heading" className="gymtie-spotlight-title">
              GymTie is Floyet&apos;s primary product.
            </h2>
            <p className="gymtie-spotlight-lead">
              A complete fitness ecosystem connecting gym owners and members — built for real gyms, real billing, and real member engagement across India.
            </p>
            <div className="gymtie-spotlight-actions">
              <a
                href="https://gymtie.com"
                className="btn-apple btn-apple-primary hover-lift gymtie-spotlight-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore GymTie <i className="bi bi-arrow-up-right ms-2" aria-hidden="true" />
              </a>
              <Link href="/products#gymtie" className="btn-apple btn-apple-secondary hover-lift">
                Full product story
              </Link>
            </div>
          </div>

          <div className="gymtie-spotlight-apps reveal-stagger">
            {apps.map((app) => (
              <div key={app.name} className="gymtie-spotlight-app reveal-child">
                <Image src={app.logo} alt={`${app.name} logo`} width={52} height={52} className="gymtie-spotlight-app-logo" />
                <div>
                  <span className="gymtie-spotlight-app-tag">{app.tagline}</span>
                  <h3>{app.name}</h3>
                  <p>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymTieSpotlight;
