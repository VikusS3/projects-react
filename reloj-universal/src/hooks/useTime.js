import { useState, useEffect } from "react";

export function useTime() {
  const time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", { timeZone: "America/Lima" })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [currentTime]);

  return { currentTime };
}
