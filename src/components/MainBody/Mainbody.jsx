import React from "react";
import "./Mainbody.css";

export default function Mainbody() {
  return (
    <main>
      <div className="mainbody-wrapper">
        <div>
          <h3>Hello, I am</h3>
          <h1>Firdeus Gjepali.</h1>
          <h2>Frontend Developer</h2>
          <h4>Here's more about me.</h4>
        </div>
        <div>
          <h1>My Current Stats</h1>
          <div>
            <div>
              <h1>Number</h1>
              <h6>Github repos</h6>
            </div>
            <div>
              <h1>Number</h1>
              <h6>Days Coding</h6>
            </div>
            <div>
              <h1>Number</h1>
              <h6>Age</h6>
            </div>
            <div>
              <h1>Number</h1>
              <h6>Projects</h6>
            </div>
            <div>
              <h1>Number</h1>
              <h6>Github Contributions</h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
