import "../../styles/pay/OrderItem.css";

export const OrderItem = ({ title, price, quantity, remove }) => {
  return (
    <div className="order-item">
      <h3>{title}</h3>
      <div className="remove-container">
        <button className="remove-button" onClick={remove}>
          Remove
        </button>
      </div>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
      <p>Total price: ${(price * quantity).toFixed(2)}</p>
    </div>
  );
};
