import React from "react";
import "./Footer.css";
import FooterLogo from "../assets/theLogo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <figure className="footer-image">
          <img src={FooterLogo} alt="footerLogo" />
        </figure>
        <div className="footer-links">
          <h4>
            <a
              href="https://www.linkedin.com/in/firdeus-gjepali-832869245/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </h4>
          <h4>
            <a href="https://github.com/FirdeusGj" rel="noreferrer" target="_blank">
              Github
            </a>
          </h4>
          <h4>
            <a
              href="https://drive.google.com/file/d/16fOFFY5AZf6ir5IM_XMw2xGMUkruPFVM/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </h4>
          <h4>
            <a href="mailto:firdegjepali@gmail.com" rel="noreferrer" target="_blank">
              Email
            </a>
          </h4>
        </div>
      </div>
    </footer>
  );
}
