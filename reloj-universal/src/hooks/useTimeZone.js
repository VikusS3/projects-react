import { useState, useEffect } from "react";
export function useTimeZone(timezone) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: timezone,
      });
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return { currentTime };
}
