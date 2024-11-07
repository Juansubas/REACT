import { Movie } from "../interfaces/Movie";
import { Names } from "../enums/names";
import useMovies from "../Hooks/useMovies";

export const Card = ({ movies }: { movies: Movie[] }) => {
  const { movies: mappedMovies } = useMovies({ movies });

  return (
    <div className="m-10 p-3 container bg-gray-500 rounded-lg max-w-screen-lg">
      <ul className="text-white text-justify grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] place-items-center gap-3">
        {mappedMovies?.map((movie) => (
          <li key={movie.id} className="flex flex-col items-center">
            <h1 className="truncate max-w-[231px]">{movie.title}</h1>
            <p>{movie.year}</p>
            <img
              src={movie.poster ? movie.poster : Names.placeholderImage}
              alt={movie.title}
              className="max-w-[231px] aspect-[231/342] h-[342px] "
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const NoMoviesResult = () => {
  return <h1>No se encontraron películas para esta búsqueda...</h1>;
};

export const Movies = ({ movies }: { movies: Movie[] }) => {
  const hasMovies = movies?.length > 0;
  if (!hasMovies) return <NoMoviesResult />;
  return <Card movies={movies} />;
};
