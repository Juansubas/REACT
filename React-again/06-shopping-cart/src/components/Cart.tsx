import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import CartItem from "./CartItem";
import "./Cart.css";
import useCart from "../hooks/useCart";

const Cart = () => {
  const idCheckbox = useId();
  const { addToCart, clearCart, removeFromCart, decreaseQuantityFromCart, cart } = useCart();

  return (
    <>
      <input type="checkbox" id={idCheckbox} hidden />
      <label className="cart-button" htmlFor={idCheckbox}>
        <CartIcon />
      </label>

      <aside className="cart">
        <ul>
          {cart.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.id}
                thumbnail={cartItem.thumbnail}
                price={cartItem.price}
                title={cartItem.title}
                quantity={cartItem.quantity}
                addToCart={() => {
                  addToCart(cartItem)
                }}
                decreaseQuantityFromCart={() => {
                  decreaseQuantityFromCart(cartItem)
                }}
                removeFromCart={() => {
                  removeFromCart(cartItem)
                }}
              />
            );
          })}
        </ul>

        <button
          onClick={() => {
            clearCart();
          }}
        >
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
