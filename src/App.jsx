import "./App.css";
import { Navbar } from "./components/navigation/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function App() {
  const [addedProducts, setAddedProducts] = useState(null);

  useEffect(() => {
    if (addedProducts !== null) {
      sessionStorage.setItem("products", JSON.stringify(addedProducts));
    }
  }, [addedProducts]);

  useEffect(() => {
    const products = JSON.parse(sessionStorage.getItem("products"));
    if (products) {
      setAddedProducts(products);
    }
  }, []);

  return (
    <>
      <Navbar quantity={addedProducts && addedProducts.length} />
      <Outlet context={[addedProducts, setAddedProducts]} />
    </>
  );
}

export default App;
