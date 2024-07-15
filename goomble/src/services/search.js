const headers = {
  "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
  "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
};

export async function search({ query }) {
  const url = `https://real-time-web-search.p.rapidapi.com/search?q=${query}&limit=10`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    const { data } = result;
    return data;
  } catch (error) {
    console.error(error);
  }
}
