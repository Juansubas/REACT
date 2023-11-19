import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

// eslint-disable-next-line react/prop-types
export function Footer () {
  const { filters} = useFilters()
  const { cart } = useCart()
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {
        JSON.stringify(cart, null, 2)
      }
      {
        // <h4>Prueba técnica de React * -
        // <span>@midudev</span> </h4>
        // <h5>Shooping Cat con useContext &
        // useReducer
        // </h5>
      }
    </footer>
  )
}