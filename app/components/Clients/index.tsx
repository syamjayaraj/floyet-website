"use client";

const Clients = () => {
  const clients = [
    {
      name: "Mathilakam Temple",
      logo: "/images/clients/client1.png",
    },
    {
      name: "Client 2",
      logo: "/images/clients/client2.png",
    },
    {
      name: "Client 3",
      logo: "/images/clients/client3.png",
    },
    {
      name: "Client 4",
      logo: "/images/clients/client4.png",
    },
    {
      name: "Client 5",
      logo: "/images/clients/client5.png",
    },
  ];

  return (
    <section className="clients-section py-6" id="clients">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="section-title mb-4">Our Clients</h2>
          </div>
        </div>

        <div className="clients-wrapper">
          <div className="client-logos">
            {clients.map((client, index) => (
              <div key={index} className="client-logo-item">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
