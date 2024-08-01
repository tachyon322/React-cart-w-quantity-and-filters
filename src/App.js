import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Products/Product";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  // состояния для фильтров
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceFrom, setSelectedPriceFrom] = useState(0);
  const [selectedPriceTo, setSelectedPriceTo] = useState(1000);
  const [selectedColor, setSelectedColor] = useState("");

  const [value, setValue] = useState("");  // состояние для строки поиска

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
      <SideBar
        setSelectedType={setSelectedType}
        setSelectedPriceFrom={setSelectedPriceFrom}
        setSelectedPriceTo={setSelectedPriceTo}
        setSelectedColor={setSelectedColor}
      />

      <div className="something">
        <Navbar value={value} setValue={setValue}/>

        <Product 
          handleClick={handleClick} cart={cart} value={value}
          setCart={setCart}


          // фильтры сортировки
          selectedType={selectedType} 
          selectedPriceFrom={selectedPriceFrom}
          selectedPriceTo={selectedPriceTo} 
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
}

export default App;