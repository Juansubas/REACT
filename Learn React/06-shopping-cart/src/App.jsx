import { products } from './mocks/products.json'
import { Products } from "./components/Products"

function App () {
  console.log('xd')
  return (
    <Products products={products}/>
  )
}

export default App