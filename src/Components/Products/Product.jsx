import React from 'react';
import { useEffect } from 'react';
import './Product.css';
import { data } from './data';

export default function Product({ handleClick, cart, value, 
    selectedType, selectedPriceFrom, selectedPriceTo, selectedColor }) {
  
  const filteredData = data
    .filter(item => item.title.toLowerCase().includes(value.toLowerCase())) // Фильтрация по названию
    .filter(item => item.category.toLowerCase().includes(selectedType.toLowerCase())) // Фильтрация по категории
    .filter(item => item.color.toLowerCase().includes(selectedColor.toLowerCase())) // Фильтрация по цвету
    .filter(item => item.newPrice >= selectedPriceFrom && item.newPrice <= selectedPriceTo); // Фильтрация по цене

    useEffect(() => {
      filteredData.filter(item => item.newPrice >= selectedPriceFrom && item.newPrice <= selectedPriceTo);
    }, [filteredData, selectedPriceFrom, selectedPriceTo]);

  return (
    <div className='product-container wide-wrap'>
      {filteredData.map((item, key) => {
        const existingItem = cart.find(cartItem => cartItem.title === item.title);
        const quantity = existingItem ? existingItem.quantity : 0;

        return (
          <div className='product-card' key={key}>
            <div className='product-card-img'>
              <img className='product-img' src={item.img} alt="product img" />
            </div>
            <div className='product-card-info'>
              <div>
                <h3>{item.title}</h3>
                <p>{item.company}</p>
              </div>
              <div className="product-card-buy">
                <h3>${item.newPrice}</h3>
                <button onClick={() => handleClick(item)}>buy</button>
                <h3>{quantity}</h3> {/* Отображаем количество */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
