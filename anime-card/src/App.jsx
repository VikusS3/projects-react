import { Header } from "./components/Header";
import { anime_card_data } from "./data";
import { AnimeCard } from "./components/AnimeCard";

import "./App.css";

function App() {
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
          />
        ))}
      </div>
    </>
  );
}

export default App;
