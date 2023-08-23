import React, { useEffect, useState } from "react";
import "./Mainbody.css";
import Graph from "../assets/graph.png";

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
  return (
    <main className="mainbody flex-center">
      <div className="background"></div>
      <div className="mainbody-wrapper">
        <div className="introduction">
          <h3>Hello, I am</h3>
          <h1>Firdeus Gjepali.</h1>
          <h2>Frontend Developer</h2>
          <h4>
            Here's more{" "}
            <span className="mainbody-span">
              <a href="#about">about me.</a>
            </span>
          </h4>
          <div className="introduction-links">
            <a
              title="Github"
              className="introduction-link flex-center"
              href="https://github.com/FirdeusGj"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            <a
              title="Resume"
              className="introduction-link flex-center"
              href="https://drive.google.com/file/d/16fOFFY5AZf6ir5IM_XMw2xGMUkruPFVM/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
              </svg>
            </a>
            <a title="Contact" className="introduction-link" href="#contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </a>
            <a
              title="Linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/firdeus-gjepali-832869245/"
              className="introduction-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </div>
        </div>
        <a className="scroll" href="#about">
          <div className="scroll-icon flex-center"></div>
        </a>
        <div className="stats-wrapper flex-center">
          <h1>My Current Stats</h1>
          <div className="myStats">
            <div className="stats">
              <img className="graph" src={Graph} alt="graph" />
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
                    <Counter targetNumber={321} startValue={200} symbol={"+"} />
                  </h1>
                  <h5>Github Contributions</h5>
                </div>
                <div className="stats-repositories">
                  <h1>
                    <Counter targetNumber={16} startValue={0} symbol={"+"} />
                  </h1>
                  <h5>Github repositories</h5>
                </div>
                <div className="stats-projects">
                  <h1>
                    <Counter targetNumber={6} startValue={0} symbol={"+"} />
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
