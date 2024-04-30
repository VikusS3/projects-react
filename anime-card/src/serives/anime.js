const url = "https://any-anime.p.rapidapi.com/v1/anime/gif/1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fa2f840eb9msh46ff1db4fb5a394p158470jsn01e9bdb3d085",
    "X-RapidAPI-Host": "any-anime.p.rapidapi.com",
  },
};

export async function getAnimeData() {
    try{
        const response = await fetch(url, options);
        const data = await response.json();
        const {images} = data;
        return images;
    }catch(error){
        console.error(error);
    }
}