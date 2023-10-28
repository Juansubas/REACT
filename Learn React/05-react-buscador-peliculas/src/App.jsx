import './App.css'
import { Movies } from './Components/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect( () => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }
  , [search])

  return { search, updateSearch, error}
}

function App() {
  const [ sort, setSort] = useState(false)
  const { search, updateSearch, error} = useSearch()
  const { movies: mappedMovies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
    console.log('search', search)
    getMovies({ search })
  }, 300)
  , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies( newSearch )
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input 
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
          value={search} onChange={handleChange} placeholder='Avengers, Star Wars, The Matrix...' type='text' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red'}}>
          {error}
        </p> }
      </header>

      <main>
        { 
          loading ? <p>Cargando ...</p> : <Movies movies={ mappedMovies }/>
        }
      </main>

    </div>
  )
}

export default App
