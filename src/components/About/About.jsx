import React, { useRef } from "react";
import "./About.css";
import AboutImage from "../images/aboutImage.jpg";
import PFP from "../images/theLogo.png";
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
import Windows from '../images/windowsLogo.png'

export default function About() {
  const inputRef = useRef(null);

  const goToElement = (e) => {
    if (e.key === 'Enter') {
      const elementId = inputRef.current.value;
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('Element not found!');
      }
    }
  };

  return (
    <div>
      <div className="about" id="about">
        <img src={PFP} className="pfp" />
        <figure className="about-img-wrapper">
          <img className="about-img" src={AboutImage} alt="" />
        </figure>
        <div className="about-text">
          <div className="about-title">
            <h1>About me</h1>
          </div>
          <div className="about-para">
            <h4>
              My name is Firdeus Gjepali, an 18-year-old frontend developer with
              a deep passion for building responsive web applications to satisfy
              tons of users around the world.
            </h4>
            <br />
            <h4>
              Ever since I was 11 years old, I harbored an ardent desire to
              engage in this field, which was initially sparked when my school
              introduced me to Scratch, a programming tool through which I
              created a small game. Although my focus lies primarily in frontend
              development at present, I am committed to continuous growth and
              expanding my range of programming languages, as I aspire to
              achieve greater heights in my career. A little over a year ago, I
              embarked on a regular learning journey, rapidly advancing my
              knowledge in various aspects of frontend development due to my
              unwavering enthusiasm for the craft.
            </h4>
            <br />
            <h4>
              Today, I continue to progress swiftly, dedicating myself to
              learning something new every day. Please find below an overview of
              my projects, which serve as tangible evidence of my skills.
            </h4>
          </div>
        </div>
      </div>
      <div className="technology">
        <div className="windows-wrapper">
        <figure>
          <img src={Windows} className="technology-img windows" alt="" />
        </figure>
        <div className="input-wrapper">
          <input type="text" ref={inputRef}
          placeholder='home/projects'
          onKeyPress={goToElement}/>
        </div>
        </div>
        <figure className="technology-img-wrapper">
          <img
            className="technology-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
            alt=""
          />
        </figure>
        <figure className="technology-img-wrapper">
          <img className="technology-img" src={CSS} alt="" />
        </figure>
        <figure className="technology-img-wrapper">
          <img className="technology-img" src={JavaScript} alt="" />
        </figure>
        <figure className="technology-img-wrapper">
          <img className="technology-img" src={ReactLogo} alt="" />
        </figure>
        <figure className="technology-img-wrapper">
          <img className="technology-img" src={Firebase} alt="" />
        </figure>
        <figure className="technology-img-wrapper">
          <img className="technology-img" src={Typescript} alt="" />
        </figure>
        <figure className="technology-img-wrapper">
          <img className="technology-img" src={Git} alt="" />
        </figure>
        <figure className="technology-img-wrapper">
          <img className="technology-img" src={SASS} alt="" />
        </figure>
        <figure className="technology-img-wrapper">
          <img className="technology-img" src={Tailwind} alt="" />
        </figure>
        <figure className="technology-img-wrapper">
          <img className="technology-img" src={NextJs} alt="" />
        </figure>
        <figure className="technology-img-wrapper">
          <img className="technology-img" src={Redux} alt="" />
        </figure>
      </div>
    </div>
  );
}
