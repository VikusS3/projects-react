/* eslint-disable react/prop-types */
import { useTimeZone } from "../hooks/useTimeZone";

export function RelojPais({ country, timezone }) {
  const { currentTime } = useTimeZone(timezone);

  return (
    <>
      <section className="w-full flex flex-col justify-center items-center mt-10 gap-2">
        <h2 className="text-2xl font-semibold text-zinc-200">{country}</h2>
        <div className=" relative border-4 border-white rounded-xl p-6 text-2xl w-[240px] flex justify-center items-center">
          <span className="">{currentTime}</span>
        </div>
      </section>
    </>
  );
}
