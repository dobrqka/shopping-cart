import "../../styles/shop/Products.css";
import { ProductItem } from "./ProductItem";
import { useEffect, useState } from "react";

export const Products = ({ add, remove }) => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // https://fakestoreapi.com/products - alternative json

    fetch("https://dobrina6.sg-host.com/products", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading)
    return (
      <div className="loading">
        <p>Loading...</p>
        <img src="/loading.gif" />
      </div>
    );

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="product-items">
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} add={add} />;
        })}
      </div>
    </div>
  );
};
