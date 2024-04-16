import "./App.css";
import { Navbar } from "./components/navigation/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  // test if removing all items updates the localStorage object to an empty array
  useEffect(() => {
    if (addedProducts.length > 0) {
      localStorage.setItem("products", JSON.stringify(addedProducts));
    }
  }, [addedProducts]);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
      setAddedProducts(products);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet context={[addedProducts, setAddedProducts]} />
    </>
  );
}

export default App;
