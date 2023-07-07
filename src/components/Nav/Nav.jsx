import React from "react";
import Logo from "../images/theLogo.png";
import './Nav.css'

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <div className="logo-wrapper">
          <img className="logo" src={Logo} width={100} />
        </div>
        <div className="nav-ul-wrapper">
          <ul className="nav-ul">
            <li className="li">home</li>
            <li className="li">projects</li>
            <li className="li">about</li>
            <li className="li">contact</li>
            <li className="li">resume</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
