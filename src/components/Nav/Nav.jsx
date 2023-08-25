import React from "react";
import Logo from "../assets/theLogo.png";
import "./Nav.css";
import { Fade } from "react-reveal";

export default function Nav() {
  return (
    <Fade top cascade>
    <div className="nav-wrapper" id="home">
      <nav className="nav">
        <div className="logo-wrapper">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="nav-ul-wrapper">
          <ul className="nav-ul">
            <li className="nav-li">
              <a className="hover__effect" href="#home">
                Home
              </a>
            </li>
            <li className="nav-li">
              <a className="hover__effect" href="#about">
                About
              </a>
            </li>
            <li className="nav-li">
              <a className="hover__effect" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-li">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </Fade>
  );
}