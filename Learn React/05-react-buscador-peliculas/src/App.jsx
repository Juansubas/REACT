import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'


function App() {
  const { movies: mappedMovies } = useMovies()

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' type='text' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={ mappedMovies }/>
      </main>

    </div>
  )
}

export default App
