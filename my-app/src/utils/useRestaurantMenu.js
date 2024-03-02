import React, { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenuDetail, setResMenuDetail] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setResMenuDetail(jsonData.data);
  };
  return resMenuDetail;
};

export default useRestaurantMenu;
