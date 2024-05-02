import "./App.css";
import { Dictionary } from "./components/Dictionary";
import { SearchIcon } from "./components/Icons";
import { list } from "./mocks/data.json";

function App() {
  return (
    <div>
      <header className="header-article">
        <h1>Urban Dictionary</h1>
      </header>
      <form action="" className="form">
        <input type="text" placeholder="Sigma, Loyal, etc" />
        <button>
          <SearchIcon />
        </button>
      </form>

      <main>
        <ul>
          {list.slice(0, 5).map((item) => (
            <li key={item.id}>
              <Dictionary
                word={item.word}
                definition={item.definition}
                example={item.example}
                thumbsUp={item.thumbs_up}
                thumbsDown={item.thumbs_down}
                author={item.author}
                written_on={item.written_on}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
