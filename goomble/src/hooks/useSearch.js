import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { search } from "../services/search";

export default function useSearch({ initalQuery = "" }) {
  const searchRef = useRef();
  const [query, setQuery] = useState(initalQuery);
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(initalQuery);
  }, [initalQuery]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await search({ query });
    if (data) {
      navigate("/results", { state: { data, query } });
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return {
    query,
    searchRef,
    handleSubmit,
    handleChange,
  };
}
