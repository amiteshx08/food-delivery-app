import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const RestaurantCardOpen = withOpenLabel(RestaurantCard);

  const { listofrestaurants, filteredRestaurant, setFilteredRestaurant } =
    useRestaurantData();

  const status = useOnlineStatus();

  if (!status) return <h1>Opps!! looks like you are offline</h1>;

  return listofrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="m-3.75">
          <input
            type="text"
            className="p-1.5 border-2 border-gray-300 rounded-lg outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-700 text-amber-400 p-1.5 m-0.5 font-medium rounded-md"
            onClick={() => {
              const filteredRestaurant = listofrestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-3.75 p-0.5 bg-green-700 text-amber-400 rounded-md font-medium"
          onClick={() => {
            const filteredList = listofrestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-5">
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
