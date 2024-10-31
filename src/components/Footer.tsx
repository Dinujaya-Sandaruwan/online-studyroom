const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* About Section */}
          <div className="footer__section">
            <h3 className="footer__title">About Online Studyroom</h3>
            <p className="footer__description">
              Online Studyroom is an educational platform developed at the
              University of Colombo, designed to make learning interactive and
              enjoyable through our knoledgebase.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer__section">
            <h3 className="footer__title">Resources</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  C Lang Documentation
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  API Access
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <p>
            © {new Date().getFullYear()} University of Colombo. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
