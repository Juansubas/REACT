import { useState } from 'react'
import './Filters.css'
// eslint-disable-next-line react/prop-types
export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    //aqui algo huele mal
    // Dos fuentes de la verdad
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    //Esto huele mal
    // Estamos pasando la funcion de actualizar estado 
    // Nativa de React a un componente hijo.
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
      <section className='filters'>
        <div>
          <label htmlFor='price'>Precio a partir de:</label>
          <input 
            type='range' 
            id='price' 
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
            />
            <span>${minPrice}</span>
        </div>

        <div>
          <label htmlFor='category'>Categoria</label>
          <select id='category' onChange={handleChangeCategory}>
            <option value='all'>Todas</option>
            <option value='laptops'>Portatiles</option>
            <option value='smartphones'>Celulares</option>
          </select>
        </div>
          
      </section>
  )
}