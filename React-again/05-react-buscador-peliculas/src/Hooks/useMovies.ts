import { useEffect, useRef, useState } from 'react';
import { Movie } from '../interfaces/Movie';
import getData from '../services/getData';

const useMovies = ({ search, searchValid, sorted }: { search: string, searchValid: boolean, sorted: boolean }) => {
  const previousSearch = useRef(search);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    console.log('render')
    // Verificamos si el search ha cambiado y si es válido antes de hacer la solicitud
    if (search === previousSearch.current || !searchValid) return;

    previousSearch.current = search; // Actualizamos la búsqueda anterior

    const getDataAsync = async () => {
      if (search.trim() === "") return; // No hacer la solicitud si el search está vacío
      try {
        const data: Movie[] = await getData({ search, sorted });
        setMovies(data); // Actualizamos el estado de movies con los datos obtenidos
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setMovies([]); // En caso de error, limpiamos los resultados
      }
    };

    getDataAsync(); // Llamamos a la función asíncrona para obtener las películas
  }, [search, searchValid, sorted]); // Añadimos search, searchValid y sorted como dependencias

  // Retornamos los valores del estado
  console.log(movies,'xd');
  return { movies};
};

export default useMovies;
