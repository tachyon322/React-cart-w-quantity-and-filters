import React from "react";
import { useEffect } from "react";
import "./Product.css";
import { data } from "./data";

export default function Product({
  handleClick,
  cart,
  value,
  setCart,
  selectedType,
  selectedPriceFrom,
  selectedPriceTo,
  selectedColor,
}) {
  function quantityHandleAdd(item) {
    const newCart = [...cart];
    const exists = newCart.find((cartItem) => cartItem.title === item.title);

    if (!exists) {
      newCart.push({ ...item, quantity: 1 });
      setCart(newCart);
      window.localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      exists.quantity += 1; // Увеличиваем существующее количество
      setCart(newCart);
      window.localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  function quantityHandleRemove(item) {
    const newCart = [...cart];
    const exists = newCart.find((cartItem) => cartItem.title === item.title);

    if (exists) {
      exists.quantity -= 1; // Уменьшаем существующее количество
      if (exists.quantity === 0) {
        newCart.splice(newCart.indexOf(exists), 1);
        setCart(newCart);
        window.localStorage.setItem("cart", JSON.stringify(newCart));
      }
      setCart(newCart);
      window.localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  const filteredData = data
    .filter((item) => item.title.toLowerCase().includes(value.toLowerCase())) // Фильтрация по названию
    .filter((item) =>
      item.category.toLowerCase().includes(selectedType.toLowerCase())
    ) // Фильтрация по категории
    .filter((item) =>
      item.color.toLowerCase().includes(selectedColor.toLowerCase())
    ) // Фильтрация по цвету
    .filter(
      (item) =>
        item.newPrice >= selectedPriceFrom && item.newPrice <= selectedPriceTo
    ); // Фильтрация по цене

  useEffect(() => {
    filteredData.filter(
      (item) =>
        item.newPrice >= selectedPriceFrom && item.newPrice <= selectedPriceTo
    );
  }, [filteredData, selectedPriceFrom, selectedPriceTo]);

  return (
    <div className="product-container wide-wrap">
      {filteredData.map((item, key) => {
        const existingItem = cart.find(
          (cartItem) => cartItem.title === item.title
        );
        const quantity = existingItem ? existingItem.quantity : 0;

        return (
          <div className="product-card" key={key}>
            <div className="product-card-img">
              <img className="product-img" src={item.img} alt="product img" />
            </div>
            <div className="product-card-info">
              <div>
                <h3>{item.title}</h3>
                <p>{item.company}</p>
              </div>
              <div className="product-card-buy">
                <h3>${item.newPrice}</h3>
                <button 
                  onClick={() => handleClick(item)}
                  disabled={quantity > 0}>buy</button>
              </div>
              {quantity > 0 && (
                <div className="product-card-quantity">
                  <button
                    className="quantity-remove-btn quantity-btn"
                    onClick={() => quantityHandleRemove(item)}>
                    -
                  </button>
                  <p>{quantity}</p>
                  <button
                    className="quantity-add-btn quantity-btn"
                    onClick={() => quantityHandleAdd(item)}>
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
