import "../../styles/pay/OrderItem.css";

export const OrderItem = ({ title, price, quantity, remove, image }) => {
  return (
    <div className="order-item">
      <div className="image-container">
        <img src={image}></img>
      </div>
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>
      <p>x{quantity}</p>
      <p>Price: ${(price * quantity).toFixed(2)}</p>
      <div className="remove-container">
        <button className="remove-button" onClick={remove}>
          x
        </button>
      </div>
    </div>
  );
};
