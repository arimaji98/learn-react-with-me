import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.622227&lng=77.2505733&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    setResList(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredResList = resList.filter((res) => res.info.avgRating >= 4.3);
            setResList(filteredResList);
          }}
        >
          4.3 Star and above Restaurant
        </button>
        {/* <button
          className="filter-btn"
          onClick={() => {
            let filteredResList = resList.filter((res) => res.info.avgRating >= 0);
            setResList(filteredResList);
          }}
        >
          Clear Filter
        </button> */}
      </div>
      <div className="restaurant-container">
        {resList.map((item) => {
        //   console.log(item);
        //   if (item.info) {
            return <RestaurantCard key={item.id} item={item.info} />;
        //   } else {
        //     return <RestaurantCard key={item.id} item={item} />;
        //   }
        })}
      </div>
    </div>
  );
};

export default Body;
