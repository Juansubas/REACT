import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  // indicamos que el tipo sera de TODO_FILTERS ADEMAS QUE
  // INGRESE AL ARRAY Y QUE EL KEYOF o llaves les saque el tipo de TODO_FILTERS
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const Filters: React.FC<Props> = (
  { filterSelected, onFilterChange }
) => {
  return (
    <ul className="filters">
      {
        // COn object.entries transformamos aun array para poder recorrerlo, donde
        // cada subarray contiene una clave key y un objecto que tiene las propiedades
        // recorrerlo, luego usamos la destructuracion y dividimos el array en dos partes
        // la key o sea el nombre y luego un objeto con los valores
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelect = key === filterSelected
          const className = isSelect ? 'selected' : ''
          return (
            <li key={key}>
              <a
                href={href}
                className={className}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
