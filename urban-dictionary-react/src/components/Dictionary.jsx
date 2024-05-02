/* eslint-disable react/prop-types */
import {
  FacebookIcon,
  ThumbDownIcon,
  ThumbUpIcons,
  TwitterIcons,
} from "./Icons";
import "./Dictionary.css";

export function Dictionary({
  word,
  definition,
  example,
  thumbsUp,
  thumbsDown,
  author,
  written_on,
}) {
  const formattedDate = new Date(written_on).toDateString();
  return (
    <article className="article">
      <header className="article-header">
        <h2>{word}</h2>
        <div className="article-header-icons">
            <span>
                Share:
            </span>
            
          <TwitterIcons />
          <FacebookIcon />
        </div>
      </header>
      <main className="article-main">
        <p>{definition}</p>
        <p className="main-example">{example}</p>

        <strong>
          By {author} - {formattedDate}
        </strong>
      </main>
      <footer className="article-footer">
        <button>
          <ThumbUpIcons />
          {thumbsUp}
        </button>
        <button>
          <ThumbDownIcon />
          {thumbsDown}
        </button>
      </footer>
    </article>
  );
}
