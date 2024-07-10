import { ProyectoItem } from "./ProyectoItem";
import { proyectos } from "../mocks/data.json";

export function Proyectos() {
  return (
    <section className="w-full grid  mb-6 lg:mb-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-center items-start mt-10 gap-5 sm:gap-10 ">
      {proyectos.map((proyecto) => {
        return (
          <ProyectoItem
            key={proyecto.id}
            name={proyecto.nombre}
            description={proyecto.descripcion}
            image={proyecto.imagen}
            url={proyecto.url}
            github={proyecto.repo_url}
            active={proyecto.activo}
          />
        );
      })}
    </section>
  );
}
