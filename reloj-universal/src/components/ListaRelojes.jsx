import { RelojPais } from "./RelojPais";
import { paises } from "../mocks/Countries.json";

export function ListaRelojes() {
  return (
    <div className="w-full m-16">
      <h1 className="text-center text-2xl text-zinc-200">
        Hora en diferentes países
      </h1>
      <ul className="flex justify-center items-center p-0 flex-wrap gap-10">
        {paises.map((pais) => (
          <li key={pais.nombre}>
            <RelojPais country={pais.nombre} timezone={pais.zona_horaria} />
          </li>
        ))}
      </ul>
    </div>
  );
}
