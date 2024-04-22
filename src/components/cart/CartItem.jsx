import "../../styles/cart/CartItem.css";

export const CartItem = ({ title, price, quantity, remove, image }) => {
  return (
    <tr className="cart-item">
      <td className="first-column">
        <div className="image-container">
          <img src={image}></img>
        </div>
        <p>{title}</p>
      </td>
      <td>${price.toFixed(2)}</td>
      <td>x{quantity}</td>
      <td>${(price * quantity).toFixed(2)}</td>
      <td>
        <button className="remove-button" onClick={remove}>
          x
        </button>
      </td>
    </tr>
  );
};
