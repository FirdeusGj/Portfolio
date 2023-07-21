import React from "react";
import "./Footer.css";
import FooterLogo from "../assets/theLogo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <figure className="footer-image">
          <img src={FooterLogo} alt="" />
        </figure>
        <div className="footer-links">
          <h4><a href="">Linkedin</a></h4>
          <h4><a href="">Github</a></h4>
          <h4><a href="">Resume</a></h4>
          <h4><a href="">Contact</a></h4>
        </div>
      </div>
    </footer>
  );
}
