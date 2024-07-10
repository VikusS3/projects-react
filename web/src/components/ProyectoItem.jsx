/* eslint-disable react/prop-types */

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
    <article className="flex flex-col relative items-center text-white rounded-lg border border-zinc-300/30 hover:scale-105 transition">
      <header className="w-full">
        <a
          href={url}
          className="group "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ir a la pagina web del proyecto
        "
        >
          <img
            src={image}
            alt={name}
            className="w-full rounded-t-lg aspect-auto"
            data-atropos-offset="0"
          />
        </a>
      </header>
      <main className=" text-text-100  w-full p-4">
        <div className="flex gap-3  justify-start items-center">
          <h2 className="text-3xl font-semibold tracking-tighter">{name}</h2>
          <span
            className={active ? "text-green-500 animate-ping font-bold" : ""}
          >
            •
          </span>
        </div>

        <p className=" text-zinc-200 font-light mt-4 ">{description}</p>
      </main>
      <footer className="text-white gap-3  h-auto rounded-b-lg pb-3 flex w-full p-4">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          role="link"
          aria-label="Ir a la pagina web del proyecto"
          className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-center text-sky-700 bg-white transition border border-sky-700/60 rounded-lg hover:bg-sky-200  md:text-sm"
        >
          <Link />
          Demo
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          role="link"
          className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-center text-black bg-white transition border border-black/60 rounded-lg hover:bg-zinc-300 md:text-sm"
          aria-label="Ir al repositorio de github del proyecto"
        >
          <Github />
          Codigo
        </a>
      </footer>
    </article>
  );
}
