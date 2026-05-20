import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantCardOpen = withOpenLabel(RestaurantCard);
const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { listofrestaurants, filteredRestaurant, setFilteredRestaurant } =
    useRestaurantData();

  const status = useOnlineStatus();

  if (!status) return <h1>Opps!! looks like you are offline</h1>;

  return listofrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="my-6 flex items-center justify-center gap-3">
        <div className="flex w-80 items-center 
        overflow-hidden rounded-full border
         border-gray-200 bg-white
          px-4 py-2 shadow-sm">
          <span className="mr-2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="w-full bg-transparent text-sm text-gray-700 outline-none"
            value={searchText}
            onChange={(e) => {
              const currentQuery = e.target.value; 
              setSearchText(currentQuery); 
              if(currentQuery.trim() === "")  {
                setFilteredRestaurant(listofrestaurants); 
                return;
              }
              const filteredRestaurant = listofrestaurants.filter((res) => 
              res.info.name.toLowerCase().includes(currentQuery.toLowerCase()),
            );
  
            setFilteredRestaurant(filteredRestaurant); //Automatic Batching 
            }}
          />
        </div>
        
        <button
          className="rounded-full border
           border-gray-300 px-5 py-2
            text-sm font-semibold text-gray-700
             transition-all duration-200 hover:bg-gray-100"
          onClick={() => {
            const filteredList = listofrestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          ⭐ Top Rated
        </button>
      </div>
      <div className="grid grid-cols-4 gap-3 px-17 py-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {
              // Logic
              restaurant.info.isOpen ? (
                <RestaurantCardOpen resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
