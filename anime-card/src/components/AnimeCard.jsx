/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const url = "https://any-anime.p.rapidapi.com/v1/anime/gif/1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fa2f840eb9msh46ff1db4fb5a394p158470jsn01e9bdb3d085",
    "X-RapidAPI-Host": "any-anime.p.rapidapi.com",
  },
};

const fetchRandomAnimeImage = async () => {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data.images);
  return data.images;
};

export function AnimeCard({ name, nickname, skills, weaknesses, index }) {
  const [animeData, setAnimeData] = useState([null]);
 
  useEffect(() => {
    fetchRandomAnimeImage().then((data) => setAnimeData(data));
  }, []);

  const handleClickedAnime = () => {
    fetchRandomAnimeImage().then((data) => setAnimeData(data));
   
  };

  return (
    <>
      <article
        key={index}
        className=" bg-bg-300 rounded-lg py-5 px-2 m-2 text-center w-full flex flex-col justify-between items-center "
      >
        <header className="flex justify-center items-center mb-5">
          {animeData && (
            <img
              src={animeData[0]}
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
            onClick={handleClickedAnime}
            className=" bg-primary-100  text-white py-3 px-7 rounded-lg text-xl hover:scale-110 transition-transform ease-in-out duration-200"
          >
            Mostrar Imagen
          </button>
        </footer>
      </article>
    </>
  );
}
