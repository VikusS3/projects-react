import { FingerDown } from "./Icons";

export function Hero() {
  return (
    <header className="flex flex-col gap-3 items-center justify-center w-full">
      <h1 className="text-text-100 text-6xl font-bold text-center animate-blurred-fade-in">
        Proyectos
      </h1>
      <p className="text-text-200 max-w-2xl text-center text-xl mt-4">
        Aqui encontraras una lista de proyectos personales que he realizado en
        mi tiempo libre, algunos de ellos estan en produccion y otros en
        desarrollo
      </p>
      <span className=" rotate-180">
        <FingerDown className="w-10 h-10 animate-bounce text-primary-100" />
      </span>
    </header>
  );
}
