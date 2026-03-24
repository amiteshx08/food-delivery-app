import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constant";


interface RestaurantInfo {
  info: {
    id: string;
    name: string;
    cuisines: string[];
    avgRating: number;
    cloudinaryImageId: string;
  };
}

const useRestaurantData = () => {
  const [listofrestaurants, setListOfRestaurants] = useState<RestaurantInfo[]>(
    [],
  );
  const [filteredRestaurant, setFilteredRestaurant] = useState<
    RestaurantInfo[]
  >([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants,
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants,
    );
  };

  return {listofrestaurants, filteredRestaurant, setListOfRestaurants, setFilteredRestaurant};
};


export default useRestaurantData