import './Footer.css'

// eslint-disable-next-line react/prop-types
export function Footer ({ filters }) {
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
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