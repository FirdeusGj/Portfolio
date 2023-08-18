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
        <div className="introduction-links-footer">
          <a
            className="introduction-link-footer hover__effect-footer"
            href="https://github.com/FirdeusGj"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            className="introduction-link-footer hover__effect-footer"
            href="https://drive.google.com/file/d/16fOFFY5AZf6ir5IM_XMw2xGMUkruPFVM/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/firdeus-gjepali-832869245/"
            className="introduction-link-footer hover__effect-footer"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:firdegjepali@gmail.com"
            className="introduction-link-footer hover__effect-footer"
          >
            Email
          </a>
        </div>
      <h4 style={{color: 'aliceblue', fontWeight:"lighter"}}>Copyrights © Firdeus Gjepali</h4>
      </div>
    </footer>
  );
}
