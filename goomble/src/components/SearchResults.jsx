import responseData from "../mocks/data.json";
export const SearchResults = () => {
  const results = responseData.data;

  const getDomainName = (url) => {
    return url.replace(/^(www\.)?/, "").replace(/\..+$/, "");
  };

  return (
    <ul className="flex flex-col w-full pl-36 gap-y-8">
      {results.map((result) => (
        <li key={result.position}>
          <article>
            <header className="flex flex-col justify-center">
              <span className="text-sm text-[#d3cfc9]">
                {getDomainName(result.domain)}{" "}
              </span>
              <cite className="text-xs text-[#b5aea4]">{result.domain}</cite>
            </header>
            <main>
              <a
                href={result.url}
                target="_blank"
                className="text-[#6997f4] text-xl hover:underline"
              >
                <h3>{result.title}</h3>
              </a>
              <p className="text-sm text-[#b5aea4] max-w-xl">
                {result.snippet}
              </p>
            </main>
          </article>
        </li>
      ))}
    </ul>
  );
};
