import React from "react";
import "./../App.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="page-wrapper"></div>
      <footer>
        <div className="footer">
          <hr />

          <div className="footer-content">
            <div className="footer-section about">
              <h1 className="logo-text">
                {" "}
                &copy; | Designed By Junaid Qureshi
              </h1>
              <br />
              <div className="contact">
                <span className='email'>
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
                  href="https://twitter.com/Junaid084869/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;
