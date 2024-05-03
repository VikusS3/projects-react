import { useCallback } from "react";
import { searchWord } from "../services/dictionary";
import { useState, useRef } from "react";

export function useWord({ word }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const previusWord = useRef(word);

  const getDictionary = useCallback(async ({ word }) => {
    if (previusWord.current === word) return;
    try {
      setLoading(true);
      previusWord.current = word;
      const newWord = await searchWord({ word });
      setData(newWord);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, getDictionary, loading };
}
