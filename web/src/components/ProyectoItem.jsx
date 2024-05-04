/* eslint-disable react/prop-types */
export function ProyectoItem({
  name,
  description,
  image,
  url,
  github,
  active,
}) {
  return (
    <article className="flex flex-col justify-center items-center gap-5 bg-bg-300 rounded-lg">
      <header>
        <img src={image} alt={name} className=" w-64 rounded-t-lg"/>
      </header>
      <main className=" text-text-100">
        <h2>{name}</h2>
        <p>{description}</p>
      </main>
      <footer>
        <a href={url} target="_blank" rel="noreferrer">
          Ver proyecto
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          Ver código
        </a>
        <span className={active ? "text-green-500 animate-ping" : ""}>•</span>
      </footer>
    </article>
  );
}
