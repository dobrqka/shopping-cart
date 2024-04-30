import "../../styles/pay/OrderItem.css";

export const OrderItem = ({ title, price, quantity, remove, image }) => {
  return (
    <div className="order-item">
      <div className="image-container">
        <img src={image}></img>
      </div>
      <h3>{title}</h3>
      <p className="checkout-single-price">${price.toFixed(2)}</p>
      <p className="checkout-quantity">x{quantity}</p>
      <p>${(price * quantity).toFixed(2)}</p>
      <div className="remove-container">
        <button className="remove-button" onClick={remove}>
          x
        </button>
      </div>
    </div>
  );
};
