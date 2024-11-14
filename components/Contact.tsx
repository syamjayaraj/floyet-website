export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <img src="/assets/svg/line.svg" className="line-icon" />
      <div className="row boxes">
        <div className="col-lg-4 col-md-6 col-12">
          <a
            href="mailto:info@floyet.com"
            target="_blank"
            rel="noreferrer"
            className="box"
          >
            <i className="bi bi-envelope"></i>
            info@floyet.com
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <a
            href="https://api.whatsapp.com/send/?phone=919746742650&text=Hi"
            target="_blank"
            rel="noreferrer"
            className="box"
          >
            <i className="bi bi-whatsapp"></i>
            Message
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <a
            href="tel:+919746742650"
            target="_blank"
            rel="noreferrer"
            className="box"
          >
            <i className="bi bi-telephone"></i>
            +91-9746742650
          </a>
        </div>
      </div>
    </div>
  );
}
