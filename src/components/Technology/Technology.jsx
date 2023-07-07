import React from "react";
import "./Technology.css";
import CSS from "../images/CSS.png";
import Firebase from "../images/firebase.png";
import Git from "../images/git.png";
import HTML from "../images/html.png";
import JavaScript from "../images/javascript.png";
import NextJs from "../images/nextjs.png";
import ReactLogo from "../images/react.png";
import Redux from "../images/redux.jpg";
import SASS from "../images/sass.png";
import Tailwind from "../images/TailwindCSS.png";
import Typescript from "../images/typescript.png";

export default function Technology() {
  return (
    <div>
      <div>
        <div>
          <h1>Proficient in</h1>
          <div>
            <img className="technology" src={HTML} alt="" />
            <img className="technology" src={CSS} alt="" />
            <img className="technology" src={JavaScript} alt="" />
            <img className="technology" src={ReactLogo} alt="" />
            <img className="technology" src={Firebase} alt="" />
            <img className="technology" src={Typescript} alt="" />
            <img className="technology" src={Git} alt="" />
          </div>
        </div>
        <div>
          <h1>Familiar with</h1>
          <div>
            <img className="technology" src={SASS} alt="" />
            <img className="technology" src={Tailwind} alt="" />
            <img className="technology" src={NextJs} alt="" />
            <img className="technology" src={Redux} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
