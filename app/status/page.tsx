import { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status - Floyet",
  description: "Check the real-time status of Floyet's systems and services.",
};

const StatusPage = () => {
  const services = [
    { name: "Website", status: "Operational", color: "rgb(52, 199, 89)" },
    { name: "GymTie Platform", status: "Operational", color: "rgb(52, 199, 89)" },
    { name: "YoungMenu UI", status: "Coming Soon", color: "rgb(255, 149, 0)" },
    { name: "Onebest API", status: "Operational", color: "rgb(52, 199, 89)" },
    { name: "Cloud Infrastructure", status: "Operational", color: "rgb(52, 199, 89)" },
  ];

  return (
    <main className="min-h-screen" style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="section-eyebrow">Reliability</div>
          <h1 className="section-headline">System Status</h1>
          <p className="section-subhead mx-auto">
            Real-time status updates for all our products and services.
          </p>
        </div>

        <div className="max-w-2xl mx-auto reveal fade-in">
          <div className="status-hero p-5 mb-5 rounded-3xl text-center" style={{ 
            background: "rgba(52, 199, 89, 0.1)", 
            border: "1px solid rgba(52, 199, 89, 0.2)" 
          }}>
            <div style={{ color: "rgb(52, 199, 89)", fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>
              <i className="bi bi-check-circle-fill me-2"></i>
              Core Systems Operational
            </div>
            <p className="text-secondary m-0">No issues reported in the last 24 hours.</p>
          </div>

          <div style={{ background: "var(--color-background-elevated)", border: "1px solid var(--color-separator)", borderRadius: "24px", overflow: "hidden" }}>
            {services.map((service, index) => (
              <div key={index} style={{ 
                padding: "20px 24px", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                borderBottom: index === services.length - 1 ? "none" : "1px solid var(--color-separator)"
              }}>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>{service.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>Updated 1 min ago</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: service.color, fontWeight: 500 }}>
                  <span style={{ height: "8px", width: "8px", borderRadius: "50%", background: service.color }}></span>
                  {service.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StatusPage;
