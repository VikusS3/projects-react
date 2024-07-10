import "./App.css";
import { SearchIcon } from "./components/Icons";
import { Word } from "./components/Word";
import { useQuery } from "./hooks/useQuery";
import { useWord } from "./hooks/useWord";

function App() {
  const { query, error, setQuery } = useQuery();
  const { getDictionary, data, loading } = useWord({ query });

  const handleSubmit = (e) => {
    e.preventDefault();
    getDictionary({ word: query });
  };

  const handleChange = (e) => {
    const newWord = e.target.value;
    setQuery(newWord);
  };

  return (
    <div>
      <header className="header-article">
        <h1>Urban Dictionary</h1>

        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Sigma, Loyal, etc"
            onChange={handleChange}
            value={query}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
        {error && <p>{error}</p>}
      </header>
      <main className="main-content">
        {loading ? <p>C...</p> : <Word data={data} />}
      </main>
    </div>
  );
}

export default App;
