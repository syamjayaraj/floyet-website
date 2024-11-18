export default function Services() {
  return (
    <div className="works">
      <h2>Services</h2>
      <img src="/assets/svg/line.svg" className="line-icon" />
      <div className="row">
        <div className="col-6 col-md-3">
          <div className="card custom-card">
            <img
              className="card-img service-img"
              src="/assets/images/services/website.jpg"
            />
            <div className="card-body service-body">
              <div className="card-title title">Websites</div>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card custom-card">
            <img
              className="card-img service-img"
              src="/assets/images/services/mobile-app.jpg"
            />
            <div className="card-body service-body">
              <div className="card-title title">Mobile Apps</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card custom-card">
            <img
              className="card-img service-img"
              src="/assets/images/services/e-commerce.png"
            />
            <div className="card-body service-body">
              <div className="card-title title">E-Commerce</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card custom-card">
            <img
              className="card-img service-img"
              src="/assets/images/services/digital-marketing.webp"
            />
            <div className="card-body service-body">
              <div className="card-title title">Digital Marketing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
