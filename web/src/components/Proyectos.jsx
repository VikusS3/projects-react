import { ProyectoItem } from "./ProyectoItem";
import { proyectos } from "../mocks/data.json";

export function Proyectos() {
  return (
    <section className="w-full flex flex-row flex-wrap justify-center items-center mt-10 gap-10">
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
