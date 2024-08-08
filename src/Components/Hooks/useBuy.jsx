import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart")) || []
  );

  const [watched, setWatched] = useState(
    JSON.parse(window.localStorage.getItem("watched")) || []
  );

  const quantityHandleAdd = (item) => {
    const newCart = [...cart];
    const exists = newCart.find((cartItem) => cartItem.id === item.id);

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
    const exists = newCart.find((cartItem) => cartItem.id === item.id);

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
    newCart.splice(newCart.indexOf(item.id), 1);

    setCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const markAsWatched = (item) => {
    const isLastItem = watched.length > 0 && watched[watched.length - 1].id === item.id;
    const itemIndex = watched.findIndex((watchedItem) => watchedItem.id === item.id);
    
    if (isLastItem) {
        return; // Не добавляем, если последний выбранный предмет тот же, что и в массиве
    }

    const newWatched = [...watched];

    if (itemIndex !== -1) {
        newWatched.splice(itemIndex, 1); // Удаляем предмет, если он уже есть в массиве
    }

    newWatched.push(item); // Добавляем новый предмет
    setWatched(newWatched);
    window.localStorage.setItem("watched", JSON.stringify(newWatched));
    console.log(newWatched.length);
};



  return {
    cart,
    setCart,
    quantityHandleAdd,
    quantityHandleRemove,
    deleteFromCart,
    watched,
    setWatched,
    markAsWatched,
  };
}
