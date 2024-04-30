/* eslint-disable react/prop-types */
import { useImageAnime } from "../hooks/useImageAnime";

export function AnimeCard({ name, nickname, skills, weaknesses, index }) {
  const { animeImage, showImage } = useImageAnime();

  return (
    <>
      <article
        key={index}
        className=" bg-bg-300 rounded-lg py-5 px-2 m-2 text-center w-full flex flex-col justify-between items-center "
      >
        <header className="flex justify-center items-center mb-5">
          {animeImage && (
            <img
              src={animeImage[0]}
              alt={name}
              className="sm:w-[200px] sm:h-[200px] w-[300px] h-[300px] rounded-sm"
            />
          )}
        </header>
        <div className="text-white">
          <div className="w-full flex flex-row justify-between">
            <h2 className="text-3xl font-bold sm:text-xl">{name}</h2>
            <span className="text-3xl sm:text-xl">{nickname}</span>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <span className="text-2xl">Habilidades</span>
            <p className="text-xl">{skills}</p>
            <span className="text-2xl">Debilidades</span>
            <p className=" text-">{weaknesses}</p>
          </div>
        </div>
        <footer className="flex gap-10 w-full justify-center items-center mt-5 flex-col">
          <button className=" bg-primary-100  text-white py-3 px-7 rounded-lg text-xl hover:scale-110 transition-transform ease-in-out duration-200">
            Descargar
          </button>
          <button
            onClick={showImage}
            className=" bg-primary-100  text-white py-3 px-7 rounded-lg text-xl hover:scale-110 transition-transform ease-in-out duration-200"
          >
            Mostrar Imagen
          </button>
        </footer>
      </article>
    </>
  );
}
