import React from "react";
import Logo from "../images/theLogo.png";

export default function Nav() {
  return (
    <div>
      <nav>
        <div>
          <img src={Logo} width={100} />
        </div>
        <div>
          <ul>
            <li>home</li>
            <li>projects</li>
            <li>about</li>
            <li>contact</li>
            <li>resume</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
