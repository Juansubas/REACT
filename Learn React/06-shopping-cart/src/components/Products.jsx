/* eslint-disable react/prop-types */
import { useCart } from '../hooks/useCart.js'
import { AddToCartIcon } from './Icons.jsx'
import './Products.css'

export function Products ({ products }) {
  const { addToCart } = useCart()
  console.log(products)
  return (
    <main className='products'>
      <ul>
        {products.slice(0,10).map(product => (
          <li key={product.id}>
            <img 
            src={product.thumbnail} 
            alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}