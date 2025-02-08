const products = [
  {
    name: "GymTie",
    description:
      "Gym management app where gym owners can manage memberships and schedules",
    image: "/assets/products/gymtie.png",
  },
  {
    name: "Parambath App",
    description:
      "Digital gateway to village services, connecting community and convenience",
    image: "/assets/products/parambathapp.png",
  },
  {
    name: "YoungMenu",
    description: "Virtual menu card platform for restaurants and home bakers",
    image: "/assets/products/youngmenu.jpg",
  },
  {
    name: "Kuty.me",
    description:
      "URL shortener with additional features like WhatsApp link generator",
    image: "/assets/products/kuty.png",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-5 bg-light">
      <div className="container py-5">
        <h2 className="text-center mb-5">Our Products</h2>
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.name} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{
                    width: "416px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
