import { useState } from "react";
import Navbar from "./../Components/Navbar/Navbar";
import Product from "./../Components/Products/Product";
import SideBar from "./../Components/SideBar/SideBar";

function Home({
  value,
  setValue,
  cart,
  setCart,
  selectedType,
  setSelectedType,
  selectedPriceFrom,
  setSelectedPriceFrom,
  selectedPriceTo,
  setSelectedPriceTo,
  selectedColor,
  setSelectedColor,
}) {

  return (
    <div className="App">
      <SideBar
        setSelectedType={setSelectedType}
        setSelectedPriceFrom={setSelectedPriceFrom}
        setSelectedPriceTo={setSelectedPriceTo}
        setSelectedColor={setSelectedColor}
      />

      <div className="something">
        <Navbar value={value} setValue={setValue} />

        <Product
          cart={cart}
          value={value}
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

export default Home;
