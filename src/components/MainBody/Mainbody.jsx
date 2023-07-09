import React, { useEffect, useState } from "react";
import "./Mainbody.css";
export default function Mainbody() {
  const Counter = ({ targetNumber, symbol, startValue }) => {
    const [count, setCount] = useState(startValue || 0);
    const duration = 1000;
  
    useEffect(() => {
      const remainingDistance = targetNumber - count;
      const intervalTime = Math.max(Math.floor(duration / remainingDistance), 10);
  
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
              <h1 className="num">
                <Counter targetNumber={daysDifference} startValue={650} symbol={"+"} />
              </h1>
              <h6>Days Coding</h6>
            </div>
            <div>
              <h1><Counter targetNumber={18} startValue={0} symbol={"+"}/></h1>
              <h6>Age</h6>
            </div>
            <div>
              <h1><Counter targetNumber={7} startValue={0} symbol={"+"}/></h1>
              <h6>Finished Projects</h6>
            </div>
            <div>
              <h1><Counter targetNumber={14} startValue={0} symbol={"+"}/></h1>
              <h6>Github repos</h6>
            </div>
            <div>
              <h1><Counter targetNumber={212} startValue={150} symbol={"+"}/></h1>
              <h6>Github Contributions</h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
