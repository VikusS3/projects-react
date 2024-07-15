const headers = {
  "x-rapidapi-key": "fa2f840eb9msh46ff1db4fb5a394p158470jsn01e9bdb3d085",
  "x-rapidapi-host": "real-time-web-search.p.rapidapi.com",
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
