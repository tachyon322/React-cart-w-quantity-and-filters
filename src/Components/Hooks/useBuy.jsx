import { useState, useEffect } from 'react';

export function useCart() {
  
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart")) || []
  );

  const quantityHandleAdd = (item) => {
    const newCart = [...cart];
    const exists = newCart.find((cartItem) => cartItem.title === item.title);
    
    if (!exists) {
      newCart.push({ ...item, quantity: 1 });
    } else {
      exists.quantity += 1;
    }

    setCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const quantityHandleRemove = (item) => {
    const newCart = [...cart];
    const exists = newCart.find((cartItem) => cartItem.title === item.title);
    
    if (exists) {
      exists.quantity -= 1;
      if (exists.quantity === 0) {
        newCart.splice(newCart.indexOf(exists), 1);
      }
      setCart(newCart);
      window.localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const deleteFromCart = (item) => {
    const newCart = [...cart];
    newCart.splice(newCart.indexOf(item), 1);

    setCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return { cart, setCart, quantityHandleAdd, quantityHandleRemove, deleteFromCart };
}
