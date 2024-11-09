import "./App.css";
import { FormEvent, useState } from "react";
import { Movies } from "./components/Card";
import useSearch from "./Hooks/useSearch";
import useMovies from "./Hooks/useMovies";

function App() {
  const { search, searchValid, error, updateSearch } = useSearch();
  const [sorted, setSort] = useState(false);
  const { movies } = useMovies({ searchValid: searchValid, search, sorted });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSort = () => {
    setSort((prevSorted) => !prevSorted);
    console.log("Xd");
  };

  return (
    <section className="flex flex-col items-center justify-center w-full ">
      <header>
        <h1 className="text-xl font-bold">Buscador de Peliculas</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center justify-center border p-3 rounded-lg h-full w-full"
        >
          <label htmlFor="movieSearch" className="font-bold text-white">
            Buscar por titulo:{" "}
          </label>
          <input
            name="query"
            id="movieSearch"
            type="text"
            placeholder="Matrix, Rocky Balboa, etc"
            onChange={(e) => updateSearch(e.target.value)}
          />
          <label htmlFor="sort">Ordenar por año</label>
          <input
            id="sort"
            type="checkbox"
            onChange={handleSort}
            checked={sorted}
          />
          <button className="rounded bg-gray-300 px-4" type="submit">
            Buscar
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main className="flex flex-col items-center justify-center w-full">
        {search.trim() !== "" && <Movies movies={movies} />}
      </main>
    </section>
  );
}

export default App;
