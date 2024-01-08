import "./App.css";
import NavberComponent from "./components/NavberComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductPage from "./components/ProductPage";
import { useEffect, useState } from "react";

function App() {
  const [cart, addCart] = useState([]);

  const addtoCart = (item) => {
    addCart([...cart, item]);

    // console.log(cart);
  };

  const quantity = (item, number) => {
    const ind = cart.indexOf(item);

    const arr = cart;
    arr[ind].quantity = arr[ind].quantity + number;

    if (arr[ind].quantity == 0) {
      arr[ind].quantity = 1;
    }

    addCart([...arr]);
  };

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);
  return (
    <>
      <NavberComponent cart={cart} addCart={addCart} quantity={quantity} />
      <ProductPage addtoCart={addtoCart} />
    </>
  );
}

export default App;
