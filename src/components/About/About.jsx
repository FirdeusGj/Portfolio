import React, { useRef } from "react";
import "./About.css";
import AboutImage from "../assets/aboutImage.jpg";
import PFP from "../assets/theLogo.png";
import CSS from "../assets/CSS.png";
import Firebase from "../assets/firebase.png";
import Git from "../assets/git.png";
import JavaScript from "../assets/javascript.png";
import NextJs from "../assets/nextjs.png";
import ReactLogo from "../assets/react.png";
import Redux from "../assets/redux.jpg";
import SASS from "../assets/sass.png";
import Tailwind from "../assets/TailwindCSS.png";
import Typescript from "../assets/typescript.png";
import Windows from "../assets/windowsLogo.png";
import { Fade } from "react-reveal";
import { languagesData } from "../Data/LanguagesData";

export default function About() {
  const inputRef = useRef(null);
  const goToElement = () => {
    const elementId = inputRef.current.value;
    const element = document.getElementById(elementId);
    const input = document.querySelector("input");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      input.value = "";
    } else if (elementId === "resume") {
      window.open(
        "https://drive.google.com/file/d/16fOFFY5AZf6ir5IM_XMw2xGMUkruPFVM/view"
      );
      input.value = "";
    } else {
      alert("Use only home, projects, contact or resume");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      goToElement();
    }
  };

  return (
    <div className="about-wrapper" id="about">
      <div className="about-border"></div>
      <div className="about-border1"></div>
      <div className="about-content">
        <Fade left cascade>
          <div className="about">
            <div className="about-images">
              <div className="about-bg-img"></div>
              <div className="infos">
                <div className="infos-items">
                  <h2>Find out more</h2>
                  <ul>
                    <li>
                      <h3>
                        <a
                          href="https://drive.google.com/file/d/16fOFFY5AZf6ir5IM_XMw2xGMUkruPFVM/view"
                          target="_blank"
                        >
                          View Resume
                        </a>
                      </h3>
                    </li>
                    <li>
                      <h3>
                        <a href="#contact">Contact me</a>
                      </h3>
                    </li>
                    <li>
                      <h3>
                        <a
                          href="https://www.linkedin.com/in/firdeus-gjepali-832869245/"
                          target="_blank"
                        >
                          LinkedIn
                        </a>
                      </h3>
                    </li>
                    <li>
                      <h3>
                        <a href="https://github.com/FirdeusGj" target="_blank">
                          Github
                        </a>
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
              <img src={PFP} className="pfp" />
            </div>
            <div className="about-text">
              <div className="about-title">
                <h1>About me</h1>
              </div>
              <div className="about-para">
                <h4>
                  My name is Firdeus Gjepali, a frontend developer with a deep
                  passion for building responsive web applications to satisfy
                  tons of users around the world.
                </h4>
                <br />
                <h4>
                  Ever since I was 11 years old, I harbored an ardent desire to
                  engage in this field, which was initially sparked when my
                  school introduced me to Scratch, a programming tool through
                  which I created a small game. Although my focus lies primarily
                  in frontend development at present, I am committed to
                  continuous growth and expanding my range of programming
                  languages, as I aspire to achieve greater heights in my
                  career. A little over a year ago, I embarked on a regular
                  learning journey, rapidly advancing my knowledge in various
                  aspects of frontend development due to my unwavering
                  enthusiasm for the craft.
                </h4>
                <br />
                <h4>
                  Today, I continue to progress swiftly, dedicating myself to
                  learning something new every day. Please find below an
                  overview of my projects, which serve as tangible evidence of
                  my skills.
                </h4>
              </div>
            </div>
          </div>
          <div className="technology">
            <div className="windows-wrapper">
              <figure>
                <button onClick={goToElement}>
                  <img
                    src={Windows}
                    className="technology-img windows"
                    alt=""
                  />
                </button>
              </figure>
              <div className="input-wrapper">
                <input
                  type="text"
                  ref={inputRef}
                  placeholder="home/projects/contact/resume"
                  onKeyPress={handleKeyPress}
                />
              </div>
            </div>
            <div className="technology-imgs">
              {languagesData.map((elem) => (
                <>
                  <figure className="technology-img-wrapper">
                    <img
                      className="technology-img"
                      src={elem.languageImage}
                      alt=""
                    />
                  </figure>
                </>
              ))}
              {/* <figure className="technology-img-wrapper">
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
              </figure> */}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
