import { CartItem } from "../types/cartTypes";
import { AddToCartIcon } from "./Icons";
import "./Products.css";

const Products = ({initialProducts} : {initialProducts : CartItem[]}) => {

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
                <button>
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
