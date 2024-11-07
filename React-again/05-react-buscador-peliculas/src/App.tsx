import "./App.css";
import { FormEvent, useEffect, useState} from "react";
import getData from "./services/getData";
import { Movies } from "./components/Card";
import { Movie } from "./interfaces/Movie";
import useSearch from "./Hooks/useSearch";

function App() {
  const { search, error, updateSearch } = useSearch();
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();

    const data = Object.fromEntries(new window.FormData(e.target as HTMLFormElement));
    console.log(data);

  };

  useEffect(() => {
    const getDataAsync = async () => {
      if (search.trim() === "") return;
      try {
        const data: Movie[] = await getData({ search });
        setMovies(data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setMovies([]);
      }
    };

    getDataAsync();
  }, [search]);

  return (
    <section className="flex flex-col items-center justify-center w-full ">
      <header>
        <h1 className="text-xl font-bold">Buscador de Peliculas</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center justify-center border p-3 rounded-lg h-full w-full"
        >
          <label htmlFor="movieSearch" className="font-bold text-white">
            Title:{" "}
          </label>
          <input
            name="query"
            id="movieSearch"
            type="text"
            placeholder="Matrix, Rocky Balboa, etc"
            onChange={(e) => {
              updateSearch(e.target.value);
            }}
          />
          <button className="rounded bg-gray-300 px-4" type="submit">
            Buscar
          </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main className="flex flex-col items-center justify-center w-full">
        {
          search.trim() !== "" && <Movies movies={movies} />
        }
      </main>
    </section>
  );
}

export default App;
