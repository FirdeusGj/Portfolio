import React from "react";
import Logo from "../assets/theLogo.png";
import './Nav.css'

export default function Nav() {
  return (
    <div className="nav-wrapper" id="home">
      <nav className="nav">
        <div className="logo-wrapper">
          <img className="logo" src={Logo}/>
        </div>
        <div className="nav-ul-wrapper">
          <ul className="nav-ul">
            <li className="nav-li"><a href="#home">Home</a></li>
            <li className="nav-li"><a href="#about">About</a></li>
            <li className="nav-li"><a href="#projects">Projects</a></li>
            <li className="nav-li"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

