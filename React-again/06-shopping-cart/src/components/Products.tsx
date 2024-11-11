import { CartItem } from "../types/cartTypes";
import { AddToCartIcon } from "./Icons";
import "./Products.css";
import useCart from "../hooks/useCart";

const Products = ({initialProducts} : {initialProducts : CartItem[]}) => {

  const {addToCart} = useCart();

  return (
    <main className="products">
      <ul>
        {initialProducts.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
            <strong>{product.title}</strong> - <strong>${product.price}</strong>
            </div>
            <div>
                <button onClick={() => {
                  addToCart(product)
                }}>
                    <AddToCartIcon />
                </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;
