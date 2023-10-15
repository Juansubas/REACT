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