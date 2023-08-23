import React from "react";
import "./About.css";
import { languagesData } from "../Data/LanguagesData";

export default function About() {
  return (
    <div className="about-wrapper flex-center" id="about">
      <div className="about-content">
        <div className="about flex-center">
          <div className="about-text">
            <div className="about-title">
              <h1 style={{ marginBottom: "20px" }}>About me</h1>
            </div>
            <div className="about-para">
              <div className="descriptionPc">
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
              <div className="descriptionMobile">
                <h4>
                  I'm Firdeus Gjepali, a frontend developer passionate about
                  building responsive web applications to delight users
                  worldwide.
                </h4>
                <br />
                <h4>
                  Ever since I was 11 years old, I harbored an ardent desire to
                  engage in this field, which was initially sparked when my
                  school introduced me to Scratch, a programming tool through
                  which I created a small game. While my focus is currently on
                  frontend development, I'm dedicated to continuous growth,
                  learning new programming languages, and achieving greater
                  heights in my career.
                </h4>
                <br />
                <h4>
                  Here's an overview of my projects showcasing my skills down
                  below which I've worked on.
                </h4>
              </div>
            </div>
          </div>
          <div className="technology-stack">
            <div className="technology flex-center">
              <h1 style={{ color: "aliceblue", marginBottom: "20px" }}>
                <span style={{ color: "#b9deff" }}>Technology</span> Stack
              </h1>
              <div className="technology-imgs flex-center">
                {languagesData.map((elem) => (
                  <div className="technology__img--wrapper flex-center">
                    <img
                      className="technology__img"
                      src={elem.languageImage}
                      alt=""
                    />
                    <h5>{elem.languageName}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
