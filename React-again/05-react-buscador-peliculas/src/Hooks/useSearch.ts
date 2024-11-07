import { useEffect, useRef, useState } from "react"

const useSearch = () => {
    const [search, updateSearch] = useState("");
    const [error, setError] = useState<string | null>(null);
    const isFirstInput = useRef(true);

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === '';
            return;
        }

        if (search.trim() === "") {
            setError("No se puede buscar una pelicula vacia");
            return;
        }

        if (search.length < 3) {
            setError("La longitud mínima de la búsqueda es de 3 caracteres");
            return;
        }

        setError(null);
    }, [search]);
  return {search, error, updateSearch}
}

export default useSearch