import { MappedMovie, Movie } from '../interfaces/Movie';

const mappedMoviesService = ({movies} : {movies: Movie[]}) => {

    const mappedMovies : MappedMovie[] = movies?.map(movie=> (
        {
            id: movie.imdbId,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
        }
    ));
  return {movies: mappedMovies}
}

export default mappedMoviesService;