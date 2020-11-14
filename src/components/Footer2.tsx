import React from "react";
import "./../App.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="page-wrapper">
        
      </div>
      <hr />

      <footer>
        <div className="footer ">
          <div className="footer-content">
            <div className="footer-section about">
              <div className="logo-text"> &copy; Developer : Junaid Qureshi</div>

              <div className="contact">
                <span className="email">
                  <i className="fas fa-envelope"></i>&nbsp; qjunaid623@gmail.com
                </span>
              </div>
              <div className="socials">
                <a
                  href="https://www.facebook.com/profile.php?id=100041078220896"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/junaid-qureshi-34a180194/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                <a
                  href="https://github.com/developer-junaid"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
