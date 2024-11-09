import { useEffect, useRef, useState } from "react"

const useSearch = () => {
    const [search, updateSearch] = useState("");
    const [searchValid, setSearchValid] = useState(false);	
    const [error, setError] = useState<string | null>(null);
    const isFirstInput = useRef(true);

    useEffect(() => {
        if (isFirstInput.current) {
            if (search === '') {
                setSearchValid(false);
                isFirstInput.current = false; // La próxima vez ya no será la primera entrada
                return;
            }
        }

        if (search.trim() === "") {
            setError("No se puede buscar una película vacía");
            setSearchValid(false);
        } else if (search.length < 3) {
            setError("La longitud mínima de la búsqueda es de 3 caracteres");
            setSearchValid(false);
        } else {
            setError(null);
            setSearchValid(true);
        }
    }, [search]);
  return {search,searchValid, error, updateSearch}
}

export default useSearch