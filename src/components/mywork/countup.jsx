import React, { useState, useEffect } from 'react';

const Countup = ({ start, end, duration, delay = 0 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime - delay * 1000) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const timer = setTimeout(() => requestAnimationFrame(step), delay * 1000);
    return () => clearTimeout(timer); // Cleanup timer
  }, [start, end, duration, delay]);

  return <span>{count}</span>;
};

export default Countup;
