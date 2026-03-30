import { ComponentType } from "react";
import { CDN_URL } from "../utils/constant";

interface RestaurantInfo {
  resData: {
    info: {
      id: string;
      name: string;
      cuisines: string[];
      avgRating: number;
      cloudinaryImageId: string;
    };
  };
}

const RestaurantCard = (props: RestaurantInfo) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = props.resData.info;
  return (
    <div className="w-64 cursor-pointer">
      <div className="relative">
        <img
          className="w-70.25 h-50 object-cover rounded-2xl"
          alt="restaurant image"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-500">{avgRating} 🌟</p>
      </div>
    </div>
  );
};

export const withOpenLabel = (
  RestaurantCard: ComponentType<RestaurantInfo>,
) => {
  return (props: RestaurantInfo) => {
    return (
      <div>
        <label className="m-0.5 p-0.5 absolute bg-black text-cyan-50 rounded-lg ">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
