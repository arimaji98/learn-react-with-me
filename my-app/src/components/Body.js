import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const jsonData = await data.json();

    setResList(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Internet check karle pyare !!</h1>;
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            className="search-input"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchedResList = resList.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResList(searchedResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredRes = resList.filter(
              (res) => res.info.avgRating >= 4.3
            );
            setFilteredResList(filteredRes);
          }}
        >
          4.3 Star and above Restaurant
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredResList(resList);
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="restaurant-container">
        {filteredResList.map((item) => {
          console.log(item);
          return <RestaurantCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
