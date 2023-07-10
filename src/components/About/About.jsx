import React from "react";
import "./About.css";
import AboutImage from '../images/aboutImage.jpg'
export default function About() {
  return (
    <div>
      <div className="about">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-img-wrapper">
          <img className="about-img" src={AboutImage} alt="" />
        </div>
        <div className="about-para">
          <h5>
            My name is Firdeus Gjepali, an 18-year-old frontend developer with a
            deep passion for building responsive web applications to satisfy tons of users around the world.
          </h5><br />
          <h5>
            Ever since I was 11 years old, I harbored an ardent desire to engage
            in this field, which was initially sparked when my school introduced
            me to Scratch, a programming tool through which I created a small
            game. Although my focus lies primarily in frontend development at
            present, I am committed to continuous growth and expanding my range
            of programming languages, as I aspire to achieve greater heights in
            my career. A little over a year ago, I embarked on a regular
            learning journey, rapidly advancing my knowledge in various aspects
            of frontend development due to my unwavering enthusiasm for the
            craft.
          </h5><br />
          <h5>
            Today, I continue to progress swiftly, dedicating myself to learning
            something new every day. Please find below an overview of my
            projects, which serve as tangible evidence of my skills.
          </h5>
        </div>
      </div>
    </div>
  );
}
