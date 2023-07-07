import React from "react";
import Logo from "../images/theLogo.png";
import './Nav.css'

export default function Nav() {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <div className="logo-wrapper">
          <img className="logo" src={Logo}/>
        </div>
        <div className="nav-ul-wrapper">
          <ul className="nav-ul">
            <li className="nav-li">Home</li>
            <li className="nav-li">Projects</li>
            <li className="nav-li">About</li>
            <li className="nav-li">Resume</li>
            <li className="nav-li">Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
