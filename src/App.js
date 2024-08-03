import { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import SingleProductPage from "./Pages/SingleProductPage";

function App() {
  // состояния для фильтров
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceFrom, setSelectedPriceFrom] = useState(0);
  const [selectedPriceTo, setSelectedPriceTo] = useState(1000);
  const [selectedColor, setSelectedColor] = useState("");

  const [value, setValue] = useState("");  // состояние для строки поиска


  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home
            value={value}
            setValue={setValue}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedPriceFrom={selectedPriceFrom}
            setSelectedPriceFrom={setSelectedPriceFrom}
            selectedPriceTo={selectedPriceTo}
            setSelectedPriceTo={setSelectedPriceTo}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />} />
          <Route path="/home" element={<Home
            value={value}
            setValue={setValue}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedPriceFrom={selectedPriceFrom}
            setSelectedPriceFrom={setSelectedPriceFrom}
            selectedPriceTo={selectedPriceTo}
            setSelectedPriceTo={setSelectedPriceTo}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;