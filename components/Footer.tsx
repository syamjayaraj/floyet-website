export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-accounts">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href="https://www.instagram.com/floyet.labs.tech/"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://facebook.com/floyet.labs.tech"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href="https://www.github.com/codeariv"
                target="_blank"
                rel="noreferrer"
                className="btn-sm btn-default btn-lg"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p className="top">
            Carefully Handcrafted in INDIA | Powered by&nbsp;
            <a href="https://floyet.com">FLOYET</a>
          </p>
          <p className="bottom">
            Copyright © <a href="https://floyet.com">FLOYET</a> 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
