import { useState, useEffect, useRef } from "react";

export function useQuery() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);


  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = query === "";
      return;
    }

    if (query === "") {
      setError("No se puede buscar una plabra vacía");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("No se puede buscar una palabra con un número");
      return;
    }

    if (query.length < 3) {
      setError("La búsqueda debe tener al menos 1 caracteres");
      return;
    }
    
    if (query.match(/[^a-zA-Z\s]/)) {
      setError("No se puede buscar una palabra con caracteres especiales");
      return;
    }

    setError(null);
  }, [query]);

  return { query, error, setQuery };
}