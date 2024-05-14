import { useTime } from "../hooks/useTime";

export function Reloj() {
  const { currentTime } = useTime();

  return (
    <>
      <section className="w-full flex flex-col justify-center items-center mt-10 gap-2">
        <h2 className="text-4xl font-semibold text-zinc-200">Tu hora</h2>
        <div className=" relative border-4 border-white rounded-xl p-6 text-5xl w-max flex justify-center items-center">
          <span className="">{currentTime}</span>
        </div>
      </section>
    </>
  );
}
