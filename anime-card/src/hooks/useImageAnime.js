import { getAnimeData } from "../serives/anime";
import { useState } from "react";

export function useImageAnime(){
    const [animeImage, setAnimeImage] = useState();

    const showImage = async () => {
        const images = await getAnimeData();
        setAnimeImage(images);
    };

    return {animeImage, showImage};
}