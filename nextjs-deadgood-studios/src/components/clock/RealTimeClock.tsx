"use client";

import { useEffect, useState } from "react";

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  if (!isClient) return;

  return (
    <div className="font-mono flex gap-5">
      <p>Hong Kong SAR</p>
      <div>
        {time.toLocaleDateString("en-US", {
          timeZone: "Asia/Hong_Kong",
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div className="font-bold">
        {time.toLocaleTimeString("en-US", {
          timeZone: "Asia/Hong_Kong",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </div>
    </div>
  );
};

export default RealTimeClock;
