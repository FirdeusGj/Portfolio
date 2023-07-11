import React from "react";
import "./Technology.css";
import CSS from "../images/CSS.png";
import Firebase from "../images/firebase.png";
import Git from "../images/git.png";
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
      <div className="technology">
        <div className="proficient-wrapper">
          <h1>Proficient in</h1>
          <div className="proficient">
            <figure>
              <img
                className="technology-img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt=""
              />
            </figure>
            <figure>
              <img className="technology-img" src={CSS} alt="" />
            </figure>
            <figure>
              <img className="technology-img" src={JavaScript} alt="" />
            </figure>
            <figure>
              <img className="technology-img" src={ReactLogo} alt="" />
            </figure>
            <figure>
              <img className="technology-img" src={Firebase} alt="" />
            </figure>
            <figure>
              <img className="technology-img" src={Typescript} alt="" />
            </figure>
            <figure>
              <img className="technology-img" src={Git} alt="" />
            </figure>
            <figure>
              <img className="technology-img" src={SASS} alt="" />
            </figure>
          </div>
        </div>
        <div className="familiar-wrapper">
          <h1>Familiar with</h1>
          <div className="familiar">
            <figure>
              <img className="technology-img" src={Tailwind} alt="" />
            </figure>
            <figure>
              <img className="technology-img" src={NextJs} alt="" />
            </figure>
            <figure>
              <img className="technology-img" src={Redux} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
