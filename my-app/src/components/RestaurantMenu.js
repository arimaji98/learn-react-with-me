import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenuDetail, setResMenuDetail] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    setResMenuDetail(jsonData.data);
  };

  if (resMenuDetail === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenuDetail?.cards[0]?.card?.card?.info;
    
  const { itemCards } = resMenuDetail?.cards[2]?.groupedCard?.cardGroupMap
    ?.REGULAR?.cards[1]?.card?.card?.categories
    ? resMenuDetail?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.categories[0]
    : resMenuDetail?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
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
