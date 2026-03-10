import { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status - Floyet",
  description: "Check the real-time status of Floyet's systems and services.",
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
      status: statusData?.Website ? "Operational" : "Under Maintenance", 
      color: statusData?.Website ? "rgb(52, 199, 89)" : "rgb(255, 59, 48)" 
    },
    { 
      name: "GymTie Platform", 
      status: statusData?.GymTie ? "Operational" : "Under Maintenance", 
      color: statusData?.GymTie ? "rgb(52, 199, 89)" : "rgb(255, 59, 48)" 
    },
    { 
      name: "YoungMenu", 
      status: statusData?.YoungMenu ? "Operational" : "Coming Soon", 
      color: statusData?.YoungMenu ? "rgb(52, 199, 89)" : "rgb(255, 149, 0)" 
    },
    { 
      name: "Onebest API", 
      status: statusData?.Onebest ? "Operational" : "Under Maintenance", 
      color: statusData?.Onebest ? "rgb(52, 199, 89)" : "rgb(255, 59, 48)" 
    },
    { 
      name: "Cloud Infrastructure", 
      status: statusData?.cloud ? "Operational" : "Under Maintenance", 
      color: statusData?.cloud ? "rgb(52, 199, 89)" : "rgb(255, 59, 48)" 
    },
  ];

  const serviceKeys = ["Website", "GymTie", "YoungMenu", "Onebest", "cloud"];
  const allOperational = statusData 
    ? serviceKeys.every(key => statusData[key] === true || statusData[key] === null || statusData[key] === undefined) 
    : false;

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
            background: allOperational ? "rgba(52, 199, 89, 0.1)" : "rgba(255, 149, 0, 0.1)", 
            border: allOperational ? "1px solid rgba(52, 199, 89, 0.2)" : "1px solid rgba(255, 149, 0, 0.2)" 
          }}>
            <div style={{ color: allOperational ? "rgb(52, 199, 89)" : "rgb(255, 149, 0)", fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>
              <i className={`bi ${allOperational ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill'} me-2`}></i>
              {allOperational ? "Core Systems Operational" : "Service Notice"}
            </div>
            <p className="text-secondary m-0">
              {allOperational ? "No issues reported in the last 24 hours." : "We are currently experiencing issues with some services."}
            </p>
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
                  <div style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>Last verified recently</div>
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
