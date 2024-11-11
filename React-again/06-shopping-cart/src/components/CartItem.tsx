const CartItem = ({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  removeFromCart,
  decreaseQuantityFromCart,
}: {
  thumbnail: string;
  price: number;
  title: string;
  quantity: number;
  addToCart: () => void;
  removeFromCart: () => void;
  decreaseQuantityFromCart: () => void;
}) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={decreaseQuantityFromCart}>-</button>
        <button onClick={addToCart}>+</button>
        <div>
          <button onClick={removeFromCart}>Eliminar</button>
        </div>
      </footer>
    </li>
  );
};

export default CartItem;
