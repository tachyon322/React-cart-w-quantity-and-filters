import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Products/Product";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart")) || []
  );

  function handleClick(item) {
    const newCart = [...cart];
    const exists = newCart.find((cartItem) => cartItem.title === item.title);

    if (!exists) {
      newCart.push({ ...item, quantity: 1 });
    } else {
      exists.quantity += 1; // Увеличиваем существующее количество
    }

    setCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  }

  return (
    <div className="App">
      <SideBar></SideBar>
      <div className="something">
        <Navbar></Navbar>
        <Product handleClick={handleClick} cart={cart}></Product> {/* Передаем карт */}
      </div>
    </div>
  );
}

export default App;