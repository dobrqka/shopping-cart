import "../../styles/cart/CartItem.css";

export const CartItem = ({ title, price, quantity, remove }) => {
  return (
    <div className="cart-item">
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total price: ${price * quantity}</p>
      <button className="remove-button" onClick={remove}>
        Remove
      </button>
    </div>
  );
};
