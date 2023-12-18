import { useEffect, useState } from "react";

export default function Counter({ targetNumber, symbol, startValue }) {
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
}
