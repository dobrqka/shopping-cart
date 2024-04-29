import "../../styles/cart/CartItem.css";

export const CartItem = ({ title, price, quantity, remove, image }) => {
  return (
    <tr className="cart-item">
      <td className="first-column">
        <div>
          <div className="image-container">
            <img src={image}></img>
          </div>
          <p>{title}</p>
        </div>
      </td>
      <td className="single-price">${price.toFixed(2)}</td>
      <td className="quantity">x{quantity}</td>
      <td className="total-price">${(price * quantity).toFixed(2)}</td>
      <td className="remove-container">
        <button className="remove-button" onClick={remove}>
          x
        </button>
      </td>
    </tr>
  );
};
