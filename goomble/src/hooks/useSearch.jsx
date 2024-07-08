import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useSearch({ initalQuery = "" }) {
  const searchRef = useRef();
  const [query, setQuery] = useState(initalQuery);
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(initalQuery);
  }, [initalQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      query,
    });
    if (query.toLocaleLowerCase() === "website builder") {
      navigate(`/results?query=${encodeURIComponent(query)}`);
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
