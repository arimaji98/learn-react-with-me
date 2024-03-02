import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuDetail = useRestaurantMenu(resId); // Custom Hook

  if (resMenuDetail === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenuDetail?.cards[0]?.card?.card?.info;
    
  const { itemCards } = resMenuDetail?.cards[1]?.groupedCard?.cardGroupMap
    ?.REGULAR?.cards[1]?.card?.card?.categories
    ? resMenuDetail?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.categories[0]
    : resMenuDetail?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card;

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{costForTwoMessage}</h5>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.defaultPrice
              ? item.card.info.defaultPrice / 100
              : item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
