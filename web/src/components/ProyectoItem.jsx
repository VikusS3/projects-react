/* eslint-disable react/prop-types */
import Atropodos from "atropos/react";
import { Github, Link } from "./Icons";

export function ProyectoItem({
  name,
  description,
  image,
  url,
  github,
  active,
}) {
  return (
    <Atropodos
      highlight={false}
      shadow={false}
      rotateXMax={15}
      rotateYMax={15}
      className="w-[350px] "
    >
      <div className="flex flex-col justify-center rounded-lg">
        <header className="w-full">
          <img
            rel="preload"
            src={image}
            alt={name}
            className="rounded-t-lg w-full h-[300px] "
            data-atropos-offset="0"
          />
        </header>
        <main className=" text-text-100 bg-bg-300 p-5 w-full">
          <div className="flex  gap-3 items-center">
            <h2 className="text-xl font-semibold">{name}</h2>{" "}
            <span
              className={active ? "text-green-500 animate-ping font-bold" : ""}
            >
              •
            </span>
          </div>

          <p className=" text-text-200">{description}</p>
        </main>
        <footer className="text-white bg-bg-300 h-auto rounded-b-lg pb-3 flex justify-around items-center w-full">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            role="link"
            aria-label="Ir a la pagina web del proyecto"
          >
            <Link />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            role="link"
            aria-label="Ir al repositorio de github del proyecto"
          >
            <Github />
          </a>
        </footer>
      </div>
    </Atropodos>
  );
}
