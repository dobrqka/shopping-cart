import "../../styles/cart/CartItem.css";

export const CartItem = ({ title, price, quantity, remove }) => {
  return (
    <div className="cart-item">
      <h3>{title}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
      <p>Total price: ${(price * quantity).toFixed(2)}</p>
      <button className="remove-button" onClick={remove}>
        Remove
      </button>
    </div>
  );
};
