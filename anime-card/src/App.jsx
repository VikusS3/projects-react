import { Header } from "./components/Header";
import { anime_card_data } from "./data";
import { AnimeCard } from "./components/AnimeCard";
import { useEffect, useState } from "react";
import "./App.css";

const URL = "https://any-anime.p.rapidapi.com/v1/anime/gif/1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fa2f840eb9msh46ff1db4fb5a394p158470jsn01e9bdb3d085",
    "X-RapidAPI-Host": "any-anime.p.rapidapi.com",
  },
};

function App() {
  const [animeData, setAnimeData] = useState([]);
  useEffect(() => {
    fetch(URL, options)
      .then((response) => response.json())
      .then((data) => setAnimeData(data.images))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <div className="content ">
        {anime_card_data.map((anime, index) => (
          <AnimeCard
            key={index}
            name={anime.name}
            nickname={anime.nickname}
            skills={anime.skills}
            weaknesses={anime.weaknesses}
            image={animeData}
          />
        ))}
      </div>
    </>
  );
}

export default App;
