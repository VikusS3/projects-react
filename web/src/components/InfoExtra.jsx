import { useState, useEffect } from "react";

const COLOR_TECT = [
  "text-red-500",
  "text-green-500",
  "text-blue-500",
  "text-yellow-500",
  "text-orange-500",
  "text-pink-500",
  "text-purple-500",
  "text-cyan-500",
  "text-white",
];

export function InfoExtra() {
  const [color, setColor] = useState("text-primary-100");
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(COLOR_TECT[Math.floor(Math.random() * COLOR_TECT.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col items-center mt-20">
      <h2 className={"text-2xl font-bold text-white"}>
        Tecnologias{" "}
        <span
          className={`${color} font-bold text-2xl transition duration-500 `}
        >
          utilizadas
        </span>
      </h2>
    </section>
  );
}
