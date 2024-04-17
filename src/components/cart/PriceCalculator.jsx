import "../../styles/cart/PriceCalculator.css";

export const PriceCalculator = ({ addedProducts }) => {
  const totalPrice = () => {
    if (addedProducts) {
      return addedProducts
        .map((product) => {
          return product.price * product.quantity;
        })
        .reduce((total, current) => total + current, 0);
    }
  };

  return <div className="total">${totalPrice()}</div>;
};
