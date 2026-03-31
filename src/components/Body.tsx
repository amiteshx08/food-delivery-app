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
      <div className="flex items-center justify-center gap-3 my-6">
        <div className="flex items-center border border-gray-200 rounded-full shadow-sm overflow-hidden px-4 py-2 bg-white w-80">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="outline-none text-sm text-gray-700 w-full bg-transparent"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <button
          className="px-5 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all duration-200"
          onClick={() => {
            const filteredRestaurant = listofrestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>

        <button
          className="px-5 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded-full hover:bg-gray-100 transition-all duration-200"
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
