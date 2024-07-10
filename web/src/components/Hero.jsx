import { Github, ReactBigLogo } from "./Icons";

export function Hero() {
  return (
    <section className="flex flex-col max-w-3xl mx-auto mb-12 gap-12 relative z-50">
      <header className="flex justify-center items-center gap-3 sm:flex-row flex-col">
        <div className="flex flex-col justify-center items-center text-center sm:text-base">
          <span className=" tracking-tighter text-5xl px-1 bg-clip-text inline-block text-transparent bg-gradient-to-r from-slate-100 to-slate-300 sm:text-6xl">
            Projects whit
          </span>
          <span className=" tracking-tighter text-5xl px-1 bg-clip-text inline-block text-transparent bg-gradient-to-r from-slate-300 to-slate-100 sm:text-6xl">
            React.js
          </span>
        </div>
        <ReactBigLogo />
      </header>

      <main>
        <p className="text-lg text-slate-300 text-center">
          Este sitio web se encargar de recopilar mis proyectos realizados con
          React.js, en el cual se incluyen proyectos de práctica y proyectos
          personales. Tendras el acceso a los repositorios de GitHub y a la web
          de demostración de cada proyecto.
        </p>
      </main>

      <footer className="flex flex-row flex-wrap justify-center items-center">
        <a
          className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold text-center text-black bg-white transition border-2 border-[#070707] rounded-lg md:px-4 md:py-2 hover:bg-[#cccbcb] md:text-sm gap-3"
          target="_blank"
          rel="noopener"
          href="https://github.com/VikusS3/"
        >
          <Github className="w-8 h-8" />
          Sígueme en GitHub
        </a>
      </footer>
    </section>
  );
}
