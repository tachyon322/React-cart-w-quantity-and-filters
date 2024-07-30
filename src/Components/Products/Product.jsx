import React from 'react';
import './Product.css';
import { data } from './data';

export default function Product({ handleClick, cart }) {
  return (
    <div className='product-container wide-wrap'>
      {data.map((item, key) => {
        // Найти количество для текущего товара из cart
        const existingItem = cart.find(cartItem => cartItem.title === item.title);
        const quantity = existingItem ? existingItem.quantity : 0; // Если товар не в cart, quantity будет 0

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
                <h3>{item.prevPrice}</h3>
                <button onClick={() => handleClick(item)}>buy</button>
                <h3>{quantity}</h3> {/* Отображаем quantity */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}