import React from 'react'
import "./Cart.css"
import { Link } from "react-router-dom";
import { RiDeleteBin6Line as BinIcon } from "react-icons/ri";
import { TfiBackLeft as BackButton } from "react-icons/tfi";
import { useCart } from "./../Components/Hooks/useBuy"

export default function Cart() {

  const { cart, setCart, quantityHandleAdd, quantityHandleRemove, deleteFromCart } = useCart()

  const checkoutTotal = () => {
    const newCart = [...cart];
    newCart.splice(0, newCart.length);

    setCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
    alert("Checkout Successful");
  }

  return (
    <div className='cart-root'>
      <h1 className='cart-root-title'>
        <Link to={"/home"}>
          <BackButton /> 
        </Link>
        Cart
      </h1>

      {cart.length === 0 && <h1>Cart is empty</h1>}

        {cart.map((item) => (
          <div className='cart-item-container'>
            <img className='cart-item__img' src={item.img} alt="" />

            <div className="cart-item-info">
              <h2>{item.title}</h2>
              <p>{item.company}</p>
            </div>

            <div className='cart-item-quantity'>
              <h2>${item.newPrice}</h2>

              <div className="cart-item-quantity-btns">
                <button className='cart-item-quantity-btn'
                  onClick={() => quantityHandleRemove(item)}>-</button>
                <p>{item.quantity}</p>
                <button className='cart-item-quantity-btn'
                  onClick={() => quantityHandleAdd(item)}>+</button>
              </div>
            </div>
            <BinIcon onClick={() => deleteFromCart(item)}
              className='cart-item-bin-icon' />
          </div>
        ))}

        <div className="cart-item-total-checkout">
          <h1>Total: ${cart.reduce((acc, item) => acc + item.newPrice * item.quantity, 0)}</h1>
          <button className='checkout-button'
            onClick={() => checkoutTotal()}>Checkout</button>
        </div>
      </div>
  )
}
