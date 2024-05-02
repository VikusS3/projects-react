import { useState } from "react";
import { anime_card_data } from "../data";
import { AnimeCard } from "./AnimeCard";
import "../App.css";
export function Header() {
  const [profile, setProfile] = useState(false);

  const showProfile = () => {
    setProfile(!profile);
  };
  return (
    <main
      className="
    text-center
    p-5
    w-full
    h-auto
  "
    >
      <h1 className="text-5xl bg-transparent font-bold text-white">
        Anime Card
      </h1>
      <button
        onClick={showProfile}
        className=" bg-primary-100 text-white text-2xl font-bold mt-3 py-2 px-5 rounded-lg hover:bg-primary-200 transition-colors ease-in-out duration-300"
      >
        {profile ? "Ocultar Perfil" : "Mostrar Perfil"}
      </button>

      {profile && (
        <div className="content ">
          {anime_card_data.map((anime, index) => (
            <AnimeCard
              key={index}
              name={anime.name}
              nickname={anime.nickname}
              skills={anime.skills}
              weaknesses={anime.weaknesses}
            />
          ))}
        </div>
      )}
    </main>
  );
}
