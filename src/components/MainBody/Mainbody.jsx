import React, { useEffect, useState } from "react";
import "./Mainbody.css";
import Graph from "../images/graph.png";
export default function Mainbody() {
  const Counter = ({ targetNumber, symbol, startValue }) => {
    const [count, setCount] = useState(startValue || 0);
    const duration = 1000;

    useEffect(() => {
      const remainingDistance = targetNumber - count;
      const intervalTime = Math.max(
        Math.floor(duration / remainingDistance),
        10
      );

      const increment = () => {
        setCount((prevCount) => {
          if (prevCount < targetNumber) {
            return prevCount + 1;
          }
          return prevCount;
        });
      };

      const interval = setInterval(increment, intervalTime);

      return () => {
        clearInterval(interval);
      };
    }, [count, targetNumber, duration]);

    return (
      <div>
        <span className="number-counter">
          {symbol} {count}
        </span>
      </div>
    );
  };
  const today = new Date();
  const startDate = new Date(2021, 7, 1);
  const daysDifference = Math.floor(
    (today.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );
  console.log(daysDifference);
  return (
    <main className="mainbody">
      <div className="background"></div>
      <div className="mainbody-wrapper">
        <div className="introduction">
          <h3>Hello, I am</h3>
          <h1>Firdeus Gjepali.</h1>
          <h2>Frontend Developer</h2>
          <h4>Here's more about me.</h4>
        </div>
        <a className="scroll" href="#about">
          <div className="scroll-icon"></div>
        </a>
        <div className="stats-wrapper">
          <h1>My Current Stats</h1>
          <div>
            <div className="stats">
              <img className="graph" src={Graph} alt="" />
              <div className="stats-items">
                <div className="stats-days">
                  <h1>
                    <Counter
                      targetNumber={daysDifference}
                      startValue={650}
                      symbol={"+"}
                    />
                  </h1>
                  <h5>Days Coding</h5>
                </div>
                <div className="stats-contributions">
                  <h1>
                    <Counter targetNumber={212} startValue={150} symbol={"+"} />
                  </h1>
                  <h5>Github Contributions</h5>
                </div>
                <div className="stats-repositories">
                  <h1>
                    <Counter targetNumber={14} startValue={0} symbol={"+"} />
                  </h1>
                  <h5>Github repositories</h5>
                </div>
                <div className="stats-projects">
                  <h1>
                    <Counter targetNumber={7} startValue={0} symbol={"+"} />
                  </h1>
                  <h5>Finished Projects</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
