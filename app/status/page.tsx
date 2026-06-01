import { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "System Status - GymTie & Floyet Services",
  description:
    "Real-time status for GymTie, Floyet website, and other Floyet product services.",
};

async function getStatusData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/status`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

const StatusPage = async () => {
  const statusResponse = await getStatusData();
  const statusData = statusResponse?.data;

  const services = [
    {
      name: "Website",
      key: "Website",
      statusOn: statusData?.Website,
      comingSoon: false,
    },
    {
      name: "GymTie Platform",
      key: "GymTie",
      statusOn: statusData?.GymTie,
      comingSoon: false,
      primary: true,
    },
    {
      name: "YoungMenu",
      key: "YoungMenu",
      statusOn: statusData?.YoungMenu,
      comingSoon: !statusData?.YoungMenu,
    },
    {
      name: "DevaPatha",
      key: "DevaPatha",
      statusOn: statusData?.DevaPatha,
      comingSoon: !statusData?.DevaPatha,
    },
    {
      name: "Livonomi",
      key: "Livonomi",
      statusOn: statusData?.Livonomi,
      comingSoon: !statusData?.Livonomi,
    },
    {
      name: "Onebest API",
      key: "Onebest",
      statusOn: statusData?.Onebest,
      comingSoon: false,
    },
    {
      name: "Cloud Infrastructure",
      key: "cloud",
      statusOn: statusData?.cloud,
      comingSoon: false,
    },
  ];

  const serviceKeys = [
    "Website",
    "GymTie",
    "YoungMenu",
    "DevaPatha",
    "Livonomi",
    "Onebest",
    "cloud",
  ];
  const allOperational = statusData
    ? serviceKeys.every(
        (key) =>
          statusData[key] === true ||
          statusData[key] === null ||
          statusData[key] === undefined,
      )
    : false;

  const getStatusDisplay = (service: (typeof services)[0]) => {
    if (service.comingSoon && !service.statusOn) {
      return { label: "Coming Soon", color: "rgb(255, 149, 0)" };
    }
    if (service.statusOn) {
      return { label: "Operational", color: "rgb(52, 199, 89)" };
    }
    return { label: "Under Maintenance", color: "rgb(255, 59, 48)" };
  };

  return (
    <main id="main-content" className="secondary-page">
      <div className="container">
        <PageHeader
          eyebrow="Reliability"
          title="System Status"
          subtitle="Monitor GymTie - our flagship platform - and all Floyet services."
        />

        <div className="max-w-2xl mx-auto reveal fade-in">
          <div
            className={`status-hero ${allOperational ? "status-hero--ok" : "status-hero--warn"}`}
          >
            <div
              className="status-hero-title"
              style={{
                color: allOperational ? "rgb(52, 199, 89)" : "rgb(255, 149, 0)",
              }}
            >
              <i
                className={`bi ${allOperational ? "bi-check-circle-fill" : "bi-exclamation-triangle-fill"} me-2`}
                aria-hidden="true"
              />
              {allOperational ? "Core Systems Operational" : "Service Notice"}
            </div>
            <p className="status-hero-text">
              {allOperational
                ? "No issues reported in the last 24 hours."
                : "We are currently experiencing issues with some services."}
            </p>
          </div>

          <div className="status-list" role="list">
            {services.map((service) => {
              const { label, color } = getStatusDisplay(service);
              return (
                <div
                  key={service.name}
                  className={`status-row ${"primary" in service && service.primary ? "status-row--primary" : ""}`}
                  role="listitem"
                >
                  <div>
                    <div className="status-row-name">
                      {service.name}
                      {"primary" in service && service.primary && (
                        <span className="status-row-flag">Flagship</span>
                      )}
                    </div>
                    <div className="status-row-meta">
                      Last verified recently
                    </div>
                  </div>
                  <div className="status-row-badge" style={{ color }}>
                    <span
                      className="status-dot"
                      style={{ background: color }}
                      aria-hidden="true"
                    />
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StatusPage;
