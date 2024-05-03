/* eslint-disable react/prop-types */
import { Dictionary } from "./Dictionary";

function ListWords({ data }) {
  return (
    <ul
    style={{
        padding: 0,
    }}
    >
      {data.slice(0, 4).map((item) => {
        return (
          <Dictionary
            key={item.defid}
            word={item.word}
            definition={item.definition}
            example={item.example}
            author={item.author}
            thumbsDown={item.thumbs_down}
            thumbsUp={item.thumbs_up}
            written_on={item.written_on}
          />
        );
      })}
    </ul>
  );
}

function NoResults() {
  return (
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        }}
    >
      <p>Sin resultados esperando una palabra...</p>
    </div>
  );
}

export function Word({ data }) {
  const hasWords = data?.length > 0;
  return hasWords ? <ListWords data={data} /> : <NoResults />;
}
