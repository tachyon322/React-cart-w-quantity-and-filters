import React from 'react'
import { useState, useEffect } from 'react';
import { useCart } from '../Hooks/useBuy';
import './SingleProduct.css'
import { RxExternalLink as LinkIcon } from "react-icons/rx";
import { data } from '../Products/data';
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
    const {cart, quantityHandleAdd} = useCart();
    const [pressed, setPressed] = useState(true);

    const isInCart = () => {
      const exists = cart.find((product) => product.id === productId);
      setPressed(!!exists);
    }


    const redirect = () => {
        const url = `https://www.google.com/search?q=${product.company}`;
        window.open(url);
    }

    const { id } = useParams(); // Получаем ID товара из URL
    const productId = parseInt(id); // Приводим ID к числу
    const product = data.find(product => product.id === productId); // Находимируемся по массиву данных и находимируем по ID

    useEffect(() => {
      isInCart();
    }, [cart, product]);

  return (
    <div className='single-product-root'>
      <h1>SingleProduct</h1>

      <div className="sproduct-container">
        <img className='single-product-img' src={product.img} alt="" />

        <div className="sproduct-info">

          <div className="sproduct-info-title">
            <h1 className='sproduct-title'>{product.title}</h1>
            <h2 className='sproduct-company' onClick={redirect}>
              {product.company} <LinkIcon />
            </h2>
          </div>

          <div className="sproduct-price-buy">
            <h1>${product.newPrice}</h1>
            {pressed ? (
              <button className='sproduct-btn in-cart'>In cart</button>
            ): 
            (<button className='sproduct-btn'
              onClick={() => quantityHandleAdd(product)}>Add to Cart</button>)}
          </div>
        </div>
      </div>
    </div>
  )
}
