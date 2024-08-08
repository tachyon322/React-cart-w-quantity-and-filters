import React from "react";
import "./WatchedItems.css";
import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useCart } from "./../Hooks/useBuy";

export default function WatchedItems() {
  const { watched } = useCart();

  // reverse wathced
  watched.reverse();

  const markAsWatched = (item) => {
    const isLastItem = watched.length > 0 && watched[watched.length - 1].id === item.id;
    const itemIndex = watched.findIndex((watchedItem) => watchedItem.id === item.id);
    
    if (isLastItem) {
        return; // Не добавляем, если последний выбранный предмет тот же, что и в массиве
    }

    
  }

  return (
<div className="watched-root">
  <h1>You have watched it recently:</h1>

  <Splide hasTrack={false} className="watched-splide-root"
     options={{
      perPage: 5,
      perMove: 1,
      gap: 30,
      pagination: false,
    }}>
      <SplideTrack className={"watched-track"}>
      {watched.length > 0 ? watched.map((item) => (
        <SplideSlide key={item.id} className={"watched-splide"}>
          <Link to={`/product/${item.id}`} onClick={() => markAsWatched(item)}>
            <div className="watched-item-container">
                <img className="watched-item__img" src={item.img} alt={item.title} />
                <h2>{item.title}</h2>
            </div>
          </Link>
        </SplideSlide>
      )) : <div style={{marginLeft: "100px"}}>No items to display</div>}
      </SplideTrack>
  </Splide>
</div>
  );
}
